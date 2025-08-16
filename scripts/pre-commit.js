#!/usr/bin/env node

/**
 * Pre-commit hook for Bushi Framework
 * Ensures metadata integrity before commits
 */

import { readFile } from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Critical files that must have metadata
const CRITICAL_FILES = [
  ".cursor/rules/bushi.mdc",
  ".cursor/rules/bushi-limits.mdc",
];

// Utility functions
const log = (message, type = "info") => {
  const icons = { info: "🔍", success: "✅", warning: "⚠️", error: "❌" };
  console.log(`${icons[type]} ${message}`);
};

const validateCriticalFile = async (filePath) => {
  log(`Validating critical file: ${filePath}`);

  try {
    const content = await readFile(filePath, "utf8");

    // Check if metadata section exists
    if (!content.includes("---")) {
      log(`${filePath} has no metadata delimiters!`, "error");
      return false;
    }

    // Check if it's a Cursor rule file
    if (filePath.includes(".cursor/rules/")) {
      const hasDescription = content.includes("description:");
      const hasGlobs = content.includes("globs:");
      const hasAlwaysApply = content.includes("alwaysApply:");

      if (!hasDescription || !hasGlobs || !hasAlwaysApply) {
        log(`${filePath} is missing required metadata fields!`, "error");
        log(`  - description: ${hasDescription ? "✅" : "❌"}`);
        log(`  - globs: ${hasGlobs ? "✅" : "❌"}`);
        log(`  - alwaysApply: ${hasAlwaysApply ? "✅" : "❌"}`);
        return false;
      }
    }

    log(`${filePath} validation passed`, "success");
    return true;
  } catch (error) {
    log(`Error reading ${filePath}: ${error.message}`, "error");
    return false;
  }
};

const validateAllFiles = async () => {
  log("🚨 PRE-COMMIT VALIDATION: Checking critical Bushi Framework files...\n");

  let allValid = true;

  for (const file of CRITICAL_FILES) {
    if (!(await validateCriticalFile(file))) {
      allValid = false;
    }
    console.log(""); // Add spacing
  }

  if (!allValid) {
    log("PRE-COMMIT VALIDATION FAILED!", "error");
    log("🚫 Cannot commit with corrupted Bushi Framework files.");
    console.log("");
    log("🔧 To fix this:");
    log("  1. Run: npm run validate");
    log("  2. Fix any metadata issues");
    log("  3. Try committing again");
    console.log("");
    log("💡 If you need to modify metadata intentionally, use:");
    log("  git commit --no-verify");
    console.log("");
    process.exit(1);
  }

  log("PRE-COMMIT VALIDATION PASSED!", "success");
  log("🚀 Bushi Framework is ready for commit.");
};

// Run validation
validateAllFiles().catch((error) => {
  log(`Unexpected error: ${error.message}`, "error");
  process.exit(1);
});
