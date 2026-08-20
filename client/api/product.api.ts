import { api } from ".";

export const create = async ({
  data,
  categoryId,
  brandId,
}: {
  data: FormData;
  categoryId: string;
  brandId: string;
}) => {
  try {
    const response = await api.post(
      "/product",
      { data, categoryId, brandId },
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      },
    );
    console.log(response);
    return response?.data;
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

export const getByCategory = async (name: string) => {
  try {
    const response = await api.get(`/product/category/${name.split("/")[3]}`);
    return response.data;
  } catch (error: any) {
    throw error?.response?.data;
  }
};

export const getByBrand = async (name: string) => {
  try {
    const response = await api.get(`/product/brand/${name.split("/")[3]}`);
    return response.data;
  } catch (error: any) {
    throw error?.response?.data;
  }
};

export const getByNewArrivals = async (new_arrival: boolean) => {
  try {
    const response = await api.get(`/product/new_arrivals/${new_arrival}`);
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
