import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useLocation, useNavigate } from "react-router-dom";

const columns = [
  {
    field: "id",
    headerName: "Sl No",
    width: 250,
  },
  {
    field: "roll",
    headerName: "Class Roll",
    width: 350,
  },
  {
    field: "name",
    headerName: "Student Name",
    width: 400,
  },
  {
    field: "marks",
    headerName: "Marks Obtained",
    align: "center",
    headerAlign: "center",
    width: 150,
  },
];

const rows = [
  {
    id: 1,
    roll: 360,
    name: "Snigdha Rahman",
    marks: 38,
  },
  {
    id: 2,
    roll: 361,
    name: "Mahiyat Tanzim",
    marks: 38,
  },
  {
    id: 3,
    roll: 398,
    name: "Abrar Hameem",
    marks: 38,
  },
];

export default function TutorialMarkSheet() {
  const location = useLocation();
  const navigate = useNavigate();

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
        {location.state.title} Marks
      </Typography>
      <Box>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 100,
              },
            },
          }}
          pageSizeOptions={[100]}
          // checkboxSelection
          disableRowSelectionOnClick
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-start",
          position: "relative",
          paddingY: "16px",
          gap: "16px",
        }}
      >
        <Button
          variant="contained"
          onClick={() => navigate(-1)}
        >
          Back
        </Button>
        <Button
          variant="contained"
          onClick={() => {
            alert("Marks Saved");
          }}
        >
          Save
        </Button>
      </Box>
    </Box>
  );
}
