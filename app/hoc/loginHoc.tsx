import { useEffect, ComponentType } from "react";
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";
import { redirect } from "next/navigation";

const ProctedHOC = <P extends object>(WrappedComponent: ComponentType<P>) => {
  const WithUserData: React.FC<P> = (props) => {
    const userData = useSelector((state: RootState) => state?.user?.data);

    useEffect(() => {
      console.log("JSS log userData:", userData);
      if (userData) {
        redirect("/");
      }
    }, [userData]);

    return userData ? null : <WrappedComponent {...props} />;
  };

  return WithUserData;
};

export default ProctedHOC;
