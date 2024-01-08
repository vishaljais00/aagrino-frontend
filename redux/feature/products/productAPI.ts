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
    }),
    getCategoryNav: builder.query({
      query: () => `getcategory/nav`,
      transformResponse: (response: { status: number, message: string, data: NavProduts[] }) => {
        // Transform the data structure here
        const transformedData = response.data.map((item: NavProduts) => {
          item.label = item.title;
          item.target = "catogary/" + item.slug
          if (item.subCategories?.length) {
            item.items = item.subCategories.map((innerItem) => {
              return { label: innerItem.title, target: innerItem.slug }
            });
            item.subCategories = [];
          }
          return item;
        });
        return transformedData;
      },
    }),
    searchProducts: builder.mutation({
      query: (searchData: { input: string, limit: number, page: number }) => ({
        url: ``,
        method: 'POST',
        body: searchData,
      }),
    }),
    getSideFilter: builder.query({
      query: () => `sidefilter`,
    }),
    getProductsByCategory: builder.query({
      query: (catogarySlug) => `catogary/${catogarySlug}`,
    }),
  }),

});

export const { useGetAllProductsQuery, useGetProductBySlugQuery, useGetCategoryQuery, useGetThemesQuery, useGetCategoryNavQuery, useSearchProductsMutation, useLazyGetAllProductsQuery, useGetProductsByCategoryQuery, useGetSideFilterQuery } = productsApi;
