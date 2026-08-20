import { TCategory } from "@/types/category.types";
import { createContext } from "react";

type TCategoryContext = {
  categories: TCategory[] | null;
  categoryById: TCategory | null;
  isLoading: boolean;
  addCategory: (data: FormData) => void;
  getCategoryById: (id: string) => void;
  updateCategory: ({ id, data }: { id: string; data: FormData }) => void;
  removeCategory: (id: string) => void;
};

const initialValues: TCategoryContext = {
  categories: null,
  categoryById: null,
  isLoading: true,
  addCategory: () => {},
  getCategoryById: () => {},
  updateCategory: () => {},
  removeCategory: () => {},
};

const categoryContext = createContext<TCategoryContext>(initialValues);
export default categoryContext;
