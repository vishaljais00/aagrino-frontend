import { BASEURL } from '@/constants';
import { RootState } from '@/redux/store';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const cartApi = createApi({
  reducerPath: 'cartApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASEURL + "cart",
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
    myCart: builder.query({
      query: () => "",
    }),

  }),

});

export const { useMyCartQuery } = cartApi;
