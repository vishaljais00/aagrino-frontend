import React from "react";
import { Menubar } from "primereact/menubar";
import { MenuItem } from "primereact/menuitem";
import "primereact/resources/themes/lara-light-indigo/theme.css"; // theme
import { useGetCategoryNavQuery } from "@/redux/feature/products/productAPI";

export default function BasicDemo() {
  const { data, error, isLoading, isSuccess } = useGetCategoryNavQuery(0);
  return (
    <div className="card">
      <Menubar model={data} />
    </div>
  );
}
