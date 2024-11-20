import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

// Registrar componentes de Chart.js
ChartJS.register(ArcElement, Tooltip, Legend);

export const PieCharts = () => {
  const data = {
    labels: ["Finised", "In Progress", "To Do"],
    datasets: [
      {
        data: [3, 7, 27], 
        backgroundColor: [
          'rgba(75, 192, 192, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          "rgba(255, 99, 132, 0.2)",
        ],
        borderColor: [
          'rgba(75, 192, 192, 1)',
          'rgba(54, 162, 235, 1)',
          "rgba(255, 99, 132, 1)",
        ],
        hoverBackgroundColor: [
          'rgba(75, 192, 192, 0.8)',
          'rgba(54, 162, 235, 0.8)',
          "rgba(255, 99, 132, 0.8)",
        ],  
      },
    ],
  };

  const options = {
    responsive: true, // Se adapta al tamaño del contenedor
    plugins: {
      legend: {
        position: "top", 
      },
      tooltip: {
        enabled: true,
      },
    },
  };

  return <Pie data={data} options={options} />;
};
