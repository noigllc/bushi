# Changelog

## [0.6.5] - 2024-01-16

### 🧹 **Major Simplification & Complexity Removal**

#### **Eliminated Unnecessary Complexity**
- **Removed `framework/` folder entirely** - No more duplicate file structure
- **Simplified CLI logic** - Removed development/production mode detection
- **Streamlined build process** - Single build command, no more complex distribution logic
- **Eliminated redundant file copying** - CLI now copies directly from `.cursor/rules/`

#### **Simplified Architecture**
- **CLI copies directly** from `.cursor/rules/` to user's project
- **Creates empty `.bushi/` folder** for user to create their own documentation
- **No more template files** - Users create prd.md and roadmap.md themselves
- **Single source of truth** - All framework files live in `.cursor/rules/`

#### **What Changed**
- **Before**: Complex framework folder + development/production logic + template files
- **After**: Direct copy from `.cursor/rules/` + empty `.bushi/` folder
- **Result**: Simpler, faster, more maintainable system

#### **Benefits**
- ✅ **Faster installation** - No unnecessary file operations
- ✅ **Easier maintenance** - Single source of truth
- ✅ **Less confusion** - Clear file structure
- ✅ **Smaller package size** - No duplicate files
- ✅ **Simpler debugging** - Direct file references

---

## [0.6.4] - 2024-01-16

### 🚀 Major Restructuring & Improvements

#### **Cursor Rules Enhancement**
- **Added compelling introductions** for all agent files:
  - 🏗️ Business Architect: Strategic partner for business model validation
  - 🎨 Design Experience: UX/UI transformation specialist
  - ⚙️ Technical Architect: Technical foundation builder
  - 🚀 Growth Strategist: Customer acquisition strategist
  - 💼 Business Operations: Operational foundation specialist

#### **File Reference System Fixes**
- **Fixed all broken file references** in cursor rules
- Updated `@bushi-start.mdc` → `@.cursor/rules/bushi-start.mdc`
- Updated `@agents/` → `@.cursor/rules/agents/`
- Maintained `@.bushi/` references for user project files (correct)

#### **CLI Installation Process Overhaul**
- **Restructured framework delivery system**:
  - `.cursor/rules/` now contains the framework (agents, commands)
  - `.bushi/` now only contains user project templates
  - CLI copies cursor rules to user's `.cursor/rules/` folder
  - CLI creates user project structure in `.bushi/` folder
- **Fixed installation validation** to check for correct files
- **Updated success messages** to guide users properly

#### **User Experience Improvements**
- **Template files created** for immediate use:
  - `prd.md` - Product Requirements Document template
  - `roadmap.md` - Project Roadmap template
- **Clear separation** between framework files and user project files
- **Improved onboarding flow** with proper file structure

#### **Technical Architecture**
- **Framework directory structure** properly organized
- **Build process updated** to handle new structure
- **Distribution package** now correctly delivers cursor rules

### 🔧 Breaking Changes
- **CLI installation process** completely restructured
- **File locations** changed from `@.bushi/` to `.cursor/rules/` for framework files
- **User project files** now created in `.bushi/` folder only

### ✅ What Works Now
- All agent commands (`/ba`, `/dx`, `/ta`, `/gs`, `/bo`) properly reference working files
- CLI installation creates correct file structure
- Users get working cursor rules + project templates
- Framework and user files are properly separated

---

# 📋 Bushi Framework Changelog

All notable changes to the Bushi Framework will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.6.3] - 2024-12-19 - Critical Workflow Bug Fixes

### Fixed
- **Critical Workflow Bypass**: Bushi Start now properly enforces automatic routing to Business Architect for new ideas
- **TA Foundation Bypass**: Technical Architect agent now properly checks for roadmap/PRD files before proceeding
- **Agent Routing Violations**: Fixed workflow sequence violations that allowed skipping business foundation
- **Documentation Bypass**: Agents can no longer proceed without proper project foundation

