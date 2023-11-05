import React from "react";
import { Box, Typography } from "@mui/material";

import Card from "./Card";
import Card1 from "./Card1";
import Welcome from "./Welcome";
import RecentActivity from "./RecentActivity";

export default function Dashboard() {
  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        bgcolor: "background.default",
        p: 3,
        position: "relative",
      }}
    >
      <Typography
        variant="h3"
        sx={{
          textAlign: "left",
          textDecoration: "underline #3d5afe",
        }}
        gutterBottom
      >
        Dashboard
      </Typography>
      <Welcome />
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          gap: "32px",
          padding: "32px 32px",
        }}
      >
        {/* <Card
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "32px",
            padding: "24px 24px",
            borderRadius: "10px",
            backgroundColor: "#64b5f6",
            width: "275",
          }}
        >
          <Typography variant="h3">Active Courses</Typography>
          <Typography variant="h3">10</Typography>
        </Card>
        <Card
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "32px",
            padding: "24px 24px",
            borderRadius: "10px",
            width: "275",
          }}
        >
          <Typography variant="h3" color="danger">
            Marks Submission Remaining
          </Typography>
          <Typography variant="h3">2</Typography>
        </Card> */}
        <Card cardDesc="Active Courses" cardNum="2" />
        <Card1 cardDesc="Marks Submission Remaining" cardNum="2" />
      </Box>
      <RecentActivity />
    </Box>
  );
}
