import { NextPage } from "next";
import React from "react";
import NavbarLayout from "../Navbar/NavbarLayout/NavbarLayout";
import Footer from "../Footer/Footer";

const Layout: NextPage<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <NavbarLayout />
      <div>{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
