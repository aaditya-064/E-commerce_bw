import { TLogin, TRegister } from "@/types/auth.types";
import { api } from ".";

export const login = async (data: TLogin) => {
  try {
    const response = await api.post("/auth/login", data);
    return response.data;
  } catch (err: any) {
    // console.log(err);
    throw err?.response?.data; //* yo use garyo bhani useMutation ma onError run hunxa
    // return err.response.data //* yo use garyo bhani useMutation ma onSuccess run hunxa
  }
};
export const register = async (data: TRegister) => {
  try {
    const response = await api.post("/auth/register", data);
    return response.data;
  } catch (err: any) {
    throw err?.response?.data;
  }
};

export const getProfile = async () => {
  try {
    const response = await api.get("/auth/me");
    return response.data;
  } catch (err: any) {
    throw err?.response?.data;
  }
};

export const logoutUser = async () => {
  try {
    const response = await api.post("/auth/logout");
    return response.data;
  } catch (err: any) {
    throw err?.response?.data;
  }
};
