import { Box, Button, Typography } from "@mui/material";
import React from "react";
import TextField from "@mui/material/TextField";

export default function SubmitRequest() {
  return (
    <Box
      sx={{
        height: 400,
        display: "flex",
        flexGrow: "1",
      }}
    >
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          bgcolor: "background.default",
          p: 3,
          position: "relative",
          top: "25%",
        }}
      >
        <Typography
          variant="h3"
          sx={{
            textAlign: "left",
            textDecoration: "underline rgb(81, 42, 255)",
          }}
          gutterBottom
        >
          Submit Request
        </Typography>

        <Typography
          variant="h6"
          sx={{
            textAlign: "left",
          }}
          gutterBottom
        >
          Explain your problem below and submit request
        </Typography>
        <Box display={"flex"} paddingTop={5} gutterBottom>
          <TextField
            id="outlined-multiline-static"
            label="Message"
            multiline
            rows={10}
            placeholder="Write you message..."
            size="Normal"
            fullWidth
          />
        </Box>
        <Box
          paddingTop={2}
          display={"flex"}
          flexDirection={"row-reverse"}
        >
          <Button 
            variant="contained" 
            color="primary"
            onClick={()=>{
              alert("Clicked");
            }}
          >Submit Request</Button>

        </Box>
      </Box>
    </Box>
  );
}
