import React from 'react';
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

const valueFormatter = (value) => `${value}%`;

const series = [
  {
    type: 'bar',
    stack: '',
    yAxisKey: 'general',
    color: '#42a5f5',
    data: [80, 75, 70, 60, 65],
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

export default function SingleCourseGraph({
  course,
  exam,
  selectedCO,
  handleSelectedCO,
}) {
  const onItemClick = (event, data) => {
    console.log(event, data);
    const clickedIndex = data.dataIndex; // get the index of the clicked bar
    const coLabels = ['CO1', 'CO2', 'CO3', 'CO4', 'CO5'];
    console.log(clickedIndex);
    handleSelectedCO(coLabels[clickedIndex]);
  };

  console.log(selectedCO);

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
              data: ['CO1', 'CO2', 'CO3', 'CO4', 'CO5'],
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
      {selectedCO !== '' && <GraphTabs labelType={selectedCO} />}
    </Box>
  );
}
