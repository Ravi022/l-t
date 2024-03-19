import * as React from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import MyChart from "../BarFiles/MyChart.jsx";

export default function Bars() {
  return (
    <div className="mt-5 flex justify-center items-center">
      <MyChart />
    </div>
  );
}
