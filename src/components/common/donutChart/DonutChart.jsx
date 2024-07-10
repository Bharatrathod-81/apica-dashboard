// DonutChart.jsx
import React from "react";
import { Doughnut } from "react-chartjs-2";
import {
  Chart,
  ArcElement,
  Tooltip,
  Legend,
  Title,
  PieController,
  DoughnutController,
} from "chart.js";
import zoomPlugin from "chartjs-plugin-zoom";

Chart.register(
  ArcElement,
  Tooltip,
  Legend,
  Title,
  PieController,
  DoughnutController,
  zoomPlugin
);

const DonutChart = () => {
  const data = {
    labels: ["Acquisition",  "Retention", "Purchase",],
    datasets: [
      {
        data: [55, 30, 15],
        backgroundColor: [
          "#5570F1", // Acquisition
          "rgba(255, 206, 86, 0.7)", // Retention
          "#97A5EB", // Purchase
        ],
        borderWidth: 0,
      },
    ],
  };

  const options = {
    cutout: "70%",
    plugins: {
      legend: {
        display: true,
        position: "top",
        labels: {
          usePointStyle: true,
          padding: 20,
        },
      },
      tooltip: {
        enabled: true,
      },
      zoom: {
        pan: {
          enabled: true,
          mode: "xy",
        },
        zoom: {
          wheel: {
            // enabled: true,
          },
          pinch: {
            enabled: true,
          },
          mode: "xy",
        },
      },
    },
    maintainAspectRatio: false,
  };

  return (
    <div style={{ width: "300px", height: "205px", margin: "0 auto" }}>
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default DonutChart;