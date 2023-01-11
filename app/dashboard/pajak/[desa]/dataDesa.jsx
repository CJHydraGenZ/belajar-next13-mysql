"use client";
import React from "react";

export default function DataDesa({ params }) {
  // const desa = params.desa;

  const data_desa = [
    {
      jlh_aset: 1,
      jns_aset: "hiburan",
      kecamatan: "pekutatan",
      desa: "manggisari",
      pajak: 100000,
    },
    {
      jlh_aset: 1,
      jns_aset: "hiburan",
      kecamatan: "pekutatan",
      desa: "medewi",
      pajak: 100000,
    },
    {
      jlh_aset: 1,
      jns_aset: "hiburan",
      kecamatan: "pekutatan",
      desa: "medewi",
      pajak: 100000,
    },
    {
      jlh_aset: 4,
      jns_aset: "Restoran",
      kecamatan: "melaya",
      desa: "gilimanuk",
      pajak: 2000000,
    },
    {
      jlh_aset: 1,
      jns_aset: "hiburan",
      kecamatan: "melaya",
      desa: "gilimanuk",
      pajak: 2000000,
    },
    {
      jlh_aset: 30,
      jns_aset: "rekrame",
      kecamatan: "negara",
      desa: "pengambengan",
      pajak: 600000,
    },
    {
      jlh_aset: 100,
      jns_aset: "penerangan jalan",
      kecamatan: "negara",
      desa: "benjar tengah",
      pajak: 400000,
    },
    {
      jlh_aset: 60,
      jns_aset: "parkir",
      kecamatan: "negara",
      desa: "banyubiru",
      pajak: 200000,
    },
  ];

  console.log("ini params", params);
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th>Jumlah Aset</th>
              <th>Jenis Aset</th>
              <th>Desa</th>
              <th>Pajak</th>
            </tr>
          </thead>
          <tbody>
            {data_desa.filter((x) => x.kecamatan === params).map((d, i) => (
              <tr key={i}>
                <th>{d.jlh_aset}</th>
                <td>{d.jns_aset}</td>
                <td>
                  {/* <Link href={`/dashboard/pajak/desa`}> */}
                  {d.desa}
                  {/* </Link> */}
                </td>
                <td>{d.pajak}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
