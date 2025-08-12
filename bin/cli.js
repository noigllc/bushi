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
      const bushiExists = await fs.pathExists(bushiDir);
      if (bushiExists) {
        console.log(chalk.yellow("🔄 Updating existing Bushi installation..."));
      } else {
        console.log(chalk.green("🚀 Installing Bushi Framework..."));
      }

      // Copy only user-facing files (not development files)
      const packageDir = path.dirname(require.main.filename);
      const sourceDir = path.join(packageDir, "..", "framework");

      // Copy Cursor rules (only bushi.mdc, preserve existing rules)
      const rulesSource = path.join(sourceDir, "rules");
      if (await fs.pathExists(rulesSource)) {
        const bushiRulesFile = path.join(rulesSource, "bushi.mdc");
        const targetRulesFile = path.join(cursorRulesDir, "bushi.mdc");
        if (await fs.pathExists(bushiRulesFile)) {
          await fs.copy(bushiRulesFile, targetRulesFile);
          console.log(chalk.blue("📋 Updated Bushi Cursor rules"));
        }
      }

      // Copy only user-facing Bushi files (exclude development docs)
      const bushiSource = path.join(__dirname, "..", ".bushi");
      if (await fs.pathExists(bushiSource)) {
        // Copy agents
        const agentsSource = path.join(bushiSource, "agents");
        const agentsTarget = path.join(bushiDir, "agents");
        if (await fs.pathExists(agentsSource)) {
          await fs.copy(agentsSource, agentsTarget);
          console.log(chalk.blue("📋 Updated Bushi agents"));
        }

        // Copy user documentation only
        const userDocsSource = path.join(bushiSource, "docs", "user");
        const userDocsTarget = path.join(bushiDir, "docs", "user");
        if (await fs.pathExists(userDocsSource)) {
          await fs.copy(userDocsSource, userDocsTarget);
          console.log(chalk.blue("📋 Updated user documentation"));
        }

        // Note: Templates removed - users can create their own

        // Create docs directory if it doesn't exist
        await fs.ensureDir(path.join(bushiDir, "docs"));
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
    } catch (error) {
      console.error(chalk.red("\n❌ Error initializing Bushi Framework:"));
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
