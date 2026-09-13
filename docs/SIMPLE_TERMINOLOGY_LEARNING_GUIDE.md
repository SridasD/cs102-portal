# Simple Terminology Learning Guide: 7-Step Path & Framework

**Programme:** M.Sc. Data Science and Product Development (MSDSP)  
**Document Type:** Practical Plain-English Guide & LLM Reference  
**Purpose:** Replaces academic jargon (*Bloom's Revised Taxonomy* and *Kolb's Experiential Learning Cycle*) with clear, professional, action-oriented terms for students, mentors, and LLMs.

---

## 1. Jargon-Free Translation Matrix

| Academic Jargon | Simple Plain-English Term | What It Actually Means to the Learner |
|---|---|---|
| **Kolb’s Experiential Cycle** | **How You Learn** *(Learning Approach)* | The natural four-stage rhythm of real-world problem solving. |
| • *Concrete Experience* | **Do the Work** | Writing code, running commands, and getting hands-on with real tools. |
| • *Reflective Observation* | **Review Your Experience** | Looking back at your process, noting what worked, and listening to feedback. |
| • *Abstract Conceptualisation* | **Connect with Concepts** | Linking your hands-on code back to design patterns, standards, and theory. |
| • *Active Experimentation* | **Apply and Improve** | Testing fixes, trying new approaches, and iterating to make it better. |
| **Bloom’s Taxonomy** | **Thinking Skill** | The type of brainpower required for the task. |
| • *Remember* | **Recall Fundamentals** | Remembering standard terms, syntax, rules, and parameters. |
| • *Understand* | **Understand Core Ideas** | Grasping how things work together and explaining the "why". |
| • *Apply* | **Apply Principles** | Using known tools and patterns to solve an isolated problem. |
| • *Analyze* | **Analyse the Problem** | Breaking down a complex problem into pieces to find root causes and risks. |
| • *Evaluate* | **Review and Justify** | Defending your trade-offs, critiquing code, and deciding which choice is best. |
| • *Create* | **Design and Build** | Inventing, architecting, and assembling an end-to-end working solution. |
| **Other Academic Terms** | | |
| • *Pedagogical Activity Brief* | **What You Need to Do** | The real-world project task assigned by your Course Head. |
| • *Mandatory Deliverables* | **What You Need to Submit** | Exact links, files, and outputs required. |
| • *Evaluation Rubric* | **Evaluation Guide** | Transparent checklist showing how your work is graded. |
| • *Learning Evidence / Artifact* | **Proof of Work** | Git pull requests, test reports, screen recordings, and documentation. |
| • *Remediation / Recovery* | **Improvement Plan** | Actionable steps to fix issues and resubmit. |
| • *Revision Required* | **Changes Required** | Mentor feedback explaining what needs fixing before approval. |

---

## 2. The 7-Step Learning Path in Plain English

Every project activity is broken down into **7 simple, sequential steps**. Each step uses a clear **Thinking Skill** and **Learning Approach**:

```
[ 1. Foundations ] ──► [ 2. Quick Check ] ──► [ 3. Practice ] ──► [ 4. Milestone ]
   (Read & Study)        (5-Min Quiz)          (Sandbox Code)       (Real Project)
                                                                           │
   ┌───────────────────────────────────────────────────────────────────────┘
   ▼
[ 5. Critique ] ────► [ 6. Defense ] ───► [ 7. Polish ]
  (Peer Review)         (Explain Live)       (Fix & Complete)
```

### Step 1 · Foundations *(Learn the Basics)*
- **What You Do:** Read technical specifications, watch a concept video, or review architecture diagrams.
- **Thinking Skill:** *Understand Core Ideas*
- **Learning Approach:** *Connect with Concepts*
- **Proof of Work:** Reading notes or a list of questions/clarifications.
- **Goal:** Understand the background before touching any code.

### Step 2 · Quick Check *(Check Your Understanding)*
- **What You Do:** Complete a short 5-to-10 question scenario quiz.
- **Thinking Skill:** *Recall Fundamentals & Understand Core Ideas*
- **Learning Approach:** *Review Your Experience*
- **Proof of Work:** Quiz score report (aim for 80%+).
- **Goal:** Catch misunderstandings early before you start building.

### Step 3 · Practice *(Solo Practice in a Sandbox)*
- **What You Do:** Build an isolated piece in a safe playground (e.g., write one route or test one query).
- **Thinking Skill:** *Apply Principles*
- **Learning Approach:** *Do the Work*
- **Proof of Work:** A single tested file, notebook, or code snippet.
- **Goal:** Prove you can apply the concept alone without breaking the team project.

### Step 4 · Milestone *(Build It in the Real Project)*
- **What You Do:** Integrate your tested code directly into the team codebase or client product slice.
- **Thinking Skill:** *Design and Build*
- **Learning Approach:** *Do the Work*
- **Proof of Work:** A version-controlled Git branch or pull request with passing automated tests.
- **Goal:** Deliver tangible, production-ready value to the team project.

### Step 5 · Critique *(Get Feedback from Peers & Mentors)*
- **What You Do:** Submit your work for code review, design critique, and automated scans.
- **Thinking Skill:** *Review and Justify*
- **Learning Approach:** *Review Your Experience*
- **Proof of Work:** Pull request comments, code review notes, and accessibility/security audit results.
- **Goal:** Uncover defects, performance bottlenecks, and edge cases with help from others.

