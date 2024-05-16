import React from "react";
import { Alert, Box, Button, Slide, Snackbar, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useNavigate } from "react-router-dom";
import CustomToolBar from "./CustomToolBar";

function SlideTransition(props) {
  return <Slide {...props} direction="up" />;
}

const columns = [
  { field: "id", headerName: "Roll No.", width: 150 },
  { field: "registration", headerName: "Registration No.", width: 300 },
  { field: "name", headerName: "Name", width: 350 },
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

  const [state, setState] = React.useState({
    open: false,
    Transition: Slide,
  });

  const handleClick = (Transition) => () => {
    setState({
      open: true,
      Transition,
    });
  };

  const handleClose = () => {
    setState({
      ...state,
      open: false,
    });
  };

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
        Final Evaluation Sheet
      </Typography>

      <Box>
        <DataGrid
          rows={rows}
          columns={columns}
          slots={{ toolbar: CustomToolBar, }}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 80 },
            },
          }}
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
        <Button variant="contained" onClick={() => navigate(-1)}>
          Back
        </Button>
        <Button
          variant="contained"
          onClick={handleClick(SlideTransition)}
        >
          Save
        </Button>
        <Snackbar
          open={state.open}
          onClose={handleClose}
          TransitionComponent={state.Transition}
          key={state.Transition.name}
          autoHideDuration={1200}
        >
          <Alert
            onClose={handleClose}
            severity="success"
            sx={{ width: '100%' }}
          >
            Marks Saved!
          </Alert>
        </Snackbar>
      </Box>
    </Box>
  );
}
