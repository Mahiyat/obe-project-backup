import React from "react";
import { AppBar, Box, CssBaseline, Drawer } from "@mui/material";

import Facultyinfo from "./Facultyinfo";
import Navbuttons from "./Navbuttons";

const drawerWidth = 240;

export default function NavBar() {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      ></AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            backgroundColor: "#3d5afe",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Facultyinfo />
        <Navbuttons />
      </Drawer>
    </Box>
  );
}
