import axios from "axios";

export const uploadImage = async (formData: FormData) => {
  try {
    const response = await axios.post("")
  } catch (err: any) {
    throw err?.response?.data;
  }
};
