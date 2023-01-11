"use client";
import useSWR from "swr";
import { fetcher } from "@/components/func/fetcher";
import { useDataWilayah } from "app/store/store";
import React, { useEffect, useState } from "react";

export default function FormPajak() {
  // const { kecamatan, desa } = useDataWilayah((state) => state);
  // const getKecamatanData = useDataWilayah((state) => state.getKecamatanData);
  const [selectDesa, setSelectDesa] = useState("5101040");
  const { data: kecamatan } = useSWR(
    "http://www.emsifa.com/api-wilayah-indonesia/api/districts/5101.json",
    fetcher,
  );
  const { data: desa } = useSWR(
    `http://www.emsifa.com/api-wilayah-indonesia/api/villages/${selectDesa}.json`,
    fetcher,
  );

  const handleChange = (e) => {
    setSelectDesa(e.target.value);
  };

  // console.log(selectDesa);
  // console.log(desa);
  // if (error) return <div>failed to load</div>;
  // if (isLoading) return <div>loading...</div>;
  // console.log(data);
  return (
    <div className="flex flex-col lg:flex-row">
      {/* <form> */}
      <div className="card  w-full max-w-lg ">
        <div className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Jumlah Aset</span>
            </label>
            <input
              type="text"
              placeholder="Jumlah Aset"
              className="input input-bordered"
              // onChange={(e) => setUserName(e.target.value)}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Jenis Aset</span>
            </label>
            <input
              type="text"
              placeholder="Jenis Aset..."
              className="input input-bordered"
              // onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Pajak</span>
            </label>
            <input
              type="text"
              placeholder="Pajak..."
              className="input input-bordered"
              // onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
      </div>
      <div className="card-body">
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">
              Kecamatan
            </span>
            {/* <span className="label-text-alt">Alt label</span> */}
          </label>
          <select
            onChange={(e) => handleChange(e)}
            value={selectDesa}
            className="select select-bordered"
          >
            {kecamatan?.map((d) => (
              <option value={d.id} key={d.id}>{d.name}</option>
            ))}
            {
              /* <option>Harry Potter</option>
            <option>Lord of the Rings</option>
            <option>Planet of the Apes</option>
            <option>Star Trek</option> */
            }
          </select>
          {
            /* <label className="label">
              <span className="label-text-alt">Alt label</span>
              <span className="label-text-alt">Alt label</span>
            </label> */
          }
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">
              Desa
            </span>
            {/* <span className="label-text-alt">Alt label</span> */}
          </label>
          <select className="select select-bordered">
            {/* <option>Pick one</option> */}
            {desa?.map((d) => <option value={d.id} key={d.id}>{d.name}
            </option>)}
            {
              /* <option>Harry Potter</option>
            <option>Lord of the Rings</option>
            <option>Planet of the Apes</option>
            <option>Star Trek</option> */
            }
          </select>
          {
            /* <label className="label">
            <span className="label-text-alt">Alt label</span>
            <span className="label-text-alt">Alt label</span>
            </label> */
          }
          <div className="form-control mt-6">
            <button
              type="button"
              // onClick={(e) => handleLogin(e)}
              className="btn btn-primary"
            >
              Tambah
            </button>
          </div>
        </div>
      </div>
      {/* </form> */}
    </div>
  );
}
