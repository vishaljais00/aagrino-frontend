"use client";

import { useUserAuthMutation } from "@/redux/feature/users/userAPI";
import { RootState } from "@/redux/store";
import React, { useEffect} from "react";
import {useSelector} from "react-redux";
import { useForm } from "react-hook-form";
import {UserForm } from "../constants/interface";
// import { isSerializedError } from '@reduxjs/toolkit/query/react';

type FormValues = {
  password: string;
  email: string;
};

const Login: React.FC = () => {
  const userData = useSelector((state: RootState) => state.user);
  const [loginUser, { isLoading, isError, isSuccess, error }] =
    useUserAuthMutation();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<FormValues>();


 
  const onSubmit = async (userdata: UserForm) => {
    try {
      const res = await loginUser(userdata);
    } catch (errors: any) {
      console.log("JSS log error:", { errors });
     
      setError("email", {
        type: "manual",
        message: 'gvh' // Use the appropriate error message from the API response
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
  }, [userData.error, setError ]);

  return (
    <>
      <h1 className="text-2xl font-bold mb-4">Login</h1>
      <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
        {errors.email && ( // Display API error if present
          <p className="text-red-500">{errors.email.message}</p>
        )}
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
            {...register("email", {})}
            required
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
            {...register("password", { minLength: 6 })}
          />
          {userData.error ? <p> {userData.error}</p> : null}
        </div>
        <button
          type="submit"
          className="w-full p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Log In
        </button>
      </form>
    </>
  );
};

export default Login;
