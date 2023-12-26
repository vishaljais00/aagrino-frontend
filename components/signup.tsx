// pages/signup.tsx

import { useUserSignupMutation } from "@/redux/feature/users/userAPI";
import { RootState } from "@/redux/store";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { UserSignupForm } from "../constants/interface";

type SinupFormValues = {
  password: string;
  email: string;
  name: string;
};

const Signup: React.FC = () => {
  const [signupUser, { isLoading, isError, isSuccess, error }] =
    useUserSignupMutation();
  const userData = useSelector((state: RootState) => state.user);
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<SinupFormValues>();

  const onSubmit = async (userdata: UserSignupForm) => {
    try {
      let newUserData = {
        ...userdata,
        profilePic:
          "https://i.pinimg.com/236x/4e/2b/88/4e2b88baa1d41926a23b05180456fb56.jpg",
        withGoogle: false,
      };
      await signupUser(newUserData);
    } catch (errors: any) {
      setError("email", {
        type: "manual",
        message: "gvh", // Use the appropriate error message from the API response
      });
    }
  };

  useEffect(() => {
    // Reset API error when userData.error changes
    if (userData.error) {
      setError("email", {
        type: "manual",
        message: userData.error, // Reset the API error message
      });
    }
  }, [userData.error, setError]);
  return (
    <>
      <h1 className="text-2xl font-bold mb-4">Sign Up</h1>
      <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
        {errors.email && ( // Display API error if present
          <p className="text-red-500">{errors.email.message}</p>
        )}
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-600"
          >
            Full Name
          </label>
          <input
            type="text"
            id="name"
            className="mt-1 p-2 w-full border rounded-md"
            placeholder="John Doe"
            {...register("name", { required: true })}
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-600"
          >
            Email Address
          </label>
          <input
            type="email"
            id="email"
            className="mt-1 p-2 w-full border rounded-md"
            placeholder="john.doe@example.com"
            {...register("email", { required: true })}
          />
        </div>
        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-600"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            className="mt-1 p-2 w-full border rounded-md"
            placeholder="********"
            {...register("password", { minLength: 6, required: true })}
          />
        </div>
        <div>
          <button
            type="submit"
            className="w-full p-2 bg-green-500 text-white rounded-md hover:bg-green-600"
          >
            Sign Up
          </button>
        </div>
      </form>
    </>
  );
};

export default Signup;
