import { CircularProgress, CircularProgressLabel } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionCircularProgress = motion(CircularProgress);

const CircularProgressBar = ({ value, color }) => {
  return (
    <MotionCircularProgress
      value={value}
      size="150px"
      thickness="13px"
      color={color}
      // trackColor={color} // Set the boundary color here
      initial={{ opacity: 0, scale: 0, pathLength: 0 }}
      animate={{ opacity: 1, scale: 1, pathLength: 1 }}
      transition={{ duration: 2 }}
    >
      <CircularProgressLabel>{value}</CircularProgressLabel>
    </MotionCircularProgress>
  );
};

export default CircularProgressBar;
