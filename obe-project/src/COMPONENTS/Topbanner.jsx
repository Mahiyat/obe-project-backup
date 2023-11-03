import React from "react";
import institute_logo from "../ACCESSORIES/julogo.png";
import { Box } from "@mui/material";

function Topbanner() {
  return (
    <Box>
      <div className="topBanner" style={{height: "5%"}}>
        <img className="bannerLogo" src={institute_logo} alt="Institute logo" />{" "}
        <h3 className="blueFont">Jahangirnagar University</h3>
        <p className="smallFont boldFont">Outcome Based Education System</p>
      </div>
    </Box>
  );
}

export default Topbanner;
