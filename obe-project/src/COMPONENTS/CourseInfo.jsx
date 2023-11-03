import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import TutorialMarksViewActions from "./TutorialMarksViewActions";
import { useLocation } from "react-router-dom";

const columns = [
  {
    field: "id",
    headerName: "Sl No",
    width: 150,
  },
  {
    field: "title",
    headerName: "Exam Name",
    width: 250,
  },
  {
    field: "actions",
    headerName: "Details",
    width: 200,
    renderCell: (params) => (
      <TutorialMarksViewActions title={params.value.title} />
    ),
  },
];

const rows = [
  {
    id: 1,
    title: "Tutorial 1",
    actions: { id: 1, title: "Tutorial 1" },
  },
  {
    id: 2,
    title: "Tutorial 2",
    actions: { id: 2, title: "Tutorial 2" },
  },
  {
    id: 3,
    title: "Tutorial 3",
    actions: { id: 3, title: "Tutorial 3" },
  },
];

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
        <Box sx={{ display: "flex", flexDirection: "row", height: "40%" }}>
          <Box sx={{ width: "50%" }}>
            <Typography variant="body1" sx={{ textAlign: "left" }} gutterBottom>
              <strong>Course ID: </strong>
              {location.state.courseId}
            </Typography>
            <Typography variant="body1" sx={{ textAlign: "left" }} gutterBottom>
              <strong>Course Name: </strong>
              {location.state.courseName}
            </Typography>
          </Box>
          <Box>
            <Typography variant="body1" sx={{ textAlign: "left" }} gutterBottom>
              <strong>Department: </strong>Computer Science and Engineering
            </Typography>
            <Typography variant="body1" sx={{ textAlign: "left" }} gutterBottom>
              <strong>Exam Title: </strong>
              {location.state.title}
            </Typography>
          </Box>
        </Box>
        <Box sx={{ height: "120%" }}>
          <Typography variant="h5" sx={{ textAlign: "left" }} gutterBottom>
            Incourse Evaluation
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-evenly",
              width: "70%",
              margin: "auto",
            }}
          >
            <Box sx={{ width: "60%" }}>
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
                checkboxSelection
                disableRowSelectionOnClick
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "flex-end",
                justifyContent: "space-evenly",
              }}
            >
              <Button variant="contained" color="primary">
                Submit Marks
              </Button>
              <Typography
                variant="body2"
                sx={{ color: "red", textAlign: "left" }}
                gutterBottom
              >
                N.B. Marks once submitted cannot be undone
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box>
          <Typography variant="h5" sx={{ textAlign: "left" }} gutterBottom>
            Final Evaluation
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
