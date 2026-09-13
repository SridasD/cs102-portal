import type { CourseData, ProgramInfo, ThinkingSkill } from "../types";
import { CS102_DATA } from "./cs102";
import { CS501_DATA } from "./cs501";
import { CS601_DATA } from "./cs601";

export const PROGRAM_INFO: ProgramInfo = {
  code: "MSDSPD-2026",
  name: "M.Sc. Data Science & Product Development",
  degree: "Master of Science (M.Sc.)",
  academicYear: "2026 Batch",
  university: "Kerala University of Digital Sciences, Innovation and Technology",
  department: "School of Digital Sciences",
  tagline: "Activity-based, evidence-driven product engineering and cloud systems curriculum.",
  description:
    "An advanced, hands-on master's curriculum combining modern full-stack web architecture, AI systems, modern frontend engineering, data pipelines, and cloud-native serverless infrastructure.",
};

/**
 * Registry of all active courses in the MSDSPD 2026 curriculum portal.
 */
export const COURSES: Record<string, CourseData> = {
  cs102: CS102_DATA,
  cs501: CS501_DATA,
  cs601: CS601_DATA,
};

export interface SemesterCoursePreview {
  code: string;
  title: string;
  category: "core" | "elective";
  credits: number;
  ltp: string;
  description: string;
  status: "active" | "preview";
  slug?: string;
}

export const SEMESTER_1_CATALOG: {
  core: SemesterCoursePreview[];
  electives: SemesterCoursePreview[];
} = {
  core: [
    {
      code: "CS101",
      title: "Advanced AI & Machine Learning",
      category: "core",
      credits: 4,
      ltp: "3–0–1",
      description:
        "Deep learning foundations, Transformer architectures, neural networks, and scalable production ML deployment.",
      status: "preview",
    },
    {
      code: "CS102",
      title: "Full Stack Architecture & Cloud-Native Dev",
      category: "core",
      credits: 4,
      ltp: "1–0–3",
      description:
        "Modern full-stack web architecture, API engineering, relational persistence, secure containerized delivery, and cloud-native serverless systems.",
      status: "active",
      slug: "cs102",
    },
  ],
  electives: [
    {
      code: "CS501",
      title: "AI Ethics & Governance",
      category: "elective",
      credits: 3,
      ltp: "3–0–0",
      description:
        "Bias mitigation, algorithmic fairness, regulatory compliance (EU AI Act), model explainability, and responsible AI governance.",
      status: "active",
      slug: "cs501",
    },
    {
      code: "CS601",
      title: "Advanced Frontend Frameworks",
      category: "elective",
      credits: 3,
      ltp: "1–0–2",
      description:
        "Deep dive into React/Next.js or Vue/Nuxt: rendering topologies (CSR, SSR, SSG, ISR), state machines, headless design systems, and edge streaming.",
      status: "active",
      slug: "cs601",
    },
    {
      code: "CS1101",
      title: "Big Data Analytics",
      category: "elective",
      credits: 3,
      ltp: "2–0–1",
      description:
        "Processing massive datasets with Apache Spark and Apache Flink, distributed stream processing, and lakehouse pipeline architecture.",
      status: "preview",
    },
  ],
};

/** Tailwind classes per Thinking-Skill tag (badge fill + ring). */
export const TAG_STYLES: Record<ThinkingSkill, string> = {
  "Recall Fundamentals": "bg-slate-50 text-slate-700 ring-slate-200",
  "Understand Core Ideas": "bg-sky-50 text-sky-700 ring-sky-200",
  "Apply Principles": "bg-indigo-50 text-indigo-700 ring-indigo-200",
  "Analyse the Problem": "bg-amber-50 text-amber-700 ring-amber-200",
  "Review and Justify": "bg-violet-50 text-violet-700 ring-violet-200",
  "Design and Build": "bg-emerald-50 text-emerald-700 ring-emerald-200",
};

export const ALL_TAGS = Object.keys(TAG_STYLES) as ThinkingSkill[];

export function getAllCourses(): CourseData[] {
  return Object.values(COURSES);
}

export function getAllCourseSlugs(): string[] {
  return Object.keys(COURSES);
}

export function getCourseBySlug(slug: string): CourseData | undefined {
  const normalized = slug.trim().toLowerCase();
  return COURSES[normalized];
}

export interface ComputedCourseStats {
  totalHours: number;
  credits: number;
  activityCount: number;
  subActivityCount: number;
  partHours: Record<string, number>;
}

export function getCourseStats(courseData: CourseData): ComputedCourseStats {
  const activityCount = courseData.activities.length;
  const subActivityCount = courseData.activities.reduce((sum, a) => sum + a.subs.length, 0);

  const partHours: Record<string, number> = {};
  for (const act of courseData.activities) {
    partHours[act.part] = (partHours[act.part] ?? 0) + act.hours;
  }

  return {
    totalHours: courseData.course.totalHours,
    credits: courseData.course.credits,
    activityCount,
    subActivityCount,
    partHours,
  };
}
