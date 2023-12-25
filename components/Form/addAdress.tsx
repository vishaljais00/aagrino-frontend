import { IAddress } from "@/constants/types";
import { SetLoading } from "@/hooks";
import { setLoader } from "@/redux/feature/loader/loaderSlice";
import { useUserAddressMutation } from "@/redux/feature/users/userAPI";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

const AddressForm = (props: { handleClose: Function }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IAddress>();
  const dispatch = useDispatch(); // Move useDispatch inside the function

  const [addUserAddress] = useUserAddressMutation();

  const onSubmit = (data: IAddress) => {
    props.handleClose();
    dispatch(setLoader(true));
    addUserAddress({ ...data, pincode: +data.pincode });
    dispatch(setLoader(true));
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-4 ">
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700"
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          {...register("name", { required: true })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
        {errors.name && <span className="text-red-500">Name is required</span>}
      </div>

      <div className="mb-4">
        <label
          htmlFor="fullAddress"
          className="block text-sm font-medium text-gray-700"
        >
          Full Address
        </label>
        <input
          type="text"
          id="fullAddress"
          {...register("fullAddress", { required: true })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
        {errors.fullAddress && (
          <span className="text-red-500">Full Address is required</span>
        )}
      </div>

      <div className="mb-4">
        <label
          htmlFor="pincode"
          className="block text-sm font-medium text-gray-700"
        >
          Pincode
        </label>
        <input
          type="number"
          id="pincode"
          {...register("pincode", { required: true })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
        {errors.pincode && (
          <span className="text-red-500">Invalid Pincode</span>
        )}
      </div>

      <div className="mb-4">
        <label
          htmlFor="isDefault"
          className="block text-sm font-medium text-gray-700"
        >
          Is Default
        </label>
        <input
          type="checkbox"
          id="isDefault"
          {...register("isDefault")}
          className="mt-1 rounded border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
      </div>

      <div>
        <button
          type="submit"
          className="inline-block py-2 px-4 text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default AddressForm;
