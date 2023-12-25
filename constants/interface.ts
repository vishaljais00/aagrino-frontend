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

export interface UserSignupForm {
  name: string;
  email: string;
  password: string;
  profilePic?: string;
  withGoogle?: boolean;
}

export interface IuserData {
  data: UserState | null;
  loading: boolean;
  error: string | null;
}
export interface ITheme {
  title: string
  slug: string
}
export interface ICatogary {
  coverPhoto: string
  title: string
}
export interface IProductList {
  coverPhoto: string
  title: string
}
export interface NavProduts {
  title: string;
  label: string
  subCategories: {
    title: string;
  }[];
  items?: {
    title?: string;
    label: string
  }[]
}
