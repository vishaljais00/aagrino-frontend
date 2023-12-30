"use client";
import React, { useEffect } from "react";
import AccountMenu from "./accountMenu";
import Link from "next/link";
import { Button } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { useRouter } from "next/navigation";
import BasicDemo from "./MenuBar/MenuBar";
import icon from "./Icon/icon.png";
import Image from "next/image";

const Navbar: React.FC = () => {
  const userData = useSelector((state: RootState) => state?.user?.data);
  const router = useRouter();

  return (
    <nav className="flex justify-between px-6 py-5 items-center bg-white">
      <Image src={icon} height={40} alt="" />
      <h1 className="text-xl text-gray-800 font-bold">Aagrino</h1>
      {/* <BasicDemo /> */}
      <div className="flex items-center">
        <ul className="flex items-center space-x-6">

          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M12 14l9-5-9-5-9 5 9 5z" />
              <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
              />
            </svg>
          </li>
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
          </li>
          {userData ? (
            <AccountMenu />
          ) : (
            <Button onClick={() => router?.push("/auth")} color="inherit">
              Login
            </Button>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
