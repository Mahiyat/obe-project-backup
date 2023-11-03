import { Box, Typography } from '@mui/material'
import React from 'react'

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
      </Box>
    </Box>
  )
}
