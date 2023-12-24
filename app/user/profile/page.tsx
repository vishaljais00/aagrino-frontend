"use client";
import RoundImage from "@/components/Image/RoundImage";
import BasicTabs from "@/components/profileTab/profileTab";
import { IAddress } from "@/constants/types";
import WithUser from "@/hoc/withUser";
import { useUserProfileQuery } from "@/redux/feature/users/userAPI";
import { RootState } from "@/redux/store";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Profile = () => {
  const userData = useSelector((state: RootState) => state?.user.data);
  return (
    <>
      <div className="mx-auto max-w-270 flex w-2/4">
        <BasicTabs />
        <RoundImage alt="profile Images" src={userData?.pic || ""} />
      </div>
    </>
  );
};

export default WithUser(Profile);
