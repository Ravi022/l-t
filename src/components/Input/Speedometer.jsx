import * as React from "react";
import MyChart from "../BarFiles/MyChart.jsx";
import { useLocation } from "react-router-dom";
import DayTimeImage from "../../assets/day_team.jpeg";
import OSITimage from "../../assets/OSIT.jpeg";
import QuaterDepartmentImage from "../../assets/quarter_department.jpeg";

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
        : "#9ca3af", // Conditional color setting
  }));

  return (
    <div className="w-full h-screen  bg-gradient-to-br from-sky-200 to-gray-400 via-transparent h-screen">
      <div className=" flex">
        <div className="w-[40%] p-3 border">
          <div className="">
            <img src={DayTimeImage} className=" mb-2 border" alt="Logo" />
           
          </div>
          <div className="">
            <img src={OSITimage} className="mb-2 border " alt="Logo" />
          </div>
          <div className="p-3 border">
            <img src={QuaterDepartmentImage} className="" alt="Logo" />
          </div>
        </div>
        <div className="w-[60%] flex justify-center">
          <MyChart data={data} />
        </div>
      </div>
    </div>
  );
}
