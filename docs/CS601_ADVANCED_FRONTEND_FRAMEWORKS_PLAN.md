# CS601 — Advanced Frontend Frameworks

## React/Next.js or Vue/Nuxt Activity Plan

**Activities:** 4  
**Sub-activities:** 28  
**Total Target Hours:** 120  
**Implementation Track:** React with Next.js or Vue with Nuxt, as approved for the cohort

## Student-Facing Thinking Skill Tags

- **Understand Core Ideas**
- **Apply Principles**
- **Analyse the Problem**
- **Review and Justify**
- **Design and Build**

## Evaluation Scale

- **Needs Revision:** Evidence is incomplete, inaccessible, unreliable, poorly performing or cannot be reproduced.
- **Meets Standard:** Evidence is complete, functional, accessible, traceable and satisfies the stated evaluation standard.
- **Exceeds Standard:** Evidence demonstrates independent validation, justified decisions, measurable improvement and professional-quality documentation.

---

## Activity 1 — Build a Zero-Lag News Portal

**Unit:** Rendering Strategies  
**Activity ID:** CS601-ACT-01  
**Target Hours:** 30  
**Activity Outcome:** Build a responsive content portal that selects appropriate server, static and client rendering strategies, updates content without blocking the user and controls layout instability.

| ID | Sub-activity | Hrs | Thinking Skill Tag | Required Evidence | Evaluation Standard | Resources |
|---|---|---:|---|---|---|---|
| CS601-SUB-1.1 | Learn Modern Rendering Strategies | 3 | Understand Core Ideas | Comparison notes covering CSR, SSR, SSG, ISR, hydration and streaming | Correctly explains when each strategy is useful and identifies SEO, freshness, latency and infrastructure trade-offs | R01, R02, R03, R04 |
| CS601-SUB-1.2 | Analyse Rendering and Loading Scenarios | 2 | Analyse the Problem | Scenario responses and corrected rendering decisions | Chooses a suitable rendering model for public, personalized, frequently updated and authenticated pages and justifies the choice | R02, R04, R05 |
| CS601-SUB-1.3 | Prototype a Server-Rendered News Page | 4 | Apply Principles | Working page, server data-loading code and browser network evidence | Initial content is rendered correctly, errors are handled and the page remains usable without unnecessary client work | R02, R04 |
| CS601-SUB-1.4 | Build the Zero-Lag News Portal | 9 | Design and Build | Versioned application, responsive screens, content-refresh implementation and automated tests | Portal loads meaningful content quickly, updates without blocking interaction and handles loading, empty, stale and failure states | R01, R02, R03, R04, R06 |
| CS601-SUB-1.5 | Review Accessibility and Layout Stability | 4 | Review and Justify | Accessibility report, Core Web Vitals evidence, review comments and issue log | Keyboard access, landmarks, focus, contrast and cumulative layout shift meet the approved quality thresholds | R05, R07, R08 |
| CS601-SUB-1.6 | Demonstrate and Defend Rendering Decisions | 4 | Review and Justify | Live demonstration, performance trace and technical defence notes | Student demonstrates rendering, refresh and failure behaviour and defends caching, hydration and rendering choices | R05, R07 |
| CS601-SUB-1.7 | Improve Loading and Visual Stability | 4 | Design and Build | Reviewed corrections, before-and-after metrics and updated decision record | Findings are closed and improvements to loading, interaction or layout stability are measurable and regression-tested | R05, R07, R08 |
|  | **Activity total** | **30** |  |  |  |  |

---

## Activity 2 — Build a FinTech Onboarding Engine

**Unit:** State and Data Flow  
**Activity ID:** CS601-ACT-02  
**Target Hours:** 30  
**Activity Outcome:** Build a secure multi-step onboarding workflow that synchronizes server data, models complex transitions explicitly and avoids unnecessary rendering.

