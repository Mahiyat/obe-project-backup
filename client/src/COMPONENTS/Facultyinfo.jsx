import React from 'react'
import { Typography } from '@mui/material'

import logo from '../ACCESSORIES/person.png'

export default function Facultyinfo() {
  return (
    <div className="facultyinfo" style={{display: "flex", flexDirection: "column", alignItems: "center", height: "40%"}}>
      <img className="imgPerson" src={logo} alt="Faculty" />
      <Typography variant='h5' sx={{color: "white"}} gutterBottom>John Doe</Typography>
      <Typography variant='h6' sx={{color: "white"}} gutterBottom>Associate Professor</Typography>
      <Typography variant='subtitle1' sx={{textAlign: "center", color: "white"}} gutterBottom>Department of Computer Science and Engineering</Typography>
    </div>
  )
}
