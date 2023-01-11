import React from "react";
import Link from "next/link";
export default function Sidebar({ children }) {
  return (
    <div className="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
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
        <ul className="menu p-4 w-80 bg-base-100 text-base-content gap-1">
          {/* <!-- Sidebar content here --> */}
          <li>
            <Link href={`/dashboard/register`}>Tambah User</Link>
          </li>
          <div className="divider"></div>
          <li>
            <Link href={`/dashboard/pajak`}>Data Pajak</Link>
          </li>
          <li>
            <Link href={`/dashboard/data-pajak`}>Tambah Pajak</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
