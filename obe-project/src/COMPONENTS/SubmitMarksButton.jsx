import { Box, Button, Typography } from "@mui/material";
import React from "react";

export default function SubmitMarksButton() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
      }}
    >
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          alert("Marks Submitted");
        }}
      >
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
  );
}
