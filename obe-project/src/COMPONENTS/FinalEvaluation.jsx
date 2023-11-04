import React from "react";
import { Link } from "react-router-dom";
import { Box, Typography } from "@mui/material";

import SubmitMarksButton from "./SubmitMarksButton";

export default function FinalEvaluation() {
  return (
    <Box>
      <Typography variant="h5" sx={{ textAlign: "left" }} gutterBottom>
        Final Evaluation
      </Typography>
      <Box sx={{ width: "85%" }}>
        <Typography variant="body1" sx={{ textAlign: "left" }} gutterBottom>
          For details click <Link to="/final-evaluation-sheet">here</Link>
        </Typography>
        <SubmitMarksButton />
      </Box>
    </Box>
  );
}