### Added
- **Stronger Workflow Enforcement**: Added explicit "what I will never do" sections to prevent bypasses
- **Mandatory Foundation Checklist**: TA agent now has required checklist before any technical work
- **Concrete Examples**: Added wrong vs. correct behavior examples to prevent future violations
- **Automatic Routing Confirmation**: Bushi Start now shows exact workflow for new ideas

### Changed
- **Enhanced Agent Rules**: Strengthened behavioral rules with critical enforcement sections
- **Improved Workflow Clarity**: Added concrete examples of proper vs. improper agent usage
- **Foundation Verification**: All agents now properly verify project foundation before proceeding

### Technical Details
- **Bushi Start Agent**: Added workflow enforcement and automatic routing examples
- **Technical Architect Agent**: Added foundation verification and bypass prevention
- **Metadata Preservation**: All framework metadata preserved during fixes
- **Lean File Updates**: Minimal changes while fixing critical workflow issues

## [0.6.1] - 2024-12-19 - README Improvements & Documentation

### Changed
- **README Structure** - Reorganized for better logical flow and clarity
- **Installation Guide** - Fixed Quick Start section to show 3 actual steps
- **Folder Structure** - Added complete explanation of all framework files and user docs
- **Documentation Clarity** - Removed version information and focused on usage

### Fixed
- **Quick Start Steps** - Now shows 3 logical steps instead of claiming 3 but showing 2
- **Missing Files** - Added `bushi-start.mdc` and `roadmap-router.mdc` to folder structure
- **User vs Framework** - Clarified difference between framework files and user documentation

## [0.6.0] - 2024-12-19 - Major Framework Modernization & Cleanup

### Added
- **ES Modules Migration** - Complete conversion from CommonJS to modern ES modules throughout codebase
- **Unified Build System** - Single, powerful build.js script replacing multiple build scripts
- **Modern JavaScript Support** - Full async/await patterns and promise-based file operations
- **Enhanced CLI Experience** - Beautiful ASCII art banner and improved user feedback
- **Comprehensive Error Handling** - Standardized logging and error recovery across all scripts

### Changed
- **Node.js Requirement** - Updated minimum version from 16+ to 18+ for ES module support
- **Package Structure** - Added `"type": "module"` for native ES module support
- **Build Commands** - New unified commands: `build:all`, `build:framework`, `build:dist`
- **Dependencies** - Updated to latest versions: commander ^11.0.0, chalk ^5.3.0, fs-extra ^11.1.1
- **Code Organization** - Consolidated scripts and eliminated redundant functionality

### Fixed
- **Build Script Duplication** - Eliminated build-distribution.js (124 lines → 0)
- **CLI Complexity** - Streamlined from 377 to ~200 lines (47% reduction)
- **Validation Overhead** - Simplified metadata validation from 343 to ~150 lines (56% reduction)
- **Pre-commit Complexity** - Cleaner pre-commit hook from 93 to ~70 lines (25% reduction)

### Technical Details
- **Total Codebase Reduction**: 39% reduction (1,024 → ~620 lines)
- **ES Module Support**: Native import/export throughout codebase
- **Promise-based Operations**: Updated to use fs/promises and modern async patterns
- **Build Process**: Single script handles framework, distribution, and combined builds
- **Code Quality**: Standardized patterns, better error handling, and improved maintainability

## [0.5.4] - 2024-12-19 - Code Modernization & Simplification

### Added
- **ES Modules Migration** - Converted all files from CommonJS to modern ES modules
- **Async/Await Support** - Replaced callback patterns with modern async/await throughout
- **Consolidated Build System** - Merged build scripts into single, more powerful build.js
- **Enhanced Limits** - Strengthened file creation restrictions to prevent unnecessary documentation

### Changed
- **Modern JavaScript** - Updated to Node.js 18+ with full ES module support
- **Simplified Architecture** - Reduced total codebase by 39% (1,024 → ~620 lines)
- **Unified Build Process** - Single script handles framework, distribution, and combined builds
- **Better Error Handling** - Comprehensive error handling with consistent logging
- **Improved Maintainability** - Cleaner code organization and utility functions

