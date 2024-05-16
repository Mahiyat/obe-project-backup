import React from "react";
import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";

import Topbanner from "./Topbanner";
import NavBar from "./NavBar";

export default function PageTemplate() {
  return (
    <Box sx={{ display: "flex", width: "100%", gap: "24px" }}>
      <NavBar />
      <Box
        sx={{
          gap: "24px",
          display: "flex",
          flexDirection: "column",
          flexGrow: "1",
        }}
      >
        <Topbanner />
        <Outlet />
      </Box>
    </Box>
  );
}
