# Context Reading System

## 🎯 **How Agents Read Project Context**

### **Context Sources**
Agents should read these files to understand the current project state:

1. **Project Summary** - `.bushi/docs/project-summary.md`
2. **Agent Behaviors** - `.bushi/docs/agent-behaviors.md`
3. **Project Context** - `.bushi/docs/project-context/prd.md` and `.bushi/docs/project-context/roadmap.md`
4. **Agent Outputs** - `.bushi/docs/agent-outputs/`

### **Reading Priority**
1. **First**: Always read `project-summary.md` for project overview
2. **Second**: Read relevant agent outputs from previous work
3. **Third**: Read specific context files related to current task

### **Context Awareness**
- Agents should acknowledge what they've read
- Reference previous work in their responses
- Build upon existing context rather than starting fresh
- Suggest improvements or refinements to existing work

---
*Document created: [Current Date]*
*Status: Initial draft*
