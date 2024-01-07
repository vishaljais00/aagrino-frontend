import { BASEURL } from '@/constants';
import { RootState } from '@/redux/store';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const favoriteApi = createApi({
  reducerPath: 'favoriteApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASEURL + "favorites",
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
    myfavorites: builder.query({
      query: () => "",
    }),
  }),

});

export const { useMyfavoritesQuery } = favoriteApi;