### Fixed
- **Build Script Duplication** - Eliminated redundant build-distribution.js (124 lines → 0)
- **CLI Complexity** - Streamlined CLI from 377 to ~200 lines (47% reduction)
- **Validation Overhead** - Simplified metadata validation from 343 to ~150 lines (56% reduction)
- **Pre-commit Complexity** - Cleaner pre-commit hook from 93 to ~70 lines (25% reduction)

### Technical Details
- **Package.json** - Added `"type": "module"` for ES module support
- **Build Commands** - New unified commands: `build:all`, `build:framework`, `build:dist`
- **File System** - Updated to use promise-based fs/promises APIs
- **Code Quality** - Standardized logging, error handling, and configuration management

## [0.5.3] - 2024-12-19 - Critical Framework Rule Enforcement

### Fixed
- **Critical Workflow Bypass**: Bushi Start no longer allows jumping straight to TA without business foundation
- **Agent Routing Issues**: Fixed incorrect agent names in onboarding (from `/pd`, `/pb`, `/gh` to `/dx`, `/ta`, `/gs`)
- **Context Reading Bypass**: Agents can no longer proceed without checking project documentation
- **Workflow Sequence Violations**: System now enforces proper agent sequence (BA → DX → TA → GS → BO)
- **Idea Description Bypass**: Bushi Start now automatically routes to Business Architect when users describe ideas

### Added
- **Mandatory Workflow Validation**: Bushi Start now enforces proper agent selection sequence
- **Context Reading Requirements**: All agents must check existing documentation before proceeding
- **Business-First Approach**: New ideas must start with Business Architect, not Technical Architect
- **Documentation Foundation Requirements**: Proper project foundation required before technical work
- **Automatic Idea Routing**: Bushi Start automatically activates Business Architect agent when users describe ideas
- **PRD/Roadmap Auto-Creation**: New ideas automatically trigger business validation and documentation creation

### Changed
- **Enhanced Bushi Start Agent**: Added mandatory behavioral rules and workflow enforcement
- **Improved User Experience**: Users can no longer bypass proper business validation
- **Framework Stability**: Prevents critical workflow violations that could lead to poor project outcomes

## [0.5.2] - 2024-12-19 - Critical Framework Bug Fix

### Fixed
- **Critical Bug**: Fixed framework bypass vulnerability where agents could skip documentation validation
- **Critical Bug**: Removed legacy product-strategist role that was no longer needed
- **Framework Security**: Implemented mandatory documentation validation before technical discussion

### Added
- **Mandatory Workflow Rule**: Agents must now check existing project documentation before technical planning
- **Automatic Context Detection**: Agents automatically scan existing files for project context
- **Framework Integrity**: Prevents agents from bypassing proper workflow sequence

### Changed
- **Simplified Structure**: Cleaner .bushi folder structure without legacy components
- **Enhanced Rules**: Updated framework rules with critical behavioral constraints
- **Better User Experience**: Agents now understand project context before making recommendations

## [Unreleased]

## [0.5.0] - 2024-12-19 - Automatic Documentation Updates

### Added
- **MANDATORY Documentation Updates** - All agents now automatically update project documentation when making progress
- **Automatic Progress Tracking** - Roadmap tasks are automatically marked as completed [x] when finished
- **Enhanced Roadmap Router** - New commands for progress tracking and completion management
- **Smart Update Features** - Automatic detection of completed work and intelligent status updates
- **Progress Synchronization** - All documentation stays synchronized across agent work

### New Commands
- `/roadmap complete [task]` - Mark specific task as completed
- `/roadmap progress [epic]` - Show progress for specific epic
- `/roadmap update [task] [status]` - Update task status manually
- `/roadmap report` - Generate comprehensive progress report

