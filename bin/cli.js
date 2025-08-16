#!/usr/bin/env node

import { program } from "commander";
import fs from "fs-extra";
import path from "path";
import { fileURLToPath } from "url";
import chalk from "chalk";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Get package version
const packageJson = JSON.parse(
  await fs.readFile(path.join(__dirname, "..", "package.json"), "utf8")
);
const version = packageJson.version;

// ASCII Art Banner
const getBanner = () => `
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

// Utility functions
const ensureDirectories = async (dirs) => {
  for (const dir of dirs) {
    await fs.ensureDir(dir);
  }
};

const copyFrameworkFiles = async (source, target) => {
  if (await fs.pathExists(source)) {
    await fs.copy(source, target);
    return true;
  }
  return false;
};

const validateInstallation = async (requiredFiles) => {
  console.log(chalk.blue("\n🔍 Validating installation..."));

  let allPresent = true;
  for (const file of requiredFiles) {
    const exists = await fs.pathExists(file.path);
    console.log(
      `${exists ? chalk.green("✅") : chalk.red("❌")} ${file.name} ${
        exists ? "found" : "missing"
      }`
    );
    if (!exists) allPresent = false;
  }

  return allPresent;
};

// Main initialization function
const initializeBushi = async () => {
  const banner = getBanner();
  console.log(banner);
  console.log(chalk.green("🚀 Initializing Bushi Framework...\n"));

  try {
    const projectRoot = process.cwd();
    const packageDir = path.dirname(__filename);

    // Create required directories
    const dirs = [
      path.join(projectRoot, ".cursor", "rules"),
      path.join(projectRoot, ".bushi"),
      path.join(projectRoot, ".bushi", "docs"),
    ];
    await ensureDirectories(dirs);
    console.log(chalk.blue("📁 Created required directories"));

    // Determine source paths
    const isDev = !(await fs.pathExists(
      path.join(packageDir, "..", "framework")
    ));
    const sourcePaths = isDev
      ? {
          rules: path.join(packageDir, "..", ".cursor", "rules", "bushi.mdc"),
          limits: path.join(
            packageDir,
            "..",
            ".cursor",
            "rules",
            "bushi-limits.mdc"
          ),
          bushi: path.join(packageDir, "..", ".bushi"),
        }
      : {
          rules: path.join(packageDir, "..", "framework", "rules", "bushi.mdc"),
          limits: path.join(
            packageDir,
            "..",
            "framework",
            "rules",
            "bushi-limits.mdc"
          ),
          bushi: path.join(packageDir, "..", "framework", "bushi"),
        };

    console.log(
      chalk.blue(`🔧 ${isDev ? "Development" : "Production"} mode detected`)
    );

    // Copy critical files
    const criticalFiles = [
      {
        source: sourcePaths.rules,
        target: path.join(projectRoot, ".cursor", "rules", "bushi.mdc"),
        name: "bushi.mdc",
      },
      {
        source: sourcePaths.limits,
        target: path.join(projectRoot, ".cursor", "rules", "bushi-limits.mdc"),
        name: "bushi-limits.mdc",
      },
    ];

    for (const file of criticalFiles) {
      if (await fs.pathExists(file.source)) {
        await fs.copy(file.source, file.target);
        console.log(chalk.blue(`📋 Updated ${file.name}`));
      } else {
        console.log(chalk.red(`❌ Error: ${file.name} not found in package`));
        process.exit(1);
      }
    }

    // Copy Bushi framework files
    const bushiSource = sourcePaths.bushi;
    const bushiTarget = path.join(projectRoot, ".bushi");

    if (await copyFrameworkFiles(bushiSource, bushiTarget)) {
      // Count all .mdc files copied
      const allFiles = await fs.readdir(bushiTarget);
      const mdcFiles = allFiles.filter((file) => file.endsWith(".mdc"));
      const dirs = allFiles.filter((file) => !file.includes("."));

      console.log(
        chalk.blue(
          `📋 Updated Bushi framework (${mdcFiles.length} .mdc files, ${dirs.length} directories)`
        )
      );
    } else {
      console.log(chalk.red("❌ Error: Bushi framework directory not found"));
      process.exit(1);
    }

    // Validate installation
    const requiredFiles = [
      {
        path: path.join(projectRoot, ".cursor", "rules", "bushi.mdc"),
        name: "bushi.mdc",
      },
      {
        path: path.join(projectRoot, ".cursor", "rules", "bushi-limits.mdc"),
        name: "bushi-limits.mdc",
      },
      {
        path: path.join(projectRoot, ".bushi", "bushi-start.mdc"),
        name: "bushi-start.mdc",
      },
      {
        path: path.join(projectRoot, ".bushi", "roadmap-router.mdc"),
        name: "roadmap-router.mdc",
      },
      {
        path: path.join(projectRoot, ".bushi", "agents"),
        name: "agents directory",
      },
    ];

    if (!(await validateInstallation(requiredFiles))) {
      console.log(chalk.red("\n❌ Installation incomplete. Please try again."));
      process.exit(1);
    }

    // Success message
    console.log(chalk.green("\n✅ Bushi Framework initialized successfully!"));
    console.log(chalk.yellow("\n📚 Available commands:"));
    ["/ba", "/dx", "/ta", "/gs", "/bo"].forEach((cmd) => {
      const descriptions = {
        "/ba": "Business Architect (business strategy, idea generation)",
        "/dx": "Design Experience (UX/UI, user research)",
        "/ta": "Technical Architect (technical architecture, development)",
        "/gs": "Growth Strategist (marketing, customer acquisition)",
        "/bo": "Business Operations (financial, legal, operations)",
      };
      console.log(chalk.cyan(`  ${cmd} → ${descriptions[cmd]}`));
    });

    console.log(chalk.cyan("  /roadmap → Smart routing for next tasks"));
    console.log(chalk.cyan("  /commands → Quick reference"));
    console.log(chalk.cyan("  /help → Framework overview"));

    console.log(chalk.yellow("\n💡 Next steps:"));
    console.log(chalk.white("  1. Open your project in Cursor IDE"));
    console.log(chalk.white("  2. Try /ba to activate the Business Architect"));
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
};

// Cleanup function
const cleanupBushi = async () => {
  const banner = getBanner();
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
    }

    // Remove Cursor rules
    const rulesFiles = ["bushi.mdc", "bushi-limits.mdc"];
    for (const file of rulesFiles) {
      const filePath = path.join(cursorRulesDir, file);
      if (await fs.pathExists(filePath)) {
        await fs.remove(filePath);
        console.log(chalk.blue(`🗑️  Removed ${file} from .cursor/rules`));
      }
    }

    // Remove empty .cursor/rules directory
    if (await fs.pathExists(cursorRulesDir)) {
      const remainingFiles = await fs.readdir(cursorRulesDir);
      if (remainingFiles.length === 0) {
        await fs.remove(cursorRulesDir);
        console.log(chalk.blue("🗑️  Removed empty .cursor/rules directory"));
      }
    }

    console.log(chalk.green("\n✅ Bushi Framework cleanup completed!"));
    console.log(chalk.yellow("\n💡 To reinstall, run: bushi init"));
  } catch (error) {
    console.error(chalk.red("\n❌ Error during cleanup:"));
    console.error(chalk.red(error.message));
    process.exit(1);
  }
};

// Info function
const showInfo = async () => {
  const banner = getBanner();
  console.log(banner);
  console.log(chalk.blue("📦 Package: bushi"));
  console.log(chalk.blue(`📋 Version: ${version}`));
  console.log(chalk.blue("🏗️  Framework: Bushi - Build Shit Fast"));
  console.log(chalk.blue("🎯 Purpose: Solo developer micro-SaaS framework"));
  console.log(chalk.blue("🔧 Platform: Cursor IDE required"));
  console.log(chalk.blue("🌐 Repository: https://github.com/noigllc/bushi"));
};

// CLI setup
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
  .action(initializeBushi);

program
  .command("cleanup")
  .description("Remove Bushi Framework from current project")
  .action(cleanupBushi);

program
  .command("info")
  .description("Show information about Bushi Framework")
  .action(showInfo);

// Handle unknown commands
program.on("command:*", () => {
  console.error(chalk.red(`\n❌ Unknown command: ${program.args.join(" ")}`));
  console.log(chalk.yellow("💡 Use --help for available commands"));
  process.exit(1);
});

// Parse arguments
program.parse();
