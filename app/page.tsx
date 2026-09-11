import { ActivityList } from "@/components/ActivityList";
import { CourseHeader } from "@/components/CourseHeader";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <CourseHeader />
      <main>
        <ActivityList />
      </main>
      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-5 py-6 text-xs text-slate-400 sm:px-8">
          Hours are learning-effort estimates, not attendance requirements.
        </div>
      </footer>
    </div>
  );
}
