import React from "react";
import Link from "next/link";
export default function Sidebar({ children }) {
  return (
    <div className="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-start p-7">
        {/* <!-- Page content here --> */}
        {children}
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 bg-base-100 text-base-content">
          {/* <!-- Sidebar content here --> */}
          <li>
            <Link href={`/dashboard/register`}>Tambah User</Link>
          </li>
          <div className="divider"></div>
          <li>
            <Link href={`/dashboard/pajak`}>Pajak</Link>
          </li>
          <li>
            <a>Pajak</a>
          </li>
          <li>
            <a>Pajak</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
