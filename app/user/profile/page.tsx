"use client";
import RoundImage from "@/components/Image/RoundImage";
import BasicTabs from "@/components/profileTab/profileTab";
import WithUser from "@/hoc/withUser";
import { RootState } from "@/redux/store";
import React from "react";
import { useSelector } from "react-redux";

const Profile = () => {
  const userData = useSelector((state: RootState) => state?.user.data);
  return (
    <>
      <div className="mx-auto flex w-2/4">
        <BasicTabs />
        <div className="m-9">
          <RoundImage alt="profile Images" src={userData?.pic || ""} />
          
        </div>
      </div>
    </>
  );
};

export default WithUser(Profile);
