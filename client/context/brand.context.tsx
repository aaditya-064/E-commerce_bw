import { TBrand } from "@/types/brand.types";
import { createContext } from "react";

type TBrandContext = {
  brands: TBrand[] | null;
  brandById: TBrand | null;
  isLoading: boolean;
  addBrand: (data: FormData) => void;
  getBrandById: (id: string) => void;
  updateBrand: ({ id, data }: { id: string; data: FormData }) => void;
  removeBrand: (id: string) => void;
};

const initialValues: TBrandContext = {
  brands: null,
  brandById: null,
  isLoading: true,
  addBrand: () => {},
  getBrandById: () => {},
  updateBrand: () => {},
  removeBrand: () => {},
};

const brandContext = createContext<TBrandContext>(initialValues);
export default brandContext;
