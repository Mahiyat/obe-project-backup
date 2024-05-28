import React, { useEffect, useState } from 'react';
import { Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material';

import ContinuousIncourseMenu from './ContinuousIncourseMenu';
import { API_URL_COURSE } from '../constants';
import axios from 'axios';

export default function ContinuousIncourseSelection(props) {
  // const [course, setCourse] = React.useState('');
  // const [examTitle, setExamTitle] = React.useState('');

  // const handleCourseChange = (event) => {
  //   setCourse(event.target.value);
  // };

  // const handleExamTitleChange = (event) => {
  //   setExamTitle(event.target.value);
  // };

  const {
    course,
    handleCourseChange,
    examTitle,
    handleExamTitleChange,
    incourseType,
    handleIncourseTypeChange,
    pk,
    setPk,
  } = props;

  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetchCourseIdData();
  }, []);
  const fetchCourseIdData = async () => {
    const api = API_URL_COURSE + 'courseids';
    await axios
      .get(api)
      .then((response) => {
        setCourses(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  };
  // const examTitles = [
  //   '1st Year 1st Semester 2021',
  //   '1st Year 1st Semester 2020',
  // ];

  const [examTitles, setExamTitles] = useState([]);
  useEffect(() => {
    if (course) {
      fetchExamTitleData(course);
    }
  }, [course]);
  const fetchExamTitleData = async (courseId) => {
    const api = `${API_URL_COURSE}titles/${courseId}`;
    await axios
      .get(api)
      .then((response) => {
        setExamTitles(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  };

  useEffect(() => {
    if(course!=='' && examTitle!==''){
      fetchPkData(course, examTitle);
    }
  }, [course, examTitle]);
  const fetchPkData = async (courseId, title) => {
    const api = `${API_URL_COURSE}getpk/${courseId}/${title}`;
    await axios
      .get(api)
      .then((response) => {
        setPk(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        gap: '24px',
        bgcolor: 'background.default',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'flex-start',
          alignItems: 'center',
        }}
      >
        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
            <InputLabel id="course-select-label">Course</InputLabel>
            <Select
              labelId="course-select-label"
              id="course-select"
              value={course}
              label="Course"
              onChange={handleCourseChange}
            >
              {courses.map((course) => (
                <MenuItem key={course.course_id} value={course.course_id}>
                  {course.course_id}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'flex-start',
          alignItems: 'center',
        }}
      >
        <Box sx={{ minWidth: 250 }}>
          <FormControl fullWidth>
            <InputLabel id="exam-select-label">Exam Title</InputLabel>
            <Select
              labelId="exam-select-label"
              id="exam-select"
              value={examTitle}
              label="Exam Title"
              onChange={handleExamTitleChange}
            >
              {examTitles.map((title) => (
                <MenuItem key={title.exam_title} value={title.exam_title}>
                  {title.exam_title}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
      </Box>

      {course !== '' && examTitle !== '' && (
        <ContinuousIncourseMenu
          incourseType={incourseType}
          handleIncourseTypeChange={handleIncourseTypeChange}
        />
      )}
    </Box>
  );
}
