import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

const LineChart = () => {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

  const options = {
    responsive: true,
    scales: {
      x: {
        ticks: {
          font: {
            size: 16,
          },
        },
      },
      y: {
        ticks: {
          font: {
            size: 16,
          },
        },
      },
    },
    plugins: {
      legend: {
        position: "top" as const,
        labels: {
          font: {
            size: 23,
          },
        },
      },
      title: {
        display: true,
        text: "Chart.js Line Chart",
      },
    },
  };

  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
  ];
  const datas = ["200", "400", "700", "1110", "1260", "1160", "1200"];

  const data = {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data: datas,
        borderColor: "gold",
        backgroundColor: "gold",
      },
    ],
  };

  return <Line options={options} data={data} />;
};

export default LineChart;
