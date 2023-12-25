"use client";
import React from "react";
import CatogaryBloc from "./CatogaryBloc";
import {
  useGetCategoryAllQuery,
  useGetThemesQuery,
} from "@/redux/feature/products/productAPI";
import { IProductList, IThemeList } from "@/constants/interface";
import { Typography } from "@mui/material";

const HomeBloc = () => {
  const { data, isSuccess } = useGetCategoryAllQuery(0);
  const { data: ThemeData, isSuccess: ThemeSuccess } = useGetThemesQuery(0);
  console.log("JSS log :", { data, ThemeData });
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-2 mx-auto">
        <Typography variant="h3" className="mb-4" align="center">
          Shop By Catogary
        </Typography>
        <div className="flex flex-wrap -m-4">
          {isSuccess &&
            data.data.map((item: IProductList, index: number) => {
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
      {ThemeData?.data?.length > 0 ? (
        <Typography variant="h3" className="my-8" align="center">
          Shop By Themes
        </Typography>
      ) : (
        <></>
      )}

      <div className="flex flex-wrap -m-4">
        {ThemeSuccess &&
          ThemeData?.data?.map((item: IThemeList, index: number) => {
            return (
              <CatogaryBloc
                title={item.title}
                coverPhoto={item.coverPhoto}
                key={item.slug}
              />
            );
          })}
      </div>
    </section>
  );
};

export default HomeBloc;
