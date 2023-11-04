import { Box, Typography } from "@mui/material";
import React from "react";
import TutorialInfoTable from "./TutorialInfoTable";
import SubmitMarksButton from "./SubmitMarksButton";

export default function IncourseEvaluation() {
  return (
    <Box>
      <Typography variant="h5" sx={{ textAlign: "left" }} gutterBottom>
        Incourse Evaluation
      </Typography>
      <Box
        sx={{
          width: "70%",
          margin: "auto",
        }}
      >
        <TutorialInfoTable />
        <SubmitMarksButton />
      </Box>
    </Box>
  );
}
