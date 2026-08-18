import { TLogin, TRegister } from "@/types/auth.types";
import { TUser } from "@/types/user.types";
import { createContext } from "react";

type TAuthContext = {
  user: TUser | null;
  login: (data: TLogin) => void;
  register: (data: TRegister) => void;
  logout: () => void;
  isLoading: boolean;
};

const initialValues: TAuthContext = {
  user: null,
  login: () => {},
  logout: () => {},
  register: () => {},
  isLoading: true,
};

const authContext = createContext<TAuthContext>(initialValues);

export default authContext;
