"use client";

import { getProfile, logoutUser } from "@/api/auth.api";
import AuthContext from "@/context/auth.context";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

import React from "react";

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();

  const { data, isLoading, isError, error } = useQuery({
    queryFn: getProfile,
    queryKey: ["auth", "me"],
    retry: false,
    refetchInterval: 5 * 60 * 1000,
    refetchOnWindowFocus: true,
  });

  const { mutate: logoutMutation, isPending } = useMutation({
    mutationFn: logoutUser,
    onSuccess: (response) => {
      toast.success(response.message ?? "Logout successful");
      router.replace("/");
      window.location.replace("/");
    },
    onError: (error: any) => {
      toast.error(error.message ?? "something went wrong");
    },
  });

  const login = () => {};
  const register = () => {};

  return (
    <AuthContext.Provider
      value={{
        isLoading: !!isLoading || !!isPending,
        login,
        logout: logoutMutation,
        register,
        user: data?.data ?? null,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
