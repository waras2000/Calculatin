import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
//A Display for a barchart that isnt currently being used (Dont natively in each function for now)
function BarChart({ chartData }) {
  return <Bar data={chartData} />;
}

export default BarChart;