//

import { Search } from "lucide-react";

export default function HeroPart() {
  return (
    <main className="container mx-auto px-4 py-8">
      {/* <!-- Hero Section --> */}
      <section className="mb-12">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Find Your Dream Job
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Discover thousands of job opportunities from top companies. Your
            next career move starts here.
          </p>
        </div>
      </section>

      {/* <!-- Search and Filters --> */}
      <section className="mb-8">
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
                  onclick="toggleDropdown('jobTypeDropdown')"
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
                  onclick="toggleDropdown('experienceDropdown')"
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
                  onclick="toggleDropdown('salaryDropdown')"
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
                  onclick="toggleDropdown('skillsDropdown')"
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
      </section>

      {/* <!-- Results Header --> */}
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-semibold">Available Jobs</h2>
          <p className="text-sm text-muted-foreground mt-1">
            Showing 1,247 results
          </p>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm text-muted-foreground">Sort by:</span>
          <div className="dropdown">
            <button
              className="btn btn-outline text-sm h-9"
              onclick="toggleDropdown('sortDropdown')"
            >
              Most Recent
              <i data-lucide="chevron-down" className="ml-2 h-3 w-3"></i>
            </button>
            <div id="sortDropdown" className="dropdown-content card p-2">
              <button className="w-full text-left text-sm p-2 hover:bg-accent rounded">
                Most Recent
              </button>

              <button className="w-full text-left text-sm p-2 hover:bg-accent rounded">
                Salary (High to Low)
              </button>
              <button className="w-full text-left text-sm p-2 hover:bg-accent rounded">
                Salary (Low to High)
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Job Cards Grid --> */}
      <div className="grid gap-4 md:gap-6">
        {/* <!-- Job Card 1 --> */}
        <article className="card p-6 hover:shadow-md transition-shadow">
          <div className="flex flex-col md:flex-row gap-4">
            {/* <!-- Company Logo --> */}
            <div className="flex-shrink-0">
              <div className="h-16 w-16 rounded-lg bg-secondary flex items-center justify-center">
                <i
                  data-lucide="building-2"
                  className="h-8 w-8 text-primary"
                ></i>
              </div>
            </div>

            {/* <!-- Job Details --> */}
            <div className="flex-1 space-y-3">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold mb-1">
                    <a
                      href="job-seeker/job-details.html"
                      className="hover:underline"
                    >
                      Senior Full Stack Developer
                    </a>
                  </h3>
                  <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                    <a
                      href="company-profile.html"
                      className="hover:text-primary font-medium"
                    >
                      TechCorp Solutions
                    </a>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <i data-lucide="map-pin" className="h-4 w-4"></i>
                      San Francisco, CA
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <i data-lucide="clock" className="h-4 w-4"></i>
                      Posted 2 days ago
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-sm text-muted-foreground line-clamp-2">
                We're looking for an experienced Full Stack Developer to join
                our dynamic team. You'll be working on cutting-edge web
                applications using React, Node.js, and cloud technologies.
              </p>

              <div className="flex flex-wrap gap-2">
                <span className="badge badge-secondary">Full-time</span>
                <span className="badge badge-outline">Remote</span>
                <span className="badge badge-outline">React</span>
                <span className="badge badge-outline">Node.js</span>
                <span className="badge badge-outline">TypeScript</span>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                <div className="flex items-center gap-4">
                  <span className="text-sm font-semibold text-primary">
                    $120k - $180k
                  </span>
                  <span className="text-xs text-muted-foreground flex items-center gap-1">
                    <i data-lucide="users" className="h-4 w-4"></i>
                    47 applicants
                  </span>
                </div>
                <div className="flex gap-2">
                  <a
                    href="job-seeker/job-details.html"
                    className="btn btn-outline text-sm"
                  >
                    View Details
                  </a>
                  <button className="btn btn-primary text-sm">Apply Now</button>
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* <!-- Job Card 2 --> */}
        <article className="card p-6 hover:shadow-md transition-shadow">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-shrink-0">
              <div className="h-16 w-16 rounded-lg bg-secondary flex items-center justify-center">
                <i data-lucide="monitor" className="h-8 w-8 text-primary"></i>
              </div>
            </div>

            <div className="flex-1 space-y-3">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold mb-1">
                    <a
                      href="job-seeker/job-details.html"
                      className="hover:underline"
                    >
                      UI/UX Designer
                    </a>
                  </h3>
                  <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                    <a
                      href="company-profile.html"
                      className="hover:text-primary font-medium"
                    >
                      Design Studio Pro
                    </a>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <svg
                        className="h-4 w-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      New York, NY
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <svg
                        className="h-4 w-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      Posted 5 days ago
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-sm text-muted-foreground line-clamp-2">
                Join our creative team to design intuitive and beautiful user
                experiences for our suite of SaaS products. Experience with
                Figma and design systems required.
              </p>

              <div className="flex flex-wrap gap-2">
                <span className="badge badge-secondary">Full-time</span>
                <span className="badge badge-outline">Hybrid</span>
                <span className="badge badge-outline">Figma</span>
                <span className="badge badge-outline">Design Systems</span>
                <span className="badge badge-outline">Prototyping</span>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                <div className="flex items-center gap-4">
                  <span className="text-sm font-semibold text-primary">
                    $90k - $130k
                  </span>
                  <span className="text-xs text-muted-foreground flex items-center gap-1">
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                    32 applicants
                  </span>
                </div>
                <div className="flex gap-2">
                  <a
                    href="job-seeker/job-details.html"
                    className="btn btn-outline text-sm"
                  >
                    View Details
                  </a>
                  <button className="btn btn-primary text-sm">Apply Now</button>
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* <!-- Job Card 3 --> */}
        <article className="card p-6 hover:shadow-md transition-shadow">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-shrink-0">
              <div className="h-16 w-16 rounded-lg bg-secondary flex items-center justify-center">
                <svg
                  className="h-8 w-8 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                  />
                </svg>
              </div>
            </div>

            <div className="flex-1 space-y-3">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold mb-1">
                    <a
                      href="job-seeker/job-details.html"
                      className="hover:underline"
                    >
                      DevOps Engineer
                    </a>
                  </h3>
                  <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                    <a
                      href="company-profile.html"
                      className="hover:text-primary font-medium"
                    >
                      CloudScale Inc
                    </a>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <svg
                        className="h-4 w-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      Austin, TX
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <svg
                        className="h-4 w-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      Posted 1 week ago
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-sm text-muted-foreground line-clamp-2">
                Build and maintain our cloud infrastructure using AWS,
                Kubernetes, and Terraform. Help us scale our platform to serve
                millions of users worldwide.
              </p>

              <div className="flex flex-wrap gap-2">
                <span className="badge badge-secondary">Full-time</span>
                <span className="badge badge-outline">Remote</span>
                <span className="badge badge-outline">AWS</span>
                <span className="badge badge-outline">Kubernetes</span>
                <span className="badge badge-outline">Docker</span>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                <div className="flex items-center gap-4">
                  <span className="text-sm font-semibold text-primary">
                    $130k - $170k
                  </span>
                  <span className="text-xs text-muted-foreground flex items-center gap-1">
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                    61 applicants
                  </span>
                </div>
                <div className="flex gap-2">
                  <a
                    href="job-seeker/job-details.html"
                    className="btn btn-outline text-sm"
                  >
                    View Details
                  </a>
                  <button className="btn btn-primary text-sm">Apply Now</button>
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* <!-- Job Card 4 --> */}
        <article className="card p-6 hover:shadow-md transition-shadow">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-shrink-0">
              <div className="h-16 w-16 rounded-lg bg-secondary flex items-center justify-center">
                <svg
                  className="h-8 w-8 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  />
                </svg>
              </div>
            </div>

            <div className="flex-1 space-y-3">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold mb-1">
                    <a
                      href="job-seeker/job-details.html"
                      className="hover:underline"
                    >
                      Frontend Developer (React)
                    </a>
                  </h3>
                  <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                    <a
                      href="company-profile.html"
                      className="hover:text-primary font-medium"
                    >
                      Innovate Labs
                    </a>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <svg
                        className="h-4 w-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      Seattle, WA
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <svg
                        className="h-4 w-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      Posted 3 days ago
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-sm text-muted-foreground line-clamp-2">
                We're seeking a talented Frontend Developer with strong React
                skills to build responsive and performant web applications.
                You'll work closely with designers and backend engineers.
              </p>

              <div className="flex flex-wrap gap-2">
                <span className="badge badge-secondary">Full-time</span>
                <span className="badge badge-outline">On-site</span>
                <span className="badge badge-outline">React</span>
                <span className="badge badge-outline">JavaScript</span>
                <span className="badge badge-outline">CSS</span>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                <div className="flex items-center gap-4">
                  <span className="text-sm font-semibold text-primary">
                    $95k - $140k
                  </span>
                  <span className="text-xs text-muted-foreground flex items-center gap-1">
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                    28 applicants
                  </span>
                </div>
                <div className="flex gap-2">
                  <a
                    href="job-seeker/job-details.html"
                    className="btn btn-outline text-sm"
                  >
                    View Details
                  </a>
                  <button className="btn btn-primary text-sm">Apply Now</button>
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* <!-- Job Card 5 --> */}
        <article className="card p-6 hover:shadow-md transition-shadow">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-shrink-0">
              <div className="h-16 w-16 rounded-lg bg-secondary flex items-center justify-center">
                <svg
                  className="h-8 w-8 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                  />
                </svg>
              </div>
            </div>

            <div className="flex-1 space-y-3">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold mb-1">
                    <a
                      href="job-seeker/job-details.html"
                      className="hover:underline"
                    >
                      Data Scientist
                    </a>
                  </h3>
                  <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                    <a
                      href="company-profile.html"
                      className="hover:text-primary font-medium"
                    >
                      DataFlow Analytics
                    </a>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <svg
                        className="h-4 w-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      Boston, MA
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <svg
                        className="h-4 w-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      Posted 4 days ago
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-sm text-muted-foreground line-clamp-2">
                Join our data science team to build predictive models and derive
                insights from large datasets. Strong experience with Python,
                machine learning, and statistical analysis required.
              </p>

              <div className="flex flex-wrap gap-2">
                <span className="badge badge-secondary">Full-time</span>
                <span className="badge badge-outline">Hybrid</span>
                <span className="badge badge-outline">Python</span>
                <span className="badge badge-outline">Machine Learning</span>
                <span className="badge badge-outline">SQL</span>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                <div className="flex items-center gap-4">
                  <span className="text-sm font-semibold text-primary">
                    $110k - $160k
                  </span>
                  <span className="text-xs text-muted-foreground flex items-center gap-1">
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                    39 applicants
                  </span>
                </div>
                <div className="flex gap-2">
                  <a
                    href="job-seeker/job-details.html"
                    className="btn btn-outline text-sm"
                  >
                    View Details
                  </a>
                  <button className="btn btn-primary text-sm">Apply Now</button>
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* <!-- Loading State Example (Hidden by default, shown during loading) --> */}
        <article className="card p-6 hidden" id="loading-skeleton">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-shrink-0">
              <div className="h-16 w-16 skeleton"></div>
            </div>
            <div className="flex-1 space-y-3">
              <div className="space-y-2">
                <div className="h-6 skeleton w-2/3"></div>
                <div className="h-4 skeleton w-1/2"></div>
              </div>
              <div className="h-4 skeleton w-full"></div>
              <div className="flex gap-2">
                <div className="h-6 skeleton w-20"></div>
                <div className="h-6 skeleton w-20"></div>
                <div className="h-6 skeleton w-20"></div>
              </div>
              <div className="flex justify-between items-center pt-2">
                <div className="h-4 skeleton w-32"></div>
                <div className="flex gap-2">
                  <div className="h-10 skeleton w-28"></div>
                  <div className="h-10 skeleton w-28"></div>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>

      {/* <!-- Load More / Pagination --> */}
      <div className="mt-12 flex flex-col items-center gap-4">
        <button className="btn btn-outline">
          Load More Jobs
          <svg
            className="ml-2 h-4 w-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
        <p className="text-sm text-muted-foreground">Showing 5 of 1,247 jobs</p>
      </div>

      {/* <!-- Error State Example (Hidden by default, shown on error) --> */}
      <div className="card p-12 text-center hidden" id="error-state">
        <svg
          className="mx-auto h-12 w-12 text-muted-foreground mb-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <h3 className="text-lg font-semibold mb-2">Something went wrong</h3>
        <p className="text-sm text-muted-foreground mb-4">
          We couldn't load the jobs. Please try again.
        </p>
        <button className="btn btn-primary">Retry</button>
      </div>

      {/* <!-- Empty State Example (Hidden by default, shown when no results) --> */}
      <div className="card p-12 text-center hidden" id="empty-state">
        <svg
          className="mx-auto h-12 w-12 text-muted-foreground mb-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        <h3 className="text-lg font-semibold mb-2">No jobs found</h3>
        <p className="text-sm text-muted-foreground mb-4">
          Try adjusting your filters or search terms to find more opportunities.
        </p>
        <button className="btn btn-outline">Clear Filters</button>
      </div>
    </main>
  );
}
