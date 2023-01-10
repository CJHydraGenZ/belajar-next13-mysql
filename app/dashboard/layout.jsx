// import LoginLayout from "./LoginLayout";

import Navbar from "./navbar";
import Sidebar from "./sidebar";

// import HomeLayout from "@/components/HomeLayout";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />

      {/* <div className="flex flex-row"> */}
      <Sidebar>
        {children}
      </Sidebar>
      {/* </div> */}
    </>
  );
}
