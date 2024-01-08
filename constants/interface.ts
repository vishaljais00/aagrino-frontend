import { MenuItem } from "primereact/menuitem";

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
  coverPhoto: string;
  description: string;
  isBestSeller: boolean;
  isLimited: boolean;
  name: string;
  slug: string;
  variants: ProductVariant[]; // Define an interface for variants if needed
  Category: Category;
  ProductTag: ProductTag[];
  ProductsImage: ProductsImage[];
}

interface ProductVariant {
  color: string

  id: number

  price: number

  size: number
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
  productSearch: string
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
export interface IThemeList {
  coverPhoto: string
  title: string
  slug: string
  name: string
  coverImage: string
}
export interface NavProduts extends MenuItem {
  title: string;
  label: string
  target: string
  slug: string;
  subCategories: {
    slug: string;
    title: string;
  }[];
  items?: {
    title?: string;
    label: string
  }[]
}

export interface ICoupons {
  id: number;
  code: string;
  minOrder: number;
  disAmount: number;
  active: boolean;
  usuage: number;
  validFrom: string;
  validTill: string;
  createdAt: string;
}

export interface Irating {
  slug: string;
  rating: number;
}

export interface Icomment {
  slug: string;
  comment: string;
}

export interface ProductDetails {
  ProductVariant: {
    id: number;
    price: number,
    product: {
      name: string;
      description: string;
      coverPhoto: string;
      isBestSeller: boolean;
      slug: string;
      isLimited: boolean;
    };
    color: {
      color: string;
    };
    size: {
      size: string;
    };
  };
  qty: number;
}

export interface Ifilter {
  category: {
    title: string
  }[]

  colors: {
    color: string
  }[]

  sizes: {
    size: string
  }[]

  theme: {
    slug: string
    title: string
  }[]
}