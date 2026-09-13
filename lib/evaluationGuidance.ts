import type { SubActivity } from "./types";

export interface EvaluationGuidance {
  /** Clear, student-friendly explanation of what the evaluator wants to see */
  studentExplanation: string;
  /** Observable criteria checklist that the reviewer checks */
  evaluatorCriteria: string[];
  /** Specific evidence example tailored to this sub-activity */
  concreteEvidence: string;
  /** Critical pitfall to avoid that commonly costs marks */
  pitfallToAvoid: string;
}

const GUIDANCE_MAP: Record<string, EvaluationGuidance> = {
  "1.1": {
    studentExplanation:
      "The reviewer wants to see that you understand the web at the protocol level. You must trace and explain what happens from the moment a user enters a URL to the point where the server returns the HTTP response.",
    evaluatorCriteria: [
      "Diagram or trace clearly demonstrates URL anatomy, DNS lookup, TCP/TLS handshake, and HTTP request/response stages.",
      "Explains standard HTTP methods (GET, POST, PUT, DELETE) and status code classes (2xx, 3xx, 4xx, 5xx) with accurate semantics.",
      "Identifies key request and response headers (Host, Content-Type, Authorization, Cache-Control) and explains their functional role.",
    ],
    concreteEvidence:
      "Submit an annotated request–response sequence diagram matched to a real browser DevTools Network tab trace (HAR export or screenshot with annotated headers).",
    pitfallToAvoid:
      "Submitting purely theoretical textbook diagrams without showing actual headers, status codes, and request bodies from a live system.",
  },
  "1.2": {
    studentExplanation:
      "Your page must be fully functional and usable by all users, including those relying on screen readers or keyboard navigation. The evaluation focuses on semantic HTML markup, accessible form labels, and WCAG 2.2 compliant error feedback.",
    evaluatorCriteria: [
      "Semantic HTML5 landmarks (<header>, <nav>, <main>, <section>, <footer>) used instead of non-semantic <div> tags.",
      "All form inputs have explicitly associated <label> elements, correct input types, and appropriate validation attributes.",
      "Validation errors are visually distinct, programmatically associated via aria-describedby, and legible.",
      "The entire form can be navigated, filled, and submitted using only the keyboard (Tab, Shift+Tab, Enter, Space).",
    ],
    concreteEvidence:
      "Provide your semantic HTML source, a validated form screen with error states, and an automated accessibility audit report (Axe, Lighthouse, or WAVE) showing 0 critical violations.",
    pitfallToAvoid:
      "Placeholder text used instead of explicit labels, or custom buttons that cannot receive focus or be activated via keyboard.",
  },
  "1.3": {
    studentExplanation:
      "Your user interface must adapt cleanly across phone, tablet, and desktop viewports without broken layouts, text clipping, or awkward horizontal scrollbars.",
    evaluatorCriteria: [
      "Responsive layout implemented using modern CSS (Flexbox, Grid, container queries, or responsive Tailwind utility classes).",
      "Layout renders cleanly and remains fully usable across mobile (~375px), tablet (~768px), and desktop (~1280px) breakpoints.",
      "Text and interactive elements maintain WCAG 2.2 AA contrast ratios (minimum 4.5:1 for normal text) across all screen sizes.",
      "No horizontal scroll or content overflow on small screens.",
    ],
    concreteEvidence:
      "Provide side-by-side screenshots or a short recording showing responsive behavior across mobile, tablet, and desktop breakpoints, accompanied by a contrast checker verification.",
    pitfallToAvoid:
      "Hardcoding fixed pixel widths (e.g. width: 1200px) that cause horizontal scrolling and element truncation on mobile screens.",
  },
  "1.4": {
    studentExplanation:
      "The evaluator checks that you write clean, modular JavaScript with safe DOM handling and robust asynchronous workflows (Promises, async/await) that handle network failures without crashing.",
    evaluatorCriteria: [
      "Modular JavaScript architecture (ES modules with clear imports and exports).",
      "Asynchronous workflows use modern async/await syntax with explicit try/catch error handling.",
      "Safe DOM manipulation practices that defend against Cross-Site Scripting (XSS), avoiding unsafe innerHTML insertion of untrusted data.",
      "Unit tests prove that both successful responses and network errors are handled properly.",
    ],
    concreteEvidence:
      "Submit the JavaScript module files, test suite execution results covering resolved data and rejected promise states, and clear DOM rendering logic.",
    pitfallToAvoid:
      "Uncaught promise rejections or empty catch blocks that fail silently when an asynchronous request fails.",
  },
  "1.5": {
    studentExplanation:
      "Demonstrate clean architectural separation between presentation components and data access in React and Next.js. The reviewer looks for reusable, cohesive components and well-defined rendering boundaries.",
    evaluatorCriteria: [
      "Component tree follows single-responsibility principles with clean prop interfaces and explicit TypeScript types.",
      "Next.js App Router conventions used effectively (clear boundaries between Server Components and Client Components).",
      "UI concerns (styling, layout) remain cleanly separated from business logic and data fetching.",
      "GitHub pull request reflects disciplined atomic commits, clear descriptions, and code review comments.",
    ],
    concreteEvidence:
      "Link to a reviewed GitHub pull request showing component source code, modular structure, and clear commit history.",
    pitfallToAvoid:
      "Marking the entire root layout with 'use client' or embedding direct API fetch calls inside purely visual presentation components.",
  },
  "1.6": {
    studentExplanation:
      "Application state must transition predictably without race conditions, and routes must reflect user intent. The evaluator checks that state ownership is clear and navigation guards behave reliably.",
    evaluatorCriteria: [
      "State ownership is predictable: local UI state is encapsulated; shared application state is managed cleanly via context or state stores.",
      "Routing and dynamic route parameters update state and URL reliably without desynchronization.",
      "Protected routes redirect unauthenticated users gracefully with return-to intent preserved.",
    ],
    concreteEvidence:
      "Submit a state architecture diagram or route map, component code demonstrating state updates, and verification of protected route redirection.",
    pitfallToAvoid:
      "Storing duplicate state across multiple components that falls out of sync during navigation.",
  },
  "1.7": {
    studentExplanation:
      "Users must never be left wondering what is happening. The reviewer checks that your UI handles all four essential interface states—Loading, Empty, Success, and Error—in conformity with the API contract.",
    evaluatorCriteria: [
      "Interface states comprehensively cover: Initial Loading (skeletons/spinners), Empty (zero-data guidance), Success (rendered data), and Error (recovery message).",
      "Error state provides clear, human-readable messaging and an actionable recovery mechanism (e.g. 'Retry' button).",
      "Client data models strictly match the OpenAPI specification schema.",
    ],
    concreteEvidence:
      "Provide a screen state matrix (side-by-side screenshots or recording) showing the UI in loading, empty, error, and success states with simulated network responses.",
    pitfallToAvoid:
      "Leaving the user on an infinite loading spinner or displaying raw technical error messages (e.g. 'TypeError: undefined is not an object').",
  },
  "2.1": {
    studentExplanation:
      "Explain and prove how your backend framework processes incoming HTTP requests from the moment they hit the server through middleware, authentication filters, and routing handlers to final response generation.",
    evaluatorCriteria: [
      "Request lifecycle diagram accurately matches the selected backend framework (Express, NestJS, Spring Boot, FastAPI, etc.).",
      "Middleware and filter execution order (CORS, logging, authentication, validation) is documented and proven.",
      "Server log traces correlate with specific request lifecycle phases.",
    ],
    concreteEvidence:
      "Submit a request lifecycle diagram matched to real server log traces with correlation timestamps proving execution order.",
    pitfallToAvoid:
      "Submitting generic high-level textbook diagrams without demonstrating your specific backend stack's middleware pipeline.",
  },
  "2.2": {
    studentExplanation:
      "Your REST API must be predictable, consistent, and contract-first. The reviewer examines your OpenAPI specification for proper resource naming, HTTP methods, status codes, and standardized error schemas.",
    evaluatorCriteria: [
      "RESTful resource naming conventions (plural nouns, hierarchical relationships) and correct HTTP method semantics.",
      "OpenAPI 3.x contract completely specifies paths, parameters, request bodies, response schemas, and headers.",
      "Consistent error responses conforming to RFC 9457 (Problem Details for HTTP APIs).",
      "Clear API versioning strategy (e.g., /api/v1/...).",
    ],
    concreteEvidence:
      "Submit the complete OpenAPI YAML/JSON contract file along with example request/response payloads validated against a schema linter.",
    pitfallToAvoid:
      "Returning HTTP 200 with an error object inside the response body, or using action verbs in endpoint paths (such as `/createUser`).",
  },
  "2.3": {
    studentExplanation:
      "The evaluator verifies layered software architecture. Controllers must only handle HTTP concerns, Services must encapsulate business logic, and Repositories must isolate database persistence.",
    evaluatorCriteria: [
      "Controllers handle request parsing, parameter extraction, and status code mapping without business logic.",
      "Services encapsulate all domain rules, validation orchestration, and transactions.",
      "Repositories/DAOs isolate all database queries and persistence details.",
      "Unit tests verify services in isolation with mocked repository dependencies.",
    ],
    concreteEvidence:
      "Provide class/component dependency diagrams, layered code samples (Controller, Service, Repository), and passing unit test suites.",
    pitfallToAvoid:
      "Writing raw SQL queries or complex business calculations directly inside controller route handler functions.",
  },
  "2.4": {
    studentExplanation:
      "The backend must actively defend against malicious or malformed input. The evaluator checks that schema validation runs before processing and rejects invalid data without leaking stack traces or internal secrets.",
    evaluatorCriteria: [
      "Input schemas validate required fields, data types, formats (email, UUID), lengths, and regex boundaries.",
      "Invalid requests are rejected consistently with HTTP 400 or 422 and RFC 9457 Problem Details.",
      "Defends against common OWASP injection attacks (SQLi, NoSQLi) and mass-assignment vulnerabilities (whitelist DTOs).",
      "Internal server errors (500) hide database diagnostics, file paths, and stack traces from external clients.",
    ],
    concreteEvidence:
      "Submit validation schema files, negative-path unit/integration test results verifying rejection of invalid payloads, and sample RFC 9457 error responses.",
    pitfallToAvoid:
      "Relying solely on frontend validation without rigorous server-side validation, or dumping raw SQL error messages to the client.",
  },
  "2.5": {
    studentExplanation:
      "Demonstrate secure token-based authentication conforming to OAuth 2.0 BCP and OWASP ASVS standards. Tokens must be cryptographically validated with strict signature, issuer, audience, and expiration verification.",
    evaluatorCriteria: [
      "Cryptographic verification of token signature, expiration (exp), issuer (iss), and audience (aud).",
      "Secure token transmission (Bearer header or HttpOnly, Secure, SameSite cookies).",
      "Invalid, expired, or tampered tokens return HTTP 401 Unauthorized immediately without revealing why the token failed.",
      "Sensitive credentials are never embedded in the token payload.",
    ],
    concreteEvidence:
      "Provide authentication middleware code, authentication flow diagram, and security tests proving rejection of expired, unsigned, and forged tokens.",
    pitfallToAvoid:
      "Base64-decoding JWT payloads on the backend without cryptographically verifying the signature against the public key or secret.",
  },
  "2.6": {
    studentExplanation:
      "Ensure users can only perform operations and access data permitted by their assigned roles. The reviewer evaluates server-side permission enforcement and protection against Broken Object-Level Authorization (BOLA/IDOR).",
    evaluatorCriteria: [
      "Role-permission matrix defines least-privilege access rules across all domain entities.",
      "Authorization is enforced server-side using middleware, guards, or decorators.",
      "Defends against BOLA/IDOR by ensuring the authenticated user owns or is authorized to access the requested resource ID.",
      "Unauthorized attempts produce HTTP 403 Forbidden without leaking resource existence.",
    ],
    concreteEvidence:
      "Submit a role-permission matrix along with automated integration tests verifying that unauthorized roles and IDOR attempts receive HTTP 403.",
    pitfallToAvoid:
      "Verifying roles only in frontend UI logic while leaving backend API endpoints accessible to any valid user token.",
  },
  "2.7": {
    studentExplanation:
      "Third-party APIs will fail. The reviewer evaluates your resilience strategy: isolating external calls with dedicated adapters, enforcing explicit timeout thresholds, and providing controlled fallback behavior.",
    evaluatorCriteria: [
      "External dependencies isolated behind clean adapter interfaces.",
      "Explicit timeout limits configured on all outbound HTTP/service calls.",
      "Outbound connection failures, timeouts, and 5xx errors from third-party services are caught and handled gracefully.",
      "Meaningful fallback or structured failure response returned to the client without crashing.",
    ],
    concreteEvidence:
      "Submit adapter implementation code, a simulated timeout/failure test, and logs demonstrating graceful handling of third-party downtime.",
    pitfallToAvoid:
      "Unbounded HTTP client timeouts that tie up server threads and lead to cascading system outages when an external service slows down.",
  },
  "2.8": {
    studentExplanation:
      "Your service must be transparent in production. The evaluator checks for structured JSON logging with correlation IDs tracing requests across layers, alongside an informative health check endpoint.",
    evaluatorCriteria: [
      "Structured JSON log format containing timestamp, severity level, correlation/request ID, and message.",
      "Zero passwords, authorization tokens, or personally identifiable information (PII) printed to logs.",
      "Correlation ID propagates through all layers of a request to enable tracing.",
      "Health monitoring endpoint (/healthz or equivalent) checks and reports readiness of essential backing services (e.g. database connection).",
    ],
    concreteEvidence:
      "Submit structured log samples with correlation IDs, secrets scrubbing proof, and the HTTP response of your health check endpoint.",
    pitfallToAvoid:
      "Dumping entire request or user objects directly into console logs without filtering sensitive authentication tokens.",
  },
  "2.9": {
    studentExplanation:
      "Prove your backend is hardened against top industry attack vectors. The reviewer checks compliance against OWASP Top 10, OWASP API Security Top 10, security headers, and secrets externalization.",
    evaluatorCriteria: [
      "Threat checklist mapped against OWASP Top 10 and API Security Top 10 risks with documented mitigations.",
      "HTTP security headers (HSTS, CSP, X-Frame-Options, X-Content-Type-Options) configured on all responses.",
      "OWASP ASVS self-assessment completed for Level 1/2 priority controls.",
      "All secrets, database credentials, and signing keys strictly externalized via environment variables (zero secrets in code repository).",
    ],
    concreteEvidence:
      "Provide the completed OWASP threat checklist, ASVS self-assessment document, security header scan (curl -I output), and git history proof of clean secrets handling.",
    pitfallToAvoid:
      "Committing .env files or hardcoded database passwords to version control, even in early development commits.",
  },
  "3.1": {
    studentExplanation:
      "Demonstrate a firm grasp of relational database fundamentals: entities, primary/foreign keys, cardinality, data integrity constraints, and transaction boundaries (ACID).",
    evaluatorCriteria: [
      "Concept map accurately identifies entities, attributes, primary keys, and relationships.",
      "Entity cardinalities (1:1, 1:N, N:M) and referential integrity rules are correctly designated.",
      "ACID transaction boundaries are explained in the context of realistic business operations.",
    ],
    concreteEvidence:
      "Submit a conceptual data model/concept map accompanied by a short scenario analysis explaining how ACID guarantees prevent data corruption.",
    pitfallToAvoid:
      "Confusing logical entity relationships with physical foreign key column definitions, or treating relational tables as document collections.",
  },
  "3.2": {
    studentExplanation:
      "Design a normalized relational schema for PostgreSQL that accurately satisfies domain requirements while avoiding data redundancy and update anomalies.",
    evaluatorCriteria: [
      "Entity-Relationship (ER) diagram completely maps all tables, data types, primary keys, and foreign keys.",
      "Schema normalized to Third Normal Form (3NF) to eliminate redundant data.",
      "Consistent naming conventions (snake_case, plural table names, descriptive foreign keys).",
    ],
    concreteEvidence:
      "Provide the full ER diagram (in DBML, Mermaid, or visual export) alongside the versioned SQL schema definition.",
    pitfallToAvoid:
      "Storing comma-separated lists or unstructured JSON in columns where normalized relational child tables are required.",
  },
  "3.3": {
    studentExplanation:
      "Ensure that data correctness is enforced directly by the database engine through primary, foreign, unique, and check constraints.",
    evaluatorCriteria: [
      "Primary keys defined on all tables with sensible key strategies (UUID or BIGSERIAL).",
      "Foreign keys enforce referential integrity with explicit ON DELETE / ON UPDATE actions (CASCADE, RESTRICT, SET NULL).",
      "UNIQUE and CHECK constraints enforce domain invariants (e.g. positive balances, valid enum values, unique email addresses).",
    ],
    concreteEvidence:
      "Submit DDL or migration scripts showing constraints, and test execution output proving that violating inputs are rejected by the database.",
    pitfallToAvoid:
      "Relying solely on application-layer logic to check uniqueness, which leads to race conditions under concurrent requests.",
  },
  "3.4": {
    studentExplanation:
      "Write efficient, parameterized SQL queries and ensure multi-step update operations execute within ACID transaction blocks.",
    evaluatorCriteria: [
      "Queries use appropriate JOIN types (INNER, LEFT) and aggregation without Cartesian product errors.",
      "Multi-table write operations wrapped within explicit BEGIN ... COMMIT / ROLLBACK transactions.",
      "Queries are strictly parameterized to defend against SQL injection vulnerabilities.",
    ],
    concreteEvidence:
      "Submit the query collection with expected results, plus an integration test demonstrating atomic transaction commitment.",
    pitfallToAvoid:
      "Using string concatenation or template literals to inject variables into SQL queries instead of parameterized query bindings.",
  },
  "3.5": {
    studentExplanation:
      "Connect your backend application to the database via an ORM or repository layer. The evaluator checks that entity mappings faithfully match the relational schema without N+1 query inefficiencies.",
    evaluatorCriteria: [
      "Entity models accurately reflect table column types, nullability, relationships, and constraints.",
      "Persistence logic and data access are isolated behind repository interfaces.",
      "Eager/lazy loading configured deliberately to eliminate N+1 query performance problems.",
    ],
    concreteEvidence:
      "Provide ORM entity definitions, repository implementation source, and database integration tests executing against an active test database.",
    pitfallToAvoid:
      "Executing database queries inside loops in service code, resulting in severe N+1 query performance degradation.",
  },
  "3.6": {
    studentExplanation:
      "Database creation must be fully automated and reproducible. The reviewer checks that versioned migrations and deterministic seed scripts can rebuild a clean database from scratch without manual intervention.",
    evaluatorCriteria: [
      "Sequential, timestamped or numbered migration files (Flyway, Prisma, Liquibase, etc.).",
      "Fresh database container can be completely provisioned by running the migration command.",
      "Seed script inserts realistic, deterministic sample data without constraint conflicts.",
    ],
    concreteEvidence:
      "Submit ordered migration scripts, seed data files, and terminal logs demonstrating automated provisioning from an empty database.",
    pitfallToAvoid:
      "Making manual schema adjustments using a database GUI tool without capturing them in version-controlled migration files.",
  },
  "3.7": {
    studentExplanation:
      "Demonstrate query performance optimization supported by empirical evidence. The evaluator examines before-and-after EXPLAIN ANALYZE execution plans to verify that index choices yield measurable speedups.",
    evaluatorCriteria: [
      "Slow query identified on realistic table volumes.",
      "EXPLAIN ANALYZE reports show sequential scan before optimization and efficient index scan after.",
      "Index strategy (B-tree, composite, partial) is justified by query filter and sort patterns.",
    ],
    concreteEvidence:
      "Submit before-and-after EXPLAIN ANALYZE query plans with execution time comparisons and the DDL statement creating the index.",
    pitfallToAvoid:
      "Adding indexes blindly without proving with query plans that the PostgreSQL query planner actually uses them.",
  },
  "3.8": {
    studentExplanation:
      "Prove that when an error occurs during a multi-step database workflow, the transaction aborts cleanly, leaving zero partial or orphaned records.",
    evaluatorCriteria: [
      "Test injects an intentional failure midway through a multi-table transaction.",
      "Automatic ROLLBACK triggers, leaving the previous database state completely intact.",
      "Verification confirms no partial rows, broken balances, or orphaned foreign key records.",
    ],
    concreteEvidence:
      "Submit an automated test script injecting a failure midway through a transaction, accompanied by database queries proving zero state changes.",
    pitfallToAvoid:
      "Catching exceptions inside an active transaction block without executing a rollback, resulting in partial commits.",
  },
  "4.1": {
    studentExplanation:
      "Unify frontend, backend, and database into a coherent end-to-end user journey with traceable network requests and confirmed data persistence.",
    evaluatorCriteria: [
      "User workflow executes seamlessly across frontend interface, API service, and PostgreSQL database.",
      "Data submitted in the browser is persisted and retrievable across page reloads.",
      "Browser network trace confirms correct request/response payloads conforming to the API contract.",
    ],
    concreteEvidence:
      "Submit an end-to-end journey recording showing the browser action, correlated network tab requests, and database records.",
    pitfallToAvoid:
      "Mocking backend responses on the frontend instead of communicating with the real running backend service.",
  },
  "4.2": {
    studentExplanation:
      "Verify that client requests and server responses strictly conform to the OpenAPI contract. The evaluator looks for automated contract testing reports and documented resolution of discrepancies.",
    evaluatorCriteria: [
      "Automated contract testing tool (Prism, Pact, Dredd, or schema assertion tests) validates payloads against OpenAPI specs.",
      "Request headers, query parameters, bodies, and status codes conform exactly.",
      "Any discrepancies discovered during integration are logged and resolved.",
    ],
    concreteEvidence:
      "Provide contract test execution output and a resolved mismatch log documenting schema discrepancies and fixes.",
    pitfallToAvoid:
      "Updating code endpoints without updating the OpenAPI specification, or vice versa, causing drift.",
  },
  "4.3": {
    studentExplanation:
      "Demonstrate professional collaborative Git workflow: feature branches, atomic commits with conventional commit messages, detailed pull request descriptions, and peer review discussion.",
    evaluatorCriteria: [
      "Feature developed on a dedicated branch branching from main.",
      "Commits are atomic, descriptive, and follow conventional commit formats.",
      "Pull request includes context description, testing evidence, and review checklist.",
      "Code review comments are addressed with traceable follow-up commits prior to merge.",
    ],
    concreteEvidence:
      "Link to a merged GitHub pull request displaying full commit history, review comments, and closure evidence.",
    pitfallToAvoid:
      "Pushing single massive commits directly to main with vague commit messages such as 'update' or 'fix'.",
  },
  "4.4": {
    studentExplanation:
      "Demonstrate a balanced testing strategy combining unit tests, API integration tests, and end-to-end browser automation.",
    evaluatorCriteria: [
      "Unit tests cover domain logic and boundary calculations.",
      "API integration tests verify endpoint response codes, headers, and schemas.",
      "Browser tests (Playwright) automate critical user interaction journeys and verify page state.",
      "Tests execute repeatably and pass consistently in automated environments.",
    ],
    concreteEvidence:
      "Submit test runner output, coverage reports, and Playwright HTML trace recordings showing passing test scenarios.",
    pitfallToAvoid:
      "Testing only successful happy paths while omitting boundary cases, invalid input, and error handling scenarios.",
  },
  "4.5": {
    studentExplanation:
      "Containerize your application with Docker following industry security and size best practices. Images must be minimal, multi-stage, reproducible, and run without root privileges.",
    evaluatorCriteria: [
      "Multi-stage Dockerfile cleanly separates build dependencies from the minimal runtime image.",
      "Container runs as a dedicated non-root user (USER node or appuser).",
      ".dockerignore prevents build context bloat and prevents leaking .env or .git files.",
      "Image vulnerability scan (Trivy, Docker Scout, or Snyk) shows zero critical unpatched CVEs.",
    ],
    concreteEvidence:
      "Submit Dockerfiles, image build output, `docker inspect` metadata proving non-root user, and a clean vulnerability scan report.",
    pitfallToAvoid:
      "Running the container as root or copying `.env` secrets directly into image layers.",
  },
  "4.6": {
    studentExplanation:
      "Orchestrate frontend, backend, and database services using Docker Compose so the entire platform spins up cleanly with a single command.",
    evaluatorCriteria: [
      "docker-compose.yml defines all services, bridge networks, and persistent named volumes for the database.",
      "Health checks configured so backend services wait for database readiness before starting.",
      "Environment variables externalized via .env.example with zero hardcoded passwords.",
    ],
    concreteEvidence:
      "Provide the Docker Compose configuration file and terminal recording/logs showing `docker compose up` initializing all services into healthy states.",
    pitfallToAvoid:
      "Services failing on initial startup because the database container has not yet initialized its schema.",
  },
  "4.7": {
    studentExplanation:
      "Automate code quality gates with GitHub Actions. Every pull request must automatically trigger linting, TypeScript type checking, unit tests, and production build checks.",
    evaluatorCriteria: [
      "Workflow triggers on pull requests and pushes to the main branch.",
      "Pipeline jobs execute linting, type-checking, automated tests, and Docker build.",
      "Failed steps correctly block pull request merging.",
    ],
    concreteEvidence:
      "Submit the GitHub Actions workflow YAML file and links/screenshots of successful green CI runs across all jobs.",
    pitfallToAvoid:
      "Using `continue-on-error: true` on test or lint steps to artificially bypass failed builds.",
  },
  "4.8": {
    studentExplanation:
      "Deploy the application to an accessible hosting environment and provide a clear operational runbook so the reviewer can independently access, test, and verify the deployment.",
    evaluatorCriteria: [
      "Application is deployed and accessible on a staging or production URL.",
      "Reviewer runbook details environment prerequisites, test credentials, and verification steps.",
      "Deployment monitoring, release versioning, and basic telemetry are demonstrable.",
    ],
    concreteEvidence:
      "Submit the live application URL, reviewer runbook markdown document, and a short 2-minute demonstration video.",
    pitfallToAvoid:
      "Providing broken links, expired trial deployments, or omitting reviewer login credentials in the runbook.",
  },
  "4.9": {
    studentExplanation:
      "Demonstrate supply chain security and transport encryption. Audit dependencies for known vulnerabilities and ensure all HTTP traffic is encrypted using HTTPS/TLS.",
    evaluatorCriteria: [
      "Software Composition Analysis (SCA) report (npm audit, OWASP Dependency-Check, or Snyk) is clean.",
      "Identified vulnerabilities are remediated or formally documented with triage rationale.",
      "HTTPS/TLS enforced with automatic HTTP-to-HTTPS redirect and secure TLS configurations.",
    ],
    concreteEvidence:
      "Provide the SCA dependency scan report and certificate validation proof (SSL Labs, curl -v output, or browser certificate inspection).",
    pitfallToAvoid:
      "Ignoring critical dependency CVE warnings without documenting mitigation or library upgrade steps.",
  },
  "5.1": {
    studentExplanation:
      "Demonstrate foundational knowledge of cloud-native architecture: Infrastructure as Code (Terraform), serverless functions, cloud IAM security, and cost control mechanisms.",
    evaluatorCriteria: [
      "Cloud shared responsibility model accurately explained for the chosen provider.",
      "Infrastructure as Code principles (state management, declarative configuration, idempotency) articulated.",
      "Serverless event-driven execution models and cloud cost controls identified.",
    ],
    concreteEvidence:
      "Submit an annotated cloud responsibility map and concept analysis linking Terraform, serverless events, and IAM roles.",
    pitfallToAvoid:
      "Confusing IaaS virtual machine management with cloud-native serverless architecture.",
  },
  "5.2": {
    studentExplanation:
      "Identify and analyze cloud-specific security, operational, and financial risks: over-privileged IAM roles, public bucket exposures, configuration drift, and unexpected billing spikes.",
    evaluatorCriteria: [
      "Cloud risk register identifies concrete threats across privilege, secrets, drift, and cost.",
      "Appropriate technical controls (least-privilege IAM, secret managers, billing alarms) are assigned to each risk.",
      "Rollback and disaster recovery strategies are defined.",
    ],
    concreteEvidence:
      "Submit the completed cloud risk register with prioritized impact ratings and concrete mitigation controls.",
    pitfallToAvoid:
      "Assuming default cloud configurations are secure out-of-the-box without configuring explicit access controls.",
  },
  "5.3": {
    studentExplanation:
      "Design a modular, least-privileged cloud deployment topology using Terraform modules, serverless functions, managed persistence, and strict IAM boundary policies.",
    evaluatorCriteria: [
      "Cloud architecture topology diagram details networking, serverless compute, storage, and database.",
      "Terraform module design is clean, reusable, and parameter-driven.",
      "IAM policies adhere to least privilege with zero wildcard ('*') action permissions on resources.",
    ],
    concreteEvidence:
      "Provide the cloud topology diagram, Terraform module specifications, and least-privileged IAM policy documents.",
    pitfallToAvoid:
      "Using `AdministratorAccess` or broad wildcard policies for application runtime service accounts.",
  },
  "5.4": {
    studentExplanation:
      "Execute automated cloud provisioning with Terraform and deploy serverless application functionality with externalized secrets and verified cloud execution logs.",
    evaluatorCriteria: [
      "`terraform apply` provisions the cloud infrastructure repeatably without manual console tweaking.",
      "Secrets managed via cloud secret managers (AWS Secrets Manager / SSM Parameter Store) with zero hardcoded values.",
      "Serverless functions execute successfully on cloud events and generate structured execution logs.",
    ],
    concreteEvidence:
      "Submit Terraform provisioning logs, cloud console deployment screenshots, and live serverless invocation traces.",
    pitfallToAvoid:
      "Hardcoding secrets in Terraform variable defaults or `.tfvars` files committed to Git.",
  },
  "5.5": {
    studentExplanation:
      "Conduct a comprehensive operational and security readiness audit prior to product release, verifying public exposure controls, state drift, cost estimations, and monitoring alerts.",
    evaluatorCriteria: [
      "Security audit verifies public access blocks, encryption at rest, and transport encryption.",
      "`terraform plan` confirms zero configuration drift against the live cloud state.",
      "CloudWatch / monitoring metrics and budget alert thresholds are active.",
    ],
    concreteEvidence:
      "Submit the completed security and operational readiness checklist alongside drift verification output.",
    pitfallToAvoid:
      "Deploying cloud services without active billing budget alarms, creating risk of unexpected cloud invoices.",
  },
  "5.6": {
    studentExplanation:
      "Present and defend your cloud deployment live. The reviewer evaluates your demonstration of protected access, live serverless execution, and a controlled release or rollback.",
    evaluatorCriteria: [
      "Live demonstration of the operational cloud deployment.",
      "Controlled release and rollback demonstrated successfully without downtime or data corruption.",
      "Student articulates and defends architectural choices, security controls, and cost trade-offs under questioning.",
    ],
    concreteEvidence:
      "Provide a live demonstration recording or defense presentation deck supported by release evidence and rollback proof.",
    pitfallToAvoid:
      "Inability to explain why specific cloud resources, security groups, or IAM permissions were created.",
  },
  "5.7": {
    studentExplanation:
      "Implement reviewer feedback from the defense, update operational runbooks, and prove clean teardown with `terraform destroy` so no orphaned cloud resources generate ongoing costs.",
    evaluatorCriteria: [
      "Reviewer defense feedback addressed with verified code updates.",
      "Operational runbook updated with post-launch findings and troubleshooting steps.",
      "Safe teardown proven with `terraform destroy` log showing zero remaining billable resources.",
    ],
    concreteEvidence:
      "Submit the updated operational runbook, issue closure record, and clean `terraform destroy` confirmation output.",
    pitfallToAvoid:
      "Leaving billable cloud resources (e.g. idle databases, load balancers, NAT gateways) running after project submission.",
  },
};

