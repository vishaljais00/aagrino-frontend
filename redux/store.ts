import { configureStore } from '@reduxjs/toolkit';
import { adminApi } from './feature/admin/admin';
import { cartApi } from './feature/cart/cart';
import { homePageApi } from './feature/homePage/homePage';
import loaderReducer from './feature/loader/loaderSlice';
import { productsApi } from './feature/products/productAPI';
import { productRatingApi } from './feature/rating/ratingApi';
import { userAuthApi } from './feature/users/userAPI';
import userReducer from './feature/users/userSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    [productsApi.reducerPath]: productsApi.reducer,
    [userAuthApi.reducerPath]: userAuthApi.reducer,
    [homePageApi.reducerPath]: homePageApi.reducer,
    [adminApi.reducerPath]: adminApi.reducer,
    [productRatingApi.reducerPath]: productRatingApi.reducer,
    [cartApi.reducerPath]: cartApi.reducer,
    loader: loaderReducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(userAuthApi.middleware).concat(productsApi.middleware).concat(homePageApi.middleware).concat(adminApi.middleware).concat(productRatingApi.middleware).concat(cartApi.middleware)
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
