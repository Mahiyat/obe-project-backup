import React from "react";
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";

import AllCourseGraph from "./AllCourseGraph";
import SingleCourseMenu from "./SingleCourseMenu";
import CourseTypeSelection from "./CourseTypeSelection";
import EvaluationSelection from "./EvaluationSelection";

export default function ResultStatistics() {
  const [type, setType] = React.useState("");

  const handleTypeChange = (event) => {
    setType(event.target.value);
  };

  return (
    <Box
      component="main"
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "4px",
        flexGrow: 1,
        bgcolor: "background.default",
        p: 3,
        position: "relative",
      }}
    >
      <Typography
        variant="h3"
        sx={{
          textAlign: "left",
          textDecoration: "underline #3d5afe",
        }}
        gutterBottom
      >
        Result Statistics
      </Typography>
      <EvaluationSelection />
    </Box>
  );
}