| ID | Sub-activity | Hrs | Thinking Skill Tag | Required Evidence | Evaluation Standard | Resources |
|---|---|---:|---|---|---|---|
| CS601-SUB-2.1 | Learn Client, Server and Workflow State | 3 | Understand Core Ideas | State-classification notes and onboarding state diagram | Correctly distinguishes local UI, form, URL, server and workflow state and explains ownership and lifecycle | R01, R03, R09, R10 |
| CS601-SUB-2.2 | Analyse Onboarding Failure Scenarios | 2 | Analyse the Problem | Scenario responses covering stale data, duplicate submission, interrupted progress and invalid transitions | Identifies root causes and proposes safe synchronization, validation and recovery controls | R09, R10 |
| CS601-SUB-2.3 | Prototype a State-Managed Form Step | 4 | Apply Principles | Tested form step, validation schema and isolated state model | Input, validation, navigation and submission states behave predictably and expose useful feedback | R01, R03, R10 |
| CS601-SUB-2.4 | Build the FinTech Onboarding Engine | 9 | Design and Build | Multi-step application, state machine, server-state integration, protected data flow and tests | Workflow prevents invalid transitions, persists approved progress and remains consistent with server state | R09, R10, R11 |
| CS601-SUB-2.5 | Review Security, Accessibility and State Correctness | 4 | Review and Justify | Threat checklist, accessibility report, state-transition tests and review log | Sensitive data is minimized; transitions, focus, validation and resumption behaviour are controlled and testable | R08, R10, R12 |
| CS601-SUB-2.6 | Demonstrate Recovery and Defend State Choices | 4 | Review and Justify | Demonstration recording, interrupted-session recovery and defence notes | Student demonstrates successful, invalid, interrupted and resumed journeys and justifies state ownership decisions | R09, R10 |
| CS601-SUB-2.7 | Improve Rendering and Workflow Reliability | 4 | Design and Build | Reviewed patch, render-profile comparison, regression tests and closure log | Unnecessary renders and state defects are reduced without weakening correctness, accessibility or maintainability | R07, R09, R10 |
|  | **Activity total** | **30** |  |  |  |  |

---

## Activity 3 — Create a Headless UI Component Library

**Unit:** Design Systems  
**Activity ID:** CS601-ACT-03  
**Target Hours:** 30  
**Activity Outcome:** Build a reusable, accessible and themeable component library that separates behaviour and accessibility from visual presentation.

| ID | Sub-activity | Hrs | Thinking Skill Tag | Required Evidence | Evaluation Standard | Resources |
|---|---|---:|---|---|---|---|
| CS601-SUB-3.1 | Learn Design-System and Headless UI Foundations | 3 | Understand Core Ideas | Component anatomy notes, token map and accessibility pattern summary | Correctly explains primitives, composition, controlled state, design tokens, variants and accessibility responsibilities | R08, R12, R13 |
| CS601-SUB-3.2 | Analyse Component API Scenarios | 2 | Analyse the Problem | API comparison and corrected component-boundary decisions | Identifies reusable behaviour, avoids excessive configuration and chooses predictable component contracts | R01, R03, R13 |
| CS601-SUB-3.3 | Prototype Accessible Button and Menu Primitives | 4 | Apply Principles | Tested button and menu primitives with keyboard evidence | Components expose correct roles, names, focus behaviour, states and keyboard interaction | R08, R12 |
| CS601-SUB-3.4 | Build the Headless UI Component Library | 9 | Design and Build | Versioned package, tokens, components, themes, Storybook stories and automated tests | Components are composable, themeable, accessible and usable without application-specific coupling | R12, R13, R14 |
| CS601-SUB-3.5 | Review Accessibility, API Consistency and Theming | 4 | Review and Justify | Accessibility audit, visual checks, peer comments and defect log | Public APIs, variants, focus, contrast, responsive behaviour and theme switching are consistent | R08, R12, R13 |
| CS601-SUB-3.6 | Demonstrate and Defend the Design System | 4 | Review and Justify | Component demonstration, usage documentation and defence notes | Student demonstrates reuse across contexts and defends accessibility, composition and token decisions | R13, R14 |
| CS601-SUB-3.7 | Improve and Publish the Component Release | 4 | Design and Build | Reviewed fixes, versioned release, changelog and adoption example | Findings are closed and another team can install, understand and use the library reliably | R13, R14 |
|  | **Activity total** | **30** |  |  |  |  |

