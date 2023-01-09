"use client";
import React from "react";
import Nav from "./Nav";

export default function HomeLayout({ children }) {
  return (
    <>
      {/* <div>LoginLayout</div> */}
      <Nav />
      {children}
    </>
  );
}
