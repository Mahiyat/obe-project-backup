import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";

export default function Navbuttons() {
  const navigate = useNavigate();

  return (
    <Box
      className="navButton"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "16px",
      }}
    >
      <Button
        sx={{
          background: "#C9CEFF",
          color: "black",
          fontWeight: "bold",
          borderRadius: 5,
          width: 180,
          //   marginBottom: 3,
          ":hover": {
            background: "#FF9900",
            color: "white",
          },
        }}
        variant="contained"
        onClick={() => navigate("/")}
      >
        Dashboard
      </Button>
      <Button
        sx={{
          background: "#C9CEFF",
          color: "black",
          fontWeight: "bold",
          borderRadius: 5,
          width: 180,
          //   marginBottom: 3,
          ":hover": {
            background: "#FF9900",
            color: "white",
          },
        }}
        variant="contained"
        onClick={() => navigate("/view-courses")}
      >
        View Courses
      </Button>
      <Button
        sx={{
          background: "#C9CEFF",
          color: "black",
          fontWeight: "bold",
          borderRadius: 5,
          width: 180,
          //   marginBottom: 3,
          ":hover": {
            background: "#FF9900",
            color: "white",
          },
        }}
        variant="contained"
        onClick={() => navigate("/submit-request")}
      >
        Submit Request
      </Button>
      <Button
        sx={{
          background: "#C9CEFF",
          color: "black",
          fontWeight: "bold",
          borderRadius: 5,
          width: 180,
          marginBottom: "40%",
          ":hover": {
            background: "#FF9900",
            color: "white",
          },
        }}
        variant="contained"
        onClick={() => navigate("/result-statistics")}
      >
        Result Statistics
      </Button>
      <br />
      <Button
        sx={{
          background: "#e53935",
          color: "white",
          fontWeight: "bold",
          borderRadius: 5,
          width: 100,
          ":hover": {
            background: "#e53935",
            color: "white",
            boxShadow: 10,
          },
        }}
        variant="outlined"
      >
        Log Out
      </Button>
    </Box>
  );
}
