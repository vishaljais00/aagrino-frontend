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
