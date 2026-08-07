import { TLogin } from "@/types/auth.types";
import axios from "axios";

export const login = async (data: TLogin) => {
  try {
    const response = await axios.post(
      "http://localhost:8080/api/v1/auth/login",
      data,
    );
    console.log(response);
    return response.data;
  } catch (err: any) {
    // console.log(err);
    throw err.response.data;
  }
};
