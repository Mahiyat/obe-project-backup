import React from "react";
import ViewCoursesRowActions from "./ViewCoursesRowActions";
import { Box, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

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
          Courses
        </Typography>
        <Box sx={{height: "80%"}}>
          <Typography variant="h5" sx={{ textAlign: "left" }} gutterBottom>
            Active Courses
          </Typography>
          <Box sx={{margin: "auto", width: "70%"}}>
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
        <Box>
          <Typography variant="h5" sx={{ textAlign: "left" }} gutterBottom>
            Completed Courses
          </Typography>
          <Box sx={{margin: "auto", width: "70%"}}>
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
      </Box>
    </Box>
  );
}
