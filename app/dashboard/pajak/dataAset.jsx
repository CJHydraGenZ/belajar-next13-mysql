import Link from "next/link";
import React from "react";
const data_kab = [
  {
    jlh_aset: 2000,
    jns_aset: "Hotel, Restoran, Hiburan, Reklame, Penerangan Jalan",
    kecamatan: "melaya",
    total_pajak: 35000000,
  },
  {
    jlh_aset: 300,
    jns_aset: "Hiburan, Pengambilan bahan galian gol.c",
    kecamatan: "pekutatan",
    total_pajak: 10000000,
  },
  {
    jlh_aset: 456,
    jns_aset: "Hiburan, Restoran Reklame, Penerangan jalan, Parkir",
    kecamatan: "negara",
    total_pajak: 5000000,
  },
];
export default function DataAset() {
  return (
    <div className="overflow-x-auto">
      <table className="table w-full">
        {/* <!-- head --> */}
        <thead>
          <tr>
            <th>Total Jumlah Aset</th>
            <th>Jenis-Jenis Aset</th>
            <th>Kecamatan</th>
            <th>Total Pajak</th>
          </tr>
        </thead>
        <tbody>
          {data_kab.map((d, i) => (
            <tr key={i}>
              <th>{d.jlh_aset}</th>
              <td>{d.jns_aset}</td>
              <td>
                <Link href={`/dashboard/pajak/${d.kecamatan}`}>
                  {d.kecamatan}
                </Link>
              </td>
              <td>{d.total_pajak}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
