import { Box } from '@mui/material';
import { BarChart } from '@mui/x-charts';
import React from 'react';

export default function StackGraph({labelType}) {
  console.log(labelType)
  return (
    <Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        >
        <BarChart
          width={300}
          height={400}
          xAxis={[{ scaleType: 'band', data: [labelType] }]}
          series={[
            { data: [9], stack: 'A', label: '80%-100%' },
            { data: [26], stack: 'A', label: '70%-79%' },
            { data: [16], stack: 'A', label: '60%-69%' },
            { data: [3], stack: 'A', label: '50%-59%' },
            { data: [0], stack: 'A', label: '40%-49%' },
            { data: [0], stack: 'A', label: '<40%' },
          ]}
          slotProps={{
            legend: {
              direction: 'column',
              position: { vertical: 'middle', horizontal: 'right' },
              padding: -100,
            },
          }}
        />
      </Box>
    </Box>
  );
}
