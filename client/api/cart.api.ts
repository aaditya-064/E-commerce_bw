import { api } from ".";
import { TCart } from "@/types/cart.types";

// create cart
export const createCart = async (data: TCart) => {
  try {
    const response = await api.post("/cart", data);
    return response.data;
  } catch (error: any) {
    throw error?.response?.data;
  }
};

export const getCart = async () => {
  try {
    const response = await api.get(`/cart`);
    return response.data;
  } catch (error: any) {
    throw error?.response?.data;
  }
};

// export const addToCart = async ({
//   productId,
//   quantity,
// }: {
//   productId: string;
//   quantity: Number;
// }) => {
//   try {
//     const response = await api.post(`/cart`, { productId, quantity });
//     return response.data;
//   } catch (error: any) {
//     throw error?.response?.data;
//   }
// };

// remove single cart
export const removeCartById = async (id: string) => {
  try {
    const response = await api.delete(`/cart/remove/${id}`);
    return response.data;
  } catch (error: any) {
    throw error?.response?.data;
  }
};

// remove whole cart
export const removeCart = async () => {
  try {
    const response = await api.delete(`/cart/delete`);
    return response.data;
  } catch (error: any) {
    throw error?.response?.data;
  }
};
