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
import React, { useEffect, useState } from 'react';
import { API_URL_SEE_MARKSHEET } from '../constants';
import axios from 'axios';

export default function AllCourseGraph() {
  const [courseData, setCourseData] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const api = API_URL_SEE_MARKSHEET + 'allcourses';
    try {
      const response = await axios.get(api);
      const data = response.data;
      if (data && typeof data === 'object') {
        const formattedData = Object.keys(data).map((key) => ({
          label: data[key].label,
          data: [
            data[key].clo1 || 0,
            data[key].clo2 || 0,
            data[key].clo3 || 0,
            data[key].clo4 || 0,
            data[key].clo5 || 0,
          ],
        }));
        setCourseData(formattedData);
      } else {
        console.error('Unexpected data format:', data);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const valueFormatter = (value) => `${value}%`;

  const series = courseData.map((course) => ({
    type: 'bar',
    yAxisKey: 'general',
    label: course.label,
    data: course.data,
    stack: 'A',
    valueFormatter: valueFormatter,
  }));

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
        Figure: All Courses
      </Typography>
    </Box>
  );
}
