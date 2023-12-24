import { UserProfileValues } from "@/constants/types";
import { useUserProfileQuery } from "@/redux/feature/users/userAPI";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

const ProfileForm = (props: { address: Function }) => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isDirty },
    setValue,
  } = useForm<UserProfileValues>();

  const { data: userData, isSuccess } = useUserProfileQuery(0);

  useEffect(() => {
    if (isSuccess && userData) {
      console.log("JSS log Insider :", { isSuccess, userData });
      setValue("Name", userData.data.name || "");
      setValue("Email", userData.data.email || "");
      setValue("MobileNumber", userData.data.profile.phNumber || "");
      props.address(userData.data.profile.addresses);
    }
  }, [isSuccess, userData, setValue]);

  const onSubmit = (data: any) => {
    console.log(data);
    // Handle form submission logic here
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="flex flex-col mb-4">
        <label htmlFor="Name" className="text-lg font-semibold mb-1">
          Name
        </label>
        <input
          type="text"
          {...register("Name")}
          className="border rounded-md p-2"
        />
      </div>
      <div className="flex flex-col mb-4">
        <label htmlFor="Email" className="text-lg font-semibold mb-1">
          Email
        </label>
        <input
          type="text"
          {...register("Email")}
          className="border rounded-md p-2"
        />
      </div>
      <div className="flex flex-col mb-4">
        <label htmlFor="MobileNumber" className="text-lg font-semibold mb-1">
          Mobile Number
        </label>
        <input
          type="text"
          {...register("MobileNumber")}
          className="border rounded-md p-2"
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Save
      </button>
    </form>
  );
};

export default ProfileForm;
