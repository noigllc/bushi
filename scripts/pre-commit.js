#!/usr/bin/env node

const fs = require("fs-extra");
const path = require("path");

console.log("🔍 Pre-commit: Validating Cursor Rules Metadata...\n");

async function preCommitValidation() {
  try {
    // Run metadata validation
    require("./validate-metadata");

    console.log("✅ Pre-commit validation passed!");
    process.exit(0);
  } catch (error) {
    console.error("\n❌ Pre-commit validation failed!");
    console.error("Please fix the metadata issues before committing.");
    console.error("\nTo fix manually, run: node scripts/validate-metadata.js");
    process.exit(1);
  }
}

preCommitValidation();
