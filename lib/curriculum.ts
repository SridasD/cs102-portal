import { CS102_DATA } from "./courses/cs102";
import { ALL_TAGS, COURSES, TAG_STYLES, getAllCourses, getCourseBySlug, getCourseStats } from "./courses";
import type { Activity, Course, Resource, ThinkingSkill } from "./types";

export { ALL_TAGS, COURSES, TAG_STYLES, getAllCourses, getCourseBySlug, getCourseStats };
export type { Activity, Course, Resource, ThinkingSkill };

/* Default CS102 exports for backwards compatibility */
export const COURSE: Course = CS102_DATA.course;
export const ACTIVITIES: Activity[] = CS102_DATA.activities;
export const RESOURCES: Record<string, Resource> = CS102_DATA.resources;

export const PART_I_HOURS = ACTIVITIES.filter((a) => a.part === "I").reduce((n, a) => n + a.hours, 0);
export const PART_II_HOURS = ACTIVITIES.filter((a) => a.part === "II").reduce((n, a) => n + a.hours, 0);
export const SUB_COUNT = ACTIVITIES.reduce((n, a) => n + a.subs.length, 0);

export const ACTIVITY_INDEX: Record<string, number> = Object.fromEntries(
  ACTIVITIES.map((a, i) => [a.id, i]),
);
