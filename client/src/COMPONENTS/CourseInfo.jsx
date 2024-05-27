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
      component="main"
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "24px",
        flexGrow: 1,
        bgcolor: "background.default",
        p: 3,
        position: "relative",
      }}
    >
      <Box>
        <Typography
          variant="h3"
          sx={{
            textAlign: "left",
            textDecoration: "underline #3d5afe",
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
      </Box>
      <IncourseEvaluation course_pk={location.state.course_pk} />
      <FinalEvaluation />
    </Box>
  );
}
