# 📋 Bushi Framework Changelog

All notable changes to the Bushi Framework will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

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
