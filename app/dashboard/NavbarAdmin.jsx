"use client";
import { signOut } from "next-auth/react";
import React from "react";
import Link from "next/link";

export default function NavbarAdmin() {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <Link href={`/dashboard`} className="btn btn-ghost normal-case text-xl">
          Simantap
        </Link>
      </div>
      <div className="flex-none gap-2">
        <div className="form-control">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered"
          />
        </div>
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src="https://placeimg.com/80/80/people" />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <button type="button" onClick={() => signOut()}>
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
