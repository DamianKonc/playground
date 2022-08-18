import { NextPage } from "next";
import React from "react";
import NavBar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Layout: NextPage<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <NavBar />
      <div>{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
