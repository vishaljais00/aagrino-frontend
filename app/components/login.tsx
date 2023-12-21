"use client";

import { useUserAuthMutation } from "@/redux/feature/users/userAPI";
import {userStart , userSuccess , userFailure, signinmanually} from "@/redux/feature/users/userSlice";
import { AppDispatch, RootState } from "@/redux/store";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from 'react-hook-form'


interface userState {
    email: string | null,
    username: string | null,
    pic: string | null,
}

interface userData {
    data: userState | null,
    loading: boolean,
    error: String | null,
}


type FormValues = {
  password: string
  email: string
}






const Login: React.FC  = () => {

    const userData = useSelector((state: RootState) => state.user);
    const dispatch = useDispatch<AppDispatch>();
    const { register, handleSubmit, setError, formState: { errors, isDirty}, } = useForm<FormValues>()

    // set user data

    // signin user handle data
    const onSubmit = async(data: any) =>{
      dispatch(signinmanually(data))
    }

    useEffect(()=>{

    }, [userData.error])
    return (
        <>
          <h1 className="text-2xl font-bold mb-4">Login</h1>
          <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-600">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 p-2 w-full border rounded-md"
                placeholder="john.doe@example.com"
                {...register('email')}
                required
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-600">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="mt-1 p-2 w-full border rounded-md"
                placeholder="********"
                {...register('password', {minLength : 6})}
              />
              {userData.error? <p> {userData.error}</p> : null}
            </div>
            <button
              type="submit"
              className="w-full p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            >
              Log In
            </button>
            <p>{userData?.data?.email}</p>
            <p>{userData?.data?.pic}</p>
            <p>{userData?.data?.username}</p>
            <p>{userData?.data?.token}</p>
      
          </form>
        </>
      )
}

export default Login