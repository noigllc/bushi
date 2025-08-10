# 📚 Bushi Framework Versioning Strategy

## 🎯 **Version Format: Semantic Versioning (SemVer)**

```
MAJOR.MINOR.PATCH
  0  .  2  .  0
```

## 🚀 **Current Phase: Development (0.x.x)**

### **Why 0.x.x?**
- **Active development** - Framework is evolving rapidly
- **Breaking changes expected** - Agents and features are being refined
- **User feedback needed** - Real-world testing required
- **API not stable** - Commands and behaviors may change

## 📊 **Version Bump Rules**

### **Patch Updates (0.2.0 → 0.2.1)**
**When to bump:** Bug fixes, minor improvements, documentation updates
**Examples:**
- Fix typos in agent prompts
- Improve error handling in CLI
- Update documentation
- Fix minor bugs in agent logic
- Optimize existing agent responses

**Impact:** Low risk, safe to update

### **Minor Updates (0.2.0 → 0.3.0)**
**When to bump:** New features, new agents, significant improvements
**Examples:**
- Add new agent capabilities
- Introduce new commands
- Add new frameworks or methodologies
- Significant agent behavior improvements
- New documentation sections

**Impact:** Medium risk, may have new features to test

### **Major Updates (0.2.0 → 1.0.0)**
**When to bump:** Breaking changes, major restructuring, stable release
**Examples:**
- Change command syntax (e.g., `/ps` to `/product-strategist`)
- Restructure framework folder organization
- Remove deprecated features
- Major changes to agent behavior
- Framework architecture changes

**Impact:** High risk, requires user migration

## 🔄 **Update Process**

### **1. Development Workflow**
```bash
# Make changes to framework
# Test locally
npm run build
npm link
# Test in real project
npm unlink

# Update version based on changes
npm version patch    # 0.2.0 → 0.2.1
npm version minor    # 0.2.0 → 0.3.0
npm version major    # 0.2.0 → 1.0.0

# Build and publish
npm run build
npm publish
```

### **2. Version Decision Tree**
```
Changes Made?
├── Bug fixes only? → patch (0.2.0 → 0.2.1)
├── New features? → minor (0.2.0 → 0.3.0)
└── Breaking changes? → major (0.2.0 → 1.0.0)
```

## 🎯 **Roadmap to 1.0.0**

### **Phase 1: Foundation (0.1.x)**
- [x] Basic NPX package structure
- [x] Core CLI functionality
- [x] Basic agent framework
- [x] Cursor rules integration

### **Phase 2: Enhancement (0.2.x)**
- [x] Agent optimization and testing
- [x] User feedback integration
- [x] Documentation improvements
- [x] New onboarding experience
- [ ] Performance optimizations

### **Phase 3: Stabilization (0.3.x)**
- [ ] Community testing
- [ ] Bug fixes and refinements
- [ ] API stability
- [ ] Migration guides

### **Phase 4: Release (1.0.0)**
- [ ] Stable API
- [ ] Comprehensive testing
- [ ] Production ready
- [ ] Breaking change policy established

## 📋 **Version History**

| Version | Date | Changes | Type |
|---------|------|---------|------|
| 0.2.0 | 2024-08-10 | New /bushi-start command, enhanced README, @latest installation | Minor |
| 0.1.0 | 2024-08-10 | Initial NPX package, CLI, basic framework | Initial |
| - | - | - | - |

## 🚨 **Breaking Change Policy**

### **During 0.x.x Development:**
- **Breaking changes allowed** but should be documented
- **Migration guides** provided when possible
- **User communication** about significant changes

### **After 1.0.0:**
- **Breaking changes** require major version bump
- **Deprecation warnings** before removal
- **Migration guides** mandatory for breaking changes

## 💡 **Best Practices**

1. **Test thoroughly** before version bump
2. **Document changes** in release notes
3. **Communicate breaking changes** clearly
4. **Provide migration paths** when possible
5. **Get user feedback** before major changes

## 🔗 **Related Documents**

- [NPX_GUIDE.md](./NPX_GUIDE.md) - Package development and deployment
- [README.md](./README.md) - Framework overview
- [CHANGELOG.md](./CHANGELOG.md) - Detailed change history

---

**Remember: 0.x.x means "actively developing" - embrace the iteration!** 🚀
