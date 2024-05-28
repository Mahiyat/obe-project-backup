import React, { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import {
  BarPlot,
  ChartContainer,
  ChartsTooltip,
  ChartsXAxis,
  ChartsYAxis,
  LinePlot,
} from '@mui/x-charts';

import GraphTabs from './GraphTabs';
import { API_URL_SEE_MARKSHEET } from '../constants';
import axios from 'axios';

export default function SingleCourseGraph({
  course,
  exam,
  selectedCO,
  handleSelectedCO,
  id,
  type,
}) {
  const onItemClick = (event, data) => {
    console.log(event, data);
    const clickedIndex = data.dataIndex; // get the index of the clicked bar
    const coLabels = ['CLO1', 'CLO2', 'CLO3', 'CLO4', 'CLO5'];
    console.log(clickedIndex);
    handleSelectedCO(coLabels[clickedIndex]);
  };

  console.log(selectedCO);

  const [stats, setStats] = useState([])
  useEffect(() => {
    fetchData();
  }, [id]);

  const fetchData = async () => {
    const api = `${API_URL_SEE_MARKSHEET}stats/${id}`;
    await axios
      .get(api)
      .then((response) => {
        setStats(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }


  const valueFormatter = (value) => `${value}%`;

  const series = [
    {
      type: 'bar',
      stack: '',
      yAxisKey: 'general',
      color: '#42a5f5',
      data: [stats['clo1'], stats['clo2'], stats['clo3'], stats['clo4'], stats['clo5']],
      highlightScope: {
        highlighted: 'item',
      },
      valueFormatter,
    },
    {
      type: 'line',
      yAxisKey: 'general',
      color: '#f44336',
      label: 'Target',
      data: [60, 60, 60, 60, 60],
      valueFormatter,
    },
  ];

  return (
    <Box
      sx={{
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <ChartContainer
          series={series}
          width={800}
          height={400}
          xAxis={[
            {
              id: 'courseOutcome',
              data: ['CLO1', 'CLO2', 'CLO3', 'CLO4', 'CLO5'],
              scaleType: 'band',
            },
          ]}
          yAxis={[
            { id: 'general', scaleType: 'linear' },
            { id: 'general', scaleType: 'linear' },
          ]}
        >
          <BarPlot onItemClick={onItemClick} />
          <LinePlot />
          <ChartsXAxis
            label="Course Outcome"
            position="bottom"
            axisId="courseOutcome"
          />
          <ChartsYAxis label="Attainment" position="left" axisId="general" />
          <ChartsTooltip />
          {/* <ChartsYAxis label="Threshold" position="right" axisId="threshold" /> */}
        </ChartContainer>
        <Typography variant="body1" gutterBottom>
          {`Figure: ${exam} ${course}`}
        </Typography>
      </Box>
      {selectedCO !== '' && <GraphTabs labelType={selectedCO} id={id} type={type} />}
    </Box>
  );
}
