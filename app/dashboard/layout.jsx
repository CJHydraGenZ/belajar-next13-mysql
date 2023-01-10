// import LoginLayout from "./LoginLayout";
import React from "react";
import NavbarAdmin from "./NavbarAdmin";
// import Navbar from "./NavbarAdmin";
// import Sidebar from "./sidebar";
import dynamic from "next/dynamic";
// import HomeLayout from "@/components/HomeLayout";
const DynamicNavbar = dynamic(() => import("./NavbarAdmin"));
const DynamicSidebar = dynamic(() => import("./sidebar"));
export default function Layout({ children }) {
  return (
    <>
      <DynamicNavbar />
      <DynamicSidebar>
        {children}
      </DynamicSidebar>
    </>
  );
}
