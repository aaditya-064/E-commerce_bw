import RegisterForm from "@/components/client/register.form";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ecommerce | Register",
  description: "Ecommerce  Register page",
};

const SignUpPage = () => {
  return (
    <main className="bg-violet-50 min-h-screen flex justify-center items-center">
      <section className="shadow-sm shadow-primary-shadow border border-primary min-h-50 min-w-90 px-8 py-8 rounded-md flex flex-col gap-3">
        {/* page heading */}
        <div className="flex flex-col gap-1">
          <h1 className="text-3xl font-bold text-primary">Sign Up</h1>
          <p className="text-lg">Welcome</p>
        </div>

        {/* sign up form */}
        <RegisterForm />

        {/* link to signup page */}
        <div>
          <p className=" text-[14px]">
            Already have an Account?{" "}
            <Link
              href={"/login"}
              title="Go to login page"
              className="text-primary italic font-semibold"
            >
              Login
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
};

export default SignUpPage;
