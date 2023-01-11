"use client";
import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import { getRelativePosition } from "chart.js/helpers";
import { numbers } from "@/components/func/Utils";
export default function LineChart() {
  const canvasEl = useRef(null);

  const colors = {
    purple: {
      default: "rgba(149, 76, 233, 1)",
      half: "rgba(149, 76, 233, 0.5)",
      quarter: "rgba(149, 76, 233, 0.25)",
      zero: "rgba(149, 76, 233, 0)",
    },
    indigo: {
      default: "rgba(80, 102, 120, 1)",
      quarter: "rgba(80, 102, 120, 0.25)",
    },
  };

  useEffect(() => {
    const ctx = canvasEl.current.getContext("2d");
    // const ctx = document.getElementById("myChart");

    const gradient = ctx.createLinearGradient(0, 16, 0, 600);
    gradient.addColorStop(0, colors.purple.half);
    gradient.addColorStop(0.65, colors.purple.quarter);
    gradient.addColorStop(1, colors.purple.zero);

    const weight = [20000, 232323, 44434, 22220, 90000];
    const total_kecamatan = [
      {
        label: "Melaya",
        data: 2000,
      },
      {
        label: "Negara",
        data: 33000,
      },
      {
        label: "Jembrana",
        data: 45565,
      },
      {
        label: "Mendoyo",
        data: 33434,
      },
      {
        label: "Pekutatan",
        data: 231399,
      },
    ];

    // const labels = [
    //   "Week 1",
    //   "Week 2",
    //   "Week 3",
    //   "Week 4",
    //   "Week 5",
    //   "Week 6",
    //   "Week 7",
    //   "Week 8",
    //   "Week 9",
    //   "Week 10",
    // ];
    const DATA_COUNT = [
      300000,
      500000,
      1222100,
      3323233,
      2122121,
      3223232,
      1000000,
    ];

    const NUMBER_CFG = { count: DATA_COUNT, min: 0, max: 100 };

    const data = {
      labels: ["januari", "februari", "maret", "april", "mei", "juni", "juli"],
      datasets: [
        {
          label: "Dataset 1",
          data: DATA_COUNT,
        },
      ],
    };
    const config = {
      type: "line",
      data: data,
      options: {
        responsive: true,
        // plugins: {
        //   legend: {
        //     position: "top",
        //   },
        //   title: {
        //     display: true,
        //     text: "Chart.js Line Chart",
        //   },
        // },
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    };
    const myLineChart = new Chart(ctx, config);

    return function cleanup() {
      myLineChart.destroy();
    };
  });
  return (
    <div>
      <canvas id="myChart" ref={canvasEl} height="100" />
    </div>
  );
}
