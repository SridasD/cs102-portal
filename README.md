# MSDSPD 2026 Curriculum Portal

An activity-based curriculum portal for the **M.Sc. Data Science & Product Development (MSDSPD 2026 Batch)** at the **School of Digital Sciences, Kerala University of Digital Sciences, Innovation and Technology (DUK)**.

Built with Next.js (App Router), React, TypeScript, Tailwind CSS, and Lucide icons.

## Features

- **Multi-Course Routing Architecture**:
  - `/`: **MSDSPD 2026 Program Hub** — Course directory, program stats, semester cards, and quick navigation.
  - `/courses/[code]`: **Interactive Course Portal** (e.g. `/courses/cs102`) with the full accordion activity viewer, search, filters, and dynamic course switcher.
  - `/cs102`: Direct short URL rewrite to `/courses/cs102`.
- **Dynamic Course Registry**: Courses are modularized under `lib/courses/` with customizable parts, activities, evidence thresholds, and learning resources.
- **Course Header & Metrics**: Quick-stat strip dynamically computed from course data (hours, credits, activities, sub-activities, part breakdowns).
- **Activity & Sub-Activity Accordion**:
  - Expand one, several, or all activities.
  - Sub-activities display code + title, Thinking-Skill tag, hours/marks, required evidence, assessment standard (Meets threshold), and clickable learning resources.
- **Client-Side Search & Tag Filtering**: Instant search across title, evidence, and standards, along with Thinking-Skill filters.
- **Accessible & Responsive**: Semantic landmarks, keyboard navigation, visible focus indicators, and reduced-motion support.

## Getting Started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

Requires Node.js 18.17+.

## Project Structure

```
app/
  layout.tsx              Root layout, loads Inter via next/font
  page.tsx                Program Hub landing page (MSDSPD 2026)
  courses/[code]/page.tsx Dynamic route for individual courses
  globals.css             Tailwind directives + reduced-motion
components/
  ProgramHub.tsx          Program dashboard & course directory
  CourseHeader.tsx        Course identity, breadcrumb, and quick stats
  ActivityList.tsx        Filters, expand state, part sections ("use client")
  ActivityCard.tsx        Accordion card + panel ("use client")
  SubActivityDetail.tsx   Sub-activity evidence/standard/resources ("use client")
  Badge.tsx               Badge primitives
lib/
  courses/
    index.ts              Central course registry & program metadata
    cs102.ts              CS102 full curriculum data & resources
  types.ts                Domain types (Course, CourseData, CoursePart, etc.)
  curriculum.ts           Backwards-compatible facade
```

## Adding a New Course

1. Create a course file in `lib/courses/<course_code>.ts` (e.g. `lib/courses/cs103.ts`) implementing `CourseData`.
2. Register the course in `lib/courses/index.ts`:
   ```ts
   import { CS103_DATA } from "./cs103";

   export const COURSES: Record<string, CourseData> = {
     cs102: CS102_DATA,
     cs103: CS103_DATA,
   };
   ```
3. The Program Hub, route `/courses/cs103`, header stats, and course switcher will automatically pick up the new course without any additional configuration.

## Evaluation Philosophy

- Marks equal indicative hours; hours are learning-effort estimates, not attendance.
- Operationalized 3-tier rubric ("Meets standard" threshold).
- Industry-aligned requirements: OWASP application security depth, clean architecture, verifiable repository and deployment proof.
