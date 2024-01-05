import { IProductList } from "@/constants/interface";
import Image from "next/image";

const CatogaryBloc = (props: IProductList) => {
  return (
    <>
      <div>
        <a
          href="#"
          className="group relative flex h-96 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg"
        >
          <Image
            src={props.coverPhoto}
            alt={props.title}
            loading="lazy"
            width={500}
            height={500}
            className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
          />
          <div className="relative flex w-full flex-col rounded-lg bg-white p-4 text-center">
            <span className="text-gray-500">{props.title}</span>
            <span className="text-lg font-bold text-gray-800 lg:text-xl">
              {props.title}
            </span>
          </div>
        </a>
      </div>
    </>
  );
};

export default CatogaryBloc;
