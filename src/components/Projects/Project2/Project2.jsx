import React from "react";
import { useNavigate } from "react-router-dom";
export default function Projects2() {
  const navigate = useNavigate();
  // console.log(navigate);
  const handleClick = () => {
    // e.preventDefault();
    // console.log(formData);

    navigate("/project-2/sentiment-analysis");
  };
  return (
    <div className="flex justify-center items-center h-screen">
      <button
        onClick={handleClick}
        className="bg-blue-500 hover:bg-custom-blue text-white font-bold py-2 px-4 rounded"
      >
        Project-2
      </button>
    </div>
  );
}
