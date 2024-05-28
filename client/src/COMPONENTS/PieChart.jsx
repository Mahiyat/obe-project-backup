import React, { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import { PieChart } from '@mui/x-charts/PieChart';
import { API_URL_CIE_MARKSHEET, API_URL_SEE_MARKSHEET } from '../constants';
import axios from 'axios';

const size = {
  width: 500,
  height: 300,
};

export default function PieChart_({ labelType,counts }) {
  const data = [
    { value: counts['80_100'], label: '80%-100%' },
    { value: counts['70_79'], label: '70%-79%' },
    { value: counts['60_69'], label: '60%-69%' },
    { value: counts['50_59'], label: '50%-59%' },
    { value: counts['40_49'], label: '40%-49%' },
    { value: counts['0_39'], label: '<40%' },
  ];
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
      <Typography>{labelType}</Typography>
    </Box>
  );
}
