import { Box, Typography } from '@mui/material';
import {
  BarPlot,
  ChartContainer,
  ChartsTooltip,
  ChartsXAxis,
  ChartsYAxis,
  LinePlot,
} from '@mui/x-charts';
import { ChartsLegend } from '@mui/x-charts/ChartsLegend';
import React from 'react';

const valueFormatter = (value) => `${value}%`;

const co1 = [80, 75];
const co2 = [75, 75];
const co3 = [70, 65];
const co4 = [65, 60];
const co5 = [60, 55];

const series = [
  {
    type: 'bar',
    yAxisKey: 'general',
    label: 'CSE-105',
    data: [80, 75, 70, 65, 60],
    stack: 'A',
    valueFormatter,
  },
  {
    type: 'bar',
    yAxisKey: 'general',
    label: 'CSE-107',
    data: [75, 75, 65, 60, 55],
    stack: 'A',
    valueFormatter,
  },
  {
    type: "bar",
    yAxisKey: "general",
    label: "CSE-101",
    data: [70, 80, 70, 60, 60],
    stack: 'A',
    valueFormatter,
  },
  // {
  //   type: "bar",
  //   yAxisKey: "general",
  //   label: "CO4",
  //   data: co4,
  //   valueFormatter,
  // },
  // {
  //   type: "bar",
  //   yAxisKey: "general",
  //   label: "CO5",
  //   data: co5,
  //   valueFormatter,
  // },
  // {
  //   type: 'line',
  //   yAxisKey: 'general',
  //   color: '#f44336',
  //   label: 'Target',
  //   data: [60, 60, 60, 60, 60],
  //   valueFormatter,
  // },
];

export default function AllCourseGraph({semesterEndExamTitle}) {
  console.log(semesterEndExamTitle);
  return (
    <Box sx={{ position: 'relative' }}>
      <Box
        sx={{
          display: 'flex',
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
          <BarPlot />
          <LinePlot />
          <ChartsXAxis
            label="Course Outcome"
            position="bottom"
            axisId="courseOutcome"
          />
          <ChartsYAxis label="Result" position="left" axisId="general" />
          <ChartsTooltip />
          <ChartsLegend />
        </ChartContainer>
      </Box>
      <Typography variant="body1" gutterBottom>
        {`Figure: All Courses of ${semesterEndExamTitle}`}
      </Typography>
    </Box>
  );
}
