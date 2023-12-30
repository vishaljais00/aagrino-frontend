import { BASEURL } from '@/constants';
import { UserForm, UserSignupForm, UserState } from '@/constants/interface';
import { RootState } from '@/redux/store';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { toast } from 'react-toastify';
import { IAddress, profileData } from '@/constants/types';
import { EStatusMessage } from '@/constants/enums';

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
  tagTypes: ['profileUpdate'],
  endpoints: (builder) => ({
    userAuth: builder.mutation({
      query: (userData: UserForm) => ({
        url: `auth/login`,
        method: 'POST',
        body: userData,
      }),

      transformResponse: (_response: { status: number, data: any, message: string }) => {
        toast.success(_response.message)
        return _response.data
      },
      // Pick out error and prevent nested properties in a hook or selector
      transformErrorResponse: (_response: { status: number, data: { message: string } }) => {
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

      transformResponse: (response: { status: number, data: UserState, message: string }) => {
        console.log(response.data, "data")
        toast.success(response.message)
        return response.data
      },
      // Pick out error and prevent nested properties in a hook or selector
      transformErrorResponse: (response: { status: number, data: any, message: string }) => {
        toast.error(response.message)
        return response.message
      }

    }),
    userProfile: builder.query({
      query: () => ({ url: `user` }),
      providesTags: ['profileUpdate'],
    }),

    userAddress: builder.mutation({
      query: (userAddress: IAddress) => ({
        url: `user/addaddress`,
        method: 'POST',
        body: userAddress,
      }),

      transformResponse: (response: { status: number, message: string }) => {
        toast.success(response.message)
        if (response.message === EStatusMessage.success) {
          return true
        }
        return false
      },
      invalidatesTags: ['profileUpdate'],
    }),
    updateProfile: builder.mutation({
      query: (profileData: UserSignupForm) => {
        return ({
          url: `user`,
          method: 'PATCH',
          body: profileData,
        })
      },

      transformResponse: (response: { status: number, message: string }) => {
        toast.success(response.message)
        if (response.message === EStatusMessage.success) {
          return true
        }
        return false
      },
    }),
  }),

});

export const { useUserAuthMutation, useUserProfileQuery, useUserSignupMutation, useUserAddressMutation, useLazyUserProfileQuery, useUpdateProfileMutation } = userAuthApi;
