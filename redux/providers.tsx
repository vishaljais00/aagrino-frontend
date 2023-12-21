"use client";
import React from "react";
import { Provider } from "react-redux";
import { store } from "./store";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";

function ReduxProvider({ children }: { children: React.ReactNode }) {

  const persistor = persistStore(store);
  return <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
              {children}
            </PersistGate>
          </Provider>;
}

export default ReduxProvider;