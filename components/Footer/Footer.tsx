"use client";
import { ITheme } from "@/constants/interface";
import {
  useGetCategoryQuery,
  useGetThemesQuery,
} from "@/redux/feature/products/productAPI";
import React from "react";

const Footer: React.FC = () => {
  const {
    data: ThemeData,
    error: ThemeError,
    isLoading: ThemeLoading,
  } = useGetThemesQuery(0);
  const {
    data: CatogaryData,
    error: CatogaryError,
    isLoading: CatogaryLoading,
  } = useGetCategoryQuery(0);
  return (
    // <footer className="text-gray-600 body-font">
    //   <div className="container px-5 py-12 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
    //     <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left md:mt-0 mt-10">
    //       <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
    //         <svg
    //           xmlns="http://www.w3.org/2000/svg"
    //           fill="none"
    //           stroke="currentColor"
    //           strokeLinecap="round"
    //           strokeLinejoin="round"
    //           strokeWidth={2}
    //           className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
    //           viewBox="0 0 24 24"
    //         >
    //           <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
    //         </svg>
    //         <span className="ml-3 text-xl">Tailblocks</span>
    //       </a>
    //       <p className="mt-2 text-sm text-gray-500">
    //         Air plant banjo lyft occupy retro adaptogen indego
    //       </p>
    //     </div>
    //     <div className="flex-grow flex flex-wrap md:pr-20 -mb-10 md:text-left text-center order-first">
    //       <div className="lg:w-1/4 md:w-1/2 w-full px-4">
    //         <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
    //           Theme
    //         </h2>
    //         <nav className="list-none mb-10">
    //           {ThemeData?.data?.map((item: ITheme, index: number) => {
    //             return (
    //               <li key={item.slug}>
    //                 <a className="text-gray-600 hover:text-gray-800">
    //                   {item.title}
    //                 </a>
    //               </li>
    //             );
    //           })}
    //         </nav>
    //       </div>
    //       <div className="lg:w-1/4 md:w-1/2 w-full px-4">
    //         <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
    //           CATEGORIES
    //         </h2>
    //         <nav className="list-none mb-10">
    //           {CatogaryData?.data?.map((item: ICatogary, index: number) => {
    //             return (
    //               <li key={item.title}>
    //                 <a className="text-gray-600 hover:text-gray-800">
    //                   {item.title}
    //                 </a>
    //               </li>
    //             );
    //           })}
    //         </nav>
    //       </div>
    //       <div className="lg:w-1/4 md:w-1/2 w-full px-4">
    //         <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
    //           CATEGORIES
    //         </h2>
    //         <nav className="list-none mb-10">
    //           <li>
    //             <a className="text-gray-600 hover:text-gray-800">First Link</a>
    //           </li>
    //           <li>
    //             <a className="text-gray-600 hover:text-gray-800">Second Link</a>
    //           </li>
    //           <li>
    //             <a className="text-gray-600 hover:text-gray-800">Third Link</a>
    //           </li>
    //           <li>
    //             <a className="text-gray-600 hover:text-gray-800">Fourth Link</a>
    //           </li>
    //         </nav>
    //       </div>
    //       <div className="lg:w-1/4 md:w-1/2 w-full px-4">
    //         <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
    //           CATEGORIES
    //         </h2>
    //         <nav className="list-none mb-10">
    //           <li>
    //             <a className="text-gray-600 hover:text-gray-800">First Link</a>
    //           </li>
    //           <li>
    //             <a className="text-gray-600 hover:text-gray-800">Second Link</a>
    //           </li>
    //           <li>
    //             <a className="text-gray-600 hover:text-gray-800">Third Link</a>
    //           </li>
    //           <li>
    //             <a className="text-gray-600 hover:text-gray-800">Fourth Link</a>
    //           </li>
    //         </nav>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="bg-gray-100">
    //     <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
    //       <p className="text-gray-500 text-sm text-center sm:text-left">
    //         © 2020 Tailblocks —
    //         <a
    //           href="https://twitter.com/knyttneve"
    //           rel="noopener noreferrer"
    //           className="text-gray-600 ml-1"
    //           target="_blank"
    //         >
    //           @knyttneve
    //         </a>
    //       </p>
    //       <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
    //         <a className="text-gray-500">
    //           <svg
    //             fill="currentColor"
    //             strokeLinecap="round"
    //             strokeLinejoin="round"
    //             strokeWidth={2}
    //             className="w-5 h-5"
    //             viewBox="0 0 24 24"
    //           >
    //             <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
    //           </svg>
    //         </a>
    //         <a className="ml-3 text-gray-500">
    //           <svg
    //             fill="currentColor"
    //             strokeLinecap="round"
    //             strokeLinejoin="round"
    //             strokeWidth={2}
    //             className="w-5 h-5"
    //             viewBox="0 0 24 24"
    //           >
    //             <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
    //           </svg>
    //         </a>
    //         <a className="ml-3 text-gray-500">
    //           <svg
    //             fill="none"
    //             stroke="currentColor"
    //             strokeLinecap="round"
    //             strokeLinejoin="round"
    //             strokeWidth={2}
    //             className="w-5 h-5"
    //             viewBox="0 0 24 24"
    //           >
    //             <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
    //             <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
    //           </svg>
    //         </a>
    //         <a className="ml-3 text-gray-500">
    //           <svg
    //             fill="currentColor"
    //             stroke="currentColor"
    //             strokeLinecap="round"
    //             strokeLinejoin="round"
    //             strokeWidth={0}
    //             className="w-5 h-5"
    //             viewBox="0 0 24 24"
    //           >
    //             <path
    //               stroke="none"
    //               d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
    //             />
    //             <circle cx={4} cy={4} r={2} stroke="none" />
    //           </svg>
    //         </a>
    //       </span>
    //     </div>
    //   </div>
    // </footer>
    <div className="bg-white pt-4 sm:pt-10 lg:pt-12">
      <footer className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div className="mb-16 grid grid-cols-2 gap-12 border-t pt-10 md:grid-cols-4 lg:grid-cols-6 lg:gap-8 lg:pt-12">
          <div className="col-span-full lg:col-span-2">
            {/* logo - start */}
            <div className="mb-4 lg:-mt-2">
              <a
                href="/"
                className="inline-flex items-center gap-2 text-xl font-bold text-black md:text-2xl"
                aria-label="logo"
              >
                <svg
                  width={95}
                  height={94}
                  viewBox="0 0 95 94"
                  className="h-auto w-5 text-indigo-500"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M96 0V47L48 94H0V47L48 0H96Z" />
                </svg>
                Flowrift
              </a>
            </div>
            {/* logo - end */}
            <p className="mb-6 text-gray-500 sm:pr-8">
              Filler text is dummy text which has no meaning however looks very
              similar to real text.
            </p>
            {/* social - start */}
            <div className="flex gap-4">
              <a
                href="#"
                target="_blank"
                className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600"
              >
                <svg
                  className="h-5 w-5"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="#"
                target="_blank"
                className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600"
              >
                <svg
                  className="h-5 w-5"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>
              <a
                href="#"
                target="_blank"
                className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600"
              >
                <svg
                  className="h-5 w-5"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M19.4168 2.4594C17.7648 0.873472 15.4785 0 12.9793 0C9.1616 0 6.81353 1.56493 5.51603 2.87767C3.91693 4.49547 3 6.64362 3 8.77138C3 11.4429 4.11746 13.4934 5.98876 14.2563C6.11439 14.3078 6.24081 14.3337 6.36475 14.3337C6.75953 14.3337 7.07233 14.0754 7.1807 13.661C7.24389 13.4233 7.39024 12.8369 7.45389 12.5823C7.59011 12.0795 7.48005 11.8377 7.18295 11.4876C6.64173 10.8472 6.38969 10.0899 6.38969 9.10438C6.38969 6.17698 8.56948 3.06578 12.6095 3.06578C15.8151 3.06578 17.8064 4.88772 17.8064 7.82052C17.8064 9.67124 17.4077 11.3852 16.6837 12.6468C16.1805 13.5235 15.2957 14.5685 13.9375 14.5685C13.3501 14.5685 12.8225 14.3272 12.4896 13.9066C12.1751 13.5089 12.0714 12.9953 12.1979 12.4599C12.3408 11.855 12.5357 11.2241 12.7243 10.6141C13.0682 9.5001 13.3933 8.44789 13.3933 7.60841C13.3933 6.17252 12.5106 5.20769 11.1969 5.20769C9.52737 5.20769 8.21941 6.90336 8.21941 9.06805C8.21941 10.1297 8.50155 10.9237 8.62929 11.2286C8.41896 12.1197 7.16899 17.4176 6.93189 18.4166C6.79478 18.9997 5.96893 23.6059 7.33586 23.9731C8.87168 24.3858 10.2445 19.8997 10.3842 19.3928C10.4975 18.9806 10.8937 17.4216 11.1365 16.4634C11.878 17.1775 13.0717 17.6603 14.2333 17.6603C16.4231 17.6603 18.3924 16.6749 19.7786 14.8858C21.1229 13.1505 21.8633 10.7318 21.8633 8.0757C21.8632 5.99923 20.9714 3.95209 19.4168 2.4594Z" />
                </svg>
              </a>
            </div>
            {/* social - end */}
          </div>
          {/* nav - start */}
          <div>
            <div className="mb-4 font-bold uppercase tracking-widest text-gray-800">
              Products
            </div>
            <nav className="flex flex-col gap-4">
              <div>
                <a
                  href="#"
                  className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                >
                  Overview
                </a>
              </div>
              <div>
                <a
                  href="#"
                  className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                >
                  Solutions
                </a>
              </div>
              <div>
                <a
                  href="#"
                  className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                >
                  Pricing
                </a>
              </div>
              <div>
                <a
                  href="#"
                  className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                >
                  Customers
                </a>
              </div>
            </nav>
          </div>
          {/* nav - end */}
          {/* nav - start */}
          <div>
            <div className="mb-4 font-bold uppercase tracking-widest text-gray-800">
              Themes
            </div>
            <nav className="flex flex-col gap-4">
              {ThemeData?.data?.map((item: ITheme, index: number) => {
                return (
                  <div key={item.slug}>
                    <a
                      href="#"
                      className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                    >
                      {item.title}
                    </a>
                  </div>
                );
              })}
            </nav>
          </div>
          {/* nav - end */}
          {/* nav - start */}
          <div>
            <div className="mb-4 font-bold uppercase tracking-widest text-gray-800">
              Support
            </div>
            <nav className="flex flex-col gap-4">
              <div>
                <a
                  href="#"
                  className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                >
                  Contact
                </a>
              </div>
              <div>
                <a
                  href="#"
                  className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                >
                  Documentation
                </a>
              </div>
              <div>
                <a
                  href="#"
                  className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                >
                  Chat
                </a>
              </div>
              <div>
                <a
                  href="#"
                  className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                >
                  FAQ
                </a>
              </div>
            </nav>
          </div>
          {/* nav - end */}
          {/* nav - start */}
          <div>
            <div className="mb-4 font-bold uppercase tracking-widest text-gray-800">
              Legal
            </div>
            <nav className="flex flex-col gap-4">
              <div>
                <a
                  href="#"
                  className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                >
                  Terms of Service
                </a>
              </div>
              <div>
                <a
                  href="#"
                  className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                >
                  Privacy Policy
                </a>
              </div>
              <div>
                <a
                  href="#"
                  className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                >
                  Cookie settings
                </a>
              </div>
            </nav>
          </div>
          {/* nav - end */}
        </div>
        <div className="border-t py-8 text-center text-sm text-gray-400">
          © 2021 - Present Flowrift. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Footer;
