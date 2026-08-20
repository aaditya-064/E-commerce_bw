import { api } from ".";
import { TBrand } from "@/types/brand.types";

// create brand
export const create = async (data: FormData) => {
  try {
    console.log(data);
    const response = await api.post("/brand/create", data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error: any) {
    throw error?.response?.data;
  }
};

// get all brand (tara admin ko laagi matra xa yo, change in server)
export const get = async () => {
  try {
    const response = await api.get("/brand/");
    return response.data;
  } catch (error: any) {
    throw error?.response?.data;
  }
};

// get by brand id
export const getById = async (id: string) => {
  const response = await api.get(`/brand/${id}`);
  return response.data;
};

// update brand
export const update = async ({ id, data }: { id: string; data: FormData }) => {
  try {
    const response = await api.patch(`/brand/update/${id}`, data);
    return response.data;
  } catch (error: any) {
    throw error?.response?.data;
  }
};

// delete brand
export const remove = async (id: string) => {
  try {
    const response = await api.delete(`/brand/delete/${id}`);
    return response.data;
  } catch (error: any) {
    throw error?.response?.data;
  }
};
