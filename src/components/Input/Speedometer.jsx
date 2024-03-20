import * as React from "react";
import MyChart from "../BarFiles/MyChart.jsx";
import { useLocation } from "react-router-dom";

export default function Bars() {
  const location = useLocation();
  const data = location.state && location.state.data;
  // console.log(data);
  return (
    <div className="mt-5 flex justify-center ">
      <MyChart />
    </div>
  );
}
