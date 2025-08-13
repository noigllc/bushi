#!/usr/bin/env node

const fs = require("fs-extra");
const path = require("path");

console.log("🔍 Validating Cursor Rules Metadata...\n");

async function validateMetadata() {
  try {
    const rulesDir = path.join(__dirname, "..", ".cursor", "rules");
    const bushiDir = path.join(__dirname, "..", ".bushi");

    let hasErrors = false;

    // Validate .cursor/rules files
    if (await fs.pathExists(rulesDir)) {
      console.log("📋 Checking .cursor/rules files...");
      const ruleFiles = await fs.readdir(rulesDir);

      for (const file of ruleFiles) {
        if (file.endsWith(".mdc")) {
          const filePath = path.join(rulesDir, file);
          const content = await fs.readFile(filePath, "utf8");

          if (!validateFileMetadata(content, file)) {
            hasErrors = true;
          }
        }
      }
    }

    // Validate .bushi files
    if (await fs.pathExists(bushiDir)) {
      console.log("📋 Checking .bushi files...");
      const bushiFiles = await fs.readdir(bushiDir, { recursive: true });

      for (const file of bushiFiles) {
        if (typeof file === "string" && file.endsWith(".mdc")) {
          const filePath = path.join(bushiDir, file);
          const content = await fs.readFile(filePath, "utf8");

          if (!validateFileMetadata(content, file)) {
            hasErrors = true;
          }
        }
      }
    }

    if (hasErrors) {
      console.log(
        "\n❌ Metadata validation failed! Please fix the issues above."
      );
      process.exit(1);
    } else {
      console.log("\n✅ All metadata validation passed!");
    }
  } catch (error) {
    console.error("\n❌ Validation error:", error.message);
    process.exit(1);
  }
}

function validateFileMetadata(content, filename) {
  // Check if metadata is at the top
  const lines = content.split("\n");
  let hasMetadata = false;
  let metadataStart = -1;
  let metadataEnd = -1;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();

    if (line === "---") {
      if (metadataStart === -1) {
        metadataStart = i;
      } else if (metadataEnd === -1) {
        metadataEnd = i;
        break;
      }
    }
  }

  // Check if metadata exists and is at the top
  if (metadataStart === -1 || metadataEnd === -1) {
    console.log(`   ❌ ${filename}: Missing metadata section`);
    return false;
  }

  if (metadataStart > 5) {
    // Allow some flexibility for title/description
    console.log(
      `   ❌ ${filename}: Metadata not at top (line ${metadataStart + 1})`
    );
    return false;
  }

  // Extract metadata content
  const metadataLines = lines.slice(metadataStart + 1, metadataEnd);
  const metadataContent = metadataLines.join("\n");

  // Check required fields
  const requiredFields = ["description", "globs", "alwaysApply"];
  const missingFields = [];

  for (const field of requiredFields) {
    if (!metadataContent.includes(`${field}:`)) {
      missingFields.push(field);
    }
  }

  if (missingFields.length > 0) {
    console.log(
      `   ❌ ${filename}: Missing required fields: ${missingFields.join(", ")}`
    );
    return false;
  }

  // Check for metadata at bottom
  const lastLines = lines.slice(-10);
  if (
    lastLines.some(
      (line) =>
        line.includes("description:") ||
        line.includes("globs:") ||
        line.includes("alwaysApply:")
    )
  ) {
    console.log(`   ❌ ${filename}: Metadata found at bottom of file`);
    return false;
  }

  console.log(`   ✅ ${filename}: Metadata format correct`);
  return true;
}

validateMetadata();
