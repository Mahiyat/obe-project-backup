import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material';
import CircleIcon from '@mui/icons-material/Circle';

import { API_URL_BUTTON } from '../constants';

export default function DashboardDetails() {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const api = API_URL_BUTTON + 'courses/incomplete';
    await axios
      .get(api)
      .then((response) => {
        setCourses(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  };
  return (
    <Box sx={{ gap: '16px', paddingY: '16px' }}>
      <Typography variant="h4" sx={{ textAlign: 'left' }} gutterBottom>
        Pending Activities
      </Typography>
      <List>
        {courses.map((course) => (
          <ListItem>
            <ListItemIcon>
              <CircleIcon fontSize='small' color='primary' />
            </ListItemIcon>
            <ListItemText
              primary={`Submission Pending of ${course.text} marks of ${course.course_id}: ${course.course_name} of ${course.exam_title}`}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
