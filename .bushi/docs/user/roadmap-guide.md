# Roadmap Command Guide

## 🗺️ **What is the `/roadmap` Command?**

The `/roadmap` command is your intelligent task router that analyzes your project roadmap and automatically suggests which Bushi Framework agent is best suited for your next epic, story, or task.

## 🚀 **How to Use**

### **Basic Usage:**
```
/roadmap
```
This activates the Roadmap Router agent to analyze your current project.

### **Advanced Usage:**
```
/roadmap analyze [specific task]
/roadmap next
/roadmap route [epic name]
```

## 📁 **What Files Does It Analyze?**

The Roadmap Router looks for these files in your project:

### **Primary Roadmap Files:**
- `roadmap.md` - Your main project roadmap
- `README.md` - Project overview and goals
- `CHANGELOG.md` - Recent changes and progress

### **Project Context Files:**
- `project.md` - Project details and specifications
- `goals.md` - Project objectives and milestones
- `tasks.md` - Current task list

### **Development Files:**
- `TODO.md` - Pending tasks
- `FIXME.md` - Issues to address
- `*.md` files with task-related content

## 📋 **How to Create Roadmaps for Analysis**

### **Basic Roadmap Structure:**
```markdown
# Project Roadmap

## 🎯 **Current Sprint**
- [ ] User authentication system
- [ ] Dashboard wireframes
- [ ] API endpoint design

## 🚀 **Next Epic: User Onboarding**
- User research and interviews
- Onboarding flow design
- Technical implementation
- Testing and validation

## 📈 **Future Features**
- Payment integration
- Advanced analytics
- Mobile app development
```

### **Task Format Examples:**
```markdown
## **Task: User Authentication**
**Type**: Technical Implementation
**Priority**: High
**Description**: Build secure user login system
**Dependencies**: Database schema, API design
**Estimated Effort**: 3-5 days
```

## 🎯 **Agent Routing Examples**

### **Example 1: Business Strategy Task**
```
🗺️ **Roadmap Analysis Complete**

**Next Task**: Market research for new feature
**Task Type**: Business strategy and market analysis
**Complexity**: Medium

**Recommended Agent**: 🎯 **Business Architect (BA)**

**Why BA?**
- Task involves market research and analysis
- Requires business strategy expertise
- Needs competitive analysis skills

**Next Steps:**
1. Use `/ba` to activate Business Architect
2. Focus on market research methodology
3. Consider involving DX later for user research
```

### **Example 2: Technical Implementation Task**
```
🗺️ **Roadmap Analysis Complete**

**Next Task**: API endpoint development
**Task Type**: Technical architecture and development
**Complexity**: High

**Recommended Agent**: 🏗️ **Technical Architect (TA)**

**Why TA?**
- Task involves technical implementation
- Requires development expertise
- Needs architecture planning skills

**Next Steps:**
1. Use `/ta` to activate Technical Architect
2. Focus on API design and implementation
3. Consider involving BA for business requirements
```

### **Example 3: User Experience Task**
```
🗺️ **Roadmap Analysis Complete**

**Next Task**: User onboarding flow redesign
**Task Type**: User experience and interface design
**Complexity**: Medium

**Recommended Agent**: 🎨 **Design Experience (DX)**

**Why DX?**
- Task involves user research and wireframing
- Requires UX/UI expertise
- Needs prototyping and testing skills

**Next Steps:**
1. Use `/dx` to activate Design Experience
2. Focus on user research and wireframing
3. Consider involving TA later for implementation
```

## 🔧 **Best Practices**

### **1. Keep Roadmaps Updated**
- Update task status regularly
- Add new tasks as they arise
- Remove completed tasks

### **2. Use Clear Task Descriptions**
- Be specific about what needs to be done
- Include task type and complexity
- Mention dependencies and requirements

### **3. Prioritize Tasks**
- Mark high-priority items clearly
- Use consistent priority levels
- Include effort estimates

### **4. Link Related Tasks**
- Group related tasks into epics
- Show task dependencies
- Create logical task sequences

## 🚨 **Common Issues and Solutions**

### **Issue: Command Not Working**
**Solution**: Ensure you're using Cursor IDE and have Bushi Framework initialized

### **Issue: No Roadmap Found**
**Solution**: Create a `roadmap.md` file in your project root

### **Issue: Unclear Recommendations**
**Solution**: Provide more detailed task descriptions in your roadmap

### **Issue: Wrong Agent Suggested**
**Solution**: The command learns from your feedback - use the recommended agent and adjust if needed

## 💡 **Pro Tips**

1. **Start Simple**: Begin with a basic roadmap and expand as needed
2. **Be Specific**: Detailed task descriptions lead to better agent recommendations
3. **Update Regularly**: Keep your roadmap current for accurate analysis
4. **Use Tags**: Mark tasks with types like "business", "technical", "design"
5. **Include Context**: Add business goals and user needs to help with routing

## 🎯 **Getting Started**

1. **Create a roadmap.md file** in your project root
2. **Add your current tasks** with clear descriptions
3. **Run `/roadmap`** to get agent recommendations
4. **Follow the suggestions** to stay focused and efficient

The `/roadmap` command will help you stay on track and always work with the right expert for each task!