/**
 * Fallback generator for custom or future sub-activities not in the CS102 catalogue.
 */
function generateFallbackGuidance(sub: SubActivity): EvaluationGuidance {
  const parts = sub.standard
    .split(";")
    .map((s) => s.trim())
    .filter((s) => s.length > 0);

  const criteria =
    parts.length > 1
      ? parts.map((p) => `${p.charAt(0).toUpperCase() + p.slice(1)}.`)
      : [
          `Submission satisfies: ${sub.standard}`,
          `Evidence directly demonstrates: ${sub.evidence}`,
          "Includes verifiable working outputs and documentation.",
        ];

  return {
    studentExplanation: `The evaluator assesses whether you can demonstrate '${sub.title}' with verifiable evidence. Your work must meet the formal curriculum threshold by showing structured methodology, working outputs, and clear documentation.`,
    evaluatorCriteria: criteria,
    concreteEvidence: `Submit ${sub.evidence.replace(/\.$/, "").toLocaleLowerCase()}, clearly labelled with notes explaining how each item satisfies the standard.`,
    pitfallToAvoid:
      "Submitting purely superficial files without demonstrating the underlying engineering logic or verifiable output.",
  };
}

export function getEvaluationGuidance(sub: SubActivity): EvaluationGuidance {
  return GUIDANCE_MAP[sub.id] ?? generateFallbackGuidance(sub);
}
