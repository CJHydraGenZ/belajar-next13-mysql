"use client";

import { fetcher } from "@/components/func/fetcher";
import { signOut, useSession } from "next-auth/react";
import React, { useEffect, useRef, useState } from "react";
// import { Option, Select } from "@material-tailwind/react";

import { useDataWilayah } from "app/store/store";

import Navbar from "./NavbarAdmin";
import Link from "next/link";
import Sidebar from "./sidebar";
import ChartDounat from "./ChartDounat";
import LineChart from "./LineChart";
import { ArcElement, Chart as ChartJS, Legend, Tooltip } from "chart.js";
import { Doughnut } from "react-chartjs-2";
export default function Dashboard({ data_kecamatan }) {
  const [dataDesa, setDataDesa] = useState("");
  const { data: session, status } = useSession();
  // const { data, error, isLoading } = useSWR(
  //   "https://emsifa.github.io/api-wilayah-indonesia/api/provinces.json",
  //   fetcher,
  // const registerSubmit = useRegisterStore((state) => state.registerData);
  // );
  // const data_kecamatan = useDataWilayah((state) => state.kecamatan);
  // const getDesaData = useDataWilayah((state) => state.getDesaData);
  // const data_desa = useDataWilayah((state) => state.desa);

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
      {/* <h1>Ini Dashboard</h1> */}
      <div className="flex flex-row">
        <h1>Dashboard</h1>
        {/* <ChartDounat /> */}
        {/* <LineChart /> */}
      </div>
    </>
  );
}
