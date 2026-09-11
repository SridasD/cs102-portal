import { Clock } from "lucide-react";
import type { ReactNode } from "react";

export function Badge({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-medium ring-1 ring-inset ${className}`}
    >
      {children}
    </span>
  );
}

export function HoursBadge({ hours }: { hours: number }) {
  return (
    <Badge className="bg-white text-slate-600 ring-slate-200 tabular-nums">
      <Clock className="h-3 w-3" aria-hidden="true" />
      {hours} hrs
    </Badge>
  );
}
