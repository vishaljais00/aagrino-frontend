"use client";
import CategoryList from "@/components/Catogary/CategoryList";
import { MyModal } from "@/components/Modal/commanModal";
import { useAddTagMutation, useGetTagsQuery } from "@/redux/feature/admin/admin";
import { setLoader } from "@/redux/feature/loader/loaderSlice";
import { useDispatch } from "react-redux";

const Catogary = () => {
  const { data, error, isLoading } = useGetTagsQuery(0);
  const [addTag, { isSuccess }] = useAddTagMutation();
  const dispatch = useDispatch()

  const submitData = (body: any) => {
    dispatch(setLoader(true));
    setTimeout(() => {
      addTag(body);
      dispatch(setLoader(false));
    }, 3000);
  };
  return (
    <>
      <ul className="bg-white shadow overflow-hidden sm:rounded-md -ml-48">
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2 p-4">
          {data?.data?.map((item: { title: string; id: number }) => {
            return (
              <CategoryList name={item.title} id={item.id} key={item.id} />
            );
          })}
        </div>
        <div className="flex justify-center">
          <MyModal showImage={false} submitData={submitData}/>
        </div>
      </ul>
    </>
  );
};

export default Catogary;
