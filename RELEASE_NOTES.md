# 🚀 Bushi Framework - Release Notes

## [0.5.2] - 2024-12-19 - Critical Framework Bug Fix

### 🚨 **Critical Security Fix**

- **Framework Bypass Vulnerability**: Fixed critical bug where agents could skip mandatory documentation validation
- **Framework Integrity**: Implemented mandatory workflow rules that prevent agents from bypassing proper sequence
- **Behavioral Enforcement**: All agents now must check project context before technical discussion

### 🚀 **New Framework Rules**

- **Mandatory Documentation Validation**: Agents must review existing project files before technical planning
- **Automatic Context Detection**: Agents automatically scan README, features, changelog, etc. for project context
- **Workflow Enforcement**: No technical discussion allowed until project context is established

### 🔧 **Framework Improvements**

- **Simplified Structure**: Removed legacy product-strategist role for cleaner organization
- **Enhanced Rules**: Updated framework with critical behavioral constraints
- **Better User Experience**: Agents now understand project context before making recommendations
- **Framework Security**: Prevents the critical bypass vulnerability that was identified

### 📁 **Updated File Structure**

The framework now creates a cleaner structure:
```
project/
├── .cursor/
│   └── rules/
│       ├── bushi.mdc          ← Bushi Framework rules
│       └── bushi-limits.mdc   ← Critical behavioral constraints
└── .bushi/
    ├── agents/                 ← 6 specialized agent files
    ├── bushi-start.mdc        ← Framework onboarding
    └── docs/                  ← Ready for user content
```

### 🧪 **What This Fixes**

- ✅ Agents can no longer skip documentation validation
- ✅ Framework workflow is properly enforced
- ✅ Project context is always established before technical planning
- ✅ Cleaner, more focused agent structure

---

## [0.5.0] - 2024-12-19 - Automatic Documentation Updates

### 🚀 **Major New Features**

- **MANDATORY Documentation Updates**: All agents now automatically update project documentation when making progress
- **Automatic Progress Tracking**: Roadmap tasks are automatically marked as completed [x] when finished
- **Enhanced Roadmap Router**: New commands for progress tracking and completion management
- **Smart Update Features**: Automatic detection of completed work and intelligent status updates

### 📋 **New Commands Added**

- `/roadmap complete [task]` - Mark specific task as completed
- `/roadmap progress [epic]` - Show progress for specific epic
- `/roadmap update [task] [status]` - Update task status manually
- `/roadmap report` - Generate comprehensive progress report

### 🔧 **Framework Improvements**

- **Behavioral Rule Enforcement**: New mandatory documentation update rules across all agents
- **Quality Control Enhancement**: Documentation updates are now part of the quality control process
- **User Experience Improvement**: No more forgotten documentation updates or outdated roadmaps
- **Progress Synchronization**: All documentation stays synchronized across agent work

### 🎯 **What This Means for Users**

- **Automatic Progress Updates**: Roadmap automatically reflects completed work
- **Real-time Status**: Always know what's been completed and what's pending
- **Consistent Tracking**: All agents follow the same documentation update process
- **Decision Documentation**: All agent decisions are automatically documented with rationale

---

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
