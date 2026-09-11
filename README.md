# CS102 Curriculum Portal

A single-course curriculum viewer for **CS102 — Full Stack Architecture & Cloud-Native Development** (Semester 1). Built with Next.js (App Router), React, TypeScript, Tailwind CSS and Lucide icons.

## Features

- Course header with quick-stat strip (hours, credits, activities, sub-activities, Part I/II split).
- Five main **Activities** as accordion cards; expand one, several, or all.
- Each expanded activity reveals its **Sub-Activities** with: code + title, Thinking-Skill tag, hours/marks, required evidence, evaluation standard (Meets threshold), and clickable learning resources.
- Client-side **search** (title, evidence, standard) and **Thinking-Skill tag filters**.
- **Stack Declaration** prerequisite gate and a **Part I (Full Stack) / Part II (Cloud)** split with distinct accent colours.
- Accessible: semantic landmarks, `aria-expanded` / `aria-controls`, keyboard operable, visible focus, and reduced-motion support.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

Requires Node.js 18.17+.

## Structure

```
app/
  layout.tsx          Root layout, loads Inter via next/font
  page.tsx            Composes CourseHeader + ActivityList
  globals.css         Tailwind directives + reduced-motion
components/
  Badge.tsx           Badge, HoursBadge primitives
  CourseHeader.tsx    Course identity + quick stats (server component)
  ActivityList.tsx    Filters, expand state, Part I/II sections, gate ("use client")
  ActivityCard.tsx    Accordion card + panel ("use client")
  SubActivityDetail.tsx  One sub-activity's evidence/standard/resources
lib/
  types.ts            Domain types
  curriculum.ts       CS102 v2 data, resources, tag styles, derived helpers
```

## Editing the curriculum

All content lives in `lib/curriculum.ts`. To add a sub-activity, push an object onto the relevant activity's `subs` array; `hours` doubles as its mark weight, and `resources` holds ids that resolve against `RESOURCES`. Adding a new activity for a future semester means one new entry in `ACTIVITIES` — the header stats, Part I/II sections and counts all derive automatically.

## Notes

- The accordion animates height using the CSS `grid-template-rows: 0fr → 1fr` technique, so panels grow to their natural height without a hard-coded `max-height`.
- Marks equal indicative hours (course total 120); hours are learning-effort estimates, not attendance.
- Data reflects the CS102 v2 plan (operationalized 3-tier rubric, mark allocation, formal IDs, OWASP-based application-security depth, student-chosen stack, WCAG 2.2).
