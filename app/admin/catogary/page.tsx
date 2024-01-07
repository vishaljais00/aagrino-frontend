"use client";
import CategoryList from "@/components/Catogary/CategoryList";
import { MyModal } from "@/components/Modal/commanModal";
import { useAddCatogaryMutation, useGetCatogaryQuery } from "@/redux/feature/admin/admin";
import { setLoader } from "@/redux/feature/loader/loaderSlice";
import { Typography } from "@mui/material";
import { useDispatch} from "react-redux";

const Catogary = () => {
  const { data, error, isLoading } = useGetCatogaryQuery(0);
  const [addCatogary, { isSuccess }] = useAddCatogaryMutation();
  const dispatch = useDispatch()

  const submitData = async(body: {title: string , image? : any}) => {
    try {
      
      setTimeout(() => {
      console.log("body",body)
      addCatogary(body);
      dispatch(setLoader(false));
    }, 3000);
 
    } catch (error) {
      
    }

  };

  return (
    <>
      <ul className="bg-white shadow overflow-hidden sm:rounded-md -ml-48">
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2 p-4">
          {data?.data?.length > 0 ? (
            data?.data?.map((item: { title: string; id: number; coverPhoto: string }) => {
              return (
                <CategoryList showImage={true} coverPhoto={item.coverPhoto} name={item.title} id={item.id} key={item.id} />
              );
            })
          ) : (
            <Typography variant="h4">No Caogaries Available</Typography>
          )}
        </div>
        <div className="flex justify-center mb-8">
          <MyModal showImage={true} submitData={submitData} />
        </div>
      </ul>
    </>
  );
};

export default Catogary;
 