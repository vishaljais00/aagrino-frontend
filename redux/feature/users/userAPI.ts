import { BASEURL } from '@/app/constants';
import { UserForm } from '@/app/constants/interface';
import { RootState, AppDispatch } from '@/redux/store';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { useSelector } from 'react-redux';
import { userSuccess } from './userSlice';

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
      // Pick out data and prevent nested properties in a hook or selector
      transformResponse: (response: any) => {
        userSuccess(response)
        return response
      },
      // Pick out error and prevent nested properties in a hook or selector
      transformErrorResponse: (response: any) => {
        console.log("response", response)
      },

    }),
    userProfile: builder.query({
      query: () => ({ url: `user` }),
    })
  }),

});

export const { useUserAuthMutation, useUserProfileQuery } = userAuthApi;
