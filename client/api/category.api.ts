import { api } from ".";
import { TCategory } from "@/types/category.types";

export const create = async (data: FormData) => {
  try {
    const response = await api.post("/category", data);
    return response.data;
  } catch (error: any) {
    throw error.response.data;
  }
};

export const get = async () => {
  try {
    const response = await api.get("/category");
    return response.data;
  } catch (error: any) {
    throw error?.response?.data;
  }
};

export const getById = async (id: string) => {
  try {
    const response = await api.get(`/category/${id}`);
    return response.data;
  } catch (error: any) {
    throw error?.response?.data;
  }
};

export const update = async ({ id, data }: { id: string; data: FormData }) => {
  try {
    const response = await api.put(`/${id}`, data);
    return response.data;
  } catch (error: any) {
    throw error?.response?.data;
  }
};

export const remove = async (id: string) => {
  try {
    const response = await api.delete(`/${id}`);
    return response.data;
  } catch (error: any) {
    throw error?.response?.data;
  }
};
