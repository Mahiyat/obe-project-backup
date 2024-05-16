import React from 'react';
import { Box, Typography } from '@mui/material';
import { PieChart } from '@mui/x-charts/PieChart';

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

export default function PieChart_({ incourse }) {
  return (
    <Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          paddingY: '12px',
        }}
      >
        <PieChart
          series={[
            {
              data,
              highlightScope: { faded: 'global', highlighted: 'item' },
              faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
              arcLabelMinAngle: 45,
            },
          ]}
          {...size}
        />
      </Box>
      <Typography>{incourse}</Typography>
    </Box>
  );
}
