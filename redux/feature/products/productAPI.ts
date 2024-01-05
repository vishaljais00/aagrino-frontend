import { BASEURL } from '@/constants';
import { NavProduts } from '@/constants/interface';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const productsApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASEURL + 'products' }),
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => ``,
    }),
    getProductBySlug: builder.query({
      query: (slug: string) => `${`product/` + slug}`
    }),
    getThemes: builder.query({
      query: () => `themes`
    }),
    getCategory: builder.query({
      query: () => `getcategory`
      // query: () => `getcategory/all`
    }),
    getCategoryAll: builder.query({
      query: () => `getcategory/all`
    }),
    getCategoryNav: builder.query({
      query: () => `getcategory/nav`,
      transformResponse: (response: { status: number, message: string, data: NavProduts[] }) => {
        // Transform the data structure here
        const transformedData = response.data.map((item: NavProduts) => {
          item.label = item.title;
          if (item.subCategories?.length) {
            item.items = item.subCategories.map((innerItem) => {
              return { label: innerItem.title }
            });
            item.subCategories = [];
          }
          return item;
        });
        return transformedData;
      },
    }),
    searchProducts: builder.mutation({
      query: (searchData: { inputData: string }) => ({
        url: ``,
        method: 'POST',
        body: searchData,
      }),
    }),
    
  }),

});

export const { useGetAllProductsQuery, useGetProductBySlugQuery, useGetCategoryQuery, useGetThemesQuery, useGetCategoryAllQuery, useGetCategoryNavQuery, useSearchProductsMutation,useLazyGetAllProductsQuery } = productsApi;
