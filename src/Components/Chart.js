import React from "react";
import { Bar, Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { useEffect, useState } from "react";
import axios from "axios";
import "./Chart.css";

const options = {
  scales: {
    x2: {
      position: "bottom",
      reverse: true,
    },
  },

  responsive: true,

  plugins: {
    legend: {
      position: "top",
    },
  },
};

const x = [];
const y = [];

const Chart = () => {
  const [stock, setStock] = useState([]);
  useEffect(() => {
    const API_KEY = "XIZTSWJ40Z3XZ6F3";
    axios
      .get(
        `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=IBM&apikey=${API_KEY}`
      )
      .then((res) => {
        console.log(res);
        setStock(res.data);
        for (var key in res.data["Time Series (Daily)"]) {
          y.push(key);
          x.push(res.data["Time Series (Daily)"][key]["1. open"]);
        }
        console.log("x", x);
        console.log("y", y);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const data = {
    labels: y,
    datasets: [
      {
        label: "IBM",
        data: x,
        fill: true,

        borderJoinStyle: "miter",
        backgroundColor: "rgba(55, 99, 32, 0.2)",
        padding: "0px",

        borderColor: "black",
        xAxisID: "x2",
      },
    ],
  };

  return (
    <div className="chart" style={{ width: "80%" }}>
      <Line data={data} options={options} />
    </div>
  );
};

export default Chart;
