import React from "react";

export default function DataDesa() {
  const data_desa = [
    {
      jlh_aset: 1,
      jns_aset: "mobil",
      desa: "mangisari",
      pajak: "in adalah pajak",
    },
    {
      jlh_aset: 1,
      jns_aset: "mobil",
      desa: "tista",
      pajak: "in adalah pajak",
    },
    {
      jlh_aset: 1,
      jns_aset: "mobil",
      desa: "tista",
      pajak: "in adalah pajak",
    },
    {
      jlh_aset: 1,
      jns_aset: "mobil",
      desa: "tista",
      pajak: "in adalah pajak",
    },
  ];
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
            {data_desa.map((d, i) => (
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
