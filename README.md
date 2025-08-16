# Bushi Framework

**Build Shit Fast** - A comprehensive framework for solo developers to build micro-SaaS businesses.

> 🚀 **v0.6.0** - Major modernization with ES modules, 39% code reduction, and unified build system

## 🚀 Quick Start

```bash
# Install globally
npm install -g bushi

# Initialize in your project
bushi init

# Use in Cursor IDE with commands like /ba, /ta, /dx, etc.
```

## ✨ What's New in v0.6.0

- **🔄 ES Modules**: Complete migration to modern JavaScript with native import/export
- **📉 39% Code Reduction**: Streamlined from 1,024 to ~620 lines while maintaining all functionality
- **🏗️ Unified Build System**: Single build script handles framework, distribution, and combined builds
- **⚡ Performance**: Faster execution with modern async/await patterns
- **🔧 Modern CLI**: Beautiful interface with enhanced user experience
- **📦 Latest Dependencies**: Updated to latest stable versions

## 🏗️ Project Structure

```
bushi/
├── bin/           # CLI executable
├── scripts/       # Build and validation scripts
├── dist/          # Build output
└── .git/          # Version control
```

## 🛠️ Development

### Prerequisites
- **Node.js 18+** (ES modules support required)
- npm or yarn

### Build Commands
```bash
# Build everything (framework + distribution)
npm run build:all

# Build only framework
npm run build:framework

# Build only distribution package
npm run build:dist

# Validate metadata
npm run validate

# Run pre-commit validation
npm run pre-commit
```

### Scripts Overview

- **`scripts/build.js`** - Consolidated build system for both framework and distribution
- **`scripts/validate-metadata.js`** - Metadata validation and restoration
- **`scripts/pre-commit.js`** - Git pre-commit hook for metadata integrity

## 🎯 Framework Features

- **Business Architect** (`/ba`) - Business strategy and MVP definition
- **Design Experience** (`/dx`) - UX/UI and user research
- **Technical Architect** (`/ta`) - Technical architecture and development
- **Growth Strategist** (`/gs`) - Marketing and customer acquisition
- **Business Operations** (`/bo`) - Financial and operational planning

## 🔧 Technical Details

- **ES Modules**: Modern JavaScript with `import/export` syntax
- **Async/Await**: Full async support throughout codebase
- **Error Handling**: Comprehensive error handling and validation
- **Metadata Protection**: Automatic metadata validation and restoration
- **Code Quality**: Standardized patterns and improved maintainability

## 📚 Documentation

For full documentation and usage examples, visit: https://github.com/noigllc/bushi

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run validation: `npm run validate`
5. Submit a pull request

## 📄 License

MIT License - see LICENSE file for details.
