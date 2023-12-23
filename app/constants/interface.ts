interface Category {
  title: string;
}

interface ProductTag {
  // Define properties as needed
}

interface ProductsImage {
  // Define properties as needed
}

export interface IProduct {
  title: string;
  coverImage: string;
  description: string;
  isBestSeller: boolean;
  isLimited: boolean;
  name: string;
  slug: string;
  variants: any[]; // Define an interface for variants if needed
  Category: Category;
  ProductTag: ProductTag[];
  ProductsImage: ProductsImage[];
}
export interface UserState {
  username: string | null;
  email: string | null;
  token: string | null;
  pic: string | null;
}

export interface IerrorFormat {
  status?: string | null;
  message: string | null;
  data?: unknown;
}

export interface UserForm {
  email: string;
  password: string;
}

export interface IuserData {
  data: UserState | null;
  loading: boolean;
  error: string | null;
}