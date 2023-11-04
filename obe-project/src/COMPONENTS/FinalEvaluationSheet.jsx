import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useNavigate } from "react-router-dom";

const columns = [
  { field: "id", headerName: "Roll No.", width: 150 },
  { field: "registration", headerName: "Registration No.", width: 150 },
  { field: "name", headerName: "Name", width: 250 },
  {
    field: "co1",
    headerName: "CO1",
    type: "number",
    width: 120,
    editable: true,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "co2",
    headerName: "CO2",
    type: "number",
    width: 120,
    editable: true,
    align: "center",
    headerAlign: "center",
  },

  {
    field: "co3",
    headerName: "CO3",
    type: "number",
    width: 120,
    editable: true,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "co4",
    headerName: "CO4",
    type: "number",
    width: 120,
    editable: true,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "co5",
    headerName: "CO5",
    type: "number",
    width: 120,
    editable: true,
    align: "center",
    headerAlign: "center",
  },
];

const rows = [
  {
    id: 398,
    registration: 20200650768,
    name: "Abrar Hameem",
    co1: 10,
    co2: 8,
    co3: 8,
    co4: 9,
    co5: 7,
  },
  {
    id: 360,
    registration: 20200650584,
    name: "Mahiyat Tanzim",
    co1: 10,
    co2: 8,
    co3: 8,
    co4: 9,
    co5: 7,
  },
  {
    id: 361,
    registration: 20200650768,
    name: "Snigdha Rahman",
    co1: 10,
    co2: 8,
    co3: 8,
    co4: 9,
    co5: 7,
  },
  {
    id: 378,
    registration: 20200650768,
    name: "S.I.M Adnan",
    co1: 10,
    co2: 8,
    co3: 8,
    co4: 9,
    co5: 7,
  },
  {
    id: 362,
    registration: 20200650768,
    name: "Hasneen Tamanna Totinee",
    co1: 10,
    co2: 8,
    co3: 8,
    co4: 9,
    co5: 7,
  },
  {
    id: 353,
    registration: 20200650768,
    name: "Nuzhat Nairy Afrin",
    co1: 10,
    co2: 8,
    co3: 8,
    co4: 9,
    co5: 7,
  },
  {
    id: 399,
    registration: 20200650768,
    name: "Hasan Al Mamun",
    co1: 10,
    co2: 8,
    co3: 8,
    co4: 9,
    co5: 7,
  },
  {
    id: 367,
    registration: 20200650768,
    name: "Fatima Binte Aziz",
    co1: 10,
    co2: 8,
    co3: 8,
    co4: 9,
    co5: 7,
  },
  {
    id: 401,
    registration: 20200650768,
    name: "MD. Rokibul Hasan Shanto",
    co1: 10,
    co2: 8,
    co3: 8,
    co4: 9,
    co5: 7,
  },
  {
    id: 384,
    registration: 20200650768,
    name: "Taufiq Islam",
    co1: 10,
    co2: 8,
    co3: 8,
    co4: 9,
    co5: 7,
  },
  {
    id: 346,
    registration: 20200650768,
    name: "Solaimi Hamid",
    co1: 10,
    co2: 8,
    co3: 8,
    co4: 9,
    co5: 7,
  },
];

export default function FinalEvaluationSheet() {
  const navigate = useNavigate();

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
          Final Evaluation Sheet
        </Typography>

        <Box
          display={"flex"}
          justifyContent={"center"}
          alignContent={"center"}
          paddingTop={5}
        >
          <div style={{ height: "100%", width: "75%" }}>
            <DataGrid
              rows={rows}
              columns={columns}
              initialState={{
                pagination: {
                  paginationModel: { page: 0, pageSize: 80 },
                },
              }}
            />
          </div>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-end",
            position: "relative",
            top: "20%",
          }}
        >
          <Button
            variant="contained"
            sx={{
              position: "absolute",
              right: "10%",
              bottom: "0",
            }}
            onClick={() => navigate(-1)}
          >
            Back
          </Button>
          <Button
            variant="contained"
            sx={{
              position: "absolute",
              right: "3%",
              bottom: "0",
            }}
            onClick={() => {alert("Marks Saved")}}
          >
            Save
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
