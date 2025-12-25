import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/header/Navbar";
import Footer from "../components/footer/Footer";

const Layout = () => {
  return (
    <div className="container mx-auto">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
