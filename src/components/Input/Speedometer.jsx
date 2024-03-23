import * as React from "react";
import MyChart from "../BarFiles/MyChart.jsx";
import { useLocation } from "react-router-dom";

export default function Bars() {
  const location = useLocation();
  const receivedData = location.state && location.state.data;
  const selectedTeam = parseInt(
    location.state && location.state.additionalData
  );

  const maxTeamValue = Math.max(...receivedData);
  console.log(maxTeamValue);

  const data = receivedData.map((value, index) => ({
    name: `Team-${index + 1}`, // Generating name based on index
    value: value,
    color:
      value === maxTeamValue
        ? "#22c55e"
        : index + 1 === selectedTeam
        ? "#0284c7"
        : "gray", // Conditional color setting
  }));

  return (
    <div className="">
      <div className="flex justify-center ">
        <MyChart data={data} />
      </div>
    </div>
  );
}
