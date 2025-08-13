# Installation Guide

## 🎯 **What End Users Get**

When you install Bushi Framework, you receive:

### **1. Cursor IDE Rules** (`.cursor/rules/bushi.mdc`)
- Agent command system (`/ba`, `/dx`, `/ta`, `/gs`, `/bo`)
- Agent behavior definitions
- Command detection and activation
- **Automatic documentation updates** and progress tracking

### **2. Agent Configurations** (`.bushi/agents/`)
- Business Architect (BA) - Business strategy and planning
- Design Experience (DX) - UX/UI and wireframing
- Technical Architect (TA) - Development and architecture
- Growth Strategist (GS) - Marketing and growth
- Business Operations (BO) - Legal and financial setup

### **3. User Documentation** (`.bushi/docs/user/`)
- How to use each agent
- Workflow examples
- Template library
- Getting started guide

## 🚫 **What End Users DON'T Get**

### **Development Files (Hidden from Users)**
- Bushi Framework development plans
- Internal project documentation
- Development roadmap and status
- Testing and validation files
- Framework architecture details

## 📁 **File Structure for End Users**

```
.bushi/
├── agents/                    # Agent behavior files
│   ├── business-architect.mdc
│   ├── design-experience.mdc
│   ├── technical-architect.mdc
│   ├── growth-strategist.mdc
│   └── business-operations.mdc
├── docs/
│   └── user/                 # User-facing documentation
│       ├── getting-started.md
│       ├── agent-guides.md
│       ├── templates.md
│       └── examples.md
└── templates/                 # User templates
    ├── project-roadmap.md
    ├── business-model.md
    └── user-personas.md
```

## 🔧 **Installation Process**

### **For End Users**
```bash
npx bushi@latest init
```

**This creates**:
- `.cursor/rules/bushi.mdc` - Cursor IDE integration
- `.bushi/` folder with agent configurations
- User documentation and templates

### **For Developers**
```bash
git clone https://github.com/yourusername/bushi.git
cd bushi
npm install
npm run build
```

**This creates**:
- Full development environment
- All internal documentation
- Testing and validation tools

## 🎯 **User Experience**

### **What Users See**
- Clean, professional agent system
- Clear documentation and examples
- Ready-to-use templates
- Simple command structure

### **What Users Don't See**
- Framework development complexity
- Internal planning documents
- Development status and issues
- Technical implementation details

## 🚀 **Benefits of This Separation**

1. **Clean User Experience** - Users get only what they need
2. **Professional Appearance** - No development clutter
3. **Easy Maintenance** - Development files separate from user files
4. **Scalable Distribution** - Can package user files separately

## 🆕 **v0.5.0: Enhanced User Experience**

### **Automatic Documentation Management**
- **Progress Tracking**: Agents automatically update roadmaps when completing tasks
- **Smart Updates**: Documentation stays synchronized across all agent interactions
- **Completion Marking**: Finished tasks are automatically marked with [x]
- **Decision Documentation**: All agent decisions are recorded with rationale

### **New User Commands**
- `/roadmap complete [task]` - Mark tasks as completed
- `/roadmap progress [epic]` - View epic progress
- `/roadmap update [task] [status]` - Manual status updates
- `/roadmap report` - Generate progress reports

### **Improved Workflow**
- **Focus on Building**: Spend time developing, not updating docs
- **Real-time Status**: Always know project completion status
- **Consistent Tracking**: All agents follow the same update process
- **Better Visibility**: Clear view of what's done and what's pending

---
*Document created: [Current Date]*
*Status: User guide*
*Last updated: [Current Date]*
