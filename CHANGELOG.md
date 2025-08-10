# 📋 Bushi Framework Changelog

All notable changes to the Bushi Framework will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Planned
- Enhanced agent capabilities
- Additional brainstorming techniques
- Performance optimizations
- User feedback integration

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
