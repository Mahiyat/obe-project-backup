import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";

export default function Navbuttons() {
  const navigate = useNavigate();

  return (
    <div
      className="navButton"
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
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
      <br />
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
      <br />
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
      <br />
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
          background: "red",
          color: "white",
          fontWeight: "bold",
          borderRadius: 5,
          width: 100,
          ":hover": {
            background: "red",
            color: "white",
            boxShadow: 10,
          },
        }}
        variant="contained"
      >
        Log Out
      </Button>
    </div>
  );
}
