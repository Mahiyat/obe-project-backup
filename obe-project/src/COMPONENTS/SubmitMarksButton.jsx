import { Box, Button, Typography } from "@mui/material";
import React from "react";

export default function SubmitMarksButton({ type }) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        paddingY: "16px",
        gap: "16px",
      }}
    >
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          alert("Marks Submitted");
        }}
      >
        {`Submit ${type} Marks`}
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
