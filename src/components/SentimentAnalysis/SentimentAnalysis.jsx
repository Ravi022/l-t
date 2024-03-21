import React from "react";
import CircularProgressBar from "../CircularProgressBar/CircularProgressBar";
// import Tweet from "../Twitter/Tweet";
import { Tweet } from "react-tweet";
export default function SentimentAnalysis() {
  const senti = [
    {
      label: "POSITIVE",
      value: 55,
      color: "#15803d",
      text: " Brillent effort guys! ",
    },
    {
      label: "NEUTRAL",
      value: 20,
      color: "#1e40af",
      text: " Good Job but I will expect more in future.",
    },
    {
      label: "NEGATIVE",
      value: 40,
      color: "#b91c1c",
      text: " Totally dissatisfied with the service.",
    },
  ];

  return (
    <div className="flex h-screen ">
      <div className="w-[30%] overflow-y-auto bg-black mt-0 ring-2 p-3 ">
        <div className="flex justify-center  items-center text-white text-2xl font-bold text-white-500 ">
          Positive Tweets
        </div>
        <Tweet id="1683920951807971329" />
        <Tweet id="1683920951807971329" />
        <Tweet id="1683920951807971329" />
        <Tweet id="1683920951807971329" />
        <Tweet id="1683920951807971329" />
        <div className="flex justify-center">
          <p className="flex m-2 ml-2 items-center text-white text-2xl font-bold text-white-500">
            Negative Tweets{" "}
          </p>
        </div>
        <Tweet id="1683920951807971329" />
        <Tweet id="1683920951807971329" />
        <Tweet id="1683920951807971329" />
        <Tweet id="1683920951807971329" />
        <Tweet id="1683920951807971329" />
      </div>
      {/* <div className="relative bg-black"></div> */}
      <div className="w-[70%] filter w-full bg-no-repeat bg-left-bottom bg-[url('https://smallimg.pngkey.com/png/small/3-38089_twitter-bird-logo-transparent-background-download-black-twitter.png')] ">
        <div className="flex justify-center items-center p-8 text-center text-3xl tracking-wide font-bold ">
          SENTIMENT ANALYSIS
        </div>
        <div className=" mt-5 flex justify-evenly  ">
          {senti.map((sentiment, index) => (
            <div key={index}>
              <CircularProgressBar
                value={sentiment.value}
                color={sentiment.color}
              />
              <p className=" flex justify-center items-center mt-1 p-2 text-2xl text-white font-bold ">
                {sentiment.label}
              </p>
              {/* <p className=" flex justify-center items-center mt-1 p-2">
                {sentiment.text}
              </p> */}
            </div>
          ))}
        </div>
        <div className="flex gap-5 justify-evenly ml-[15px] p-2 ">
          <div className="flex items-center text-sm text-black  ml-[80px]">
            Brillent effort guys!
          </div>
          <div className="flex items-center text-sm text-black ml-[10px]  ">
            Good Job but I will expect more in future.
          </div>
          <div className="text-sm text-black ">
            Totally dissatisfied with the service.
          </div>
        </div>
      </div>
    </div>
  );
}