---

## Activity 4 — Build a Global Personalization Engine

**Unit:** Frontend Performance  
**Activity ID:** CS601-ACT-04  
**Target Hours:** 30  
**Activity Outcome:** Deliver personalized content through edge-aware logic, controlled code splitting and streaming while preserving accessibility, privacy and measurable performance.

| ID | Sub-activity | Hrs | Thinking Skill Tag | Required Evidence | Evaluation Standard | Resources |
|---|---|---:|---|---|---|---|
| CS601-SUB-4.1 | Learn Frontend Performance and Edge Foundations | 3 | Understand Core Ideas | Performance-budget notes, request path and edge-execution diagram | Correctly explains bundle cost, caching, streaming, code splitting, edge execution and Core Web Vitals | R05, R07, R15 |
| CS601-SUB-4.2 | Analyse Personalization Performance Risks | 2 | Analyse the Problem | Scenario analysis covering cache leakage, slow personalization, large bundles and hydration cost | Identifies privacy, caching, latency and rendering risks and proposes suitable boundaries | R05, R07, R15 |
| CS601-SUB-4.3 | Prototype Code Splitting and Streaming | 4 | Apply Principles | Isolated route or component, bundle comparison and streaming evidence | Non-critical code is deferred safely and important content appears without blocking accessibility or interaction | R02, R04, R05 |
| CS601-SUB-4.4 | Build the Global Personalization Engine | 9 | Design and Build | Integrated application, edge logic, personalization rules, streaming UI and automated tests | Personalization is correct, privacy-aware, cache-safe and delivered within the approved performance budget | R02, R04, R15 |
| CS601-SUB-4.5 | Review Performance, Privacy and Resilience | 4 | Review and Justify | Lighthouse report, bundle analysis, privacy review and issue log | Review verifies Core Web Vitals, cache separation, fallback behaviour, data minimization and operational risk | R05, R07, R15 |
| CS601-SUB-4.6 | Demonstrate and Defend Performance Decisions | 4 | Review and Justify | Live multi-condition demonstration, performance traces and defence notes | Student demonstrates personalized, anonymous, slow-network and edge-failure paths and justifies trade-offs | R05, R07 |
| CS601-SUB-4.7 | Optimize and Finalise the Personalization Release | 4 | Design and Build | Reviewed patch, before-and-after metrics, regression tests and runbook | Measurable improvement is achieved without correctness, accessibility, privacy or maintainability regression | R05, R07, R15 |
|  | **Activity total** | **30** |  |  |  |  |

---

## Learning Resource Catalogue

| ID | Learning Resource |
|---|---|
| R01 | [React Documentation](https://react.dev/) |
| R02 | [Next.js Documentation](https://nextjs.org/docs) |
| R03 | [Vue Documentation](https://vuejs.org/guide/introduction.html) |
| R04 | [Nuxt Documentation](https://nuxt.com/docs) |
| R05 | [web.dev — Learn Performance](https://web.dev/learn/performance/) |
| R06 | [MDN — Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) |
| R07 | [Chrome Lighthouse Documentation](https://developer.chrome.com/docs/lighthouse/) |
| R08 | [W3C — Web Content Accessibility Guidelines](https://www.w3.org/TR/WCAG21/) |
| R09 | [TanStack Query Documentation](https://tanstack.com/query/latest/docs/framework/react/overview) |
| R10 | [XState Documentation](https://stately.ai/docs/xstate) |
| R11 | [OpenAPI Specification](https://spec.openapis.org/oas/latest.html) |
| R12 | [WAI-ARIA Authoring Practices Guide](https://www.w3.org/WAI/ARIA/apg/) |
| R13 | [Storybook Documentation](https://storybook.js.org/docs) |
| R14 | [Playwright Documentation](https://playwright.dev/docs/intro) |
| R15 | Approved edge-runtime and deployment-platform documentation selected for the cohort |

> Target hours are indicative learning-effort estimates. They must not be interpreted as attendance, which remains managed exclusively in DUK@360.

