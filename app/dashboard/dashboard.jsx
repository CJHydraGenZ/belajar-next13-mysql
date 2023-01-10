"use client";

import { fetcher } from "@/components/func/fetcher";
import { signOut, useSession } from "next-auth/react";
import React, { useState } from "react";
// import { Option, Select } from "@material-tailwind/react";
import { useDataWilayah } from "app/store/store";
import Navbar from "./Navbar";
import Link from "next/link";
import Sidebar from "./sidebar";
export default function Dashboard({ data_kecamatan }) {
  const [dataDesa, setDataDesa] = useState("");
  const { data: session, status } = useSession();
  // const { data, error, isLoading } = useSWR(
  //   "https://emsifa.github.io/api-wilayah-indonesia/api/provinces.json",
  //   fetcher,
  // const registerSubmit = useRegisterStore((state) => state.registerData);
  // );
  // const data_kecamatan = useDataWilayah((state) => state.kecamatan);
  const getDesaData = useDataWilayah((state) => state.getDesaData);
  const data_desa = useDataWilayah((state) => state.desa);

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (status === "unauthenticated") {
    return <p>Access Denied</p>;
  }
  const handleChange = (e) => {
    e.prevendDefault();

    getDesaData(e.target.value);
  };
  // console.log(dataDesa);

  return (
    <>
      <h1>Ini Dashboard</h1>
      <div className="w-72">
        {
          /* <Select label="Pilih Wilayah">
          {data_kecamatan?.map((d) => (
            <Option onChange={(e) => handleChange(e)} key={d.id}>
              {d.name}
            </Option>
          ))}
        </Select> */
        }
      </div>
    </>
  );
}
