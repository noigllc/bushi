## 🚀 Bushi Framework NPX Package - Complete Guide

This guide covers everything you need to know about the Bushi Framework NPX package, from development to distribution.

### 📦 **Package Structure**

```
bushi/
├── bin/                        ← CLI binary
├── scripts/                    ← Build scripts
├── .bushi/                     ← Framework files
├── .cursor/                    ← Cursor rules
├── dist/                       ← Build output
│   ├── framework/              ← Production package
│   └── bushi-user-package/     ← User distribution
└── package.json                ← Package configuration
```

### 🔧 **Build Process**

The build process creates two packages:

1. **Production Package** (`dist/`): Contains the NPX executable with framework files
2. **User Package** (`dist/bushi-user-package/`): Contains only user-facing files

### 🚀 **Installation Process**

When a user runs `npx bushi@latest init`:

1. **NPX downloads** the latest package
2. **CLI executes** and creates project structure
3. **CLI copies:** All framework files to user's project
4. **CLI validates:** Installation completeness
5. **User activates:** Framework with `/ba`, `/dx`, etc.

### 🐛 **Recent Bug Fixes (v0.4.2)**

- **Fixed duplicate agents folders** during updates
- **Fixed missing bushi.mdc** file in Cursor rules
- **Fixed file path resolution** in production packages
- **Added installation validation** to ensure completeness

### 🧪 **Testing Checklist**

#### **Build Testing**
- [ ] Build script runs without errors
- [ ] Framework directory structure is correct
- [ ] All required files are copied
- [ ] CLI is executable

#### **Installation Testing**
- [ ] New installations work correctly
- [ ] Updates don't create duplicates
- [ ] All required files are present
- [ ] Framework activates correctly in Cursor

#### **CLI Testing**
- [ ] All commands work (`init`, `cleanup`, `info`)
- [ ] Error handling works correctly
- [ ] Progress indicators display properly
- [ ] Validation steps work as expected

### 🚨 **Common Issues & Solutions**

#### **Issue: Framework files not copied**
**Solution:** Check build script paths and ensure framework directory exists

#### **Issue: Duplicate agents folders**
**Solution:** Fixed in v0.4.2 - CLI now removes old agents before copying new ones

#### **Issue: Missing bushi.mdc file**
**Solution:** Fixed in v0.4.2 - CLI now properly copies Cursor rules

#### **Issue: Installation validation fails**
**Solution:** CLI now validates all required files and provides clear error messages

### 📋 **Development Workflow**

1. **Make changes to framework**
2. **Test locally** with `node bin/cli.js init`
3. **Build package** with `npm run build`
4. **Test build** with `cd dist && node bin/cli.js init`
5. **Publish** with `npm publish`

### 🔄 **Update Process**

1. **Version bump** in package.json
2. **Update changelog** with changes
3. **Test locally** and build
4. **Publish** new version
5. **Users update** with `npx bushi@latest init`

### 📚 **Documentation Updates**

- **README.md** - User installation and usage
- **CHANGELOG.md** - Version history and changes
- **RELEASE_NOTES.md** - Detailed release information
- **NPX_GUIDE.md** - This development guide

### 🎯 **Next Steps**

- [ ] Test v0.4.2 with real projects
- [ ] Gather user feedback on installation process
- [ ] Consider additional CLI commands
- [ ] Plan next feature development

---

**Ready to build and deploy Bushi Framework to the world?** 🚀
