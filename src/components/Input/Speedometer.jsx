import * as React from "react";
import MyChart from "../BarFiles/MyChart.jsx";
import { useLocation } from "react-router-dom";

export default function Bars() {
  const location = useLocation();
  const data = location.state && location.state.data;
  console.log(data);
  const dataa = [
    { name: "Team-1", value: 0.1 },
    { name: "Team-2", value: 0.2 },
    { name: "Team-3", value: 0.3 },
    { name: "Team-4", value: 0.4 },
    { name: "Team-5", value: 0.5 },
    { name: "Team-6", value: 0.6 },
    { name: "Team-7", value: 0.7 },
    { name: "Team-8", value: 0.8 },
    { name: "Team-9", value: 0.9 },
    { name: "Team-10", value: 0.45 },
    { name: "Team-11", value: 0.93 },
    { name: "Team-12", value: 0.5 },
  ];
  // console.log(data);
  return (
    <div className="mt-5 flex justify-center ">
      <MyChart data={dataa} />
    </div>
  );
}