### Step 6 · Defense *(Demonstrate & Defend Your Choices)*
- **What You Do:** Show your working system live and answer questions on *why* you built it that way.
- **Thinking Skill:** *Review and Justify*
- **Learning Approach:** *Review Your Experience*
- **Proof of Work:** Live demonstration recording, presentation notes, and mentor sign-off sheet.
- **Goal:** Prove that you understand your system and can communicate technical trade-offs.

### Step 7 · Polish *(Fix Issues & Finalize)*
- **What You Do:** Address reviewer feedback, fix bugs, clean up documentation, and merge your code.
- **Thinking Skill:** *Design and Build*
- **Learning Approach:** *Apply and Improve*
- **Proof of Work:** Clean git commit, updated changelog, and accepted mentor sign-off.
- **Goal:** Complete the task to professional, industry-grade quality.

---

## 3. Activity & Sub-Activity Fields (Plain-English Reference)

When setting up or reading tasks in the portal, here is what each field means:

### Main Activity Fields (What the Course Head Defines)
| Field | Plain-English Label | Simple Explanation |
|---|---|---|
| `assignmentCode` | **Activity Code** | Short code like `ACT-01`. |
| `title` | **Project Title** | What the team is building (e.g., *"API Contract & System Blueprint"*). |
| `problemStatement` | **What You Need to Do** | The real-world problem and goals described in plain language. |
| `thinkingSkill` | **Thinking Skill** | Primary skill: *Analyse the Problem*, *Review and Justify*, or *Design and Build*. |
| `learningApproach` | **Learning Approach** | Primary rhythm: *Do the Work*, *Review*, *Connect with Concepts*, or *Apply and Improve*. |
| `constraints` | **Rules & Boundaries** | Technology rules (e.g., *"Must use TypeScript and PostgreSQL"*). |
| `mandatoryDeliverables`| **What You Need to Submit** | Bulleted list of exact files, links, or reports required. |
| `dueDate` | **Final Deadline** | The date by which all finished work must be submitted. |
| `checkpointDate` | **Mid-Way Check Date** | Target date to show interim progress to your mentor. |

### Sub-Activity Fields (What the Mentor Breaks Down)
| Field | Plain-English Label | Simple Explanation |
|---|---|---|
| `stepNumber` | **Step Number (1–7)** | Which step of the 7-step path this task belongs to. |
| `category` | **Step Type** | `Lecture`, `Quiz`, `Assignment`, `Project`, `Review`, `Assessment`, or `Improve`. |
| `title` | **Task Title** | Short, action-oriented summary (e.g., *"Write OpenAPI Specification"*). |
| `description` | **Task Instructions** | Clear, step-by-step instructions telling the student what to do. |
| `deliverable` | **Proof of Work** | The tangible file or link the student must hand in. |
| `dependency` | **Prerequisites** | Which earlier tasks must be completed before starting this one. |
| `resources` | **Helpful Resources** | Links to docs, templates, videos, and cheat sheets. |
| `evaluationCriteria` | **Evaluation Guide** | 3 clear benchmarks: **Needs Changes**, **Meets Standard**, **Exceeds Standard**. |

---

## 4. Prompting an LLM Using Simple Terminology

When asking an AI / LLM to create lessons, activities, or reviews, provide it with these simple guidelines:

### System Prompt for LLMs

```markdown
You are an expert Engineering Mentor. Decompose the requested technical topic into exactly 7 sequential, practical steps using the Plain-English 7-Step Learning Path:

1. Step 1 (Foundations): What concepts, standards, or readings should the student study first?
   - Thinking Skill: Understand Core Ideas
   - Learning Approach: Connect with Concepts
   - Proof of Work: Study summary or clarification notes.

2. Step 2 (Quick Check): What 5 diagnostic questions test prerequisite understanding?
   - Thinking Skill: Recall Fundamentals
   - Learning Approach: Review Your Experience
   - Proof of Work: 80%+ quiz score.

3. Step 3 (Practice): What isolated sandbox exercise should they build first?
   - Thinking Skill: Apply Principles
   - Learning Approach: Do the Work
   - Proof of Work: Single tested function, script, or notebook.

4. Step 4 (Milestone): How do they build this into the main project or codebase?
   - Thinking Skill: Design and Build
   - Learning Approach: Do the Work
   - Proof of Work: Pull request with passing tests.

5. Step 5 (Critique): What specific checklist should peers and mentors use to review it?
   - Thinking Skill: Review and Justify
   - Learning Approach: Review Your Experience
   - Proof of Work: Code review comments and audit report.

6. Step 6 (Defense): What should the student demonstrate live to defend their choices?
   - Thinking Skill: Review and Justify
   - Learning Approach: Review Your Experience
   - Proof of Work: Live demo recording and Q&A sign-off.

7. Step 7 (Polish): What must they fix or refactor to finalize the work?
   - Thinking Skill: Design and Build
   - Learning Approach: Apply and Improve
   - Proof of Work: Clean merged commit and updated changelog.

DO NOT use academic jargon like "Bloom's Taxonomy", "Pedagogy", or "Kolb's Experiential Cycle". Use only:
- Thinking Skills: "Recall Fundamentals", "Understand Core Ideas", "Apply Principles", "Analyse the Problem", "Review and Justify", "Design and Build"
- Learning Approaches: "Do the Work", "Review Your Experience", "Connect with Concepts", "Apply and Improve"
- Deliverables: "Proof of Work"
- Rubric: "Evaluation Guide"
```

---

## 5. Summary Rule

> **Never judge mastery by reading or watching alone.**  
> Real mastery is proven when a student can **Do the Work** (Steps 3 & 4), **Review and Justify** their decisions (Steps 5 & 6), and **Apply and Improve** based on feedback (Step 7).
