"use client";
import DynamicTypography from "@/components/DynamicTypography/DynamicTypography";
import { useSearchProductsMutation } from "@/redux/feature/products/productAPI";
import { RootState } from "@/redux/store";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const Product = () => {
  const [searchTrigger, { isSuccess, status, data }] =
    useSearchProductsMutation();
  const searchValue = useSelector(
    (state: RootState) => state?.user.productSearch
  );
  useEffect(() => {
    console.log("JSS log page poriduct page:", { searchValue });
    searchTrigger({
      input: searchValue,
      limit: 10,
      page: 1,
    });
    console.log("JSS log page :", { isSuccess });

    if (isSuccess) {
      console.log("JSS log page :", data);
    }
  }, [searchValue]);

  return (
    <>
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-12 lg:max-w-7xl lg:px-8">
        <DynamicTypography content="Our Products" variant="h3" />
        <div className="grid gap-x-4 gap-y-8 sm:grid-cols-2 md:gap-x-6 lg:grid-cols-3 xl:grid-cols-4">
          {/* product - start */}
          <div>
            <a
              href="#"
              className="group relative mb-2 block h-96 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:mb-3"
            >
              <img
                src="https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&q=75&fit=crop&crop=top&w=600&h=700"
                loading="lazy"
                alt="Photo by Austin Wade"
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
                  Fancy Outfit
                </a>
                <span className="text-gray-500">by Fancy Brand</span>
              </div>
              <div className="flex flex-col items-end">
                <span className="font-bold text-gray-600 lg:text-lg">
                  $19.99
                </span>
                <span className="text-sm text-red-500 line-through">
                  $39.99
                </span>
              </div>
            </div>
          </div>
          {/* product - end */}
          {/* product - start */}
          <div>
            <a
              href="#"
              className="group relative mb-2 block h-96 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:mb-3"
            >
              <img
                src="https://images.unsplash.com/photo-1523359346063-d879354c0ea5?auto=format&q=75&fit=crop&crop=top&w=600&h=700"
                loading="lazy"
                alt="Photo by Nick Karvounis"
                className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />
            </a>
            <div className="flex items-start justify-between gap-2 px-2">
              <div className="flex flex-col">
                <a
                  href="#"
                  className="text-lg font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-xl"
                >
                  Cool Outfit
                </a>
                <span className="text-gray-500">by Cool Brand</span>
              </div>
              <div className="flex flex-col items-end">
                <span className="font-bold text-gray-600 lg:text-lg">
                  $29.99
                </span>
              </div>
            </div>
          </div>
          {/* product - end */}
          {/* product - start */}
          <div>
            <a
              href="#"
              className="group relative mb-2 block h-96 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:mb-3"
            >
              <img
                src="https://images.unsplash.com/photo-1548286978-f218023f8d18?auto=format&q=75&fit=crop&crop=top&w=600&h=700"
                loading="lazy"
                alt="Photo by Austin Wade"
                className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />
            </a>
            <div className="flex items-start justify-between gap-2 px-2">
              <div className="flex flex-col">
                <a
                  href="#"
                  className="text-lg font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-xl"
                >
                  Nice Outfit
                </a>
                <span className="text-gray-500">by Nice Brand</span>
              </div>
              <div className="flex flex-col items-end">
                <span className="font-bold text-gray-600 lg:text-lg">
                  $35.00
                </span>
              </div>
            </div>
          </div>
          {/* product - end */}
          {/* product - start */}
          <div>
            <a
              href="#"
              className="group relative mb-2 block h-96 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:mb-3"
            >
              <img
                src="https://images.unsplash.com/photo-1566207274740-0f8cf6b7d5a5?auto=format&q=75&fit=crop&crop=top&w=600&h=700"
                loading="lazy"
                alt="Photo by Vladimir Fedotov"
                className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />
            </a>
            <div className="flex items-start justify-between gap-2 px-2">
              <div className="flex flex-col">
                <a
                  href="#"
                  className="text-lg font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-xl"
                >
                  Lavish Outfit
                </a>
                <span className="text-gray-500">by Lavish Brand</span>
              </div>
              <div className="flex flex-col items-end">
                <span className="font-bold text-gray-600 lg:text-lg">
                  $49.99
                </span>
              </div>
            </div>
          </div>
          {/* product - end */}
        </div>
      </div>
    </>
  );
};

export default Product;
