# Workflow Guide

## 🎯 **How to Use Bushi Framework (Step by Step)**

### **Step 1: Start Your Project**
```bash
# In Cursor IDE, type:
/bushi-start
```
This gives you an overview of all available agents and helps you choose where to start.

### **Step 2: Begin with Business Architect (BA)**
```bash
# Type this command:
/ba
```
**What happens**: BA agent reads your project context and asks targeted questions to understand your idea.

**What you'll accomplish**:
- Define your MVP (Minimum Viable Product)
- Create a clear action plan
- Know exactly what to do next

**Example BA interaction**:
```
You: "I want to build a tool for freelancers"
BA: "Great! Let me help you turn that into a clear plan. I need to understand a few things first:
1. What problem are you solving for freelancers?
2. Who exactly are these freelancers?
3. What's your current situation?

Once I understand these basics, I'll help you define your MVP and create a clear action plan to get started."
```

### **Step 3: Follow the Project Roadmap**
BA will give you a project roadmap with:
1. **Epics**: Major project phases with clear goals
2. **Stories**: Specific deliverables and outcomes  
3. **Tasks**: Concrete action items to complete

### **Step 4: Move to Next Agent (When PS Suggests)**
BA will tell you which agent to talk to next and why. For example:
```
BA: "Perfect! You have a clear MVP and project roadmap. Now you need to understand your users better. 
I recommend switching to the Design Experience (DX) to create user personas and design the user experience.
Type /dx to continue."
```

### **Step 5: Continue the Journey**
Each agent will:
- Read what previous agents have done
- Build upon existing work
- Give you clear next steps
- Suggest when to move to the next agent

## 🔄 **Complete Workflow Example**

### **Project: Freelancer Time Tracking Tool**

**Phase 1: BA (Business Architect)**
- Define MVP: Simple time tracking for freelancers
- Project Roadmap: Research competitors, interview 3 freelancers, create basic wireframes
- Next: Move to DX for user research

**Phase 2: DX (Design Experience)**
- Create user personas
- Design user experience
- Create wireframes
- Next: Move to TA for technical planning

**Phase 3: TA (Technical Architect)**
- Choose tech stack
- Plan architecture
- Set up development workflow
- Next: Move to GS for launch strategy

**Phase 4: GS (Growth Strategist)**
- Plan launch strategy
- Define marketing channels
- Create growth experiments
- Next: Move to BO for business setup

**Phase 5: BO (Business Operations)**
- Set up business structure
- Handle legal requirements
- Plan financial structure

## 🎯 **Key Principles**

### **1. Always Start with BA**
- BA helps you clarify your idea and create a plan
- Don't skip this step - it prevents getting lost later

### **2. Follow Agent Recommendations**
- Each agent knows when their work is complete
- They'll suggest the next logical step
- Trust their guidance - they're designed to work together

### **3. Don't Get Stuck**
- If you're confused about what to do next, ask the current agent
- If you want to go back to a previous agent, just type their command
- The goal is progress, not perfection

### **4. Document Everything**
- Each agent creates documentation
- You can always go back and see what was decided
- Context is preserved across all agents

## 🚀 **Success Metrics**

**You're using Bushi Framework correctly when**:
- You know exactly what to do next
- You have clear milestones and deadlines
- You're making progress instead of getting stuck
- You're excited to move forward
- You have a clear path from idea to execution

## 🆘 **Getting Unstuck**

**If you're confused about what to do next**:
1. Ask the current agent: "What should I do next?"
2. Go back to BA: `/ba` - "I'm stuck, help me get back on track"
3. Check your project docs: Look in `.bushi/docs/` for guidance

**Remember**: Bushi Framework is designed to prevent you from getting lost. If you're lost, that means we need to improve the framework - not that you're doing something wrong.

---
*Document created: [Current Date]*
*Status: Active workflow*
*Last updated: [Current Date]*
