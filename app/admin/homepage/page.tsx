"use client";
import DataDisplay from "@/components/ShowOrder/Order";
import { useGetHomePageQuery } from "@/redux/feature/admin/admin";

const Homepage = () => {
  const { isLoading, isSuccess, data } = useGetHomePageQuery(0);
  return (
    <div className="">
      <DataDisplay data={data.data} />
    </div>
  );
};

export default Homepage;
