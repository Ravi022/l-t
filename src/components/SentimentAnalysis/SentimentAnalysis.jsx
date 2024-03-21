import React from "react";
import CircularProgressBar from "../CircularProgressBar/CircularProgressBar";

export default function SentimentAnalysis() {
  const senti = [
    {
      label: "POSITIVE",
      value: 66,
      color: "#15803d",
      text: " Brillent effort guys! ",
    },
    {
      label: "NEUTRAL",
      value: 40,
      color: "#1e40af",
      text: " God Job but I will expect more in future.",
    },
    {
      label: "NEGATIVE",
      value: 50,
      color: "#b91c1c",
      text: " Totally dissatisfied with the service.",
    },
  ];

  return (
    <div className="flex h-screen ">
      <div className="w-[30%] border-r-4 border-custom-blue"></div>
      <div className="w-[70%] overflow-auto bg-cover bg-[url('https://img.freepik.com/free-photo/social-media-background-twitte_135149-69.jpg?size=626&ext=jpg&ga=GA1.1.1939660749.1701790607&semt=ais')] ">
        <div className="flex justify-center items-center p-8 text-center text-3xl tracking-wide ">
          SENTIMENT ANALYSIS
        </div>
        <div className=" mt-5 flex justify-evenly  ">
          {senti.map((sentiment, index) => (
            <div key={index}>
              <CircularProgressBar
                value={sentiment.value}
                color={sentiment.color}
              />
              <p className=" flex justify-center items-center mt-1 p-2 text-xl text-white ">
                {sentiment.label}
              </p>
              {/* <p className=" flex justify-center items-center mt-1 p-2">
                {sentiment.text}
              </p> */}
            </div>
          ))}
        </div>
        <div className="flex gap-5 justify-evenly ml-[10px] ">
          <div className="flex items-center text-sm text-white  ml-[65px]">Brillent effort guys!</div>
          <div className="flex items-center text-sm text-white ml-[10px]  ">
            God Job but I will expect more in future.
          </div>
          <div className="text-sm text-white ">
            Totally dissatisfied with the service.
          </div>
        </div>
      </div>
    </div>
  );
}
