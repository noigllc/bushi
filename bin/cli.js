#!/usr/bin/env node

const { program } = require("commander");
// Use dynamic import for chalk to support both CommonJS and ES Modules
let chalk;
(async () => {
  try {
    chalk = (await import("chalk")).default;
  } catch (error) {
    // Fallback for older Node.js versions or if chalk fails to load
    chalk = {
      blue: { bold: (text) => `\x1b[34m\x1b[1m${text}\x1b[0m` },
      yellow: { bold: (text) => `\x1b[33m\x1b[1m${text}\x1b[0m` },
      yellow: (text) => `\x1b[33m${text}\x1b[0m`,
      green: (text) => `\x1b[32m${text}\x1b[0m`,
      red: (text) => `\x1b[31m${text}\x1b[0m`,
      cyan: (text) => `\x1b[36m${text}\x1b[0m`,
      white: (text) => `\x1b[37m${text}\x1b[0m`,
    };
  }
})();
const fs = require("fs-extra");
const path = require("path");

// Package version
const version = require("../package.json").version;

// ASCII Art Banner - moved inside async function to ensure chalk is loaded
async function getBanner() {
  if (!chalk) {
    chalk = (await import("chalk")).default;
  }
  return `
${chalk.blue.bold(
  "╔══════════════════════════════════════════════════════════════╗"
)}
${chalk.blue.bold("║")}                    ${chalk.yellow.bold(
    "Bushi Framework"
  )}                    ${chalk.blue.bold("║")}
${chalk.blue.bold("║")}                  ${chalk.yellow(
    "Build Shit Fast"
  )}                    ${chalk.blue.bold("║")}
${chalk.blue.bold(
  "╚══════════════════════════════════════════════════════════════╝"
)}
`;
}

program
  .name("bushi")
  .description(
    "Bushi Framework - Build Shit Fast. A comprehensive framework for solo developers."
  )
  .version(version, "-v, --version")
  .option("-d, --debug", "Enable debug mode");

