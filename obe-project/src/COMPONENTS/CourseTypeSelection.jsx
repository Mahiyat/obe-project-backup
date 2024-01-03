import React from "react";
import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";

import AllCourseGraph from "./AllCourseGraph";
import SingleCourseMenu from "./SingleCourseMenu";

export default function CourseTypeSelection() {
  const [type, setType] = React.useState("");

  const handleTypeChange = (event) => {
    setType(event.target.value);
  };

  return (
    <Box
    sx={{
      display: "flex",
      flexDirection: "column",
      gap: "24px",
      bgcolor: "background.default",
    }}
  >
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
                <MenuItem value={"All Completed Courses"}>
                  All Completed Courses
                </MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Box>
      </Box>
      {type === "All Completed Courses" ? (
        <AllCourseGraph />
      ) : type === "Single Course" ? (
        <SingleCourseMenu />
      ) : null}
    </Box>
  );
}
