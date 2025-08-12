# 🚀 Bushi Framework - Release Notes

## [0.4.2] - 2024-12-19 - Critical Bug Fixes

### 🐛 **Critical Bugs Fixed**

- **Duplicate Agents Folder Creation**: Fixed issue where updating Bushi created duplicate agents folders instead of replacing old ones
- **Missing bushi.mdc File**: Fixed issue where Cursor rules file wasn't being copied to `.cursor/rules` directory
- **File Path Resolution**: Fixed CLI file path issues that prevented proper installation in production packages
- **Installation Validation**: Added comprehensive validation to ensure all required files are present

### 🚀 **New Features**

- **Enhanced CLI**: Better error handling, progress indicators, and user feedback
- **Cleanup Command**: New `bushi cleanup` command to completely remove Bushi Framework
- **Smart Updates**: Installation now properly handles existing installations without duplicates
- **Development Mode**: CLI automatically detects development vs production environment

### 🔧 **Improvements**

- **Better Error Messages**: More specific error messages with file path information
- **Installation Validation**: Final validation step ensures complete installation
- **User Documentation Preservation**: Existing user docs are preserved during updates
- **Enhanced Logging**: Clear progress indicators and status messages

### 📁 **File Structure**

The framework now creates the correct structure:
```
project/
├── .cursor/
│   └── rules/
│       └── bushi.mdc          ← Bushi Framework rules
└── .bushi/
    ├── agents/                 ← All agent files (no duplicates)
    └── docs/
        └── user/               ← User documentation
```

### 🧪 **Testing**

- ✅ New installations work correctly
- ✅ Updates don't create duplicates
- ✅ Cursor IDE properly recognizes framework
- ✅ All required files are validated

---

## [0.4.1] - 2024-12-19 - ES Module Compatibility