program
  .command("init")
  .description("Initialize Bushi Framework in your current project")
  .action(async () => {
    const banner = await getBanner();
    console.log(banner);
    console.log(chalk.green("🚀 Initializing Bushi Framework...\n"));

    try {
      const projectRoot = process.cwd();

      // Create .cursor/rules directory
      const cursorRulesDir = path.join(projectRoot, ".cursor", "rules");
      await fs.ensureDir(cursorRulesDir);
      console.log(chalk.blue("📁 Created .cursor/rules directory"));

      // Create .bushi directory
      const bushiDir = path.join(projectRoot, ".bushi");
      await fs.ensureDir(bushiDir);
      console.log(chalk.blue("📁 Created .bushi directory"));

      // Check if Bushi already exists
      const bushiExists = await fs.pathExists(path.join(bushiDir, "agents"));
      if (bushiExists) {
        console.log(chalk.yellow("🔄 Updating existing Bushi installation..."));

        // Remove old agents to prevent duplicates
        const agentsDir = path.join(bushiDir, "agents");
        if (await fs.pathExists(agentsDir)) {
          await fs.remove(agentsDir);
          console.log(chalk.blue("🗑️  Removed old agents"));
        }
      } else {
        console.log(chalk.green("🚀 Installing Bushi Framework..."));
      }

      // Copy Cursor rules (always copy bushi.mdc and bushi-limits.mdc)
      const packageDir = path.dirname(require.main.filename);
      let rulesSource = path.join(
        packageDir,
        "..",
        "framework",
        "rules",
        "bushi.mdc"
      );
      let limitsSource = path.join(
        packageDir,
        "..",
        "framework",
        "rules",
        "bushi-limits.mdc"
      );
      let bushiSource = path.join(packageDir, "..", "framework", "bushi");

      // Fallback for development environment
      if (!(await fs.pathExists(rulesSource))) {
        console.log(
          chalk.blue("🔧 Development mode detected, using local files")
        );
        rulesSource = path.join(
          packageDir,
          "..",
          ".cursor",
          "rules",
          "bushi.mdc"
        );
        limitsSource = path.join(
          packageDir,
          "..",
          ".cursor",
          "rules",
          "bushi-limits.mdc"
        );
        bushiSource = path.join(packageDir, "..", ".bushi");
      } else {
        console.log(chalk.blue("📦 Production package detected"));
      }

      // Copy bushi.mdc
      const targetRulesFile = path.join(cursorRulesDir, "bushi.mdc");
      if (await fs.pathExists(rulesSource)) {
        await fs.copy(rulesSource, targetRulesFile);
        console.log(chalk.blue("📋 Updated Bushi Cursor rules"));
      } else {
        console.log(chalk.red("❌ Error: bushi.mdc not found in package"));
        console.log(chalk.yellow(`   Looked in: ${rulesSource}`));
        process.exit(1);
      }

      // Copy bushi-limits.mdc (CRITICAL behavioral constraints)
      const targetLimitsFile = path.join(cursorRulesDir, "bushi-limits.mdc");
      if (await fs.pathExists(limitsSource)) {
        await fs.copy(limitsSource, targetLimitsFile);
        console.log(chalk.blue("📋 Updated Bushi behavioral constraints"));
      } else {
        console.log(
          chalk.red("❌ Error: bushi-limits.mdc not found in package")
        );
        console.log(chalk.yellow(`   Looked in: ${limitsSource}`));
        process.exit(1);
      }

      // Copy Bushi framework files from the package
      if (await fs.pathExists(bushiSource)) {
        // Copy agents
        const agentsSource = path.join(bushiSource, "agents");
        const agentsTarget = path.join(bushiDir, "agents");
        if (await fs.pathExists(agentsSource)) {
          await fs.copy(agentsSource, agentsTarget);
          console.log(chalk.blue("📋 Updated Bushi agents"));

          // Validate agents were copied
          const agentFiles = await fs.readdir(agentsTarget);
          if (agentFiles.length > 0) {
            console.log(
              chalk.green(`   ✅ Copied ${agentFiles.length} agent files`)
            );
          } else {
            console.log(chalk.red("   ❌ No agents were copied"));
            process.exit(1);
          }
        } else {
          console.log(
            chalk.red("❌ Error: agents directory not found in package")
          );
          console.log(chalk.yellow(`   Looked in: ${agentsSource}`));
          process.exit(1);
        }

        // Copy user documentation only (preserve existing user docs)
        const userDocsSource = path.join(bushiSource, "docs", "user");
        const userDocsTarget = path.join(bushiDir, "docs", "user");
        if (await fs.pathExists(userDocsSource)) {
          // Only copy if target doesn't exist or is empty
          if (
            !(await fs.pathExists(userDocsTarget)) ||
            (await fs.readdir(userDocsTarget)).length === 0
          ) {
            await fs.copy(userDocsSource, userDocsTarget);
            console.log(chalk.blue("📋 Copied user documentation"));
          } else {
            console.log(chalk.blue("📋 Preserved existing user documentation"));
          }
        }

        // Create docs directory if it doesn't exist
        await fs.ensureDir(path.join(bushiDir, "docs"));

        // Final validation
        console.log(chalk.blue("\n🔍 Validating installation..."));

        const requiredFiles = [
          { path: path.join(cursorRulesDir, "bushi.mdc"), name: "bushi.mdc" },
          {
            path: path.join(cursorRulesDir, "bushi-limits.mdc"),
            name: "bushi-limits.mdc",
          },
          { path: path.join(bushiDir, "agents"), name: "agents directory" },
        ];

        let allFilesPresent = true;
        for (const file of requiredFiles) {
          if (await fs.pathExists(file.path)) {
            console.log(chalk.green(`   ✅ ${file.name} found`));
          } else {
            console.log(chalk.red(`   ❌ ${file.name} missing`));
            allFilesPresent = false;
          }
        }

        if (!allFilesPresent) {
          console.log(
            chalk.red(
              "\n❌ Installation incomplete. Please try again or contact support."
            )
          );
          process.exit(1);
        }

        console.log(chalk.green("   ✅ All required files present"));
      } else {
        console.log(chalk.red("❌ Error: .bushi source not found in package"));
        console.log(chalk.yellow(`   Looked in: ${bushiSource}`));
        process.exit(1);
      }

      console.log(
        chalk.green("\n✅ Bushi Framework initialized successfully!")
      );
      console.log(chalk.yellow("\n📚 Available commands:"));
      console.log(
        chalk.cyan(
          "  /ba  → Business Architect (business strategy, idea generation)"
        )
      );
      console.log(
        chalk.cyan("  /dx  → Design Experience (UX/UI, user research)")
      );
      console.log(
        chalk.cyan(
          "  /ta  → Technical Architect (technical architecture, development)"
        )
      );
      console.log(
        chalk.cyan(
          "  /gs  → Growth Strategist (marketing, customer acquisition)"
        )
      );
      console.log(
        chalk.cyan(
          "  /bo  → Business Operations (financial, legal, operations)"
        )
      );

      console.log(chalk.cyan("  /roadmap → Smart routing for next tasks"));
      console.log(chalk.cyan("  /commands → Quick reference"));
      console.log(chalk.cyan("  /help → Framework overview"));

      console.log(chalk.yellow("\n💡 Next steps:"));
      console.log(chalk.white("  1. Open your project in Cursor IDE"));
      console.log(
        chalk.white("  2. Try /ba to activate the Business Architect")
      );
      console.log(chalk.white("  3. Start building your micro-SaaS!"));

      console.log(
        chalk.blue("\n🌐 Learn more: https://github.com/noigllc/bushi")
      );

      console.log(chalk.yellow("\n🛠️  Other commands:"));
      console.log(chalk.cyan("  bushi cleanup → Remove Bushi Framework"));
      console.log(chalk.cyan("  bushi info → Show framework information"));
    } catch (error) {
      console.error(chalk.red("\n❌ Error initializing Bushi Framework:"));
      console.error(chalk.red(error.message));
      process.exit(1);
    }
  });

