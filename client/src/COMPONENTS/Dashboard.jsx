import React, { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';

import Card from './Card';
import Card1 from './Card1';
import Welcome from './Welcome';
import RecentActivity from './RecentActivity';
import { API_URL_COURSE } from '../constants';
import axios from 'axios';
import DashboardDetails from './DashboardDetails';

export default function Dashboard() {
  const [counts, setCounts] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const api = API_URL_COURSE + 'getcounts';
    await axios
      .get(api)
      .then((response) => {
        setCounts(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  };
  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        bgcolor: 'background.default',
        p: 3,
        position: 'relative',
      }}
    >
      <Typography
        variant="h3"
        sx={{
          textAlign: 'left',
          textDecoration: 'underline #3d5afe',
        }}
        gutterBottom
      >
        Dashboard
      </Typography>
      <Welcome />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '32px',
          padding: '32px 32px',
        }}
      >
        {/* <Card
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "32px",
            padding: "24px 24px",
            borderRadius: "10px",
            backgroundColor: "#64b5f6",
            width: "275",
          }}
        >
          <Typography variant="h3">Active Courses</Typography>
          <Typography variant="h3">10</Typography>
        </Card>
        <Card
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "32px",
            padding: "24px 24px",
            borderRadius: "10px",
            width: "275",
          }}
        >
          <Typography variant="h3" color="danger">
            Marks Submission Remaining
          </Typography>
          <Typography variant="h3">2</Typography>
        </Card> */}
        <Card cardDesc="Total Courses" cardNum={counts.all_courses_count} />
        <Card1
          cardDesc="Marks Submission Remaining"
          cardNum={counts.pending_courses_count}
        />
      </Box>
      <DashboardDetails />
    </Box>
  );
}
