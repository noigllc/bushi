# Bushi Framework - Migration Guide

## 🚀 **Updating Existing Bushi Installations**

If you already have Bushi Framework installed, here's how to update to the new command structure.

## 📋 **What Changed**

### **Old Commands → New Commands**
- **`/ps`** → **`/ba`** (Product Strategist → Business Architect)
- **`/pd`** → **`/dx`** (Product Designer → Design Experience)
- **`/pb`** → **`/ta`** (Product Builder → Technical Architect)
- **`/gh`** → **`/gs`** (Growth Hacker → Growth Strategist)
- **`/bo`** → **`/bo`** (Business Operations - unchanged)

## 🔄 **Migration Steps**

### **Step 1: Update Bushi Framework**
```bash
# If installed via npx
npx bushi@latest init

# If installed via git
git pull origin main
npm install
npm run build
```

### **Step 2: Update Your Commands**
**Replace old commands with new ones:**

**Before:**
```bash
/ps  # Product Strategist
/pd  # Product Designer
/pb  # Product Builder
/gh  # Growth Hacker
/bo  # Business Operations
```

**After:**
```bash
/ba  # Business Architect
/dx  # Design Experience
/ta  # Technical Architect
/gs  # Growth Strategist
/bo  # Business Operations
```

### **Step 3: Update Your Documentation**
If you have project documentation that references old commands, update them:

**Old references:**
- "Use `/ps` to define business strategy"
- "Switch to `/pd` for user experience design"
- "Use `/pb` for technical planning"

**New references:**
- "Use `/ba` to define business strategy"
- "Switch to `/dx` for user experience design"
- "Use `/ta` for technical planning"

## ✅ **What Still Works**

### **Unchanged Features**
- **Agent behaviors** - All agents work the same way
- **Documentation system** - Context sharing still works
- **Workflow patterns** - Same process, new commands
- **Templates** - All templates still work

### **Enhanced Features**
- **Better naming** - More professional and clear
- **Improved clarity** - Commands better reflect agent roles
- **Future-ready** - Foundation for upcoming features

## 🚨 **Potential Issues**

### **If Commands Don't Work**
1. **Restart Cursor IDE** - Rules need to reload
2. **Check installation** - Ensure update completed successfully
3. **Verify rules file** - Check `.cursor/rules/bushi.mdc` exists

### **If Documentation References Old Commands**
- **Search and replace** - Find all `/ps`, `/pd`, `/pb`, `/gh` references
- **Update to new commands** - Replace with `/ba`, `/dx`, `/ta`, `/gs`
- **Test functionality** - Ensure all agents still work

## 🎯 **Benefits of Migration**

### **Why Update?**
1. **Professional appearance** - Better agent names
2. **Future compatibility** - New features require updated commands
3. **Improved clarity** - Commands better describe agent functions
4. **Consistent experience** - All users on same version

### **What You Get**
- **Enhanced agents** - Improved behaviors and capabilities
- **Better documentation** - Clearer user guides and examples
- **New templates** - Additional project planning tools
- **Future features** - Access to upcoming enhancements

## 🚀 **After Migration**

### **Test Your Setup**
1. **Try each command** - `/ba`, `/dx`, `/ta`, `/gs`, `/bo`
2. **Check documentation** - Ensure all guides are updated
3. **Verify workflows** - Test agent handoffs and collaboration
4. **Update projects** - Migrate existing project documentation

### **Get Help**
If you encounter issues:
- **Check this guide** - Common solutions and troubleshooting
- **Review documentation** - Updated user guides and examples
- **Test with simple project** - Try the new commands on a new idea

---
*Document created: [Current Date]*
*Status: Migration guide*
*Last updated: [Current Date]*