### Enhanced Agent Behaviors
- **All agents now enforce** mandatory documentation updates after completing work
- **Progress tracking automation** across all agent interactions
- **Decision documentation** - All agent decisions are automatically documented with rationale
- **User notification** - Agents inform users of all documentation updates made

### Framework Improvements
- **Behavioral rule enforcement** - New mandatory documentation update rules across all agents
- **Quality control enhancement** - Documentation updates are now part of the quality control process
- **User experience improvement** - No more forgotten documentation updates or outdated roadmaps

### Technical Details
- **6 new mandatory behavioral rules** added across all agent files
- **Framework-level enforcement** of documentation update requirements
- **Enhanced Cursor rules** with new behavioral constraints
- **User limits file** updated with comprehensive documentation requirements

## [0.4.1] - 2024-12-19

### Added
- **ES Module compatibility** - Fixed `ERR_REQUIRE_ESM` error for Node.js v20+ users
- **Missing command implementation** - Added proper `/bushi-start` command functionality

### Added
- **Node.js version requirements** - Added minimum version (16.0.0) and recommended version (20.0.0+) to README
- **Command detection logic** - Enhanced Cursor rules with proper command recognition

### Changed
- **Improved command handling** - Better error handling and fallback for chalk import failures
- **Cleaned up duplicate files** - Removed redundant `msf.mdc` rules file

### Technical Details
- **Dynamic chalk import** - Replaced `require('chalk')` with dynamic `import('chalk')` for ES Module compatibility
- **Fallback color system** - Added ANSI color fallback when chalk fails to load
- **Enhanced Cursor rules** - Improved command detection and response patterns

## [0.2.0] - 2024-08-10

### Added
- **New `/bushi-start` command** - Interactive agent selection and onboarding experience
- **Enhanced user onboarding** - Guided introduction to all available agents
- **Improved README** - Visual enhancements, badges, and better organization
- **@latest installation** - Updated NPX commands to use `npx bushi@latest init`

### Changed
- **Version bump** - From 0.1.0 to 0.2.0 for new feature release
- **README structure** - Better visual hierarchy and professional appearance
- **Command documentation** - Added comprehensive guide for new users

### Technical Details
- **New agent file** - `.bushi/bushi-start.mdc` for onboarding experience
- **Updated command system** - Enhanced `.cursor/rules/bushi.mdc` with new command
- **Visual improvements** - Added badges, emojis, and better formatting

## [0.1.0] - 2024-08-10

### Added
- **Initial NPX package structure** - Complete package configuration
- **CLI application** - `bushi init` and `bushi info` commands
- **Build system** - Automated build script for distribution
- **Framework integration** - Cursor rules and Bushi framework files
- **Product Strategist agent** - Enhanced with brainstorm/validate modes
- **Smart documentation system** - Evolving documentation approach
- **Command system** - `/ps`, `/pd`, `/pb`, `/gh`, `/bo` commands
- **Help system** - `/commands` and `/help` for quick reference

### Technical Details
- **Dependencies:** commander, chalk, fs-extra
- **Node.js requirement:** >=16.0.0
- **Build process:** `npm run build` creates dist/ folder
- **Local testing:** `npm link` for development testing

### Framework Structure
- **`.cursor/rules/`** - Cursor IDE rules for command detection
- **`.bushi/`** - Framework agent files and logic
- **`docs/`** - Project-specific documentation (created as needed)

### Agents Available
- **Product Strategist** - Business strategy, idea generation, validation
- **Product Designer** - UX/UI, user research, wireframing
- **Product Builder** - Technical architecture, development planning
- **Growth Hacker** - Marketing, customer acquisition, growth
- **Business Operations** - Financial, legal, operational efficiency

## Version Legend

- **Added** - New features
- **Changed** - Changes in existing functionality
- **Deprecated** - Soon-to-be removed features
- **Removed** - Removed features
- **Fixed** - Bug fixes
- **Security** - Vulnerability fixes

---

**For detailed versioning strategy, see [VERSIONING.md](./VERSIONING.md)**
