"use client";
import DynamicTypography from "@/components/DynamicTypography/DynamicTypography";
import { IProduct } from "@/constants/interface";
import { useMyfavoritesQuery } from "@/redux/feature/favorites/favorite";
import { Button } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const FavoriteItems = () => {
  const { data, isSuccess } = useMyfavoritesQuery(0);
  return (
    <div className="p-8">
      <DynamicTypography content="Your Favorite Items" variant="h3" />
      {/* <h2 className="text-2xl font-semibold mb-4">Your Favorite Items</h2> */}
      <p className="mb-6">
        There are {data?.data?.length} products in this list
      </p>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow rounded-lg">
          <thead>
            <tr className="border-b">
              <th className="px-6 py-3 text-left leading-4 font-medium text-gray-600 uppercase tracking-wider">
                Product
              </th>
              <th className="px-6 py-3 text-left leading-4 font-medium text-gray-600 uppercase tracking-wider">
                Price
              </th>
              <th className="px-6 py-3 text-left leading-4 font-medium text-gray-600 uppercase tracking-wider">
                Stock Status
              </th>
              <th className="px-6 py-3 text-left leading-4 font-medium text-gray-600 uppercase tracking-wider">
                Action
              </th>
              <th className="px-6 py-3">Remove</th>
            </tr>
          </thead>
          <tbody>
            {isSuccess &&
              data?.data?.map((item: { product: IProduct }) => {
                console.log("JSS log page :", { item });
                return (
                  <tr key={item.product.slug} className="border-b">
                    <td className="px-6 py-4 whitespace-no-wrap h-36">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-32 w-32">
                          <Image
                            height={100}
                            width={100}
                            className="h-32 w-32 rounded-full"
                            src={item.product.coverPhoto}
                            alt={item.product.name}
                          />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm leading-5 font-medium text-gray-900">
                            {item.product.name}
                          </div>
                          <div className="text-sm leading-5 text-gray-500">
                            {item.product.Category?.title}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-no-wrap">
                      <div className="text-sm leading-5 text-gray-900">
                        Rs {item?.product.variants && item?.product.variants[0]?.price || 0}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-no-wrap">
                      {item?.product.variants[0]?.price ? (
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                          In Stock
                        </span>
                      ) : (
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                          Stock Out
                        </span>
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-no-wrap text-left text-sm leading-5 font-medium">
                      <Link href={"products/" + item.product.slug}>
                        <Button
                          variant="outlined"
                          className="text-indigo-600 hover:text-indigo-900"
                        >
                          Go To Product
                        </Button>
                      </Link>
                    </td>
                    <td className="px-6 py-4 whitespace-no-wrap text-center text-sm leading-5 font-medium">
                      <button className="text-gray-600 hover:text-gray-900">
                        <svg
                          className="h-6 w-6"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path d="M3 6h18M6 6v15a2 2 0 002 2h8a2 2 0 002-2V6M10 11v2m4-2v2"></path>
                        </svg>
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FavoriteItems;
