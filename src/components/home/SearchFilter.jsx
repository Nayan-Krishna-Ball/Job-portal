//
import { Search } from "lucide-react";

export default function SearchFilter() {
  return (
    <>
      <div className="card p-6">
        <div className="space-y-4">
          {/* <!-- Search Bar --> */}
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 ring ring-transparent focus-within:ring-primary rounded-md place-content-center transition-all">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search jobs by title, skill..."
                  className="input pl-10 w-full outline-none border-none"
                />
              </div>
            </div>

            <button className="btn btn-primary flex gap-2">
              <Search className="h-4 w-4 mr-2" />
              Search Jobs
            </button>
          </div>

          {/* <!-- Filters --> */}
          <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-[hsl(var(--color-border))]">
            <span className="text-sm font-medium text-muted-foreground mr-2">
              Filters:
            </span>

            {/* <!-- Job Type Dropdown --> */}
            <div className="dropdown">
              <button
                className="btn btn-outline text-xs h-8 px-3 flex items-center"
                // onclick="toggleDropdown('jobTypeDropdown')"
              >
                Job Type
                <i data-lucide="chevron-down" className="ml-2 h-3 w-3"></i>
              </button>
              <div id="jobTypeDropdown" className="dropdown-content card p-2">
                <div className="space-y-1">
                  <label className="flex items-center gap-2 p-2 hover:bg-accent rounded cursor-pointer">
                    <input type="checkbox" className="rounded border-input" />
                    <span className="text-sm">Full-time</span>
                  </label>
                  <label className="flex items-center gap-2 p-2 hover:bg-accent rounded cursor-pointer">
                    <input type="checkbox" className="rounded border-input" />
                    <span className="text-sm">Part-time</span>
                  </label>
                  <label className="flex items-center gap-2 p-2 hover:bg-accent rounded cursor-pointer">
                    <input type="checkbox" className="rounded border-input" />
                    <span className="text-sm">Contract</span>
                  </label>
                  <label className="flex items-center gap-2 p-2 hover:bg-accent rounded cursor-pointer">
                    <input type="checkbox" className="rounded border-input" />
                    <span className="text-sm">Internship</span>
                  </label>
                </div>
              </div>
            </div>

            {/* <!-- Experience Level Dropdown --> */}
            <div className="dropdown">
              <button
                className="btn btn-outline text-xs h-8 px-3 flex items-center"
                // onclick="toggleDropdown('experienceDropdown')"
              >
                Experience Level
                <i data-lucide="chevron-down" className="ml-2 h-3 w-3"></i>
              </button>
              <div
                id="experienceDropdown"
                className="dropdown-content card p-2"
              >
                <div className="space-y-1">
                  <label className="flex items-center gap-2 p-2 hover:bg-accent rounded cursor-pointer">
                    <input type="checkbox" className="rounded border-input" />
                    <span className="text-sm">Entry Level</span>
                  </label>
                  <label className="flex items-center gap-2 p-2 hover:bg-accent rounded cursor-pointer">
                    <input type="checkbox" className="rounded border-input" />
                    <span className="text-sm">Mid Level</span>
                  </label>
                  <label className="flex items-center gap-2 p-2 hover:bg-accent rounded cursor-pointer">
                    <input type="checkbox" className="rounded border-input" />
                    <span className="text-sm">Senior Level</span>
                  </label>
                  <label className="flex items-center gap-2 p-2 hover:bg-accent rounded cursor-pointer">
                    <input type="checkbox" className="rounded border-input" />
                    <span className="text-sm">Lead/Principal</span>
                  </label>
                </div>
              </div>
            </div>

            {/* <!-- Salary Range Dropdown --> */}
            <div className="dropdown">
              <button
                className="btn btn-outline text-xs h-8 px-3 flex items-center"
                // onclick="toggleDropdown('salaryDropdown')"
              >
                Salary Range
                <i data-lucide="chevron-down" className="ml-2 h-3 w-3"></i>
              </button>
              <div id="salaryDropdown" className="dropdown-content card p-2">
                <div className="space-y-1">
                  <label className="flex items-center gap-2 p-2 hover:bg-accent rounded cursor-pointer">
                    <input type="checkbox" className="rounded border-input" />
                    <span className="text-sm">$0 - $50k</span>
                  </label>
                  <label className="flex items-center gap-2 p-2 hover:bg-accent rounded cursor-pointer">
                    <input type="checkbox" className="rounded border-input" />
                    <span className="text-sm">$50k - $100k</span>
                  </label>
                  <label className="flex items-center gap-2 p-2 hover:bg-accent rounded cursor-pointer">
                    <input type="checkbox" className="rounded border-input" />
                    <span className="text-sm">$100k - $150k</span>
                  </label>
                  <label className="flex items-center gap-2 p-2 hover:bg-accent rounded cursor-pointer">
                    <input type="checkbox" className="rounded border-input" />
                    <span className="text-sm">$150k+</span>
                  </label>
                </div>
              </div>
            </div>

            {/* <!-- Skills Dropdown --> */}
            <div className="dropdown">
              <button
                className="btn btn-outline text-xs h-8 px-3 flex items-center"
                // onclick="toggleDropdown('skillsDropdown')"
              >
                Skills
                <i data-lucide="chevron-down" className="ml-2 h-3 w-3"></i>
              </button>
              <div id="skillsDropdown" className="dropdown-content card p-2">
                <div className="space-y-1">
                  <label className="flex items-center gap-2 p-2 hover:bg-accent rounded cursor-pointer">
                    <input type="checkbox" className="rounded border-input" />
                    <span className="text-sm">React</span>
                  </label>
                  <label className="flex items-center gap-2 p-2 hover:bg-accent rounded cursor-pointer">
                    <input type="checkbox" className="rounded border-input" />
                    <span className="text-sm">Node.js</span>
                  </label>
                  <label className="flex items-center gap-2 p-2 hover:bg-accent rounded cursor-pointer">
                    <input type="checkbox" className="rounded border-input" />
                    <span className="text-sm">Python</span>
                  </label>
                  <label className="flex items-center gap-2 p-2 hover:bg-accent rounded cursor-pointer">
                    <input type="checkbox" className="rounded border-input" />
                    <span className="text-sm">TypeScript</span>
                  </label>
                </div>
              </div>
            </div>

            <button className="btn btn-ghost text-xs h-8 px-3 text-muted-foreground hover:text-foreground">
              Clear All
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
