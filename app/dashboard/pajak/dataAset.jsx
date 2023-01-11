import Link from "next/link";
import React from "react";
const data_kab = [
  {
    jlh_aset: 1,
    jns_aset: "mobil",
    kecamatan: "melaya",
    pajak: "in adalah pajak",
  },
  {
    jlh_aset: 1,
    jns_aset: "mobil",
    kecamatan: "negara",
    pajak: "in adalah pajak",
  },
  {
    jlh_aset: 1,
    jns_aset: "mobil",
    kecamatan: "jembrana",
    pajak: "in adalah pajak",
  },
  {
    jlh_aset: 1,
    jns_aset: "mobil",
    kecamatan: "mendoyo",
    pajak: "in adalah pajak",
  },
  {
    jlh_aset: 1,
    jns_aset: "mobil",
    kecamatan: "pekutatan",
    pajak: "in adalah pajak",
  },
];
export default function DataAset() {
  return (
    <div className="overflow-x-auto">
      <table className="table w-full">
        {/* <!-- head --> */}
        <thead>
          <tr>
            <th>Jumlah Aset</th>
            <th>Jenis Aset</th>
            <th>Kecamatan</th>
            <th>Pajak</th>
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
              <td>{d.pajak}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
