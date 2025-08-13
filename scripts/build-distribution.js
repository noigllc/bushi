#!/usr/bin/env node

const fs = require("fs-extra");
const path = require("path");

async function buildDistribution() {
  console.log("🚀 Building Bushi Framework distribution package...");

  const distDir = path.join(__dirname, "..", "dist");
  const userPackageDir = path.join(distDir, "bushi-user-package");

  try {
    // Clean and create distribution directory
    await fs.remove(distDir);
    await fs.ensureDir(distDir);
    await fs.ensureDir(userPackageDir);

    // Create user package structure
    const userBushiDir = path.join(userPackageDir, ".bushi");
    const userCursorDir = path.join(userPackageDir, ".cursor", "rules");

    await fs.ensureDir(userBushiDir);
    await fs.ensureDir(userCursorDir);

    // Copy only user-facing files
    console.log("📋 Copying user agents...");
    await fs.copy(
      path.join(__dirname, "..", ".bushi", "agents"),
      path.join(userBushiDir, "agents")
    );

    console.log("📋 Copying user documentation...");
    await fs.copy(
      path.join(__dirname, "..", ".bushi", "docs", "user"),
      path.join(userBushiDir, "docs", "user")
    );

    // Note: Templates removed - users can create their own

    console.log("📋 Copying Cursor rules...");
    await fs.copy(
      path.join(__dirname, "..", ".cursor", "rules", "bushi.mdc"),
      path.join(userCursorDir, "bushi.mdc")
    );
    await fs.copy(
      path.join(__dirname, "..", ".cursor", "rules", "bushi-limits.mdc"),
      path.join(userCursorDir, "bushi-limits.mdc")
    );

    // Create package.json for user package
    const packageJson = {
      name: "bushi-user-package",
      version: "0.4.2",
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
- **Documentation**: Installation guide, migration guide, workflow documentation
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
`;

    await fs.writeFile(path.join(userPackageDir, "README.md"), readme);

    console.log("✅ Distribution package built successfully!");
    console.log(`📁 Location: ${userPackageDir}`);
    console.log("📦 Ready for distribution to users");
  } catch (error) {
    console.error("❌ Error building distribution package:", error);
    process.exit(1);
  }
}

buildDistribution();
