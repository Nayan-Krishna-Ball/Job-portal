//
import { LogIn, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import HomeFooter from "../home/HomeFooter";
import LoginFormFil from "./LoginFormFil";

export default function LoginMainPage() {
  return (
    <>
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-md mx-auto">
          {/* <!-- Page Title --> */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
              <LogIn className="h-8 w-8 text-primary" />
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

            <LoginFormFil />

            {/* <!-- Divider --> */}
            <div className="relative my-8">
              <div
                className="absolute inset-0 flex items-center"
                aria-hidden="true"
              >
                <div className="w-full border-t border-[hsl(var(--color-border))]"></div>
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
              <Link
                to="/register"
                className="text-primary hover:underline font-medium"
                id="signupLink"
              >
                {" "}
                Sign up
              </Link>
            </div>
          </div>

          {/* <!-- Security Note --> */}
          <div className="mt-6 text-center">
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <ShieldCheck className="h-4 w-4" />
              <p>
                Your information is protected with industry-standard encryption
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* <!-- Footer --> */}
      <HomeFooter />
    </>
  );
}
