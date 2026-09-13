import type { Activity, Course, CourseData, CoursePart, Resource } from "../types";

export const CS102_COURSE: Course = {
  university: "Kerala University of Digital Sciences, Innovation and Technology",
  department: "School of Digital Sciences",
  code: "CS102",
  title: "Full Stack Architecture & Cloud-Native Development",
  semester: "Semester 1",
  ltp: "1–0–3",
  credits: 4,
  totalHours: 120,
  type: "core",
};

export const CS102_PARTS: CoursePart[] = [
  {
    id: "I",
    label: "Part I — Full Stack Architecture",
    statLabel: "Full-stack hrs",
    color: "indigo",
  },
  {
    id: "II",
    label: "Part II — Cloud-Native Development",
    statLabel: "Cloud-native dev hrs",
    color: "sky",
  },
];

export const CS102_RESOURCES: Record<string, Resource> = {
  M01: { label: "MOOC — Full Stack Open", url: "https://fullstackopen.com/en/" },
  M02: { label: "MOOC — CS50 Web Programming", url: "https://cs50.harvard.edu/web/" },
  M03: { label: "MOOC — CS50 Introduction to Databases with SQL", url: "https://cs50.harvard.edu/sql/" },
  M04: { label: "MOOC — Linux Foundation: DevOps and SRE", url: "https://training.linuxfoundation.org/training/introduction-to-devops-and-site-reliability-engineering-lfs162/" },
  R01: { label: "MDN — HTTP", url: "https://developer.mozilla.org/en-US/docs/Web/HTTP" },
  R02: { label: "MDN — HTML", url: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
  R03: { label: "WCAG 2.2", url: "https://www.w3.org/TR/WCAG22/" },
  R04: { label: "MDN — Responsive Design", url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/CSS_layout/Responsive_Design" },
  R05: { label: "MDN — JavaScript Guide", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide" },
  R06: { label: "Frontend framework (choose one)", url: "https://react.dev/" },
  R07: { label: "Routing (chosen framework)", url: "https://reactrouter.com/" },
  R08: { label: "OpenAPI Specification", url: "https://spec.openapis.org/oas/latest.html" },
  R09: { label: "Backend framework (choose one)", url: "https://docs.spring.io/spring-boot/index.html" },
  R10: { label: "Backend security module", url: "https://docs.spring.io/spring-security/reference/" },
  R11: { label: "RFC 9457 — Problem Details", url: "https://www.rfc-editor.org/rfc/rfc9457.html" },
  R12: { label: "RFC 9700 — OAuth 2.0 BCP", url: "https://www.rfc-editor.org/rfc/rfc9700.html" },
  R13: { label: "OpenTelemetry", url: "https://opentelemetry.io/docs/" },
  R14: { label: "PostgreSQL", url: "https://www.postgresql.org/docs/current/" },
  R15: { label: "Flyway", url: "https://documentation.red-gate.com/flyway" },
  R16: { label: "GitHub — Pull Requests", url: "https://docs.github.com/en/pull-requests" },
  R17: { label: "Playwright", url: "https://playwright.dev/docs/intro" },
  R18: { label: "Docker Build Best Practices", url: "https://docs.docker.com/build/building/best-practices/" },
  R19: { label: "Docker Compose", url: "https://docs.docker.com/compose/" },
  R20: { label: "GitHub Actions", url: "https://docs.github.com/en/actions" },
  R21: { label: "Terraform", url: "https://developer.hashicorp.com/terraform/docs" },
  R22: { label: "OWASP Docker Security", url: "https://cheatsheetseries.owasp.org/cheatsheets/Docker_Security_Cheat_Sheet.html" },
  R23: { label: "Approved cloud-provider docs (Course Head)", url: null },
  R24: { label: "OWASP Top 10", url: "https://owasp.org/www-project-top-ten/" },
  R25: { label: "OWASP API Security Top 10", url: "https://owasp.org/www-project-api-security/" },
  R26: { label: "OWASP ASVS", url: "https://owasp.org/www-project-application-security-verification-standard/" },
  R27: { label: "OWASP Cheat Sheet Series", url: "https://cheatsheetseries.owasp.org/" },
  R28: { label: "OWASP Dependency-Check", url: "https://owasp.org/www-project-dependency-check/" },
  R29: { label: "OWASP ZAP", url: "https://www.zaproxy.org/" },
  R30: { label: "Next.js — Learn and Documentation", url: "https://nextjs.org/learn" },
};

export const CS102_ACTIVITIES: Activity[] = [
  {
    id: "CS102-ACT-01", part: "I", icon: "frontend", hours: 22,
    title: "Frontend Application Engineering",
    desc: "Accessible, responsive UI on your chosen framework, wired to the API contract.",
    outcome:
      "Build an accessible, responsive, framework-based frontend that consumes an API contract with correct interface states.",
    subs: [
      { id: "1.1", title: "Web and HTTP fundamentals", hours: 2, tag: "Recall Fundamentals", evidence: "Annotated request–response diagram and browser network trace.", standard: "Correctly explains URL, DNS, HTTP methods, status codes, headers and request lifecycle.", resources: ["R01"] },
      { id: "1.2", title: "Semantic HTML and accessible forms", hours: 3, tag: "Apply Principles", evidence: "Semantic page, validated form and accessibility-check report.", standard: "Uses appropriate landmarks, labels, input types, validation messages and keyboard access per WCAG 2.2.", resources: ["R02", "R03"] },
      { id: "1.3", title: "Responsive CSS and mobile-first design", hours: 3, tag: "Design and Build", evidence: "Responsive implementation and screenshots at agreed breakpoints.", standard: "Layout remains readable and usable without clipping, overflow or inaccessible contrast.", resources: ["R04", "R03"] },
      { id: "1.4", title: "Modern JavaScript and asynchronous programming", hours: 4, tag: "Apply Principles", evidence: "JavaScript modules, asynchronous workflow and focused tests.", standard: "Uses modern syntax, promises or async/await, error handling and safe DOM interaction correctly.", resources: ["R05"] },
      { id: "1.5", title: "Component architecture with React and Next.js", hours: 4, tag: "Design and Build", evidence: "React component hierarchy, Next.js source code and reviewed pull request.", standard: "React components are reusable, cohesive and testable; Next.js routes and rendering boundaries are clear; UI concerns remain separated from data access.", resources: ["R06", "R30", "R16"] },
      { id: "1.6", title: "State management and routing", hours: 3, tag: "Design and Build", evidence: "Route map, state model and working navigation.", standard: "State ownership is predictable; routes, parameters and protected transitions behave correctly.", resources: ["R06", "R07"] },
      { id: "1.7", title: "API integration and user-interface states", hours: 3, tag: "Design and Build", evidence: "Integrated screen and state matrix covering loading, empty, success and error.", standard: "UI conforms to the API contract and provides clear, recoverable states.", resources: ["R06", "R08"] },
    ],
  },
  {
    id: "CS102-ACT-02", part: "I", icon: "backend", hours: 27,
    title: "Backend Service Engineering",
    desc: "A layered, authenticated service hardened against priority OWASP risks.",
    outcome:
      "Build a layered, validated, authenticated backend service that is observable and hardened against priority application-security risks.",
    subs: [
      { id: "2.1", title: "Server and request lifecycle", hours: 2, tag: "Recall Fundamentals", evidence: "Request-lifecycle diagram and correlated server logs.", standard: "Correctly explains routing, middleware or filters, handler execution and response generation.", resources: ["R01", "R09"] },
      { id: "2.2", title: "REST API design", hours: 4, tag: "Design and Build", evidence: "OpenAPI contract with example requests and responses.", standard: "Resources, methods, validation, versioning, status codes and error responses are consistent.", resources: ["R08", "R11"] },
      { id: "2.3", title: "Controllers, services and repositories", hours: 4, tag: "Design and Build", evidence: "Layered implementation, dependency diagram and unit tests.", standard: "Transport, business logic and persistence responsibilities are clearly separated.", resources: ["R09"] },
      { id: "2.4", title: "Input validation and error handling", hours: 3, tag: "Analyse the Problem", evidence: "Validation rules, negative-path tests and safe problem responses.", standard: "Invalid input is rejected consistently without leaking sensitive details; defends against OWASP injection and mass-assignment risks.", resources: ["R11", "R24", "R25"] },
      { id: "2.5", title: "Authentication using JWT/OIDC", hours: 4, tag: "Design and Build", evidence: "Authentication flow, token-validation implementation and security tests.", standard: "Tokens are validated correctly; expiry, issuer, audience and failure states are handled safely, aligned with OAuth 2.0 BCP and ASVS.", resources: ["R10", "R12", "R26"] },
      { id: "2.6", title: "Role-based access control", hours: 3, tag: "Apply Principles", evidence: "Role-permission matrix and authorization tests.", standard: "Permissions are enforced server-side using least privilege; broken object/function-level access is prevented.", resources: ["R10", "R25"] },
      { id: "2.7", title: "External-service integration", hours: 2, tag: "Design and Build", evidence: "Adapter implementation, timeout test and failure-response evidence.", standard: "External dependencies are isolated and failures produce controlled, observable behaviour.", resources: ["R08", "R13"] },
      { id: "2.8", title: "Logging and health monitoring", hours: 2, tag: "Apply Principles", evidence: "Structured log samples, correlation ID and health output.", standard: "Logs support diagnosis without exposing secrets; health indicators reflect service state.", resources: ["R13", "R09"] },
      { id: "2.9", title: "Application-security hardening", hours: 3, tag: "Review and Justify", evidence: "Threat checklist mapped to OWASP Top 10 and API Security Top 10; security-header config; ASVS self-assessment; secrets-externalization proof.", standard: "Priority OWASP Top 10 and API Security Top 10 risks are mitigated and evidenced against ASVS; security headers present; no secrets in source.", resources: ["R24", "R25", "R26", "R27"] },
    ],
  },
  {
    id: "CS102-ACT-03", part: "I", icon: "database", hours: 20,
    title: "Database Design and Persistence",
    desc: "A relational schema that stays correct under load, failure and rollback.",
    outcome:
      "Design, migrate, query and optimize a relational schema whose integrity survives failure and rollback.",
    subs: [
      { id: "3.1", title: "Relational database fundamentals", hours: 2, tag: "Recall Fundamentals", evidence: "Concept map and short scenario analysis.", standard: "Correctly identifies entities, keys, relationships, integrity rules and transaction boundaries.", resources: ["R14"] },
      { id: "3.2", title: "Schema design (PostgreSQL or approved equivalent)", hours: 3, tag: "Design and Build", evidence: "ER diagram and versioned schema definition.", standard: "Schema is normalized, understandable and aligned with the product requirements.", resources: ["R14"] },
      { id: "3.3", title: "Entity relationships and constraints", hours: 3, tag: "Apply Principles", evidence: "DDL or migration containing keys, constraints and integrity tests.", standard: "Primary, foreign, unique and check constraints prevent invalid data states.", resources: ["R14", "R15"] },
      { id: "3.4", title: "SQL queries, joins and transactions", hours: 3, tag: "Apply Principles", evidence: "Query set, expected results and transaction test.", standard: "Queries are correct and transactions protect atomicity and consistency.", resources: ["R14"] },
      { id: "3.5", title: "ORM and repository integration", hours: 3, tag: "Apply Principles", evidence: "Entity mappings, repository code and integration tests.", standard: "Mapping and query boundaries are explicit; persistence behaviour matches the schema.", resources: ["R09", "R14"] },
      { id: "3.6", title: "Database migrations and seed data", hours: 2, tag: "Design and Build", evidence: "Ordered migrations and deterministic seed script.", standard: "A clean environment can reproduce the database without manual correction.", resources: ["R15"] },
      { id: "3.7", title: "Indexing and query optimization", hours: 2, tag: "Analyse the Problem", evidence: "Before-and-after EXPLAIN ANALYZE report.", standard: "Index and query changes are justified by measured execution evidence.", resources: ["R14"] },
      { id: "3.8", title: "Transaction failure and rollback handling", hours: 2, tag: "Analyse the Problem", evidence: "Failure-injection test and database-state proof.", standard: "Failed multi-step operations leave no partial or orphaned records.", resources: ["R14", "R09"] },
    ],
  },
  {
    id: "CS102-ACT-04", part: "I", icon: "integration", hours: 26,
    title: "Full-Stack Integration and Delivery",
    desc: "Integrate, test, scan and ship through a reproducible, secure pipeline.",
    outcome:
      "Integrate, test, scan, containerize and deliver the product through a disciplined, secure pipeline the reviewer can reproduce.",
    subs: [
      { id: "4.1", title: "Frontend-to-backend integration", hours: 3, tag: "Design and Build", evidence: "Working end-to-end product journey and integration recording.", standard: "Client, API and database complete the priority workflow with traceable requests.", resources: ["R06", "R08"] },
      { id: "4.2", title: "API contract validation", hours: 2, tag: "Review and Justify", evidence: "Contract-test report and resolved mismatch log.", standard: "Provider and consumer implementations conform to the approved OpenAPI contract.", resources: ["R08"] },
      { id: "4.3", title: "Git branching and pull-request workflow", hours: 3, tag: "Apply Principles", evidence: "Branch history, pull request, review comments and closure evidence.", standard: "Changes are traceable, reviewable and integrated through a disciplined workflow.", resources: ["R16"] },
      { id: "4.4", title: "Unit, API and browser testing", hours: 4, tag: "Analyse the Problem", evidence: "Test suites, reports and browser traces (optional DAST scan).", standard: "Tests cover priority behaviour, boundaries and failure paths and are repeatable.", resources: ["R17", "R20", "R29"] },
      { id: "4.5", title: "Docker containerization", hours: 3, tag: "Design and Build", evidence: "Dockerfiles, image metadata and security-scan report.", standard: "Images are reproducible, minimal, non-root where feasible and contain no embedded secrets.", resources: ["R18", "R22"] },
      { id: "4.6", title: "Multi-service composition", hours: 3, tag: "Design and Build", evidence: "Compose configuration, health checks and startup proof.", standard: "Client, API and database start reliably with correct networks, volumes and dependencies.", resources: ["R19"] },
      { id: "4.7", title: "Continuous integration and delivery", hours: 3, tag: "Design and Build", evidence: "CI workflow and successful quality-gate run.", standard: "Lint, build and required tests run automatically and prevent failed changes progressing.", resources: ["R20"] },
      { id: "4.8", title: "Deployment, monitoring and technical demonstration", hours: 3, tag: "Review and Justify", evidence: "Versioned release, deployment proof, runbook and demonstration.", standard: "Reviewer can reproduce, monitor and defend the assessed release from the supplied evidence.", resources: ["R13", "R18", "R20"] },
      { id: "4.9", title: "Dependency scanning and transport security", hours: 2, tag: "Review and Justify", evidence: "SCA/dependency-audit report, remediation log and HTTPS/TLS configuration proof.", standard: "Known-vulnerable dependencies are identified and triaged; transport is encrypted (HTTPS/TLS) end to end.", resources: ["R28", "R24"] },
    ],
  },
  {
    id: "CS102-ACT-05", part: "II", icon: "cloud", hours: 25,
    title: "Launch a Secure Cloud-Native Product",
    desc: "Deploy, secure and defend the product with infrastructure as code and serverless.",
    outcome:
      "Deploy, secure, operate and defend a cloud-native product using infrastructure as code and serverless functionality.",
    subs: [
      { id: "5.1", title: "Learn cloud-native foundations", hours: 2, tag: "Understand Core Ideas", evidence: "Annotated cloud responsibility map and concept notes.", standard: "Correctly relates infrastructure as code, serverless events, IAM, secrets, releases and cost controls.", resources: ["R21", "R23"] },
      { id: "5.2", title: "Analyse cloud risks", hours: 3, tag: "Analyse the Problem", evidence: "Cloud-risk register and corrected scenario responses.", standard: "Identifies excessive privilege, secret exposure, drift, rollback, cold-start and cost risks with suitable controls.", resources: ["R22", "R23"] },
      { id: "5.3", title: "Design the cloud deployment", hours: 5, tag: "Design and Build", evidence: "Cloud topology, Terraform module design, IAM policy and threat summary.", standard: "Design is modular, least-privileged, observable and supports rollback and controlled change.", resources: ["R21", "R22", "R23"] },
      { id: "5.4", title: "Provision and deploy the product", hours: 5, tag: "Design and Build", evidence: "Infrastructure code, deployment record, serverless code and execution logs.", standard: "Provisioning is repeatable; identity and secrets are externalized; protected application and event flows work.", resources: ["R21", "R23"] },
      { id: "5.5", title: "Review security and operational readiness", hours: 4, tag: "Review and Justify", evidence: "Security, cost and operations checklist with issue log.", standard: "Review verifies exposure, state, drift, monitoring, cost and rollback readiness; critical findings are recorded.", resources: ["R22", "R23"] },
      { id: "5.6", title: "Demonstrate and defend the deployment", hours: 3, tag: "Review and Justify", evidence: "Live demonstration, release record, monitoring evidence and rollback proof.", standard: "Student demonstrates protected access, serverless execution, controlled release and successful rollback and defends decisions.", resources: ["R13", "R21", "R23"] },
      { id: "5.7", title: "Improve and close the deployment", hours: 3, tag: "Design and Build", evidence: "Reviewed correction, updated runbook, teardown proof and reflection.", standard: "Findings are closed, resources are safely removed and improvements are supported by before-and-after evidence.", resources: ["R21", "R23"] },
    ],
  },
];

export const CS102_DATA: CourseData = {
  slug: "cs102",
  course: CS102_COURSE,
  shortDesc: "Activity-based curriculum covering full-stack architecture, API engineering, relational persistence, secure containerized delivery, and cloud-native serverless deployment.",
  status: "active",
  parts: CS102_PARTS,
  activities: CS102_ACTIVITIES,
  resources: CS102_RESOURCES,
};
