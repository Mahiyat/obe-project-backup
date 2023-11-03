import { Box } from '@mui/material'
import React from 'react'
import Topbanner from './Topbanner'
import NavBar from './NavBar'

export default function PageTemplate() {
  return (
    <Box sx={{display: "flex", flexDirection: "row"}}>
      <NavBar />
      <Box sx={{position: "absolute", top: "0", right: "0"}}><Topbanner /></Box>
    </Box>
  )
}
