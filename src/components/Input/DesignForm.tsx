import React, { useState } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { cn } from "../../utils/cn";
import { useNavigate } from "react-router-dom";
import {
  IconBrandGithub,
  IconBrandGoogle,
  IconBrandOnlyfans,
} from "@tabler/icons-react";

export function DesignForm() {
  const [formData, setFormData] = useState({
    teamNumber: "1",
    day: "Monday",
    department: "Brickwork",
    numberOfWorkers: "0",
    overtime: "0",
    incentive: "0",
    svm: "0",
    targetedProductivity: "0",
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  console.log(formData)
  const navigate = useNavigate();

  // const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   console.log(formData);
  //   navigate("/project-1/speedometer");
  // };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    try {
      const res = await fetch("http://localhost:3000/proj1/pred_Prod", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        throw new Error("Unauthorized");
      }

      const responseData = await res.json();
      navigate("/project-1/speedometer", { state: { data: responseData } });
      console.log("success");
    } catch (error) {
      console.error(error);
      // Handle error properly, such as showing a message to the user
    }
  };

  return (
    <div className="max-w-md w-full mx-auto rounded-none mb-[90px] md:rounded-2xl p-2  md:p-5 shadow-input bg-white dark:bg-black">
      <form className="my-3" onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <div className="mb-4">
            <label
              htmlFor="teamNumber"
              className="block text-sm font-medium text-gray-700"
            >
              Team Number
            </label>
            <select
              id="teamNumber"
              name="teamNumber"
              className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              onChange={handleChange}
              value={formData.teamNumber}
            >
              {[...Array(12).keys()].map((num) => (
                <option key={num + 1} value={num + 1}>
                  {num + 1}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <label
              htmlFor="day"
              className="block text-sm font-medium text-gray-700"
            >
              Day
            </label>
            <select
              id="day"
              name="day"
              className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              onChange={handleChange}
              value={formData.day}
            >
              {[
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday",
              ].map((day) => (
                <option key={day} value={day}>
                  {day}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-4 flex-grow">
            <label
              htmlFor="department"
              className="block text-sm font-medium text-gray-700"
            >
              Department
            </label>
            <select
              id="department"
              name="department"
              className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              onChange={handleChange}
              value={formData.department}
            >
              <option value="Brickwork">Brickwork</option>
              <option value="Concreting">Concreting</option>
            </select>
          </div>
        </div>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="nunberofworkers">Number of Workers</Label>
          <Input
            id="nunberofworkers"
            name="numberOfWorkers"
            placeholder="Number of Workers"
            type="number"
            onChange={handleChange}
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="overtime">Overtime</Label>
          <Input
            id="overtime"
            name="overtime"
            placeholder="Overtime"
            type="number"
            onChange={handleChange}
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="incentive">Incentive</Label>
          <Input
            id="incentive"
            name="incentive"
            placeholder="Incentive"
            type="number"
            onChange={handleChange}
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="svm">SVM</Label>
          <Input
            id="svm"
            name="svm"
            placeholder="SVM"
            type="number"
            onChange={handleChange}
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="tproductivity">Targeted Productivity</Label>
          <Input
            id="tproductivity"
            name="targetedProductivity"
            placeholder="Targeted Productivity"
            type="number"
            onChange={handleChange}
          />
        </LabelInputContainer>

        <button
          className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit"
        >
          Submit &rarr;
          <BottomGradient />
        </button>
      </form>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
