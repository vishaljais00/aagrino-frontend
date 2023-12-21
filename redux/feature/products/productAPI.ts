import { BASEURL } from '@/app/constants';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const productsApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASEURL + 'products' }),
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => ``,
    }),
    getProductBySlug: builder.query({
      query: (slug: string) => `${`product/`+slug}`
    }),
  }),

});

export const { useGetAllProductsQuery, useGetProductBySlugQuery } = productsApi;
