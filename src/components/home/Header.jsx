import { Briefcase, Building2, Plus } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

export default function Header() {
  const { user, setUser } = useAuth();

  const naivagate = useNavigate();

  const location = useLocation();
  const currentPath = location.pathname;

  let type = user?.role || "guest";

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[hsl(var(--color-border))] bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <div className="flex items-center gap-8">
          <Link to="/" className="flex items-center space-x-2">
            <Briefcase className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold">LWS Job Portal</span>
          </Link>

          {/* Company navigation */}
          {type === "COMPANY" && (
            <nav className="hidden md:flex items-center gap-6">
              <Link
                to="/company-dashboard"
                className="text-sm font-medium text-[hsl(var(--color-primary))]"
              >
                Dashboard
              </Link>
              <Link
                to="#"
                className="text-sm font-medium text-[hsl(var(--color-muted-foreground))] transition-colors hover:text-[hsl(var(--color-primary))]"
              >
                Manage Jobs
              </Link>
              <Link
                to="#"
                className="text-sm font-medium text-[hsl(var(--color-muted-foreground))] transition-colors hover:text-[hsl(var(--color-primary))]"
              >
                Applicants
              </Link>
            </nav>
          )}
        </div>

        {/* Right section */}
        <div className="flex items-center gap-4">
          {/* Guest */}

          {type === "guest" && (
            <>
              {/* On Home Page */}
              {currentPath === "/" && (
                <Link to="/login" className="btn btn-primary text-sm">
                  Sign in
                </Link>
              )}

              {/* On Login Page */}
              {currentPath === "/login" && (
                <div className="text-sm">
                  Don’t have an account?{" "}
                  <Link
                    to="/register"
                    className="font-medium text-primary hover:underline"
                  >
                    Sign up
                  </Link>
                </div>
              )}

              {/* On Register Page */}
              {currentPath === "/register" && (
                <div className="text-sm">
                  Already have an account?{" "}
                  <Link
                    to="/login"
                    className="font-medium text-primary hover:underline"
                  >
                    Login
                  </Link>
                </div>
              )}
            </>
          )}

          {/* User */}
          {type === "USER" && (
            <>
              <span className="text-sm text-muted-foreground">
                Welcome, {user?.name || "User"}
              </span>
              <button
                onClick={() => {
                  (setUser({}), naivagate("/"));
                }}
                className="btn btn-ghost text-sm"
              >
                Sign Out
              </button>
              <Link to="/post-job" className="btn btn-primary text-sm">
                Post a Job
              </Link>
              <Link to="/profile" className="btn btn-primary text-sm">
                Profile
              </Link>
            </>
          )}

          {/* Company */}
          {type === "COMPANY" && (
            <>
              <Link
                to="/post-job"
                className="btn btn-primary flex items-center"
              >
                <Plus className="h-4 w-4 mr-2" />
                Post Job
              </Link>
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-full bg-[hsl(var(--color-secondary))] flex items-center justify-center">
                  <Building2 className="h-4 w-4 text-[hsl(var(--color-primary))]" />
                </div>
                <span className="text-sm font-medium hidden md:inline">
                  {user?.name || "Company Name"}
                </span>
                <button
                  onClick={() => {
                    (setUser({}), naivagate("/"));
                  }}
                  className="btn btn-ghost text-sm"
                >
                  Sign Out
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
