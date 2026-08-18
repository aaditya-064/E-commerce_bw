import AuthContext from "@/context/auth.context";
import { useContext } from "react";

export const useAuth = () => {
  if (!AuthContext) {
    console.log("useauth hook must be used inside auth provider");
  }
  return useContext(AuthContext);
};
