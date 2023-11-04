import React from "react";
import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

import TutorialMarksViewActions from "./TutorialMarksViewActions";

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

export default function TutorialInfoTable() {
  return (
    <Box sx={{ maxWidth: "750px" }}>
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
  );
}
