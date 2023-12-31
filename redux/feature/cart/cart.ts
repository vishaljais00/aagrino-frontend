import { BASEURL } from '@/constants';
import { RootState } from '@/redux/store';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { toast } from 'react-toastify';

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

    addCart: builder.mutation({
      query: (productVariant: {
        "productVariantId": number
      }) => ({
        url: `/add`,
        method: 'POST',
        body: productVariant,
      }),

      transformResponse: (_response: { status: number, data: any, message: string }) => {
        console.log("data cart success", _response)
        toast.success(_response.message)
        return _response.data
      },
      // Pick out error and prevent nested properties in a hook or selector
      transformErrorResponse: (_response: { status: number, data: { message: string } }) => {
        console.log("data cart err", _response)
        toast.error(_response.data.message)
        return _response.data.message
      }
    }),

  }),

});

export const { useMyCartQuery , useAddCartMutation } = cartApi;
