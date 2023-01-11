"use client";
import { initRegister } from "@/components/context/init";
import React, { useState } from "react";
import {
  useAppContext,
  useRegisterDispatch,
} from "@/components/context/AppContext";
import { useRegisterStore } from "app/store/store";
export default function Register() {
  // const { register, dispatch } = useAppContext();
  // const dispatch = useRegisterDispatch();
  const registerSubmit = useRegisterStore((state) => state.registerData);
  const [username, SetUserName] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const handleRegister = (e) => {
    e.preventDefault();
    console.log("data", {
      username,
      password,
      role,
    });
    const data = {
      email: username,
      password,
      role,
    };
    registerSubmit(data);
    // dispatch({
    //   type: "register",
    //   email: username,
    //   password: password,
    //   role: role,
    // });
  };
  return (
    <form onSubmit={(e) => handleRegister(e)} className="w-full max-w-sm">
      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/3">
          <label
            className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
            htmlFor="email"
          >
            Email
          </label>
        </div>
        <div className="md:w-2/3">
          <input
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            id="email"
            type="text"
            // value="Jane Doe"
            placeholder="Username or Email"
            onChange={(e) => SetUserName(e.target.value)}
          />
        </div>
      </div>
      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/3">
          <label
            className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
            htmlFor="inline-password"
          >
            Password
          </label>
        </div>
        <div className="md:w-2/3">
          <input
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            id="password"
            type="password"
            placeholder="*************"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </div>
      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/3">
          <label
            className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
            htmlFor="password"
          >
            Role
          </label>
        </div>
        <div className="md:w-2/3">
          <input
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            id="password"
            type="text"
            placeholder="Masukan Role?"
            onChange={(e) => setRole(e.target.value)}
          />
        </div>
      </div>
      {
        /* <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/3"></div>
        <label className="md:w-2/3 block text-gray-500 font-bold">
          <input className="mr-2 leading-tight" type="checkbox" />
          <span className="text-sm">
            Send me your newsletter!
          </span>
        </label>
      </div> */
      }
      <div className="md:flex md:items-center">
        <div className="md:w-1/3"></div>
        <div className="md:w-2/3">
          <button
            className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
            type="submit"
          >
            Tambah User
          </button>
        </div>
      </div>
    </form>
  );
}
