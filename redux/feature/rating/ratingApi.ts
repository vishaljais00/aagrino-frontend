import { BASEURL } from '@/constants';
import { Icomment, Irating} from '@/constants/interface';
import { RootState } from '@/redux/store';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { toast } from 'react-toastify';
import { EStatusMessage } from '@/constants/enums';

export const productRatingApi = createApi({
  reducerPath: 'ratingApi',
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
  tagTypes: ['ratingUpdate'],
  endpoints: (builder) => ({
    postRating: builder.mutation({
      query: (rating: Irating) => ({
        url: `rating`,
        method: 'POST',
        body: rating,
      }),

      transformResponse: (_response: { status: number, data: any, message: string }) => {
        console.log("data rating success", _response)
        toast.success(_response.message)
        return _response.data
      },
      // Pick out error and prevent nested properties in a hook or selector
      transformErrorResponse: (_response: { status: number, data: { message: string } }) => {
        console.log("data rating err", _response)
        toast.error(_response.data.message)
        return _response.data.message
      }
    }),

    postComment: builder.mutation({
        query: (comment: Icomment) => ({
          url: `comment`,
          method: 'POST',
          body: comment,
        }),
  
        transformResponse: (_response: { status: number, data: any, message: string }) => {
          console.log("data comment success", _response)
          toast.success(_response.message)
          return _response.data
        },
        // Pick out error and prevent nested properties in a hook or selector
        transformErrorResponse: (_response: { status: number, data: { message: string } }) => {
          console.log("data comment error", _response)
          toast.error(_response.data.message)
          return _response.data.message
        }
      }),
  }),

});

export const { usePostRatingMutation , usePostCommentMutation } = productRatingApi;
