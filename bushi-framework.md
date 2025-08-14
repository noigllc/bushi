# Bushi Framework - Build Shit Fast

## Overview
A comprehensive framework for solo developers/entrepreneurs to build micro-SaaS and indie hacking businesses. This framework is designed as a set of "mental roles" that can be activated when needed, eliminating the overhead of role-switching for solo founders.

## Framework Structure

### 1. Product Strategist
**Combines:** Business Analyst + CEO + Market Analysis + Idea Generation

**Core Responsibilities:**
- **Brainstorm Mode:** Idea generation, opportunity discovery, concept development
- **Validate Mode:** Idea validation, market research, competitive analysis
- Business model definition and pricing strategy
- MVP definition and feature prioritization
- Strategic decision making and prioritization

**Key Questions This Role Answers:**
- **Brainstorm Mode:** What problems are people struggling with? Where are the market gaps?
- **Validate Mode:** Is this idea viable? Who is the target customer?
- What's the competitive landscape?
- What should be in the MVP?
- How should we price this?

**Mode Switching:** Users can switch from brainstorm to validate mode anytime by saying "validate this idea" - no commands needed.

### 2. Product Designer
**Combines:** UX/UI Master + Customer Research

**Core Responsibilities:**
- User research and customer interviews
- Wireframing and prototyping
- Visual design and user experience optimization
- Customer feedback integration
- Design system and brand consistency

**Key Questions This Role Answers:**
- How should users interact with this feature?
- What's the optimal user flow?
- How do we make this intuitive?
- What does the user interface look like?

### 3. Product Builder
**Combines:** Developer + QA + DevOps + Project Management/Agile

**Core Responsibilities:**
- Technical architecture and tech stack decisions
- Development, testing, and quality assurance
- Deployment, monitoring, and performance optimization
- Project management, sprint planning, and timeline management
- Security, maintenance, and technical debt management

**Key Questions This Role Answers:**
- How should we architect this?
- What's the development timeline?
- How do we deploy and monitor?
- What's the best tech stack for this?

### 4. Growth Hacker
**Combines:** Marketing + Sales + Customer Success

**Core Responsibilities:**
- Launch strategy and go-to-market planning
- Customer acquisition and marketing campaigns
- Content creation and social media strategy
- Partnership development and growth experiments
- User onboarding, retention, and customer success

**Key Questions This Role Answers:**
- How do we launch this product?
- Where do we find our first customers?
- How do we retain and grow users?
- What marketing channels should we focus on?

### 5. Business Operations
**Combines:** Financial + Legal + Operations

**Core Responsibilities:**
- Financial planning, budgeting, and revenue tracking
- Legal basics (business registration, terms, privacy policies)
- Tool and platform selection
- Operational efficiency and time management
- Outsourcing decisions and vendor management

**Key Questions This Role Answers:**
- How do we structure the business financially?
- What legal protection do we need?
- Which tools and platforms should we use?
- How do we optimize our operations?

## Framework Architecture

### How Cursor Rules Actually Work:
Based on Cursor documentation, rules are stored in `.cursor/rules/` directory and use **MDC format** (`.mdc` files) with metadata.

**Rule Types:**
- **Always** - Always included in model context
- **Auto Attached** - Included when files matching glob patterns are referenced
- **Agent Requested** - AI decides whether to include based on description
- **Manual** - Only included when explicitly mentioned using `@ruleName`

### File Structure for Projects:
1. **`.cursor/rules/`** - Project rules (version-controlled, scoped to codebase)
2. **`.cursorrules`** - Legacy format (deprecated, but still supported)

### Command System Implementation:
The `/ps` commands would work by:
1. **Manual Rules** - You reference them with `@bushi-start` 
2. **Always Rules** - Automatically included in every conversation
3. **Custom Commands** - Would need to be implemented as Cursor extensions or custom rules

### Recommended Implementation Approach:
**Chosen Architecture:**
- **`.cursor/rules/bushi.mdc`** - Always rule that intercepts commands and routes to role logic
- **`.bushi/` folder** - Hidden folder containing role-specific logic files
- **Command system** - `/ps`, `/pd`, etc. trigger role activation

