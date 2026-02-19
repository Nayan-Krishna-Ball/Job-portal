//
export default function LoginMainPage() {
  console.log("This is dummy log for check git marge confilt");

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-8">
            <a href="index.html" className="flex items-center space-x-2">
              <i data-lucide="briefcase" className="h-8 w-8 text-primary"></i>
              <span className="text-xl font-bold">LWS Job Portal</span>
            </a>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground">
              Don't have an account please login?
            </span>
            <a href="register.html" className="btn btn-ghost text-sm">
              Sign Up
            </a>
          </div>
        </div>
      </header>

      {/* <!-- Main Content --> */}
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-md mx-auto">
          {/* <!-- Page Title --> */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
              <i data-lucide="log-in" className="h-8 w-8 text-primary"></i>
            </div>
            <h1 className="text-4xl font-bold tracking-tight mb-3">
              Welcome Back
            </h1>
            <p className="text-lg text-muted-foreground">
              Sign in to access your account
            </p>
          </div>

          {/* <!-- Login Card --> */}
          <div className="card p-8 md:p-10">
            {/* <!-- Login Form --> */}
            <form className="space-y-5">
              {/* <!-- Email --> */}
              <div className="space-y-2">
                <label for="email" className="label">
                  Email Address
                  <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <i
                    data-lucide="mail"
                    className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground"
                  ></i>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="input pl-10"
                    placeholder="you@example.com"
                    required
                  />
                </div>
              </div>

              {/* <!-- Password --> */}
              <div className="space-y-2">
                <div className="relative">
                  <i
                    data-lucide="lock"
                    className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground"
                  ></i>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    className="input pl-10 pr-10"
                    placeholder="Enter your password"
                    required
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                    onclick="togglePassword('password')"
                  >
                    <i data-lucide="eye" className="h-4 w-4"></i>
                  </button>
                </div>
              </div>

              {/* <!-- Submit Button --> */}
              <button
                type="submit"
                className="btn btn-primary w-full text-base h-11"
              >
                <i data-lucide="log-in" className="h-4 w-4 mr-2"></i>
                Sign In
              </button>
            </form>

            {/* <!-- Divider --> */}
            <div className="relative my-8">
              <div
                className="absolute inset-0 flex items-center"
                aria-hidden="true"
              >
                <div className="w-full border-t border-border"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-card text-muted-foreground font-medium">
                  Or continue with
                </span>
              </div>
            </div>

            {/* <!-- Sign Up Link --> */}
            <div className="mt-8 text-center text-sm text-muted-foreground">
              Don't have an account?
              <a
                href="register.html"
                className="text-primary hover:underline font-medium"
                id="signupLink"
              >
                Sign up as Job Seeker
              </a>
            </div>
          </div>

          {/* <!-- Security Note --> */}
          <div className="mt-6 text-center">
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <i data-lucide="shield-check" className="h-4 w-4"></i>
              <p>
                Your information is protected with industry-standard encryption
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* <!-- Footer --> */}
      <footer className="border-t border-border bg-muted/30 mt-16">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-semibold mb-4">LWS Job Portal</h3>
              <p className="text-sm text-muted-foreground">
                Your trusted platform for finding the perfect job or the perfect
                candidate.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">For Job Seekers</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground">
                    Browse Jobs
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground">
                    Companies
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground">
                    Career Advice
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground">
                    Salary Guide
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">For Employers</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground">
                    Post a Job
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground">
                    Browse Candidates
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground">
                    Employer Resources
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2025 LWS Job Portal. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
