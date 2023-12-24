"use client";
import React from "react";
import { Provider } from "react-redux";
import { store } from "./store";
import SimpleBackdrop from "@/components/Backdrop/loaderBackdrop";

function ReduxProvider({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      {" "}
      {children}
      <SimpleBackdrop />
    </Provider>
  );
}

export default ReduxProvider;
