# Cursor Rules Metadata Guide - Bushi Framework

## 🚨 Critical: Metadata Format Requirements

**NEVER distribute Cursor rules with broken metadata format.** This breaks the entire Bushi framework for end users.

## ✅ Correct Metadata Format

**ALWAYS place metadata at the TOP of the file:**

```yaml
---
description: Agent description here
globs: ["**/*"]
alwaysApply: false
---

# Content starts here...
```

## ❌ Common Mistakes to Avoid

### 1. **Metadata at Bottom**
```markdown
# Content here...

---
description: Wrong!
globs: ["**/*"]
alwaysApply: false
---
```

### 2. **Missing Closing Delimiters**
```yaml
---
description: Agent description
globs: ["**/*"]
alwaysApply: false
# Missing closing ---
```

### 3. **Incomplete Fields**
```yaml
---
description: Agent description
# Missing globs and alwaysApply
---
```

### 4. **Wrong Field Names**
```yaml
---
title: Wrong field name
name: Wrong field name
---
```

## 🔍 Validation Commands

### Before Committing
```bash
npm run pre-commit
```

### Manual Validation
```bash
npm run validate
```

### Before Building
```bash
npm run build  # Includes validation
```

## 📋 Required Metadata Fields

Every `.mdc` file MUST have:

1. **`description`** - Clear description of what the rule does
2. **`globs`** - File patterns where rule applies (usually `["**/*"]`)
3. **`alwaysApply`** - Whether rule is always active (usually `false`)

## 🛡️ Prevention Measures

### 1. **Build-Time Validation**
- Metadata validation runs automatically before building
- Build fails if any metadata issues are found

### 2. **Pre-Commit Hooks**
- Validation runs before each commit
- Prevents broken metadata from being committed

### 3. **Limitations Guard**
- Bushi framework includes metadata format rules
- AI assistants are instructed to follow proper format

### 4. **Template Files**
- Use existing files as templates
- Copy metadata structure, not content

## 🚨 Emergency Fixes

If you find broken metadata:

1. **Move metadata to top** of file
2. **Ensure proper `---` delimiters**
3. **Add missing required fields**
4. **Run validation**: `npm run validate`
5. **Test the fix** before committing

## 📚 File Locations

### Source Files (`.bushi/`)
- `.bushi/agents/*.mdc` - Agent rules
- `.bushi/*.mdc` - Framework rules

### Distribution Files (`.cursor/rules/`)
- `.cursor/rules/bushi.mdc` - Main framework rules
- `.cursor/rules/bushi-limits.mdc` - Quality control rules

## 🔧 Troubleshooting

### Rule Not Working?
1. Check metadata is at top of file
2. Verify all required fields are present
3. Ensure proper YAML syntax
4. Run validation script

### Build Failing?
1. Fix all metadata issues first
2. Run `npm run validate`
3. Ensure all files pass validation
4. Try building again

## 📖 Additional Resources

- [Cursor Rules Documentation](https://docs.cursor.com/en/context/rules)
- [MDC Format Specification](https://docs.cursor.com/en/context/rules#rule-anatomy)
- [Bushi Framework Rules](.cursor/rules/bushi.mdc)

---

**Remember: Broken metadata = Broken Bushi Framework for users. Always validate before committing or building.**
