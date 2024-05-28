import { Box } from '@mui/material';
import { BarChart } from '@mui/x-charts';
import React, { useEffect, useState } from 'react';
import { API_URL_CIE_MARKSHEET, API_URL_SEE_MARKSHEET } from '../constants';
import axios from 'axios';

export default function StackGraph({ labelType, counts }) {
  // console.log(labelType);
  // console.log(id);
  // console.log(type);
  // const [counts, setCounts] = useState([]);
  // useEffect(() => {
  //   fetchData();
  // }, [labelType]);
  // const fetchData = async () => {
  //   const api =
  //     type === 'Continuous Internal Evaluation'
  //       ? `${API_URL_CIE_MARKSHEET}${id}/${labelType.toLowerCase()}`
  //       : `${API_URL_SEE_MARKSHEET}${id}/${labelType.toLowerCase()}`;
  //   await axios
  //     .get(api)
  //     .then((response) => {
  //       setCounts(response.data);
  //     })
  //     .catch((error) => {
  //       console.error('Error fetching data:', error);
  //     });
  // };
  console.log(counts);
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
            { data: [counts['80_100']], stack: 'A', label: '80%-100%' },
            { data: [counts['70_79']], stack: 'A', label: '70%-79%' },
            { data: [counts['60_69']], stack: 'A', label: '60%-69%' },
            { data: [counts['50_59']], stack: 'A', label: '50%-59%' },
            { data: [counts['40_49']], stack: 'A', label: '40%-49%' },
            { data: [counts['0_39']], stack: 'A', label: '<40%' },
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
