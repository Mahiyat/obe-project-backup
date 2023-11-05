import { Box, Typography } from '@mui/material';
import { BarPlot, ChartContainer, ChartsTooltip, ChartsXAxis, ChartsYAxis, LinePlot } from '@mui/x-charts';
import { ChartsLegend } from '@mui/x-charts/ChartsLegend';
import React from 'react'

const valueFormatter = (value) => `${value}%`;

const co1 = [80, 75];
const co2 = [75, 75];
const co3 = [70, 65];
const co4 = [65, 60];
const co5 = [60, 55];

const series = [
  {
    type: "bar",
    yAxisKey: "general",
    label: "CO1",
    data: co1,
    valueFormatter,
  },
  {
    type: "bar",
    yAxisKey: "general",
    label: "CO2",
    data: co2,
    valueFormatter,
  },
  {
    type: "bar",
    yAxisKey: "general",
    label: "CO3",
    data: co3,
    valueFormatter,
  },
  {
    type: "bar",
    yAxisKey: "general",
    label: "CO4",
    data: co4,
    valueFormatter,
  },
  {
    type: "bar",
    yAxisKey: "general",
    label: "CO5",
    data: co5,
    valueFormatter,
  },
  {
    type: "line",
    yAxisKey: "general",
    color: "#f44336",
    label: "Target",
    data: [60, 60],
    valueFormatter,
  },
];

export default function AllCourseGraph() {
  return (
    <Box sx={{ position: "relative" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ChartContainer
          series={series}
          width={800}
          height={400}
          xAxis={[
            {
              id: "courseOutcome",
              data: ["CSE-105", "CSE-107"],
              scaleType: "band",
            },
          ]}
          yAxis={[
            { id: "general", scaleType: "linear" },
            { id: "general", scaleType: "linear" },
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
        Figure: All Completed Courses
      </Typography>
    </Box>
  )
}
