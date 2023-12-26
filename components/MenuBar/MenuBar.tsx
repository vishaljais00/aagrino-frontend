import { useGetCategoryNavQuery } from "@/redux/feature/products/productAPI";
import { Menubar } from "primereact/menubar";
import "primereact/resources/themes/lara-light-indigo/theme.css"; // theme

export default function BasicDemo() {
  const { data, error, isLoading, isSuccess } = useGetCategoryNavQuery(0);
  return (
    <div className="card">
      <Menubar model={data} />
    </div>
  );
}
