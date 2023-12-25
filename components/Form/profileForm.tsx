import { UserProfileValues } from "@/constants/types";
import { useUpdateProfileMutation } from "@/redux/feature/users/userAPI";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

const ProfileForm = (props: {
  userData: {
    data: {
      name: string;
      email: string;
      profile: { phNumber: number; addresses: string };
    };
  };
}) => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isDirty },
    setValue,
  } = useForm<UserProfileValues>();

  const [signupUser] = useUpdateProfileMutation();
  useEffect(() => {
    if (props.userData) {
      setValue("name", props.userData.data.name || "");
      setValue("email", props.userData.data.email || "");
      setValue("phNumber", props.userData.data.profile.phNumber || 0);
    }
  }, [props.userData, setValue]);

  const onSubmit = (data: any) => {
    signupUser(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="flex flex-col mb-4">
        <label htmlFor="name" className="text-lg font-semibold mb-1">
          Name
        </label>
        <input
          type="text"
          {...register("name")}
          className="border rounded-md p-2"
        />
      </div>
      <div className="flex flex-col mb-4">
        <label htmlFor="email" className="text-lg font-semibold mb-1">
          Email
        </label>
        <input
          type="text"
          {...register("email")}
          className="border rounded-md p-2"
        />
      </div>
      <div className="flex flex-col mb-4">
        <label htmlFor="phNumber" className="text-lg font-semibold mb-1">
          Mobile Number
        </label>
        <input
          type="text"
          {...register("phNumber")}
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
