"use client";
import CategoryList from "@/components/Catogary/CategoryList";
import { MyModal } from "@/components/Modal/commanModal";
import { useAddCatogaryMutation } from "@/redux/feature/admin/admin";
import { setLoader } from "@/redux/feature/loader/loaderSlice";
import { useGetThemesQuery } from "@/redux/feature/products/productAPI";
import { useDispatch } from "react-redux";

const Catogary = () => {
  const { data, error, isLoading } = useGetThemesQuery(0);
  const [addTheme, { isSuccess }] = useAddCatogaryMutation();

  const dispatch = useDispatch()
  const submitData = async(body: {title: string , image? : any}) => {
    try { 
      setTimeout(() => {
      addTheme(body);
      dispatch(setLoader(false));
    }, 3000);
 
    } catch (error) {
      
    }
  };

  return (
    <>
      <ul className="bg-white shadow overflow-hidden sm:rounded-md -ml-48">
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
          <MyModal showImage={true} submitData={submitData}/>
        </div>
      </ul>
    </>
  );
};

export default Catogary;
