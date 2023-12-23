import { BASEURL } from '@/app/constants';
import { UserForm } from '@/app/constants/interface';
import { RootState, AppDispatch } from '@/redux/store';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// import { useDispatch } from 'react-redux';
import { Cookies} from 'react-cookie';
// import { userSuccess } from './userSlice';


const cookies = new Cookies();
// const dispatch = new useDispatch()

export const userAuthApi = createApi({
  reducerPath: 'authApi',
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
  endpoints: (builder) => ({
    userAuth: builder.mutation({
      query: (userData: UserForm) => ({
        url: `auth/login`,
        method: 'POST',
        body: userData,
      }),
      // Pick out data and prevent nested properties in a hook or selector
      transformResponse: (response: any, meta , args) => {
        console.log("response success", response, meta , args)
        const currentUser = {
          username: args?.email.split('@')[0],
          email: args?.email,
          token: response.accessToken,
          pic: null,
        }

        // const dispatch = useDispatch() 
        // dispatch(userSuccess(currentUser))
        cookies.set('aag-user', JSON.stringify(currentUser), {
          path: '/'
        })
      },
      // Pick out error and prevent nested properties in a hook or selector
      transformErrorResponse: (response: any) => {
        console.log("response error", response)
      }

    }),
    userProfile: builder.query({
      query: () => ({ url: `user` }),
    })
  }),

});

export const { useUserAuthMutation, useUserProfileQuery } = userAuthApi;
