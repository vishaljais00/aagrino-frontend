"use client";
import DynamicTypography from "@/components/DynamicTypography/DynamicTypography";
import { IProduct } from "@/constants/interface";
import { useGetProductsByCategoryQuery } from "@/redux/feature/products/productAPI";
import { RootState } from "@/redux/store";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useSelector } from "react-redux";

const ProductCatogary = () => {
  const searchValue = useSelector(
    (state: RootState) => state?.user.productSearch
  );
  const searchParams = useParams()?.slug;
  const { isSuccess, status, data } =
    useGetProductsByCategoryQuery(searchParams);
  console.log("JSS log page :", { data });
  return (
    <>
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-12 lg:max-w-7xl lg:px-8">
        <DynamicTypography content="Products By Catogary" variant="h3" />
        <div className="grid gap-x-4 gap-y-8 sm:grid-cols-2 md:gap-x-6 lg:grid-cols-3 xl:grid-cols-4">
          {data?.data.map((item: IProduct) => {
            return (
              <div key={item.slug}>
                <a
                  href="#"
                  className="group relative mb-2 block h-96 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:mb-3"
                >
                  <Image
                    src={item.coverPhoto}
                    loading="lazy"
                    width={300}
                    height={400}
                    alt={item.slug}
                    className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                  />
                  <div className="absolute bottom-2 left-0 flex gap-2">
                    <span className="rounded-r-lg bg-red-500 px-3 py-1.5 text-sm font-semibold uppercase tracking-wider text-white">
                      -50%
                    </span>
                    <span className="rounded-lg bg-white px-3 py-1.5 text-sm font-bold uppercase tracking-wider text-gray-800">
                      New
                    </span>
                  </div>
                </a>
                <div className="flex items-start justify-between gap-2 px-2">
                  <div className="flex flex-col">
                    <a
                      href="#"
                      className="text-lg font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-xl"
                    >
                      {item.name}
                    </a>
                    <span className="text-gray-500">{item.Category.title}</span>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="font-bold text-gray-600 lg:text-lg">
                      {item.variants[0]?.price || 500}
                    </span>
                    <span className="text-sm text-red-500 line-through">
                      $39.99
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ProductCatogary;
