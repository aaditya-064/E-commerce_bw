import { useAuth } from "@/hooks/auth.hook";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const AuthSection = () => {
  const { user, logout } = useAuth();
  console.log(user);
  return (
    <div className="flex items-center gap-3">
      {/* profile image */}
      <div className="h-14 aspect-square rounded-full p-0.5 overflow-clip border border-primary ">
        <Image
          src={"/profile.jpg"}
          alt="user profile image"
          height={1000}
          width={1000}
          className="h-full w-full rounded-full"
        />
      </div>

      {/* name & logout  */}
      {user ? (
        <div className="flex flex-col gap-0 items-center">
          <p className="font-bold text-white text-sm h-5 ml-1">
            {user?.full_name}
          </p>
          <button
            onClick={logout}
            className="text-red-500 font-semibold tracking-wide text-sm cursor-pointer mt-1 -ml-2"
          >
            Logout
          </button>
        </div>
      ) : (
        <div className="flex flex-col text-white text-center">
          <Link href="/login">Login</Link>
          <p className="text-xs">OR</p>
          <Link href="/sign-up">Register</Link>
        </div>
      )}
    </div>
  );
};

export default AuthSection;
