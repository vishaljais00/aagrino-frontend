import { BASEURL } from '@/constants';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const homePageApi = createApi({
  reducerPath: 'homePageApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASEURL }),
  endpoints: (builder) => ({
    getHomeData: builder.query({
      query: () => `homepage`,
    }),

  }),

});

export const { useGetHomeDataQuery } = homePageApi;
