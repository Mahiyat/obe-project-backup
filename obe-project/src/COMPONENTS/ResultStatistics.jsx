import React from "react";
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";

import AllCourseGraph from "./AllCourseGraph";
import SingleCourseMenu from "./SingleCourseMenu";

export default function ResultStatistics() {
  const [type, setType] = React.useState("");

  const handleTypeChange = (event) => {
    setType(event.target.value);
  };

  return (
    <Box
      component="main"
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "24px",
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
        Result Statistics
      </Typography>
      <Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <Box sx={{ minWidth: 200 }}>
            <FormControl fullWidth>
              <InputLabel id="type-select-label">Select Type</InputLabel>
              <Select
                labelId="type-select-label"
                id="type-select"
                value={type}
                label="Select Type"
                onChange={handleTypeChange}
              >
                <MenuItem value={"Single Course"}>Single Course</MenuItem>
                <MenuItem value={"All Active Courses"}>
                  All Active Courses
                </MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Box>
      </Box>
      {type === "All Active Courses" ? (
        <AllCourseGraph />
      ) : type === "Single Course" ? (
        <SingleCourseMenu />
      ) : null}
    </Box>
  );
}
