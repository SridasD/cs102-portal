import {
  Award,
  BookOpen,
  Clock,
  Cloud,
  GraduationCap,
  Layers,
  MonitorSmartphone,
} from "lucide-react";
import type { ComponentType } from "react";
import {
  ACTIVITIES,
  COURSE,
  PART_I_HOURS,
  PART_II_HOURS,
  SUB_COUNT,
} from "@/lib/curriculum";

function Stat({
  icon: Icon,
  label,
  value,
  accent = "text-indigo-600",
}: {
  icon: ComponentType<{ className?: string }>;
  label: string;
  value: number | string;
  accent?: string;
}) {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3">
      <div className={`flex h-9 w-9 items-center justify-center rounded-lg bg-slate-50 ${accent}`}>
        <Icon className="h-[18px] w-[18px]" />
      </div>
      <div className="leading-tight">
        <div className="text-lg font-semibold tabular-nums text-slate-900">{value}</div>
        <div className="text-xs text-slate-500">{label}</div>
      </div>
    </div>
  );
}

export function CourseHeader() {
  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="mx-auto max-w-6xl px-5 py-8 sm:px-8">
        <div className="flex items-center gap-2 text-sm text-slate-500">
          <GraduationCap className="h-4 w-4 text-indigo-600" aria-hidden="true" />
          <span className="font-medium text-slate-700">{COURSE.department}</span>
          <span className="text-slate-300">/</span>
          <span>{COURSE.semester}</span>
        </div>

        <div className="mt-4 max-w-2xl">
          <div className="flex items-center gap-3">
            <span className="rounded-lg bg-indigo-600 px-2.5 py-1 text-sm font-semibold tracking-tight text-white">
              {COURSE.code}
            </span>
            <span className="text-sm text-slate-400 tabular-nums">L–T–P {COURSE.ltp}</span>
          </div>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            {COURSE.title}
          </h1>
          <p className="mt-2 text-sm leading-relaxed text-slate-500">
            {COURSE.university}. An activity-based curriculum with clear evidence requirements,
            practical learning resources, and transparent review standards.
          </p>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          <Stat icon={Clock} label="Total hours" value={COURSE.totalHours} />
          <Stat icon={Award} label="Credits" value={COURSE.credits} accent="text-violet-600" />
          <Stat icon={Layers} label="Activities" value={ACTIVITIES.length} accent="text-emerald-600" />
          <Stat icon={BookOpen} label="Sub-activities" value={SUB_COUNT} accent="text-sky-600" />
          <Stat icon={MonitorSmartphone} label="Full-stack hrs" value={PART_I_HOURS} accent="text-indigo-600" />
          <Stat icon={Cloud} label="Cloud hrs" value={PART_II_HOURS} accent="text-sky-600" />
        </div>
      </div>
    </header>
  );
}
