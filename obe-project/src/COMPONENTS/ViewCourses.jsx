import React from "react";
import { Box, Card, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

import ViewCoursesRowActions from "./ViewCoursesRowActions";

const columns = [
  {
    field: "id",
    headerName: "Sl No",
    width: 150,
  },
  { field: "courseId", headerName: "Course ID", width: 90 },
  {
    field: "courseName",
    headerName: "Course Name",
    width: 350,
  },
  {
    field: "title",
    headerName: "Exam Title",
    width: 350,
  },
  {
    field: "actions",
    headerName: "Details",
    width: 200,
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
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          paddingY: "16px",
          gap: "16px",
        }}
      >
        <Typography variant="h5" gutterBottom>
          Active Courses
        </Typography>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 3,
              },
            },
          }}
          pageSizeOptions={[3]}
          // checkboxSelection
          disableRowSelectionOnClick
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          paddingY: "16px",
          gap: "16px",
        }}
      >
        <Typography variant="h5" gutterBottom>
          Completed Courses
        </Typography>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 3,
              },
            },
          }}
          pageSizeOptions={[3]}
          // checkboxSelection
          disableRowSelectionOnClick
        />
      </Box>
    </Box>
  );
}
