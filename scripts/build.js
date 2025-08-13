#!/usr/bin/env node

const fs = require("fs-extra");
const path = require("path");

console.log("🏗️  Building Bushi Framework NPX package...\n");

// Validate metadata before building
console.log("🔍 Validating Cursor Rules Metadata...");
try {
  require("./validate-metadata");
  console.log("✅ Metadata validation passed\n");
} catch (error) {
  console.error("❌ Metadata validation failed:", error.message);
  process.exit(1);
}

async function build() {
  try {
    const distDir = path.join(__dirname, "..", "dist");
    const frameworkDir = path.join(distDir, "framework");

    // Clean and create dist directory
    await fs.remove(distDir);
    await fs.ensureDir(distDir);
    await fs.ensureDir(frameworkDir);

    // Copy package.json
    await fs.copy(
      path.join(__dirname, "..", "package.json"),
      path.join(distDir, "package.json")
    );
    console.log("✅ Copied package.json");

    // Copy CLI binary
    await fs.copy(path.join(__dirname, "..", "bin"), path.join(distDir, "bin"));
    console.log("✅ Copied CLI binary");

    // Copy framework files
    const frameworkSource = path.join(__dirname, "..", "framework");
    if (await fs.pathExists(frameworkSource)) {
      await fs.copy(frameworkSource, frameworkDir);
      console.log("✅ Copied framework files");
    } else {
      console.log("⚠️  Framework directory not found, creating structure...");

      // Create framework structure
      const rulesDir = path.join(frameworkDir, "rules");
      const bushiDir = path.join(frameworkDir, "bushi");

      await fs.ensureDir(rulesDir);
      await fs.ensureDir(bushiDir);

      // Copy Cursor rules
      await fs.copy(path.join(__dirname, "..", ".cursor", "rules"), rulesDir);
      console.log("✅ Copied Cursor rules");

      // Copy Bushi framework files
      await fs.copy(path.join(__dirname, "..", ".bushi"), bushiDir);
      console.log("✅ Copied Bushi framework files");
    }

    // Make CLI executable
    const cliPath = path.join(distDir, "bin", "cli.js");
    await fs.chmod(cliPath, "755");
    console.log("✅ Made CLI executable");

    // Copy README
    await fs.copy(
      path.join(__dirname, "..", "README.md"),
      path.join(distDir, "README.md")
    );
    console.log("✅ Copied README.md");

    console.log("\n🎉 Build completed successfully!");
    console.log(`📦 Package ready in: ${distDir}`);
    console.log("\n📋 Next steps:");
    console.log("  1. cd dist");
    console.log("  2. npm publish");
  } catch (error) {
    console.error("\n❌ Build failed:", error.message);
    process.exit(1);
  }
}

build();
