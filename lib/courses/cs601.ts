import type { Activity, Course, CourseData, CoursePart, Resource } from "../types";

export const CS601_COURSE: Course = {
  university: "Kerala University of Digital Sciences, Innovation and Technology",
  department: "School of Digital Sciences",
  code: "CS601",
  title: "Advanced Frontend Frameworks",
  semester: "Semester 1",
  ltp: "1–0–2",
  credits: 3,
  totalHours: 120,
  type: "elective",
};

export const CS601_PARTS: CoursePart[] = [
  {
    id: "I",
    label: "Unit 1 — Rendering Strategies",
    statLabel: "Rendering hrs",
    color: "indigo",
  },
  {
    id: "II",
    label: "Unit 2 — State & Data Flow",
    statLabel: "State & flow hrs",
    color: "sky",
  },
  {
    id: "III",
    label: "Unit 3 — Design Systems",
    statLabel: "Design system hrs",
    color: "violet",
  },
  {
    id: "IV",
    label: "Unit 4 — Frontend Performance",
    statLabel: "Performance hrs",
    color: "emerald",
  },
];

export const CS601_RESOURCES: Record<string, Resource> = {
  R01: { label: "React Documentation", url: "https://react.dev/" },
  R02: { label: "Next.js Documentation", url: "https://nextjs.org/docs" },
  R03: { label: "Vue Documentation", url: "https://vuejs.org/guide/introduction.html" },
  R04: { label: "Nuxt Documentation", url: "https://nuxt.com/docs" },
  R05: { label: "web.dev — Learn Performance", url: "https://web.dev/learn/performance/" },
  R06: { label: "MDN — Fetch API", url: "https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API" },
  R07: { label: "Chrome Lighthouse Documentation", url: "https://developer.chrome.com/docs/lighthouse/" },
  R08: { label: "W3C — Web Content Accessibility Guidelines", url: "https://www.w3.org/TR/WCAG21/" },
  R09: { label: "TanStack Query Documentation", url: "https://tanstack.com/query/latest/docs/framework/react/overview" },
  R10: { label: "XState Documentation", url: "https://stately.ai/docs/xstate" },
  R11: { label: "OpenAPI Specification", url: "https://spec.openapis.org/oas/latest.html" },
  R12: { label: "WAI-ARIA Authoring Practices Guide", url: "https://www.w3.org/WAI/ARIA/apg/" },
  R13: { label: "Storybook Documentation", url: "https://storybook.js.org/docs" },
  R14: { label: "Playwright Documentation", url: "https://playwright.dev/docs/intro" },
  R15: { label: "Approved edge-runtime and deployment-platform documentation (Course Head)", url: null },
};

