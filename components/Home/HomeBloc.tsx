"use client";
import { HomeItemType } from "@/constants/enums";
import { IThemeList } from "@/constants/interface";
import { useGetHomeDataQuery } from "@/redux/feature/homePage/homePage";
import { Typography } from "@mui/material";
import { useEffect, useState } from "react";
import Banner from "../Banner/Banner";
import BigBanner from "../Banner/BigBanner";
import CatogaryBloc from "./CatogaryBloc";

const HomeBloc = () => {
  const { data, isSuccess } = useGetHomeDataQuery(0);
  const [renderData, setrenderData] = useState([]);

  useEffect(() => {
    if (isSuccess) {
      setrenderData(Object.keys(data) as []);
    }
  }, [data, isSuccess]);

  return (
    <>
      <BigBanner />
      {renderData.map((item: any) => {
        const isBanner = data[item].type === HomeItemType.BANNER;
        console.log("JSS log HomeBloc :", item);
        return isBanner ? (
          <Banner
            key={data[item].as}
            imageLink="https://images.unsplash.com/photo-1505846951821-e25bacf2eccd?auto=format&q=75&fit=crop&crop=top&w=1000&h=500"
            textOne="Summer Sale"
            description="This is a section of some simple filler text, also known as
            placeholder text. It shares some characteristics of a real written
            text."
            textTwo="Up to 70% off."
          />
        ) : (
          <section
            key={data[item].as}
            className="text-gray-600 body-font container px-5 py-2 mx-auto"
          >
            <Typography variant="h3" className="my-8" align="center">
              {data[item].as}
            </Typography>
            {data[item].data.length > 0 && (
              <div className="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-4">
                {data[item].data?.map((innerItem: IThemeList) => (
                  <CatogaryBloc
                    title={innerItem.title}
                    coverPhoto={innerItem?.coverPhoto}
                    key={innerItem.slug}
                  />
                ))}
              </div>
            )}
          </section>
        );
      })}
    </>
  );
};

export default HomeBloc;
