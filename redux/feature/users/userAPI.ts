import { BASEURL } from '@/app/constants';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const userAuthApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASEURL + 'auth/' }),
  endpoints: (builder) => ({
    userAuth: builder.mutation({
        query: (userData) => ({
            url: `login`,
            method: 'POST',
            body: userData,
        }),
        // Pick out data and prevent nested properties in a hook or selector
        transformResponse: (response: any) => {
            console.log("response", response)
        },
        // Pick out error and prevent nested properties in a hook or selector
        transformErrorResponse: (response: any) => {
            console.log("response", response)
        }

    })
  }),

});

export const { useUserAuthMutation } = userAuthApi;
