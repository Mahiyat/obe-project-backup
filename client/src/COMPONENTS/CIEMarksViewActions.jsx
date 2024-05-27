import { Box, IconButton } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useNavigate } from "react-router-dom";

function CIEMarksViewActions(props) {
  const navigate = useNavigate();

  return (
    <Box>
      <IconButton>
      <VisibilityIcon onClick = {() => navigate("/cie-category-marks",{state: {cie_pk: props.cie_pk, title: props.title}})}/>
      </IconButton>
    </Box>
  );
}

export default CIEMarksViewActions