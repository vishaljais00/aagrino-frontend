import { BASEURL } from '@/constants';
import { RootState } from '@/redux/store';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { toast } from 'react-toastify';

export const adminApi = createApi({
  reducerPath: 'adminApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASEURL + 'admin',
    prepareHeaders: (headers, { getState }) => {
      const myState: RootState = getState() as RootState;
      const userData = myState.user.data
      if (userData?.token) {
        headers.set('Authorization', `Bearer ${userData?.token}`);
      }
      
      return headers;
    },  
  }),
  tagTypes: ['catogaryUpdate', "themeUpdate", 'tagsUpdate'],
  endpoints: (builder) => ({
    getCatogary: builder.query({
      query: () => `tagging/catogary`,
      providesTags: ['catogaryUpdate']
    }),
    getThemes: builder.query({
      query: () => `tagging/themes`,
      providesTags: ['themeUpdate']
    }),
    getTags: builder.query({
      query: () => `tagging/tags`,
      providesTags: ['tagsUpdate']
    }),

    addCatogary: builder.mutation({
      query: (catogaryData: { title: string, image?: any }) => {
        const body = new FormData();
        if (catogaryData.image) {
          body.append('image', catogaryData.image);
        }
        body.append('title', catogaryData.title);
        body.append('slug', catogaryData.title.trim().toLowerCase().replace(" ", '-'));
      
        return {
          url: `tagging/createcatogary`,
          method: 'POST',
          body,
          headers: {
            'Accept': 'multipart/form-data',
          },
        };
      },
      
      invalidatesTags: ['catogaryUpdate'],
      transformResponse: (_response: { status: number, data: unknown, message: string }) => {
        toast.success(_response.message)
        return _response.data
      },
    }),

    addTheme: builder.mutation({
      query: (catogaryData: { title: string, image?: any }) => {
        const body = new FormData();
        if (catogaryData.image) {
          body.append('image', catogaryData.image);
        }
        body.append('title', catogaryData.title);
        // body.append('slug', catogaryData.title.trim().toLowerCase().replace(" ", '-'));
      
        return {
          url: `tagging/craetetheme`,
          method: 'POST',
          body,
          headers: {
            'Accept': 'multipart/form-data',
          },
        };
      },
      
      invalidatesTags: ['catogaryUpdate'],
      transformResponse: (_response: { status: number, data: unknown, message: string }) => {
        toast.success(_response.message)
        return _response.data
      },
    }),


    addTag: builder.mutation({
      query: (catogaryData: { title: string, image?: any }) => {    
        return {
          url: `tagging/createtag`,
          method: 'POST',
          body: catogaryData,
        };
      },
      
      invalidatesTags: ['catogaryUpdate'],
      transformResponse: (_response: { status: number, data: unknown, message: string }) => {
        toast.success(_response.message)
        return _response.data
      },
    }),
    updateCatogary: builder.mutation({
      query: (catogaryData: { title: string, id: number }) => ({
        url: `tagging/updatecatogary`,
        method: 'PUT',
        body: catogaryData,
      }),
      invalidatesTags: ['catogaryUpdate'],
      transformResponse: (_response: { status: number, data: unknown, message: string }) => {
        toast.success(_response.message)
        return _response.data
      },
    }),
    getHomePage: builder.query({
      query: () => ``,
    }),
  }),

});

export const { useGetCatogaryQuery, useAddTagMutation, useAddCatogaryMutation, useUpdateCatogaryMutation, useGetTagsQuery, useGetThemesQuery, useGetHomePageQuery } = adminApi;
