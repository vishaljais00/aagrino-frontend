import { productsApi } from './feature/products/productAPI';
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './feature/users/userSlice';
import { userAuthApi } from './feature/users/userAPI';
import loaderReducer from './feature/loader/loaderSlice';
import { homePageApi } from './feature/homePage/homePage';
import { adminApi } from './feature/admin/admin';

export const store = configureStore({
  reducer: {
    user: userReducer,
    [productsApi.reducerPath]: productsApi.reducer,
    [userAuthApi.reducerPath]: userAuthApi.reducer,
    [homePageApi.reducerPath]: homePageApi.reducer,
    [adminApi.reducerPath]: adminApi.reducer,
    loader: loaderReducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(userAuthApi.middleware).concat(productsApi.middleware).concat(homePageApi.middleware).concat(adminApi.middleware)
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
