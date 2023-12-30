"use client";
import CategoryList from "@/components/Catogary/CategoryList";
import { MyModal } from "@/components/Modal/commanModal";
import { useGetCatogaryQuery } from "@/redux/feature/admin/admin";
import { Typography } from "@mui/material";

const Catogary = () => {
  const { data, error, isLoading } = useGetCatogaryQuery(0);

  return (
    <>
      <ul className="bg-white shadow overflow-hidden sm:rounded-md -ml-48">
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2 p-4">
          {data?.data?.length > 0 ? (
            data?.data?.map((item: { title: string; id: number }) => {
              return (
                <>
                  <CategoryList name={item.title} id={item.id} key={item.id} />
                </>
              );
            })
          ) : (
            <Typography variant="h4">No Caogaries Available</Typography>
          )}
        </div>
        <div className="flex justify-center mb-8">
          <MyModal />
        </div>
      </ul>
    </>
  );
};

export default Catogary;
