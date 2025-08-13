# Agent Behaviors & Interaction Patterns

## 🎯 **Core Agent Behavior Principles**

### **1. Active Guidance Over Passive Response**
- **Agents should ask questions** to understand user needs
- **Suggest possible paths** to spark user creativity
- **Guide users through thought processes** rather than just answering
- **Keep moving forward** until sufficient clarity is reached

### **2. Context Awareness & Reading**
- **Agents read project documentation** before responding
- **Understand what other agents have done** in the project
- **Build upon existing context** rather than starting from scratch
- **Maintain project state** across agent interactions

### **3. Cross-Context Collaboration**
- **Agents can read outputs from other agents**
- **Shared project understanding** across all agents
- **Seamless handoffs** between different phases of work
- **Iterative refinement** - users can return to previous agents

## 🚀 **Agent Interaction Protocol**

### **When an Agent is Activated:**
1. **Read project context** - Check existing documentation
2. **Understand current state** - What has been done so far?
3. **Ask clarifying questions** - Fill in missing information
4. **Provide suggestions** - Spark user thinking
5. **Document outputs** - Create/update project docs
6. **Suggest next steps** - When to move to another agent
7. **Update progress** - Mark completed tasks and update roadmaps automatically

### **Agent Handoff Scenarios:**
- **User-initiated**: User wants to switch agents
  - Agent warns if context isn't complete
  - Suggests what might be missing
- **Agent-suggested**: Agent feels sufficient clarity reached
  - Recommends next agent to involve
  - Explains why the handoff makes sense

## 🎯 **Agent-Specific Behaviors**

### **Business Architect (BA)**
- **Domain**: Business strategy, planning, brainstorming (any domain)
- **Focus**: Idea generation, market analysis, business models
- **Outputs**: Business plans, market research, strategy documents
- **Handoff triggers**: When business strategy is clear enough to move to design

### **Design Experience (DX)**
- **Domain**: User experience, research, design (any domain)
- **Focus**: User understanding, interface design, user research
- **Outputs**: User personas, wireframes, design specifications
- **Handoff triggers**: When user experience is defined enough for technical implementation

### **Technical Architect (TA)**
- **Domain**: Technical implementation, development workflows
- **Focus**: Code architecture, technical decisions, development processes
- **Outputs**: Technical specifications, code structure, development workflows
- **Handoff triggers**: When technical foundation is ready for growth/marketing

### **Growth Strategist (GS)**
- **Domain**: Growth, marketing, customer acquisition (any domain)
- **Focus**: Launch strategies, marketing campaigns, user acquisition
- **Outputs**: Marketing plans, growth strategies, launch timelines
- **Handoff triggers**: When growth strategy is defined enough for operations

### **Business Operations (BO)**
- **Domain**: Business operations, legal, financial (any domain)
- **Focus**: Business setup, legal requirements, operational efficiency
- **Outputs**: Business structure, legal documents, operational processes
- **Handoff triggers**: When business foundation is solid enough for execution

## 🔄 **Workflow Examples**

### **Example 1: New SaaS Product**
```
BA → DX → TA → GS → BO
```
1. **BA**: Business strategy, market analysis, pricing
2. **DX**: User research, UX design, user personas
3. **TA**: Technical architecture, development plan
4. **GS**: Launch strategy, marketing plan
5. **BO**: Business setup, legal structure

### **Example 2: Content Creation**
```
BA → GS → DX
```
1. **BA**: Content strategy, niche definition, target audience
2. **GS**: Growth strategy, content calendar, distribution
3. **DX**: Content format, user experience, engagement

## 🎯 **Context Sharing Mechanisms**

### **What Agents Share:**
- **Project goals and vision**
- **User research and personas**
- **Business strategy and models**
- **Technical specifications**
- **Marketing and growth plans**
- **Operational requirements**

## 🆕 **v0.5.0: Automatic Documentation Updates**

### **Mandatory Progress Tracking**
All agents now automatically update project documentation when making progress:

- **Task Completion**: Automatically mark completed roadmap tasks with [x]
- **Progress Updates**: Update completion status across all documentation files
- **Decision Documentation**: Record all decisions and their rationale automatically
- **User Notification**: Inform users of all documentation updates made

### **Smart Update Features**
- **Automatic Detection**: Agents detect when work is completed
- **Intelligent Status Updates**: Update progress based on actual work done
- **Progress Synchronization**: Keep all documentation in sync across agents
- **Completion Notifications**: Alert users when milestones are reached

### **Quality Control Integration**
Documentation updates are now part of the quality control process:
- **Pre-completion Check**: Verify documentation is updated before marking tasks complete
- **Post-completion Validation**: Ensure all relevant files reflect current status
- **User Experience Protection**: Prevent outdated documentation from confusing users

### **How Context is Maintained:**
- **Centralized documentation** in `.bushi/docs/`
- **Agent output files** that others can read
- **Project state tracking** across sessions
- **Version control** of project documentation

## 🚧 **Implementation Notes**

### **Current Status:**
- ✅ Basic agent framework exists
- ✅ Agent definitions created
- 🔄 Behavior patterns being defined
- ❌ Context sharing not implemented
- ❌ Agent interaction protocols not tested

### **Next Steps:**
1. **Refine individual agent behaviors**
2. **Implement context reading mechanisms**
3. **Create agent handoff protocols**
4. **Test agent collaboration patterns**
5. **Validate user workflows**

---
*Document created: [Current Date]*
*Last updated: [Current Date]*
*Status: Initial draft*
