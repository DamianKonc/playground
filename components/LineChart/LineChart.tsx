import React, { useState } from "react";
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

type Props = {
  labelsData: string[];
  propsData: Date[];
};

const LineChart = ({ labelsData, propsData }: Props) => {
  const [charlabel, setcharlabel] = useState(labelsData);
  const [chartdata, setchartdata] = useState(propsData);

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

  console.log(labelsData);
  console.log(propsData);

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

  const data = {
    charlabel,
    datasets: [
      {
        label: "Dataset 1",
        data: chartdata,
        borderColor: "gold",
        backgroundColor: "gold",
      },
    ],
  };

  return <Line options={options} data={data} />;
};

export default LineChart;
