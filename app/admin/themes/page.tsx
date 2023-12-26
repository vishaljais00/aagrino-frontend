"use client";
import CategoryList from "@/components/Catogary/CategoryList";
import { MyModal } from "@/components/Modal/commanModal";
import { useGetThemesQuery } from "@/redux/feature/products/productAPI";
import React from "react";

const Catogary = () => {
  const { data, error, isLoading } = useGetThemesQuery(0);
  return (
    <>
      <ul className="bg-white shadow overflow-hidden sm:rounded-md ml-60">
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2 p-4">
          {data?.data?.map((item: { title: string; id: number }) => {
            return (
              <>
                <CategoryList name={item.title} id={item.id} key={item.id} />
              </>
            );
          })}
        </div>
        <div className="flex justify-center">
          <MyModal />
        </div>
      </ul>
    </>
  );
};

export default Catogary;
