"use client";
import React from "react";
import CatogaryBloc from "./CatogaryBloc";
import { useGetCategoryAllQuery } from "@/redux/feature/products/productAPI";
import { IProductList } from "@/constants/interface";

const HomeBloc = () => {
  const { data, error, isLoading,isSuccess } = useGetCategoryAllQuery(0);
  console.log("JSS log :", { data });
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          {isSuccess && data.data.map((item: IProductList, index: number) => {
            return (
              <CatogaryBloc
                title={item.title}
                coverPhoto={item.coverPhoto}
                key={item.title}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HomeBloc;
