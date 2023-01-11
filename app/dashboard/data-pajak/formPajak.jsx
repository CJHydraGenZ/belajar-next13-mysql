import React from "react";

export default function FormPajak() {
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
              placeholder="text"
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
              placeholder="text"
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
          <select className="select select-bordered">
            <option disabled selected>Pick one</option>
            <option>Star Wars</option>
            <option>Harry Potter</option>
            <option>Lord of the Rings</option>
            <option>Planet of the Apes</option>
            <option>Star Trek</option>
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
            <option disabled selected>Pick one</option>
            <option>Star Wars</option>
            <option>Harry Potter</option>
            <option>Lord of the Rings</option>
            <option>Planet of the Apes</option>
            <option>Star Trek</option>
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
