#!/usr/bin/env node

import fs from "fs-extra";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration
const CONFIG = {
  distDir: path.join(__dirname, "..", "dist"),
  frameworkDir: path.join(__dirname, "..", "framework"),
  sourceDirs: {
    cursor: path.join(__dirname, "..", ".cursor", "rules"),
    bushi: path.join(__dirname, "..", ".bushi"),
  },
};

// Utility functions
const log = (message, type = "info") => {
  const icons = { info: "🏗️", success: "✅", warning: "⚠️", error: "❌" };
  console.log(`${icons[type]} ${message}`);
};

const ensureDir = async (dir) => {
  await fs.ensureDir(dir);
  log(`Created directory: ${path.relative(process.cwd(), dir)}`);
};

const copyFile = async (source, target, description) => {
  if (await fs.pathExists(source)) {
    await fs.copy(source, target);
    log(`Copied ${description}`, "success");
    return true;
  }
  log(`${description} not found`, "warning");
  return false;
};

// Validation
const validateMetadata = async () => {
  log("Validating metadata...");
  try {
    // Import validation module
    const { validateMetadata: validate } = await import(
      "./validate-metadata.js"
    );
    await validate();
    log("Metadata validation passed", "success");
    return true;
  } catch (error) {
    log(`Metadata validation failed: ${error.message}`, "error");
    return false;
  }
};

// Build process
const buildFramework = async () => {
  log("Building Bushi Framework...\n");

  try {
    // Clean and create dist directory
    await fs.remove(CONFIG.distDir);
    await ensureDir(CONFIG.distDir);
    await ensureDir(CONFIG.frameworkDir);

    // Copy package.json
    await copyFile(
      path.join(__dirname, "..", "package.json"),
      path.join(CONFIG.distDir, "package.json"),
      "package.json"
    );

    // Copy CLI binary
    await copyFile(
      path.join(__dirname, "..", "bin"),
      path.join(CONFIG.distDir, "bin"),
      "CLI binary"
    );

    // Create framework structure
    const rulesDir = path.join(CONFIG.distDir, "framework", "rules");
    const bushiDir = path.join(CONFIG.distDir, "framework", "bushi");

    await ensureDir(rulesDir);
    await ensureDir(bushiDir);

    // Copy Cursor rules
    await copyFile(CONFIG.sourceDirs.cursor, rulesDir, "Cursor rules");

    // Copy Bushi framework files
    await copyFile(CONFIG.sourceDirs.bushi, bushiDir, "Bushi framework files");

    // Make CLI executable
    const cliPath = path.join(CONFIG.distDir, "bin", "cli.js");
    await fs.chmod(cliPath, "755");
    log("Made CLI executable", "success");

    // Copy README
    await copyFile(
      path.join(__dirname, "..", "README.md"),
      path.join(CONFIG.distDir, "README.md"),
      "README.md"
    );

    log("\n🎉 Build completed successfully!", "success");
    log(`📦 Package ready in: ${CONFIG.distDir}`);
    log("\n📋 Next steps:");
    log("  1. cd dist");
    log("  2. npm publish");
  } catch (error) {
    log(`Build failed: ${error.message}`, "error");
    process.exit(1);
  }
};

// Distribution build
const buildDistribution = async () => {
  log("Building distribution package...\n");

  try {
    const userPackageDir = path.join(CONFIG.distDir, "bushi-user-package");

    // Clean and create distribution directory
    await fs.remove(CONFIG.distDir);
    await ensureDir(CONFIG.distDir);
    await ensureDir(userPackageDir);

    // Create user package structure
    const userBushiDir = path.join(userPackageDir, ".bushi");
    const userCursorDir = path.join(userPackageDir, ".cursor", "rules");

    await ensureDir(userBushiDir);
    await ensureDir(userCursorDir);

    // Copy all Bushi framework files
    await copyFile(
      CONFIG.sourceDirs.bushi,
      userBushiDir,
      "Bushi framework files"
    );

    // Create docs directory
    await ensureDir(path.join(userBushiDir, "docs"));

    // Copy Cursor rules
    await copyFile(
      path.join(CONFIG.sourceDirs.cursor, "bushi.mdc"),
      path.join(userCursorDir, "bushi.mdc"),
      "bushi.mdc"
    );

    await copyFile(
      path.join(CONFIG.sourceDirs.cursor, "bushi-limits.mdc"),
      path.join(userCursorDir, "bushi-limits.mdc"),
      "bushi-limits.mdc"
    );

    // Create package.json for user package
    const packageJson = {
      name: "bushi-user-package",
      version: "0.5.4",
      description: "Bushi Framework - User Package",
      files: [".bushi/", ".cursor/"],
      installInstructions:
        "Copy .bushi and .cursor folders to your project root",
    };

    await fs.writeJson(path.join(userPackageDir, "package.json"), packageJson, {
      spaces: 2,
    });

    // Create README for user package
    const readme = `# Bushi Framework - User Package

This package contains only the user-facing files for Bushi Framework.

## Installation

Copy the \`.bushi\` and \`.cursor\` folders to your project root.

## What's Included

- **Agents**: Business Architect, Design Experience, Technical Architect, Growth Strategist, Business Operations
- **Cursor Rules**: Bushi Framework integration for Cursor IDE

## Commands

- \`/roadmap\` - Smart routing for next tasks
- \`/ba\` - Business Architect
- \`/dx\` - Design Experience  
- \`/ta\` - Technical Architect
- \`/gs\` - Growth Strategist
- \`/bo\` - Business Operations

## Getting Started

Run \`/bushi-start\` in Cursor IDE to begin.

## Documentation

For full documentation, visit: https://github.com/noigllc/bushi
`;

    await fs.writeFile(path.join(userPackageDir, "README.md"), readme);

    log("Distribution package built successfully!", "success");
    log(`📁 Location: ${userPackageDir}`);
    log("📦 Ready for distribution to users");
  } catch (error) {
    log(`Error building distribution package: ${error.message}`, "error");
    process.exit(1);
  }
};

// Main execution
const main = async () => {
  const args = process.argv.slice(2);
  const command = args[0];

  // Validate metadata first
  if (!(await validateMetadata())) {
    process.exit(1);
  }

  // Execute appropriate build command
  switch (command) {
    case "dist":
    case "distribution":
      await buildDistribution();
      break;
    case "framework":
    case "dev":
      await buildFramework();
      break;
    default:
      // Default: build both
      await buildFramework();
      console.log("\n" + "=".repeat(50) + "\n");
      await buildDistribution();
  }
};

// Run if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  main().catch((error) => {
    log(`Unexpected error: ${error.message}`, "error");
    process.exit(1);
  });
}

export { buildFramework, buildDistribution };
