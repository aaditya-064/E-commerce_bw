import LoginForm from "@/components/client/login.form";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ecommerce | Login",
  description: "Ecommerce Login page",
};

const client = new QueryClient();

const LoginPage = () => {
  return (
    <main className="bg-violet-50 min-h-full flex justify-center items-center">
      <section className="shadow-sm shadow-primary-shadow border border-primary min-h-100 min-w-90 px-8 py-8 rounded-md flex flex-col gap-5">
        {/* page heading */}
        <div className="flex flex-col gap-1">
          <h1 className="text-3xl font-bold text-primary">Login</h1>
          <p className="text-lg">Welcome Back</p>
        </div>

        {/* login form */}
        <QueryClientProvider client={client}>
          <LoginForm />
        </QueryClientProvider>

        {/* link to signup page */}
        <div>
          <Link
            href={"/forgot-password"}
            title="Change your password"
            className="text-primary text-[16px] "
          >
            Forgot password?
          </Link>
          <p className=" text-[14px]">
            Don&apos;t have an Account?{" "}
            <Link
              href={"/sign-up"}
              title="Go to sign up page"
              className="text-primary italic font-semibold"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
};

export default LoginPage;
