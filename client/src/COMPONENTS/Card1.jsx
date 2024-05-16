import { Box } from '@mui/material';
import React from 'react'

export default function Card1(props) {

 let {cardDesc,cardNum}=props;
  return (
    <Box className="card1">
    <p className="gap25">{cardDesc}</p>
    <p className="fontSize4rem">{cardNum}</p>
      
    </Box>
  )
}
