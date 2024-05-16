import React from 'react'
import Facultyinfo from './Facultyinfo';
import Navbuttons from './Navbuttons';
import { Box } from '@mui/material';

// const drawerWidth = 240;

function Nav(){
    return <Box sx={{ display: "flex", width: "240px" }}>
        <div className="nav-bar" style={{height: "100%"}}>
        <Facultyinfo/>
        <Navbuttons/>
    </div>
    </Box>
}

export default Nav;