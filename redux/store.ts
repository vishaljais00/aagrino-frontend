import { productsApi } from './feature/users/productAPI';
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './feature/users/userSlice';


export const store = configureStore({
  reducer: {
    user: userReducer,
    [productsApi.reducerPath]: productsApi.reducer
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(productsApi.middleware)
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
