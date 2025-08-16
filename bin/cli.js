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
    ];
    await fs.ensureDir(dirs[0]);
    await fs.ensureDir(dirs[1]);
    console.log(chalk.blue("📁 Created required directories"));

    // Copy cursor rules from package
    const rulesSource = path.join(packageDir, "..", ".cursor", "rules");
    const rulesTarget = path.join(projectRoot, ".cursor", "rules");

    if (await fs.pathExists(rulesSource)) {
      await fs.copy(rulesSource, rulesTarget);
      console.log(chalk.blue("📋 Copied Bushi Framework rules"));
    } else {
      console.log(chalk.red("❌ Error: Bushi rules not found"));
      process.exit(1);
    }

    // Create empty .bushi folder for user documentation
    console.log(chalk.blue("📁 Created .bushi folder for your project files"));

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
    console.log(
      chalk.white("  3. Create your .bushi/prd.md and .bushi/roadmap.md files")
    );
    console.log(chalk.white("  4. Start building your micro-SaaS!"));

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
  .version(version, "-v, --version");

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
