// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { useNavigate } from "react-router-dom";
// const textVariants = {
//   initial: {
//     y: -30,
//     opacity: 0,
//   },
//   animate: {
//     y: 0,
//     opacity: 1,
//     transition: {
//       duration: 1,
//       staggerChildren: 1,
//     },
//   },
// };

// const Formm = () => {
//   const [formData, setFormData] = useState({
//     teamNumber: "",
//     day: "",
//     department: "",
//     numberOfWorkers: "0",
//     overtime: "0",
//     incentive: "0",
//     svm: "0",
//     targetedProductivity: "0",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };
//   const navigate = useNavigate();
//   // console.log(navigate);
//   const onSubmitForm = (e) => {
//     e.preventDefault();
//     console.log(formData);

//     navigate("/project-1/speedometer");
//   };

//   return (
//     <motion.div
//       className="container mx-auto"
//       initial="initial"
//       animate="animate"
//     >
//       <form className="max-w-md mx-auto" onSubmit={onSubmitForm}>
//         <div className="flex justify-start space-x-3">
//           <div className="mb-4" variants={textVariants}>
//             <label
//               htmlFor="teamNumber"
//               className="block text-sm font-medium text-blue-700"
//             >
//               Team Number
//             </label>
//             <select
//               id="teamNumber"
//               name="teamNumber"
//               className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//               onChange={handleChange}
//               value={formData.teamNumber}
//             >
//               {[...Array(12).keys()].map((num) => (
//                 <option key={num + 1} value={num + 1}>
//                   {num + 1}
//                 </option>
//               ))}
//             </select>
//           </div>
//           <div className="mb-4">
//             <label
//               htmlFor="day"
//               className="block text-sm font-medium text-gray-700"
//             >
//               Day
//             </label>
//             <select
//               id="day"
//               name="day"
//               className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//               onChange={handleChange}
//               value={formData.day}
//             >
//               {[
//                 "Monday",
//                 "Tuesday",
//                 "Wednesday",
//                 "Thursday",
//                 "Friday",
//                 "Saturday",
//                 "Sunday",
//               ].map((day) => (
//                 <option key={day} value={day}>
//                   {day}
//                 </option>
//               ))}
//             </select>
//           </div>
//           <div className="mb-4 flex-grow">
//             <label
//               htmlFor="department"
//               className="block text-sm font-medium text-gray-700"
//             >
//               Department
//             </label>
//             <select
//               id="department"
//               name="department"
//               className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//               onChange={handleChange}
//               value={formData.department}
//             >
//               <option value="Brickwork">Brickwork</option>
//               <option value="Concreting">Concreting</option>
//             </select>
//           </div>
//         </div>
//         <div className="mb-4">
//           <label
//             htmlFor="numberOfWorkers"
//             className="block text-sm font-medium text-gray-700"
//           >
//             Number of Workers
//           </label>
//           <input
//             type="text"
//             name="numberOfWorkers"
//             id="numberOfWorkers"
//             className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//             onChange={handleChange}
//             value={formData.numberOfWorkers}
//           />
//         </div>
//         <div className="mb-4">
//           <label
//             htmlFor="overtime"
//             className="block text-sm font-medium text-gray-700"
//           >
//             Overtime
//           </label>
//           <input
//             type="text"
//             name="overtime"
//             id="overtime"
//             className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//             onChange={handleChange}
//             value={formData.overtime}
//           />
//         </div>
//         <div className="mb-4">
//           <label
//             htmlFor="incentive"
//             className="block text-sm font-medium text-gray-700"
//           >
//             Incentive
//           </label>
//           <input
//             type="text"
//             name="incentive"
//             id="incentive"
//             className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//             onChange={handleChange}
//             value={formData.incentive}
//           />
//         </div>
//         <div className="mb-4">
//           <label
//             htmlFor="svm"
//             className="block text-sm font-medium text-gray-700"
//           >
//             SVM
//           </label>
//           <input
//             type="text"
//             name="svm"
//             id="svm"
//             className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//             onChange={handleChange}
//             value={formData.svm}
//           />
//         </div>
//         <div className="mb-4">
//           <label
//             htmlFor="targetedProductivity"
//             className="block text-sm font-medium text-gray-700"
//           >
//             Targeted Productivity
//           </label>
//           <input
//             type="text"
//             name="targetedProductivity"
//             id="targetedProductivity"
//             className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//             onChange={handleChange}
//             value={formData.targetedProductivity}
//           />
//         </div>
//         <div className="flex justify-end">
//           <button
//             type="submit"
//             className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//           >
//             Submit
//           </button>
//         </div>
//       </form>
//     </motion.div>
//   );
// };

// export default Formm;