program
  .command("cleanup")
  .description("Remove Bushi Framework from current project")
  .action(async () => {
    const banner = await getBanner();
    console.log(banner);
    console.log(chalk.yellow("🧹 Cleaning up Bushi Framework...\n"));

    try {
      const projectRoot = process.cwd();
      const bushiDir = path.join(projectRoot, ".bushi");
      const cursorRulesDir = path.join(projectRoot, ".cursor", "rules");

      // Remove .bushi directory
      if (await fs.pathExists(bushiDir)) {
        await fs.remove(bushiDir);
        console.log(chalk.blue("🗑️  Removed .bushi directory"));
      } else {
        console.log(chalk.yellow("ℹ️  .bushi directory not found"));
      }

      // Remove bushi.mdc from .cursor/rules
      const bushiRulesFile = path.join(cursorRulesDir, "bushi.mdc");
      if (await fs.pathExists(bushiRulesFile)) {
        await fs.remove(bushiRulesFile);
        console.log(chalk.blue("🗑️  Removed bushi.mdc from .cursor/rules"));
      } else {
        console.log(chalk.yellow("ℹ️  bushi.mdc not found in .cursor/rules"));
      }

      // Remove bushi-limits.mdc from .cursor/rules
      const bushiLimitsFile = path.join(cursorRulesDir, "bushi-limits.mdc");
      if (await fs.pathExists(bushiLimitsFile)) {
        await fs.remove(bushiLimitsFile);
        console.log(
          chalk.blue("🗑️  Removed bushi-limits.mdc from .cursor/rules")
        );
      } else {
        console.log(
          chalk.yellow("ℹ️  bushi-limits.mdc not found in .cursor/rules")
        );
      }

      // Remove .cursor/rules directory if it's empty
      if (await fs.pathExists(cursorRulesDir)) {
        const remainingFiles = await fs.readdir(cursorRulesDir);
        if (remainingFiles.length === 0) {
          await fs.remove(cursorRulesDir);
          console.log(chalk.blue("🗑️  Removed empty .cursor/rules directory"));
        } else {
          console.log(
            chalk.blue(
              `📁 Preserved .cursor/rules directory (${remainingFiles.length} other files)`
            )
          );
        }
      }

      console.log(chalk.green("\n✅ Bushi Framework cleanup completed!"));
      console.log(chalk.yellow("\n💡 To reinstall, run: bushi init"));
    } catch (error) {
      console.error(chalk.red("\n❌ Error during cleanup:"));
      console.error(chalk.red(error.message));
      process.exit(1);
    }
  });

program
  .command("info")
  .description("Show information about Bushi Framework")
  .action(async () => {
    const banner = await getBanner();
    console.log(banner);
    console.log(chalk.blue("📦 Package: bushi"));
    console.log(chalk.blue(`📋 Version: ${version}`));
    console.log(chalk.blue("🏗️  Framework: Bushi - Build Shit Fast"));
    console.log(chalk.blue("🎯 Purpose: Solo developer micro-SaaS framework"));
    console.log(chalk.blue("🔧 Platform: Cursor IDE required"));
    console.log(chalk.blue("🌐 Repository: https://github.com/noigllc/bushi"));
  });

// Handle unknown commands
program.on("command:*", () => {
  console.error(chalk.red(`\n❌ Unknown command: ${program.args.join(" ")}`));
  console.log(chalk.yellow("💡 Use --help for available commands"));
  process.exit(1);
});

// Parse arguments
program.parse();
