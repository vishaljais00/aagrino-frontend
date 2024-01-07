"use client";
import DynamicTypography from "@/components/DynamicTypography/DynamicTypography";
import SideFilter from "@/components/SideFilter/SideFilter";
import { IProduct } from "@/constants/interface";
import { useSearchProductsMutation } from "@/redux/feature/products/productAPI";
import { RootState } from "@/redux/store";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const Product = () => {
  const [searchTrigger, { isSuccess, status, data }] =
    useSearchProductsMutation();
  const searchValue = useSelector(
    (state: RootState) => state?.user.productSearch
  );
  useEffect(() => {
    if (searchValue) {
      searchTrigger({
        input: searchValue,
        limit: 10,
        page: 1,
      });
    }
  }, [searchValue]);

  return (
    <>
      <div className="flex">
        <SideFilter />
        <div className="mx-auto px-4 py-16 sm:px-6 sm:py-12 w-4/5 lg:px-8">
          <DynamicTypography content="Our Products" variant="h3" />
          <div className="grid gap-x-4 gap-y-8 sm:grid-cols-2 md:gap-x-6 lg:grid-cols-3 xl:grid-cols-4">
            {data?.data.map((item: IProduct) => {
              return (
                <div key={item.slug}>
                  <Link
                    href={"products/" + item.slug}
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
                  </Link>
                  <div className="flex items-start justify-between gap-2 px-2">
                    <div className="flex flex-col">
                      <a
                        href="#"
                        className="text-lg font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-xl"
                      >
                        Fancy Outfit
                      </a>
                      <span className="text-gray-500">
                        {item.Category.title}
                      </span>
                    </div>
                    <div className="flex flex-col items-end">
                      <span className="font-bold text-gray-600 lg:text-lg">
                        {item.variants[0].price}
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
      </div>
    </>
  );
};

export default Product;
