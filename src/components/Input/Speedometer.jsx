import * as React from "react";
import MyChart from "../BarFiles/MyChart.jsx";
import { useLocation } from "react-router-dom";

export default function Bars() {
  const location = useLocation();
  const receivedData = location.state && location.state.data;
  const data = receivedData.map((value, index) => ({
    name: `Team-${index + 1}`, // Generating name based on index
    value: value,
  }));
  console.log(data);
  return (
    <div className="mt-5 flex justify-center ">
      <MyChart data={data} />
    </div>
  );
}
