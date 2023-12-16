"use client";

import {userStart , userSuccess , userFailure} from "@/redux/feature/users/userSlice";
import { AppDispatch, RootState } from "@/redux/store";
import React from "react";
import { useDispatch, useSelector } from "react-redux";


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

type Props = {
    data: userData
}


const Login: React.FC  = () => {

    const userData = useSelector((state: RootState) => state.user);
    const dispatch = useDispatch<AppDispatch>();


    // set user data
    const updateUserState = () =>{
        dispatch(userStart())
        dispatch(userSuccess({
            email: "vishal.jais19@gmail.com",
            username: "19",
            pic: null
        }))
    }
    return (
        <>
          <h1 className="text-2xl font-bold mb-4">Login</h1>
          <form className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-600">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 p-2 w-full border rounded-md"
                placeholder="john.doe@example.com"
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
              />
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
      
          </form>
        </>
      )
}

export default Login