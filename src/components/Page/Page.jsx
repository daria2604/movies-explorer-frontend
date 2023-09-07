import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Page = ({ isLoggedIn, className, pathName, children }) => {
  return (
    <>
      <Header isLoggedIn={isLoggedIn} pathName={pathName} />
      <main className={`${className} ${className !== "main" ? "container" : ""}`}>{children}</main>
      {pathName !== 'profile' && <Footer />}
    </>
  );
};

export default Page;
