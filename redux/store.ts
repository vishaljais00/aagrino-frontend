import { productsApi } from './feature/products/productAPI';
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './feature/users/userSlice';
import { userAuthApi } from './feature/users/userAPI';

export const store = configureStore({
  reducer: {
    user: userReducer,
    [productsApi.reducerPath]: productsApi.reducer,
    [userAuthApi.reducerPath]: userAuthApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(userAuthApi.middleware).concat(productsApi.middleware)
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
