import React from "react";
import Header from "../Header/Header";

const Page = ({ isLoggedIn, className, pathName, children }) => {
  return (
    <>
      <Header isLoggedIn={isLoggedIn} pathName={pathName} />
      <main className={className}>{children}</main>
    </>
  );
};

export default Page;
