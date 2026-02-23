//

import { Clock, MapPin, Users } from "lucide-react";
import { useEffect, useState } from "react";
import { getAlljobs } from "../../services/getServices";
import { formatDaysAgo } from "../../utils/formateDate";
import SearchFilter from "./SearchFilter";
import SkeletonCard from "./SkeletonCard";

export default function HeroPart() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [visibleCount, setVisibleCount] = useState(5);

  const getAllJob = async () => {
    try {
      setLoading(true);
      setError(null);

      await new Promise((resolve) => setTimeout(resolve, 1000));

      const res = await getAlljobs();

      setJobs(res.data.data);
      setLoading(false);
    } catch (error) {
      console.log(`Message: ${error.message}`);
      console.log(`Status:${error.response.status}`);

      setLoading(false);
      setError("Failed to load jobs");
    }
  };

  useEffect(() => {
    getAllJob();
  }, []);

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
        <SearchFilter />
      </section>

      {/* <!-- Results Header --> */}
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-semibold">Available Jobs</h2>
          <p className="text-sm text-muted-foreground mt-1">
            Showing {Math.min(visibleCount, jobs.length)} of {jobs.length}{" "}
            results
          </p>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm text-muted-foreground">Sort by:</span>
          <div className="dropdown">
            <button
              className="btn btn-outline text-sm h-9"
              // onclick="toggleDropdown('sortDropdown')"
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
        {jobs.slice(0, visibleCount).map((job) => (
          <article
            key={job.id}
            className="card p-6 hover:shadow-md transition-shadow"
          >
            <div className="flex flex-col md:flex-row gap-4">
              {/* <!-- Company Logo --> */}
              <div className="shrink-0">
                <div className="h-16 w-16 rounded-xl bg-white border-gray-600 flex items-center justify-center p-2 shadow-sm">
                  {/* <div className="h-16 w-16 rounded-lg bg-secondary flex items-center justify-center overflow-hidden p-2"> */}
                  {job.company.logoUrl ? (
                    <img
                      src={job.company.logoUrl}
                      alt={job.company.name}
                      className="max-h-full max-w-full object-contain"
                    />
                  ) : (
                    <span className="text-lg font-semibold text-primary">
                      {job.company.name.charAt(0)}
                    </span>
                  )}
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
                        {job.title}
                      </a>
                    </h3>
                    <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                      <a
                        href="company-profile.html"
                        className="hover:text-primary font-medium"
                      >
                        {job.company.name}
                      </a>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {job.location}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {formatDaysAgo(job.updatedAt)}
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground line-clamp-2">
                  {job.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  <span className="badge badge-secondary"> {job.type} </span>
                  {job.skills?.slice(0, 4).map((skill, index) => (
                    <span key={index} className="badge badge-outline">
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                  <div className="flex items-center gap-4">
                    <span className="text-sm font-semibold text-primary">
                      ${job.salaryMin.toLocaleString()} - $
                      {job.salaryMax.toLocaleString()} / {job.salaryPeriod}
                    </span>
                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      {job.applicants} applicants
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <a
                      href="job-seeker/job-details.html"
                      className="btn btn-outline text-sm"
                    >
                      View Details
                    </a>
                    <button className="btn btn-primary text-sm">
                      Apply Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </article>
        ))}

        {/* <!-- Error State Example (Hidden by default, shown on error) --> */}

        {error && !loading && (
          <div className="card p-12 text-center" id="error-state">
            <svg
              className="mx-auto h-12 w-12 text-muted-foreground mb-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <h3 className="text-lg font-semibold mb-2">Something went wrong</h3>
            <p className="text-sm text-muted-foreground mb-4">{error}</p>
            <button className="btn btn-primary">Retry</button>
          </div>
        )}

        {/* <!-- Loading State Example (Hidden by default, shown during loading) --> */}

        {loading && (
          <>
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
          </>
        )}
      </div>

      {/* <!-- Load More / Pagination --> */}
      {visibleCount < jobs.length && (
        <div className="mt-12 flex flex-col items-center gap-4">
          <button
            onClick={() => setVisibleCount((prev) => prev + 5)}
            className="btn btn-outline"
          >
            Load More Jobs
            <svg
              className="ml-2 h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          <p className="text-sm text-muted-foreground">
            {" "}
            Showing {Math.min(visibleCount, jobs.length)} of {jobs.length} jobs
          </p>
        </div>
      )}

      {/* <!-- Empty State Example (Hidden by default, shown when no results) --> */}
      <div className="card p-12 text-center hidden" id="empty-state">
        <svg
          className="mx-auto h-12 w-12 text-muted-foreground mb-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
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
