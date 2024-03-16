import React from 'react'
import { Box ,Typography } from '@mui/material'
import { PieChart, pieArcLabelClasses } from '@mui/x-charts/PieChart';

const data = [
  { value: 9, label: '80%-100%' },
  { value: 26, label: '70%-79%' },
  { value: 16, label: '60%-69%' },
  { value: 3, label: '50%-59%' },
  { value: 0, label: '40%-49%' },
  { value: 0, label: '<40%' },
];

const size = {
  width: 500,
  height: 300,
};

export default function PieChart_({incourse}) {
  return (
    <Box
     paddingTop={10}
    >
      
      <PieChart

      series={[
        {
          data,
          highlightScope: { faded: 'global', highlighted: 'item' },
          faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
          arcLabel: (item) => `${item.label} `,
          arcLabelMinAngle: 45,
          
        },
      ]}
      sx={{
        [`& .${pieArcLabelClasses.root}`]: {
          fill: 'white',
          fontWeight: 'bold',
        },
      }}
      {...size}
    />
    <Typography
      paddingTop={4}
      variant='h5'
    >{incourse}</Typography>
    </Box>
  )
}
