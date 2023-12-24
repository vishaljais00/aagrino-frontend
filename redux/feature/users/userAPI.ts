import { BASEURL } from '@/app/constants';
import { UserForm, UserSignupForm } from '@/app/constants/interface';
import { RootState, AppDispatch } from '@/redux/store';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { useSelector } from 'react-redux';
import { userSuccess } from './userSlice';
import { toast } from 'react-toastify';

export const userAuthApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASEURL,
    prepareHeaders: (headers, { getState }) => {
      const myState: RootState = getState() as RootState;
      const userData = myState.user.data

      if (userData?.token) {
        headers.set('Authorization', `Bearer ${userData?.token}`);
      }

      headers.set('Content-Type', 'application/json');
      return headers;
    },
  }),
  endpoints: (builder) => ({
    userAuth: builder.mutation({
      query: (userData: UserForm) => ({
        url: `auth/login`,
        method: 'POST',
        body: userData,
      }),

      transformResponse: (_response: {status: number , data: any, message: string}) => {
        console.log(_response)
        toast.success(_response.message)
        return _response.data
      
      },
      // Pick out error and prevent nested properties in a hook or selector
      transformErrorResponse: (_response: {status: number , data: {message: string} }) => {
        toast.error(_response.data.message)
        return _response.data.message
      }

    }),

    userSignup: builder.mutation({
      query: (userData: UserSignupForm) => ({
        url: `auth/signup`,
        method: 'POST',
        body: userData,
      }),

      transformResponse: (_response: {status: number , data: any, message: string}) => {
        console.log("_response success", _response)
        toast.success(_response.message)
        return _response.data
      
      },
      // Pick out error and prevent nested properties in a hook or selector
      transformErrorResponse: (_response: {status: number ,data: any, message: string }) => {
        console.log("_response error", _response)
        toast.error("invaid mail or username")
        return _response.message
      }

    }),
    userProfile: builder.query({
      query: () => ({ url: `user` }),
      keepUnusedDataFor: 3
    })
  }),

});

export const { useUserAuthMutation, useUserProfileQuery , useUserSignupMutation } = userAuthApi;
