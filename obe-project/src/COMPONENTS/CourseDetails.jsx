import { Box, Typography } from "@mui/material";
import React from "react";

export default function CourseDetails(props) {
  return (
    <Box sx={{ display: "flex", flexDirection: "row", height: "40%" }}>
      <Box sx={{ width: "50%" }}>
        <Typography variant="body1" sx={{ textAlign: "left" }} gutterBottom>
          <strong>Course ID: </strong>
          {props.courseId}
        </Typography>
        <Typography variant="body1" sx={{ textAlign: "left" }} gutterBottom>
          <strong>Course Name: </strong>
          {props.courseName}
        </Typography>
      </Box>
      <Box>
        <Typography variant="body1" sx={{ textAlign: "left" }} gutterBottom>
          <strong>Department: </strong>Computer Science and Engineering
        </Typography>
        <Typography variant="body1" sx={{ textAlign: "left" }} gutterBottom>
          <strong>Exam Title: </strong>
          {props.title}
        </Typography>
      </Box>
    </Box>
  );
}