export const CS601_ACTIVITIES: Activity[] = [
  {
    id: "CS601-ACT-01",
    part: "I",
    icon: "frontend",
    hours: 30,
    title: "Build a Zero-Lag News Portal",
    desc: "A responsive content portal that balances CSR, SSR, SSG, and ISR with zero layout shift.",
    outcome:
      "Build a responsive content portal that selects appropriate server, static and client rendering strategies, updates content without blocking the user and controls layout instability.",
    subs: [
      {
        id: "CS601-SUB-1.1",
        title: "Learn Modern Rendering Strategies",
        hours: 3,
        tag: "Understand Core Ideas",
        evidence: "Comparison notes covering CSR, SSR, SSG, ISR, hydration and streaming",
        standard:
          "Correctly explains when each strategy is useful and identifies SEO, freshness, latency and infrastructure trade-offs",
        resources: ["R01", "R02", "R03", "R04"],
      },
      {
        id: "CS601-SUB-1.2",
        title: "Analyse Rendering and Loading Scenarios",
        hours: 2,
        tag: "Analyse the Problem",
        evidence: "Scenario responses and corrected rendering decisions",
        standard:
          "Chooses a suitable rendering model for public, personalized, frequently updated and authenticated pages and justifies the choice",
        resources: ["R02", "R04", "R05"],
      },
      {
        id: "CS601-SUB-1.3",
        title: "Prototype a Server-Rendered News Page",
        hours: 4,
        tag: "Apply Principles",
        evidence: "Working page, server data-loading code and browser network evidence",
        standard:
          "Initial content is rendered correctly, errors are handled and the page remains usable without unnecessary client work",
        resources: ["R02", "R04"],
      },
      {
        id: "CS601-SUB-1.4",
        title: "Build the Zero-Lag News Portal",
        hours: 9,
        tag: "Design and Build",
        evidence: "Versioned application, responsive screens, content-refresh implementation and automated tests",
        standard:
          "Portal loads meaningful content quickly, updates without blocking interaction and handles loading, empty, stale and failure states",
        resources: ["R01", "R02", "R03", "R04", "R06"],
      },
      {
        id: "CS601-SUB-1.5",
        title: "Review Accessibility and Layout Stability",
        hours: 4,
        tag: "Review and Justify",
        evidence: "Accessibility report, Core Web Vitals evidence, review comments and issue log",
        standard:
          "Keyboard access, landmarks, focus, contrast and cumulative layout shift meet the approved quality thresholds",
        resources: ["R05", "R07", "R08"],
      },
      {
        id: "CS601-SUB-1.6",
        title: "Demonstrate and Defend Rendering Decisions",
        hours: 4,
        tag: "Review and Justify",
        evidence: "Live demonstration, performance trace and technical defence notes",
        standard:
          "Student demonstrates rendering, refresh and failure behaviour and defends caching, hydration and rendering choices",
        resources: ["R05", "R07"],
      },
      {
        id: "CS601-SUB-1.7",
        title: "Improve Loading and Visual Stability",
        hours: 4,
        tag: "Design and Build",
        evidence: "Reviewed corrections, before-and-after metrics and updated decision record",
        standard:
          "Findings are closed and improvements to loading, interaction or layout stability are measurable and regression-tested",
        resources: ["R05", "R07", "R08"],
      },
    ],
  },
  {
    id: "CS601-ACT-02",
    part: "II",
    icon: "workflow",
    hours: 30,
    title: "Build a FinTech Onboarding Engine",
    desc: "A mission-critical financial onboarding workflow modeling strict state transitions and server sync.",
    outcome:
      "Build a secure multi-step onboarding workflow that synchronizes server data, models complex transitions explicitly and avoids unnecessary rendering.",
    subs: [
      {
        id: "CS601-SUB-2.1",
        title: "Learn Client, Server and Workflow State",
        hours: 3,
        tag: "Understand Core Ideas",
        evidence: "State-classification notes and onboarding state diagram",
        standard:
          "Correctly distinguishes local UI, form, URL, server and workflow state and explains ownership and lifecycle",
        resources: ["R01", "R03", "R09", "R10"],
      },
      {
        id: "CS601-SUB-2.2",
        title: "Analyse Onboarding Failure Scenarios",
        hours: 2,
        tag: "Analyse the Problem",
        evidence:
          "Scenario responses covering stale data, duplicate submission, interrupted progress and invalid transitions",
        standard: "Identifies root causes and proposes safe synchronization, validation and recovery controls",
        resources: ["R09", "R10"],
      },
      {
        id: "CS601-SUB-2.3",
        title: "Prototype a State-Managed Form Step",
        hours: 4,
        tag: "Apply Principles",
        evidence: "Tested form step, validation schema and isolated state model",
        standard: "Input, validation, navigation and submission states behave predictably and expose useful feedback",
        resources: ["R01", "R03", "R10"],
      },
      {
        id: "CS601-SUB-2.4",
        title: "Build the FinTech Onboarding Engine",
        hours: 9,
        tag: "Design and Build",
        evidence: "Multi-step application, state machine, server-state integration, protected data flow and tests",
        standard:
          "Workflow prevents invalid transitions, persists approved progress and remains consistent with server state",
        resources: ["R09", "R10", "R11"],
      },
      {
        id: "CS601-SUB-2.5",
        title: "Review Security, Accessibility and State Correctness",
        hours: 4,
        tag: "Review and Justify",
        evidence: "Threat checklist, accessibility report, state-transition tests and review log",
        standard:
          "Sensitive data is minimized; transitions, focus, validation and resumption behaviour are controlled and testable",
        resources: ["R08", "R10", "R12"],
      },
      {
        id: "CS601-SUB-2.6",
        title: "Demonstrate Recovery and Defend State Choices",
        hours: 4,
        tag: "Review and Justify",
        evidence: "Demonstration recording, interrupted-session recovery and defence notes",
        standard:
          "Student demonstrates successful, invalid, interrupted and resumed journeys and justifies state ownership decisions",
        resources: ["R09", "R10"],
      },
      {
        id: "CS601-SUB-2.7",
        title: "Improve Rendering and Workflow Reliability",
        hours: 4,
        tag: "Design and Build",
        evidence: "Reviewed patch, render-profile comparison, regression tests and closure log",
        standard:
          "Unnecessary renders and state defects are reduced without weakening correctness, accessibility or maintainability",
        resources: ["R07", "R09", "R10"],
      },
    ],
  },
  {
    id: "CS601-ACT-03",
    part: "III",
    icon: "design",
    hours: 30,
    title: "Create a Headless UI Component Library",
    desc: "A reusable, accessible component architecture separating behavior and accessibility from visual presentation.",
    outcome:
      "Build a reusable, accessible and themeable component library that separates behaviour and accessibility from visual presentation.",
    subs: [
      {
        id: "CS601-SUB-3.1",
        title: "Learn Design-System and Headless UI Foundations",
        hours: 3,
        tag: "Understand Core Ideas",
        evidence: "Component anatomy notes, token map and accessibility pattern summary",
        standard:
          "Correctly explains primitives, composition, controlled state, design tokens, variants and accessibility responsibilities",
        resources: ["R08", "R12", "R13"],
      },
      {
        id: "CS601-SUB-3.2",
        title: "Analyse Component API Scenarios",
        hours: 2,
        tag: "Analyse the Problem",
        evidence: "API comparison and corrected component-boundary decisions",
        standard:
          "Identifies reusable behaviour, avoids excessive configuration and chooses predictable component contracts",
        resources: ["R01", "R03", "R13"],
      },
      {
        id: "CS601-SUB-3.3",
        title: "Prototype Accessible Button and Menu Primitives",
        hours: 4,
        tag: "Apply Principles",
        evidence: "Tested button and menu primitives with keyboard evidence",
        standard: "Components expose correct roles, names, focus behaviour, states and keyboard interaction",
        resources: ["R08", "R12"],
      },
      {
        id: "CS601-SUB-3.4",
        title: "Build the Headless UI Component Library",
        hours: 9,
        tag: "Design and Build",
        evidence: "Versioned package, tokens, components, themes, Storybook stories and automated tests",
        standard:
          "Components are composable, themeable, accessible and usable without application-specific coupling",
        resources: ["R12", "R13", "R14"],
      },
      {
        id: "CS601-SUB-3.5",
        title: "Review Accessibility, API Consistency and Theming",
        hours: 4,
        tag: "Review and Justify",
        evidence: "Accessibility audit, visual checks, peer comments and defect log",
        standard: "Public APIs, variants, focus, contrast, responsive behaviour and theme switching are consistent",
        resources: ["R08", "R12", "R13"],
      },
      {
        id: "CS601-SUB-3.6",
        title: "Demonstrate and Defend the Design System",
        hours: 4,
        tag: "Review and Justify",
        evidence: "Component demonstration, usage documentation and defence notes",
        standard: "Student demonstrates reuse across contexts and defends accessibility, composition and token decisions",
        resources: ["R13", "R14"],
      },
      {
        id: "CS601-SUB-3.7",
        title: "Improve and Publish the Component Release",
        hours: 4,
        tag: "Design and Build",
        evidence: "Reviewed fixes, versioned release, changelog and adoption example",
        standard: "Findings are closed and another team can install, understand and use the library reliably",
        resources: ["R13", "R14"],
      },
    ],
  },
  {
    id: "CS601-ACT-04",
    part: "IV",
    icon: "performance",
    hours: 30,
    title: "Build a Global Personalization Engine",
    desc: "Personalized content delivered at edge latencies with dynamic streaming, code splitting, and zero cache leakage.",
    outcome:
      "Deliver personalized content through edge-aware logic, controlled code splitting and streaming while preserving accessibility, privacy and measurable performance.",
    subs: [
      {
        id: "CS601-SUB-4.1",
        title: "Learn Frontend Performance and Edge Foundations",
        hours: 3,
        tag: "Understand Core Ideas",
        evidence: "Performance-budget notes, request path and edge-execution diagram",
        standard:
          "Correctly explains bundle cost, caching, streaming, code splitting, edge execution and Core Web Vitals",
        resources: ["R05", "R07", "R15"],
      },
      {
        id: "CS601-SUB-4.2",
        title: "Analyse Personalization Performance Risks",
        hours: 2,
        tag: "Analyse the Problem",
        evidence: "Scenario analysis covering cache leakage, slow personalization, large bundles and hydration cost",
        standard: "Identifies privacy, caching, latency and rendering risks and proposes suitable boundaries",
        resources: ["R05", "R07", "R15"],
      },
      {
        id: "CS601-SUB-4.3",
        title: "Prototype Code Splitting and Streaming",
        hours: 4,
        tag: "Apply Principles",
        evidence: "Isolated route or component, bundle comparison and streaming evidence",
        standard:
          "Non-critical code is deferred safely and important content appears without blocking accessibility or interaction",
        resources: ["R02", "R04", "R05"],
      },
      {
        id: "CS601-SUB-4.4",
        title: "Build the Global Personalization Engine",
        hours: 9,
        tag: "Design and Build",
        evidence: "Integrated application, edge logic, personalization rules, streaming UI and automated tests",
        standard:
          "Personalization is correct, privacy-aware, cache-safe and delivered within the approved performance budget",
        resources: ["R02", "R04", "R15"],
      },
      {
        id: "CS601-SUB-4.5",
        title: "Review Performance, Privacy and Resilience",
        hours: 4,
        tag: "Review and Justify",
        evidence: "Lighthouse report, bundle analysis, privacy review and issue log",
        standard:
          "Review verifies Core Web Vitals, cache separation, fallback behaviour, data minimization and operational risk",
        resources: ["R05", "R07", "R15"],
      },
      {
        id: "CS601-SUB-4.6",
        title: "Demonstrate and Defend Performance Decisions",
        hours: 4,
        tag: "Review and Justify",
        evidence: "Live multi-condition demonstration, performance traces and defence notes",
        standard:
          "Student demonstrates personalized, anonymous, slow-network and edge-failure paths and justifies trade-offs",
        resources: ["R05", "R07"],
      },
      {
        id: "CS601-SUB-4.7",
        title: "Optimize and Finalise the Personalization Release",
        hours: 4,
        tag: "Design and Build",
        evidence: "Reviewed patch, before-and-after metrics, regression tests and runbook",
        standard:
          "Measurable improvement is achieved without correctness, accessibility, privacy or maintainability regression",
        resources: ["R05", "R07", "R15"],
      },
    ],
  },
];

export const CS601_DATA: CourseData = {
  slug: "cs601",
  course: CS601_COURSE,
  shortDesc:
    "An elective master's curriculum in modern frontend frameworks covering rendering topologies (CSR, SSR, SSG, ISR), deterministic state machines, headless design systems, and edge-native streaming personalization.",
  status: "active",
  parts: CS601_PARTS,
  activities: CS601_ACTIVITIES,
  resources: CS601_RESOURCES,
};
