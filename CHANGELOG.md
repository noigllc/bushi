# 📋 Bushi Framework Changelog

All notable changes to the Bushi Framework will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
- Enhanced CLI with better error handling and validation
- New `cleanup` command to remove Bushi Framework installations
- Improved installation process with duplicate prevention
- Better logging and user feedback during installation

### Fixed
- **Critical Bug**: Fixed duplicate agents folder creation during updates
- **Critical Bug**: Fixed missing bushi.mdc file in .cursor/rules directory
- **Critical Bug**: Fixed file path resolution issues in production packages
- **Critical Bug**: Fixed installation validation and error handling

### Changed
- CLI now properly handles both development and production environments
- Installation process now removes old agents before copying new ones
- Better preservation of existing user documentation during updates
- Enhanced error messages with specific file path information

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
