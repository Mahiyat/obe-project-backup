import React from "react";
import institute_logo from "../ACCESSORIES/julogo.png";
import { Box, Typography } from "@mui/material";

function Topbanner() {
  return (
    <Box
      sx={{ display: "flex", justifyContent: "flex-end", alignItems: "center" }}
    >
      <Box
        sx={{ display: "flex", gap: "16px", paddingX: "8px", paddingY: "8px" }}
      >
        <Box>
          <img
            className="bannerLogo"
            src={institute_logo}
            alt="Institute logo"
          />
        </Box>
        <Box>
          <Typography variant="subtitle1" sx={{color: "#3d5afe", fontWeight: "bold"}}>Jahangirnagar University</Typography>
          <Typography variant="caption" sx={{color: "#3d5afe"}}>
            Outcome Based Education System
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Topbanner;
