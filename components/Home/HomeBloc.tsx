"use client";
import React from "react";
import CatogaryBloc from "./CatogaryBloc";
import { IProductList, IThemeList } from "@/constants/interface";
import { Typography } from "@mui/material";
import { useGetHomeDataQuery } from "@/redux/feature/homePage/homePage";

const HomeBloc = () => {
  const { data, isSuccess } = useGetHomeDataQuery(0);
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-2 mx-auto">
        <Typography variant="h3" className="my-8" align="center">
          Shop By Catogary
        </Typography>
        {data?.data?.allCategories?.length > 0 ? (
          <>
            <div className="flex flex-wrap -m-4">
              {data?.data?.themes?.map((item: IThemeList, index: number) => {
                return (
                  <CatogaryBloc
                    title={item.title}
                    coverPhoto={item.coverPhoto}
                    key={item.slug}
                  />
                );
              })}
            </div>
          </>
        ) : (
          <></>
        )}
      </div>
      {data?.data?.themes?.length > 0 ? (
        <>
          {" "}
          <Typography variant="h3" className="my-8" align="center">
            Shop By Themes
          </Typography>
          <div className="flex flex-wrap -m-4">
            {data?.data?.themes?.map((item: IThemeList, index: number) => {
              return (
                <CatogaryBloc
                  title={item.title}
                  coverPhoto={item.coverPhoto}
                  key={item.slug}
                />
              );
            })}
          </div>
        </>
      ) : (
        <></>
      )}
      {data?.data?.newArrivals?.length > 0 ? (
        <>
          {" "}
          <Typography variant="h3" className="my-8" align="center">
            New Arrivals
          </Typography>
          <div className="flex flex-wrap -m-4">
            {data?.data?.newArrivals?.map((item: IThemeList, index: number) => {
              return (
                <CatogaryBloc
                  title={item.name}
                  coverPhoto={item.coverImage}
                  key={item.slug}
                />
              );
            })}
          </div>
        </>
      ) : (
        <></>
      )}
    </section>
  );
};

export default HomeBloc;