**Benefits:**
- Clean separation between Cursor rules and framework logic
- Easy to maintain and update framework independently
- Professional appearance with hidden framework folder
- Scalable architecture for adding new roles

### NPX Package Approach:
**For Distribution & Reusability:**
- Create `npx bushi init` command
- Generates `.cursor/rules/` directory with all framework rules
- Allows other creators to easily install the framework
- Can include project templates and examples
- Updates can be distributed through npm

### ⚠️ NPX Command Requirements:
**Critical:** The NPX command must generate files with correct metadata positioning
**Problem:** If metadata is malformed, users will get broken rules that don't work
**Solution:** 
1. Use template files with pre-written metadata instead of dynamic generation
2. Test file generation process thoroughly before distribution
3. Include validation step to ensure metadata is correctly positioned
4. Consider using a different file creation method that preserves metadata structure

**Package Structure:**
```
bushi/
├── rules/
│   ├── bushi-start.mdc
│   ├── product-designer.mdc
│   ├── product-builder.mdc
│   ├── growth-hacker.mdc
│   └── business-operations.mdc
├── templates/
│   └── project-structure/
└── package.json
```

### Pattern Discovery & Project Tracking:
**Project Tracking Files:**
- Each project gets a `project-tracking.md` file
- Records: tech stack, business model, challenges, outcomes
- Can be exported/aggregated for pattern analysis

**Pattern Discovery Process:**
1. **Individual Project Tracking** - Document each project's journey
2. **Aggregation** - Collect data from multiple projects
3. **Analysis** - Identify common patterns, successful strategies
4. **Framework Evolution** - Update rules based on learnings

**Example Tracking Fields:**
- Project type (B2B/B2C, industry, geography)
- Tech stack and architecture decisions
- Business model and monetization approach
- Key challenges and solutions
- Launch strategy and results
- Lessons learned and recommendations

### How Commands Work:
The framework rules include patterns that recognize commands and activate the appropriate role mindset:

### Command Recognition Patterns:
```
When user types "/ps", activate Product Strategist thinking:
- Focus on business strategy, market analysis, MVP definition
- Ask strategic questions about viability, pricing, competition
- Provide business-focused guidance and frameworks
```

### Help Command System:
The framework includes two help commands to assist users:

**`/commands` - Quick Reference:**
- Lists all available commands with brief descriptions
- Provides quick access to command overview
- Helps users remember which command to use

**`/help` - Framework Overview:**
- Comprehensive explanation of the Bushi Framework
- Philosophy and benefits of the role-based approach
- Usage examples and best practices
- Framework structure and how to get the most out of it

### Command Documentation Standards:
Each command should have:
- Clear description of what it does
- Examples of when to use it
- Expected outcomes and behaviors
- Related commands for similar tasks

### 🚨 **Critical Workflow Enforcement - bushi-start Command**
**The `/bushi-start` command now enforces automatic routing to Business Architect agent:**
- **When users describe ideas**: Automatically activates `/ba` agent for business validation
- **When users ask about agents**: Provides agent overview and selection guidance
- **NEVER bypasses business validation** for new ideas/projects
- **ALWAYS starts with PRD and roadmap creation** for new concepts

### ⚠️ Critical Implementation Note:
**The `bushi.mdc` file MUST have `alwaysApply: true` in the metadata for the command system to work.**
- This was manually fixed by the user after initial creation
- The file creation process needs to ensure this metadata is properly set
- Without `alwaysApply: true`, the rule won't be active and commands won't work

### 🔍 Metadata Issue Analysis:
**Problem Identified:** When using `edit_file` tool, metadata is sometimes added at the end of files instead of the beginning
**Root Cause:** The tool may be interpreting the file structure incorrectly or adding metadata in the wrong location
**Impact:** This could cause NPX command to generate broken files that need manual fixing
**Solution:** Need to verify file creation process and ensure metadata is properly positioned

### How to Use:
1. **Activate the appropriate role** using commands like `/ps`
2. **Use role-specific prompts** to get into the right mindset
3. **Combine roles** when needed (e.g., Product Strategist + Product Builder for MVP planning)
4. **Iterate and refine** each role based on experience and learnings

