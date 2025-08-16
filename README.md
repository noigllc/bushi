# 🚀 Bushi Framework
## Build Shit Fast
> A comprehensive framework for solo developers/entrepreneurs to build micro-SaaS and indie hacking businesses.



## 🎯 **Philosophy**

**Build Shit Fast** - No overthinking, no role-switching overhead, just focused expertise when you need it.


## What It Is

Bushi Framework is a set of "mental roles" that can be activated when needed, eliminating the overhead of role-switching for solo founders. Think of it as having a team of experts in your head that you can activate with simple commands.

**Currently only works with Cursor IDE** - The framework uses Cursor rules (`.mdc` files) to detect and activate the different agent roles.

**Node.js:** Requires Node.js version 18.0.0 or higher. For optimal ES Module compatibility, Node.js 20.0.0+ is recommended.


## 🚀 Quick Start

**Get Bushi Framework running in your project:**

1. **Install & Initialize:**
   ```bash
   npx bushi@latest init
   ```

2. **Open your project in Cursor IDE**

3. **Start using the agents with commands like `/ba`, `/ta`, `/dx`, etc.**

Bushi automatically handles updates when you run the init command again.


## 📁 How It's Structured

When you run `npx bushi@latest init`, Bushi creates this folder structure in your project:

```
your-project/
├── .cursor/
│   └── rules/
│       ├── bushi.mdc          # Main framework rules
│       └── bushi-limits.mdc   # Framework constraints
└── .bushi/
    ├── agents/                # Agent-specific files
    │   ├── business-architect.mdc
    │   ├── design-experience.mdc
    │   ├── technical-architect.mdc
    │   ├── growth-strategist.mdc
    │   └── business-operations.mdc
    ├── bushi-start.mdc        # Framework onboarding
    ├── roadmap-router.mdc     # Smart task routing
    └── docs/                  # Project documentation folder
        ├── roadmap.md         # Your project roadmap (created by you)
        └── prd.md            # Product requirements document
```

The `.cursor/rules/` files tell Cursor IDE how to recognize and activate Bushi commands. The `.bushi/` folder contains the framework files, while the `docs/` subfolder is where you'll create your project-specific documentation like roadmaps and requirements.


## ✨ **What Makes Bushi Special**

- 🚀 **Instant Activation** - Commands like `/ba` activate specialized expertise
- 🎯 **Deep Focus** - Each agent has deep knowledge in their domain  
- 🧠 **Smart Context** - Agents understand your project and goals
- ⚡ **No Overhead** - Eliminates role-switching mental friction
- 📋 **Automatic Progress Tracking** - Documentation stays synchronized automatically
- 🔄 **Smart Updates** - Agents automatically update roadmaps and track completion


## How It Works

| Command | Agent | Purpose |
|---------|-------|---------|
| `/bushi-start` | 🚀 **Framework Onboarding** | Interactive agent selection and guidance |
| `/ba` | 🎯 **Business Architect** | Business strategy, market analysis, idea generation |
| `/dx` | 🎨 **Design Experience** | UX/UI, user research, wireframing |
| `/ta` | 🏗️ **Technical Architect** | Technical architecture, development, project management |
| `/gs` | 📈 **Growth Strategist** | Marketing, customer acquisition, launch strategy |
| `/bo` | 💼 **Business Operations** | Financial planning, legal basics, operations |
| `/roadmap` | 🗺️ **Smart Routing** | Analyzes roadmap and suggests best agent for next task |


## Agent Overview

### 🚀 Framework Onboarding
Your friendly guide to Bushi Framework. Run `/bushi-start` to get an interactive overview of all available agents and choose the right one for your current needs. Perfect for new users or when you're unsure which agent to use.


### 🎯 Business Architect
Your business strategy expert. Helps you brainstorm new ideas, validate existing concepts, analyze markets, and define business models. Perfect for the early stages of product development.


### 🎨 Design Experience  
Your UX/UI and customer research specialist. Assists with user interviews, wireframing, prototyping, and creating intuitive user experiences. Essential for understanding your users and designing solutions they'll love.


### 🏗️ Technical Architect
Your technical architect and development partner. Helps with tech stack selection, project planning, architecture decisions, and development timelines. Your go-to for turning ideas into working code.


### 📈 Growth Strategist
Your marketing and customer acquisition expert. Guides you through launch strategies, marketing campaigns, growth experiments, and user onboarding. Critical for getting your product in front of the right people.


### 💼 Business Operations
Your financial and operational advisor. Assists with business setup, legal requirements, tool selection, and operational efficiency. Ensures your business foundation is solid and compliant.


### 🗺️ Smart Routing
Your intelligent task router. Run `/roadmap` to analyze your project roadmap and let the framework automatically suggest which agent is best suited for your next epic, story, or task. Perfect for staying focused and efficient.


## 🛠️ **Available Commands**

- `bushi cleanup` - Remove Bushi Framework completely
- `bushi info` - Show framework information and version
