import React from "react";
import { Box, Typography } from "@mui/material";

import PendingCourses from "./PendingCourses";
import CompletedCourses from "./CompletedCourses";


export default function ViewCourses() {
  //const [expand, setExpand] = React.useState(DEFAULT_GRID_AUTOSIZE_OPTIONS.expand);
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
      <Typography
        variant="h3"
        sx={{
          textAlign: "left",
          textDecoration: "underline #3d5afe",
        }}
        gutterBottom
      >
        Courses
      </Typography>
      <PendingCourses />
      <CompletedCourses />
    </Box>
  );
}
