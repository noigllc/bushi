# 🚀 Bushi Framework NPX Package - Complete Guide

## 📦 What This Guide Covers

- **Local Development & Testing** - How to test the package locally
- **NPX Package Structure** - Understanding the package architecture
- **NPM Commands** - Essential npm operations for development
- **Deployment Process** - How to publish to npm registry
- **Usage Instructions** - How users will use your package

## 🏗️ NPX Package Structure

```
bushi/
├── package.json          ← Package configuration and metadata
├── bin/
│   └── cli.js           ← Main CLI executable
├── scripts/
│   └── build.js         ← Build script for distribution
├── framework/            ← Framework files (created during build)
│   ├── rules/           ← Cursor rules (.mdc files)
│   └── bushi/           ← Bushi framework files
└── README.md            ← Package documentation
```

## 🔧 Local Development & Testing

### 1. Install Dependencies
```bash
npm install
```

### 2. Test CLI Locally
```bash
# Test the init command
node bin/cli.js init

# Test the info command
node bin/cli.js info

# Test help
node bin/cli.js --help
```

### 3. Test with NPX (Local)
```bash
# Link package locally for testing
npm link

# Test in another directory
cd /tmp/test-project
npx bushi init
npx bushi info

# Unlink when done testing
npm unlink
```

### 4. Test Build Process
```bash
# Run build script
npm run build

# Check dist folder
ls -la dist/
```

## 📋 Essential NPM Commands

### Development
```bash
npm install              # Install dependencies
npm run build           # Build package for distribution
npm run test            # Run tests (if any)
npm link                # Link package locally for testing
npm unlink              # Unlink local package
```

### Publishing
```bash
npm login               # Login to npm registry
npm publish             # Publish to npm registry
npm version patch       # Increment patch version (1.0.0 → 1.0.1)
npm version minor       # Increment minor version (1.0.0 → 1.1.0)
npm version major       # Increment major version (1.0.0 → 2.0.0)
```

### Package Management
```bash
npm pack                # Create tarball without publishing
npm publish --dry-run   # Test publish without actually publishing
npm unpublish           # Remove package from registry (within 72 hours)
```

## 🚀 Deployment Process

### 1. Prepare for Publishing
```bash
# Ensure you're logged in
npm login

# Check current version
npm version

# Build package
npm run build
```

### 2. Publish to NPM
```bash
# Publish from dist directory
cd dist
npm publish

# Or publish from root (will use prepublishOnly script)
npm publish
```

### 3. Verify Publication
```bash
# Check if package is published
npm view bushi

# Test installation
npx bushi@latest info
```

## 🎯 How Users Will Use Your Package

### 1. Installation
```bash
# Users can install globally
npm install -g bushi

# Or use directly with npx (recommended)
npx bushi init
```

### 2. Available Commands
```bash
bushi init              # Initialize framework in current project
bushi info              # Show framework information
bushi --help            # Show help
bushi --version         # Show version
```

### 3. User Experience
1. **User runs:** `npx bushi init`
2. **CLI creates:** `.cursor/rules/` and `.bushi/` directories
3. **CLI copies:** All framework files to user's project
4. **User opens:** Project in Cursor IDE
5. **User activates:** Framework with `/ps`, `/pd`, etc.

## 🔍 Testing Checklist

### Before Publishing
- [ ] `npm install` works
- [ ] `npm run build` completes successfully
- [ ] `node bin/cli.js init` works in test directory
- [ ] `npm link` and `npx bushi init` work locally
- [ ] All framework files are copied correctly
- [ ] Cursor rules are properly formatted
- [ ] Package.json has correct metadata

### After Publishing
- [ ] `npx bushi@latest info` works
- [ ] `npx bushi@latest init` works in new project
- [ ] Framework activates correctly in Cursor
- [ ] All commands work as expected

## 🚨 Common Issues & Solutions

### Issue: "Command not found: bushi"
**Solution:** Ensure `bin/cli.js` has `#!/usr/bin/env node` shebang

### Issue: Framework files not copied
**Solution:** Check build script paths and ensure framework directory exists

### Issue: Cursor rules not working
**Solution:** Verify `.mdc` files have correct metadata format

### Issue: Permission denied on CLI
**Solution:** Ensure `chmod 755` is set on `cli.js` during build

## 📚 Version Management

### Semantic Versioning
- **Patch (1.0.0 → 1.0.1):** Bug fixes, no breaking changes
- **Minor (1.0.0 → 1.1.0):** New features, backward compatible
- **Major (1.0.0 → 2.0.0):** Breaking changes, major updates

### Update Process
```bash
# Make changes to framework
# Update version
npm version patch  # or minor/major
npm run build
npm publish
```

## 🌟 Pro Tips

1. **Always test locally** with `npm link` before publishing
2. **Use `npm publish --dry-run`** to catch issues
3. **Keep framework files in sync** between development and package
4. **Test in clean environment** to ensure no local dependencies
5. **Document breaking changes** clearly in release notes

## 🔗 Useful Resources

- [NPM Publishing Guide](https://docs.npmjs.com/packages-and-modules/contributing-packages-to-the-registry)
- [NPX Documentation](https://docs.npmjs.com/cli/v7/commands/npx)
- [Commander.js Documentation](https://github.com/tj/commander.js)
- [Chalk Documentation](https://github.com/chalk/chalk)

---

**Ready to build and deploy Bushi Framework to the world?** 🚀
