"use client";
import { useGetAllProductsQuery } from "@/redux/feature/products/productAPI";
import React from "react";
import { IProduct } from "../constants/interface";
import Link from "next/link";

const Product = () => {
  const { data, error, isLoading } = useGetAllProductsQuery("bulbasaur");
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <h1> Products page</h1>
        <div className="flex flex-wrap -m-4">
          {data?.data.map((item: IProduct) => {
            return (
              <div key={item.slug} className="lg:w-1/4 md:w-1/2 p-4 w-full">
                <Link href={`products/` + item.slug}>
                  <a className="block relative h-48 rounded overflow-hidden">
                    <img
                      alt="ecommerce"
                      className="object-cover object-center w-full h-full block"
                      src="https://dummyimage.com/420x260"
                    />
                  </a>
                  <div className="mt-4">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                      {item.Category.title}
                    </h3>
                    <h2 className="text-gray-900 title-font text-lg font-medium">
                      {item.name}
                    </h2>
                    <p className="mt-1">$16.00</p>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Product;
