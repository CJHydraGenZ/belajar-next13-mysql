import React from "react";

export default function Hero() {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src="https://placeimg.com/260/400/arch"
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold">Simantap</h1>
          <p className="py-6">
            Sistem Modul Akuntansi Tersetruktur Aset Perpajakan Dinas PPKAD
            Kabupaten Jembrana
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
}
