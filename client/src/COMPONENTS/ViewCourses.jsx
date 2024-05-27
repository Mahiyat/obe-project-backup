import React from "react";
import { Box, Card, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

import ViewCoursesRowActions from "./ViewCoursesRowActions";
import PendingCourses from "./PendingCourses";
import CompletedCourses from "./CompletedCourses";



const columns = [
  {
    field: "id",
    headerName: "Sl No",

  },
  { field: "courseId", headerName: "Course ID",maxWidth:"250" },
  {
    field: "courseName",
    headerName: "Course Name",
    maxWidth:700,
    minWidth : 400,
    

  },
  {
    field: "title",
    headerName: "Exam Title",
    maxWidth:700,
    minWidth : 400
  },

  {
    field: "actions",
    headerName: "Details",
    renderCell: (params) => (
      <ViewCoursesRowActions
        courseId={params.value.courseId}
        courseName={params.value.courseName}
        title={params.value.title}
      />
    ),
  },
];

const rows = [
  {
    id: 1,
    courseId: "CSE-105",
    courseName: "Structured Programming Language",
    title: "1st Year 1st Semester B.Sc. 2021",
    actions: {
      courseId: "CSE-105",
      courseName: "Structured Programming Language",
      title: "1st Year 1st Semester B.Sc. 2021",
    },
  },
  {
    id: 2,
    courseId: "CSE-107",
    courseName: "Electrical Circuit",
    title: "1st Year 1st Semester B.Sc. 2021",
    actions: {
      courseId: "CSE-107",
      courseName: "Electrical Circuit",
      title: "1st Year 1st Semester B.Sc. 2021",
    },
  },
];

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
