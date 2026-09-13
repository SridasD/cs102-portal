import {
  ArrowRight,
  Award,
  BookOpen,
  CheckCircle2,
  Clock,
  Compass,
  GraduationCap,
  Layers,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
import { COURSES, PROGRAM_INFO, getCourseStats } from "@/lib/courses";
import { Badge } from "./Badge";

export function ProgramHub() {
  const allCourses = Object.values(COURSES);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* Institutional Top Bar */}
      <div className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3 sm:px-8">
          <div className="flex items-center gap-2 text-xs text-slate-600 sm:text-sm">
            <GraduationCap className="h-4 w-4 text-indigo-600" />
            <span className="font-semibold text-slate-900">{PROGRAM_INFO.university}</span>
            <span className="hidden text-slate-300 sm:inline">/</span>
            <span className="hidden text-slate-500 sm:inline">{PROGRAM_INFO.department}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="rounded-md bg-indigo-50 px-2 py-1 text-xs font-semibold text-indigo-700 ring-1 ring-inset ring-indigo-200">
              {PROGRAM_INFO.academicYear}
            </span>
          </div>
        </div>
      </div>

      {/* Program Hero */}
      <header className="relative overflow-hidden border-b border-slate-200 bg-white">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/50 via-white to-sky-50/40 pointer-events-none" />
        <div className="relative mx-auto max-w-6xl px-5 py-12 sm:px-8 sm:py-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-white/80 px-3 py-1 text-xs font-medium text-indigo-700 shadow-sm backdrop-blur">
            <Sparkles className="h-3.5 w-3.5 text-indigo-600" />
            <span>Master of Science Curriculum Portal</span>
          </div>

          <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            {PROGRAM_INFO.name}
          </h1>

          <p className="mt-3 max-w-3xl text-base leading-relaxed text-slate-600 sm:text-lg">
            {PROGRAM_INFO.description}
          </p>

          {/* Quick Program Metric Cards */}
          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
            <div className="rounded-xl border border-slate-200 bg-white/90 p-4 shadow-sm backdrop-blur">
              <div className="flex items-center gap-2 text-xs font-medium text-slate-500">
                <BookOpen className="h-4 w-4 text-indigo-600" />
                <span>Program Batch</span>
              </div>
              <div className="mt-2 text-xl font-bold text-slate-900 sm:text-2xl">2026 Batch</div>
              <div className="mt-0.5 text-xs text-slate-400">School of Digital Sciences</div>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white/90 p-4 shadow-sm backdrop-blur">
              <div className="flex items-center gap-2 text-xs font-medium text-slate-500">
                <Layers className="h-4 w-4 text-emerald-600" />
                <span>Active Modules</span>
              </div>
              <div className="mt-2 text-xl font-bold text-slate-900 sm:text-2xl">{allCourses.length} Courses</div>
              <div className="mt-0.5 text-xs text-slate-400">Activity-based delivery</div>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white/90 p-4 shadow-sm backdrop-blur">
              <div className="flex items-center gap-2 text-xs font-medium text-slate-500">
                <Clock className="h-4 w-4 text-sky-600" />
                <span>Practical Hours</span>
              </div>
              <div className="mt-2 text-xl font-bold text-slate-900 sm:text-2xl">120+ hrs</div>
              <div className="mt-0.5 text-xs text-slate-400">Evidence-driven threshold</div>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white/90 p-4 shadow-sm backdrop-blur">
              <div className="flex items-center gap-2 text-xs font-medium text-slate-500">
                <ShieldCheck className="h-4 w-4 text-violet-600" />
                <span>Curriculum Standard</span>
              </div>
              <div className="mt-2 text-xl font-bold text-slate-900 sm:text-2xl">OWASP &amp; Cloud</div>
              <div className="mt-0.5 text-xs text-slate-400">Industry-aligned rubrics</div>
            </div>
          </div>
        </div>
      </header>

      {/* Course Catalog / Modules Section */}
      <main className="mx-auto max-w-6xl px-5 py-12 sm:px-8">
        <div className="flex items-end justify-between border-b border-slate-200 pb-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-600">Course Catalog</span>
            <h2 className="mt-1 text-2xl font-bold text-slate-900">Curriculum Offerings</h2>
          </div>
          <span className="text-xs text-slate-500">Select a course to view activity details &amp; evaluation standards</span>
        </div>

        <div className="mt-8 space-y-6">
          {allCourses.map((c) => {
            const stats = getCourseStats(c);
            return (
              <div
                key={c.slug}
                className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-indigo-200 hover:shadow-md sm:p-8"
              >
                <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2.5">
                      <span className="rounded-lg bg-indigo-600 px-3 py-1 text-sm font-bold tracking-tight text-white">
                        {c.course.code}
                      </span>
                      <Badge className="bg-slate-100 text-slate-700 ring-slate-200">
                        {c.course.semester}
                      </Badge>
                      <Badge className="bg-emerald-50 text-emerald-700 ring-emerald-200">
                        Active Curriculum
                      </Badge>
                      <span className="text-xs text-slate-400 tabular-nums">L–T–P {c.course.ltp}</span>
                    </div>

                    <h3 className="mt-3 text-xl font-bold text-slate-900 transition-colors group-hover:text-indigo-600 sm:text-2xl">
                      <Link href={`/courses/${c.slug}`}>
                        {c.course.title}
                      </Link>
                    </h3>

                    <p className="mt-2 text-sm leading-relaxed text-slate-600">
                      {c.shortDesc}
                    </p>

                    {/* Part breakdown chips */}
                    <div className="mt-4 flex flex-wrap items-center gap-2">
                      {c.parts?.map((part) => (
                        <span
                          key={part.id}
                          className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs text-slate-700"
                        >
                          <span
                            className={`h-2 w-2 rounded-full ${
                              part.color === "sky" ? "bg-sky-500" : "bg-indigo-500"
                            }`}
                          />
                          <span className="font-semibold">{part.label}</span>
                          <span className="text-slate-400">({stats.partHours[part.id] ?? 0} hrs)</span>
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Course stats & action */}
                  <div className="flex shrink-0 flex-col items-start gap-4 lg:items-end">
                    <div className="grid grid-cols-3 gap-3 rounded-xl border border-slate-100 bg-slate-50 p-3 text-center">
                      <div className="px-2">
                        <div className="text-base font-bold text-slate-900 tabular-nums">{c.course.credits}</div>
                        <div className="text-[10px] uppercase tracking-wider text-slate-400">Credits</div>
                      </div>
                      <div className="border-x border-slate-200 px-2">
                        <div className="text-base font-bold text-slate-900 tabular-nums">{stats.activityCount}</div>
                        <div className="text-[10px] uppercase tracking-wider text-slate-400">Activities</div>
                      </div>
                      <div className="px-2">
                        <div className="text-base font-bold text-slate-900 tabular-nums">{stats.subActivityCount}</div>
                        <div className="text-[10px] uppercase tracking-wider text-slate-400">Sub-tasks</div>
                      </div>
                    </div>

                    <Link
                      href={`/courses/${c.slug}`}
                      className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:bg-indigo-600 sm:w-auto"
                    >
                      <span>Explore Course Curriculum</span>
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Learning Framework Features */}
        <section className="mt-16 rounded-2xl border border-slate-200 bg-white p-8 sm:p-10">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-600">Educational Model</span>
            <h3 className="mt-1 text-xl font-bold text-slate-900 sm:text-2xl">
              Activity-Based Curriculum Architecture
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              The MSDSPD program replaces passive lectures with operationalized, verifiable engineering deliverables.
            </p>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            <div className="rounded-xl border border-slate-100 bg-slate-50 p-5">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-600 text-white">
                <Compass className="h-5 w-5" />
              </div>
              <h4 className="mt-4 text-base font-bold text-slate-900">Transparent Standards</h4>
              <p className="mt-1.5 text-xs leading-relaxed text-slate-600">
                Every sub-activity has an unambiguous assessment threshold so students know exactly what meets the standard before submitting.
              </p>
            </div>

            <div className="rounded-xl border border-slate-100 bg-slate-50 p-5">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-600 text-white">
                <CheckCircle2 className="h-5 w-5" />
              </div>
              <h4 className="mt-4 text-base font-bold text-slate-900">Verifiable Evidence</h4>
              <p className="mt-1.5 text-xs leading-relaxed text-slate-600">
                Students demonstrate mastery through working repositories, containerized builds, OpenAPI contracts, and live cloud demonstrations.
              </p>
            </div>

            <div className="rounded-xl border border-slate-100 bg-slate-50 p-5">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-sky-600 text-white">
                <Award className="h-5 w-5" />
              </div>
              <h4 className="mt-4 text-base font-bold text-slate-900">Self-Paced Resources</h4>
              <p className="mt-1.5 text-xs leading-relaxed text-slate-600">
                Curated industry-grade specifications, RFCs, OWASP cheat sheets, and Harvard/Full Stack Open MOOCs linked directly at each task.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Program Footer */}
      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 py-8 text-xs text-slate-500 sm:flex-row sm:px-8">
          <div>
            <span className="font-semibold text-slate-700">{PROGRAM_INFO.university}</span> — {PROGRAM_INFO.department}
          </div>
          <div className="text-slate-400">
            Hours are learning-effort estimates, not attendance requirements.
          </div>
        </div>
      </footer>
    </div>
  );
}
