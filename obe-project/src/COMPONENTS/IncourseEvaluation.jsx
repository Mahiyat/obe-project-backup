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
      }}
    >
      <Typography variant="h5" sx={{ textAlign: "left" }} gutterBottom>
        Incourse Evaluation
      </Typography>
      <Box>
        <TutorialInfoTable />
        <SubmitMarksButton type="Incourse" />
      </Box>
    </Box>
  );
}
