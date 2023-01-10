import Link from "next/link";
import React from "react";

export default function Nav() {
  return (
    <div>
      {
        /* <nav className='inline-flex p-4 gap-3'>
        </nav> */
      }
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <Link href={`/`} className="btn btn-ghost normal-case text-xl">
            Simantap
          </Link>
        </div>

        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link href={`/`}>Home</Link>
            </li>
            {
              /* <li>
              <Link href={`/user`}>User</Link>
            </li> */
            }

            <li>
              <Link href={`about`}>About</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
