import React from "react";
import { useLocation } from "react-router-dom";
import { Box, Typography } from "@mui/material";

import CourseDetails from "./CourseDetails";
import IncourseEvaluation from "./IncourseEvaluation";
import FinalEvaluation from "./FinalEvaluation";

export default function CourseInfo() {
  const location = useLocation();

  return (
    <Box
      sx={{
        height: 400,
        display: "flex",
        flexGrow: "1",
      }}
    >
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          bgcolor: "background.default",
          p: 3,
          position: "relative",
          top: "25%",
        }}
      >
        <Typography
          variant="h3"
          sx={{
            textAlign: "left",
            textDecoration: "underline rgb(81, 42, 255)",
          }}
          gutterBottom
        >
          Course Information
        </Typography>
        <CourseDetails
          courseId={location.state.courseId}
          courseName={location.state.courseName}
          title={location.state.title}
        />
        <IncourseEvaluation />
        <FinalEvaluation />
      </Box>
    </Box>
  );
}
