import { IProductList } from "@/constants/interface";
import Image from "next/image";

const CatogaryBloc = (props: IProductList) => {
  return (
    <>
      <div className="px-1 py-2 lg:w-1/3">
        <div className="h-full bg-gray-100 bg-opacity-75 px-8 py-3 rounded-lg overflow-hidden text-center relative">
          <h2 className="text-sm text-gray-500 uppercase tracking-widest mb-2">
            {props.title}
          </h2>
          <Image
            height={200}
            width={200}
            className="h-auto max-h-80 w-full object-cover object-center mb-4 rounded-md"
            src={props.coverPhoto}
            alt={props.title}
          />
          <div className="flex justify-center items-center">
            <button className="bg-gray-900 text-white rounded-md py-2 px-4 uppercase text-xs tracking-wider hover:bg-gray-800 focus:outline-none focus:bg-gray-800">
              View Products
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CatogaryBloc;
