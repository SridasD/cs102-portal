"use client";

import {
  Award,
  Boxes,
  ChevronDown,
  Cloud,
  Database,
  Layers,
  MonitorSmartphone,
  Server,
} from "lucide-react";
import type { ComponentType } from "react";
import type { Activity, ActivityIcon, SubActivity } from "@/lib/types";
import { Badge } from "./Badge";
import { SubActivityDetail } from "./SubActivityDetail";

const ACT_ICONS: Record<ActivityIcon, ComponentType<{ className?: string }>> = {
  frontend: MonitorSmartphone,
  backend: Server,
  database: Database,
  integration: Boxes,
  cloud: Cloud,
};

export function ActivityCard({
  activity,
  index,
  open,
  onToggle,
  visibleSubs,
}: {
  activity: Activity;
  index: number;
  open: boolean;
  onToggle: () => void;
  visibleSubs: SubActivity[];
}) {
  const Icon = ACT_ICONS[activity.icon] ?? Layers;
  const isCloud = activity.part === "II";
  const spine = isCloud ? "bg-sky-500" : "bg-indigo-500";
  const iconWrap = isCloud ? "bg-sky-50 text-sky-600" : "bg-indigo-50 text-indigo-600";
  const chip = isCloud
    ? "bg-sky-50 text-sky-700 ring-sky-200"
    : "bg-indigo-50 text-indigo-700 ring-indigo-200";
  const panelId = `${activity.id}-panel`;
  const btnId = `${activity.id}-button`;

  return (
    <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <span className={`absolute inset-y-0 left-0 w-1 ${spine}`} aria-hidden="true" />

      <h3>
        <button
          id={btnId}
          type="button"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={onToggle}
          className="flex w-full items-center gap-4 px-5 py-4 text-left transition-colors hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-indigo-500 sm:px-6"
        >
          <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${iconWrap}`}>
            <Icon className="h-5 w-5" />
          </div>

          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold tabular-nums text-slate-400">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="text-xs font-medium text-slate-400">{activity.id}</span>
            </div>
            <div className="mt-0.5 truncate text-base font-semibold text-slate-900">
              {activity.title}
            </div>
            <div className="mt-0.5 truncate text-sm text-slate-500">{activity.desc}</div>
          </div>

          <div className="hidden shrink-0 items-center gap-2 sm:flex">
            <Badge className={chip}>{activity.subs.length} sub-activities</Badge>
            <Badge className="bg-slate-900 text-white ring-slate-900 tabular-nums">
              {activity.hours} hrs
            </Badge>
          </div>

          <ChevronDown
            className={`h-5 w-5 shrink-0 text-slate-400 transition-transform duration-300 ${
              open ? "rotate-180" : ""
            }`}
            aria-hidden="true"
          />
        </button>
      </h3>

      {/* CSS grid-rows accordion: 0fr -> 1fr animates height with no fixed max-height */}
      <div
        id={panelId}
        role="region"
        aria-labelledby={btnId}
        aria-hidden={!open}
        className="grid transition-all duration-300 ease-out"
        style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
      >
        <div className="overflow-hidden">
          <div className="border-t border-slate-100 bg-slate-50 px-5 py-5 sm:px-6">
            <div className="mb-4 flex items-start gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-600">
              <Award className="mt-0.5 h-4 w-4 shrink-0 text-slate-400" aria-hidden="true" />
              <p>
                <span className="font-medium text-slate-800">Outcome. </span>
                {activity.outcome}
              </p>
            </div>

            <div className="grid grid-cols-1 gap-3 lg:grid-cols-2">
              {visibleSubs.map((sub) => (
                <SubActivityDetail key={sub.id} sub={sub} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
