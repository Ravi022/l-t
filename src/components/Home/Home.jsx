/* eslint-disable no-unused-vars */
import React from "react";
import banner from "../../assets/banner.png";
// import ModelViewer from "../models/ModelViewer"/;
import ModelViewer from "../models/ModelViewer";

export default function Home() {
  return (
    <div className="h-[90vh] flex items-center justify-center overflow-x-hidden">
      <ModelViewer />
      <img className="max-h-[600px]" src={banner} alt="" />
    </div>
  );
}
