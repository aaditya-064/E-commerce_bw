import { TProduct } from "@/types/product.types";
import { api } from ".";

export const create = async (data: TProduct) => {
  try {
    const response = await api.post("/product", data);
    return response.data;
  } catch (error: any) {
    throw error?.response?.data;
  }
};

export const get = async () => {
  try {
    const response = await api.get("/product");
    return response.data;
  } catch (error: any) {
    throw error?.response?.data;
  }
};

export const getById = async (id: string) => {
  try {
    const response = await api.get(`/${id}`);
    return response.data;
  } catch (error: any) {
    throw error?.response?.data;
  }
};

// export const update = async (data: TProduct, id: string) => {
//   try {
//     const response = await api.put(`/${id}`, data);
//     return response.data;
//   } catch (error: any) {
//     throw error?.response?.data;
//   }
// };

// export const remove = async (id: string) => {
//   try {
//     const response = await api.delete(`/${id}`);
//     return response.data;
//   } catch (error: any) {
//     throw error?.response?.data;
//   }
// };
