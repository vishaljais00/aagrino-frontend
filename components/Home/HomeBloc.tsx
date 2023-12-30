"use client";
import { IThemeList } from "@/constants/interface";
import { useGetHomeDataQuery } from "@/redux/feature/homePage/homePage";
import { Typography } from "@mui/material";
import { useEffect, useState } from "react";
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
      {renderData.map((item: any) => {
        return (
          <section key={item.as} className="text-gray-600 body-font">
            <div className="container px-5 py-2 mx-auto">
              <Typography variant="h3" className="my-8" align="center">
                {data[item].as}
              </Typography>
              {data[item].data.length > 0 ? (
                <>
                  <div className="flex flex-wrap -m-4">
                    {data[item].data?.map(
                      (innerItem: IThemeList, index: number) => {
                        if (!innerItem.coverImage) {
                          console.log("JSS log :", { innerItem });
                        }
                        return (
                          <CatogaryBloc
                            title={innerItem.title}
                            coverPhoto={
                              innerItem?.coverPhoto ||
                              "https://wallpapers.com/images/hd/dragon-ball-super-pictures-8l3x3v4ngyftb07f.jpg"
                            }
                            key={innerItem.slug}
                          />
                        );
                      }
                    )}
                  </div>
                </>
              ) : (
                <></>
              )}
            </div>
          </section>
        );
      })}
    </>
  );
};

export default HomeBloc;
