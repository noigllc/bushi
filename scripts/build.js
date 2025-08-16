#!/usr/bin/env node

import fs from "fs-extra";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration
const CONFIG = {
  distDir: path.join(__dirname, "..", "dist"),
  sourceDirs: {
    cursor: path.join(__dirname, "..", ".cursor", "rules"),
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

    // Copy Cursor rules
    await copyFile(
      CONFIG.sourceDirs.cursor,
      path.join(CONFIG.distDir, ".cursor", "rules"),
      "Cursor rules"
    );

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

    log("\n🎉 Build completed successfully!");
    log(`🏗️ 📦 Package ready in: ${CONFIG.distDir}`);
    log("\n📋 Next steps:");
    log("🏗️   1. cd dist");
    log("🏗️   2. npm publish");
  } catch (error) {
    log(`Build failed: ${error.message}`, "error");
    process.exit(1);
  }
};

// Main execution
const main = async () => {
  try {
    if (!(await validateMetadata())) {
      process.exit(1);
    }

    await buildFramework();
  } catch (error) {
    log(`Unexpected error: ${error.message}`, "error");
    process.exit(1);
  }
};

main();