### Example Prompts:
- **Product Strategist**: "I have an idea for [X]. Help me validate this by analyzing the market, identifying competitors, and suggesting a business model."
- **Product Designer**: "I need to design the user flow for [feature]. Help me create wireframes and think through the user experience."
- **Product Builder**: "I'm planning to build [feature]. Help me break this down into sprints, choose the tech stack, and plan the architecture."
- **Growth Hacker**: "I'm ready to launch [product]. Help me create a go-to-market strategy and identify the best marketing channels."
- **Business Operations**: "I need to set up the business side of [product]. Help me with financial planning, legal basics, and tool selection."

## Framework Principles & Anti-Assumption Rules

### Core Principles:

1. **Always Seek Understanding First**
   - Ask clarifying questions before making assumptions
   - Confirm user intent before proceeding
   - Explain what you're doing and why
   - Wait for approval before implementing major changes

2. **Documentation Over Assumption**
   - Document what users actually ask for
   - Provide explanations before implementations
   - Create clear command documentation
   - Build understanding incrementally

3. **User Control and Transparency**
   - Users decide what gets built
   - Clear communication about changes
   - No hidden or assumed functionality
   - Framework serves user needs, not developer preferences

### 🚨 CRITICAL WORKFLOW RULE (MANDATORY DOCUMENTATION VALIDATION)

**Before ANY technical discussion or planning, agents MUST:**
1. **Automatically check** existing project documentation for project context
2. **Review files**: README.md, POSSIBLE_FEATURES.md, CHANGELOG.md, and other project docs
3. **If context clear**: "I've reviewed your project documentation. Let me understand your current needs..."
4. **If context unclear**: "I need to understand your project better. Let me ask a few questions..."
5. **NEVER proceed** with technical work until project context is established

**Documentation Review Process:**
- **Agent scans** existing project files for context
- **Agent identifies** what's already documented and what's missing
- **Agent asks targeted questions** to fill any knowledge gaps
- **Agent establishes** clear understanding before technical planning
- **User review**: Agent confirms understanding before proceeding

### Anti-Assumption Framework Rules:

**Before Implementing Any Feature:**
1. **Ask:** "Is this what you actually want me to build?"
2. **Explain:** "Here's what I'm planning to do and why"
3. **Confirm:** "Should I proceed with this approach?"
4. **Document:** "This feature was requested by the user for [specific reason]"

**When Adding New Commands:**
1. **Verify:** "You want me to add [command] for [specific purpose]?"
2. **Clarify:** "What should this command do exactly?"
3. **Test:** "Let me show you what this would look like first"
4. **Implement:** Only after explicit approval

**Framework Development Process:**
1. **User Request** → Document the exact request
2. **Understanding** → Ask clarifying questions
3. **Proposal** → Explain what you plan to build
4. **Approval** → Wait for user confirmation
5. **Implementation** → Build exactly what was approved
6. **Documentation** → Record what was built and why

## Development Status

### ✅ Completed:
- Framework structure defined
- Role consolidation strategy
- Core responsibilities outlined
- Cursor rule created (`.cursor/rules/bushi.mdc`) with **proper metadata**
- Role logic files created (`.bushi/` folder with all 5 roles)
- Basic command system implemented
- **Command system tested and working** ✅
- **Framework successfully activated in Cursor** ✅
- **Framework rebuilt with enhanced role logic** ✅
- **Help commands added** (`/commands`, `/help`) ✅
- **Framework principles and anti-assumption rules added** ✅
- **Critical workflow rule implemented** ✅
- **Documentation validation system created** ✅
- **Framework works with existing documentation** ✅
- **Legacy product-strategist role removed** ✅

### 🔄 In Progress:
- **Role refinement planning** - Ready to deep-dive into each role's capabilities
- **Command documentation enhancement** - Expanding help system and examples

### 📋 To Do:
- Deep-dive into each role's capabilities and prompts
- Create decision trees and workflows for each role
- Test framework with real project ideas
- Document patterns and learnings
- Refine and optimize based on experience
- Enhance command help system with examples

## Notes and Learnings

*This section will capture insights, patterns, and refinements as we develop and test the framework.*

---

**Last Updated:** December 2024
**Status:** Framework structure defined with mandatory documentation validation, ready for detailed development
