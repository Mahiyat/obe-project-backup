import { Box, Card, Typography } from "@mui/material";
import React from "react";
import TutorialInfoTable from "./TutorialInfoTable";
import SubmitMarksButton from "./SubmitMarksButton";

export default function IncourseEvaluation() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        paddingY: "16px",
        gap: "16px",
        width: "100%",
      }}
    >
      <Typography variant="h5" sx={{ textAlign: "left" }} gutterBottom>
        Incourse Evaluation
      </Typography>
      <Box sx={{ width: "100%" }}>
        <TutorialInfoTable />
        <SubmitMarksButton type="Incourse" />
      </Box>
    </Box>
  );
}
