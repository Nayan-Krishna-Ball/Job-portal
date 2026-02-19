//
import { Briefcase } from "lucide-react";

export default function HomeHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-8">
          <a href="index.html" className="flex items-center space-x-2">
            <Briefcase className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold">LWS Job Portal</span>
          </a>
        </div>
        <div className="flex items-center gap-4">
          <a href="login.html" className="btn btn-ghost text-sm">
            Sign In
          </a>
          <a href="register-company.html" className="btn btn-primary text-sm">
            Post a Job
          </a>
        </div>
      </div>
    </header>
  );
}
