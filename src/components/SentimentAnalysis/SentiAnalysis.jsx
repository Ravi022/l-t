import React, { useState, useEffect } from "react";
import { PieChart } from "@mui/x-charts/PieChart";
import { FaTwitter } from "react-icons/fa";
import { Tweet } from "react-tweet";
import { useLocation } from "react-router-dom";

export default function SentiAnalysis() {
  const location = useLocation();
  const receivedData = location.state && location.state.data;
  const [data, setData] = useState(null);
  console.log(receivedData);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setData({
        message: receivedData.message,
        noNegative: receivedData.noNegative,
        noNeutral: receivedData.noNeutral,
        noPositive: receivedData.noPositive,
        percNegative: Math.round(receivedData.percNegative),
        percNeutral: Math.round(receivedData.percNeutral),
        percPositive: Math.round(receivedData.percPositive),
        topNegative: receivedData.topNegative.map((value, index) => ({
          id: value.tweetId,
        })),
        topPositive: receivedData.topPositive.map((value, index) => ({
          id: value.tweetId,
        })),
      });
    }, 2000);

    return () => clearTimeout(timeout);
  }, [receivedData]);

  if (!data) {
    return <div>Loading...</div>;
  }

  const senti = [
    {
      label: "POSITIVE",
      value: data.percPositive,
      color: "#15803d",
      text: " Brillent effort guys! ",
    },
    {
      label: "NEUTRAL",
      value: data.percNeutral,
      color: "#1e40af",
      text: " Good Job but I will expect more in future.",
    },
    {
      label: "NEGATIVE",
      value: data.percNegative,
      color: "#b91c1c",
      text: " Totally dissatisfied with the service.",
    },
  ];

  return (
    <div className="flex h-[90vh] ">
      <div className="flex w-[20%] flex-col h-full my-5  relative">
        <div className="flex flex-col gap-3 h-full px-2 overflow-y-auto">
          {data.topPositive.map((value, index) => (
            <div className="" key={index}>
              <Tweet id={value.id.toString()} />
              {/* <Tweet id="1770659241042346282" /> */}
              {/* <h1>{value.id}</h1> */}
            </div>
          ))}
        </div>
      </div>
      <div className="w-[60%] relative">
        <div className="absolute h-full w-full flex items-end justify-center ">
          <FaTwitter className="text-[50px] text-[#1D9BF0] text-blue-100" />
        </div>
        <div className=" mt-5 flex flex-col xl:flex-row justify-evenly  ">
          {senti.map((sentiment, index) => (
            <div key={index} className="relative">
              <PieChart
                series={[
                  {
                    data: [
                      { id: 0, value: sentiment.value, color: sentiment.color },
                      { id: 1, value: 100 - sentiment.value, color: "gray" },
                    ],
                    innerRadius: 85,
                    outerRadius: 100,
                    paddingAngle: 5,
                    cornerRadius: 5,
                    startAngle: -180,
                    endAngle: 180,
                    cx: 150,
                    cy: 150,
                  },
                ]}
                width={300}
                height={300}
              ></PieChart>

              <p
                className={`absolute w-full h-full left-0 top-0 ml-2 mt-2 flex justify-center items-center text-lg font-bold text-center`}
              >
                {sentiment.label} <br />
                {sentiment.value}%
              </p>
              <p className="absolute w-full text-center">{sentiment.text}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex w-[20%] flex-col h-full my-5  relative">
        <div className="flex flex-col gap-3 h-full px-2 overflow-y-auto">
          {data.topNegative.map((value, index) => (
            <div className="" key={index}>
              <Tweet id={value.id} />
            </div>
          ))}
        </div>
      </div>
    </div>
    // <div>
    //   <Tweet id="1770868576313913600" />
    // </div>
  );
}
