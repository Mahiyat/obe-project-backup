import React, { useEffect, useState } from 'react';
import { Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { API_URL_COURSE } from '../constants';
import axios from 'axios';

export default function SingleCourseMenu(props) {
  // const [course, setCourse] = React.useState('');
  // const [examTitle, setExamTitle] = React.useState('');

  // const handleCourseChange = (event) => {
  //   setCourse(event.target.value);
  // };

  // const handleExamTitleChange = (event) => {
  //   setExamTitle(event.target.value);
  // };

  const {
    semesterEndCourse,
    handleSemesterEndCourse,
    semesterEndExamTitle,
    handleSemesterEndExamTitle,
    selectedCO,
    handleSelectedCO,
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

  const [examTitles, setExamTitles] = useState([]);
  useEffect(() => {
    if (semesterEndCourse) {
      fetchExamTitleData(semesterEndCourse);
    }
  }, [semesterEndCourse]);
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
    if(semesterEndCourse!=='' && semesterEndExamTitle!==''){
      fetchPkData(semesterEndCourse, semesterEndExamTitle);
    }
  }, [semesterEndCourse, semesterEndExamTitle]);
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
              value={semesterEndCourse}
              label="Course"
              onChange={handleSemesterEndCourse}
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
              value={semesterEndExamTitle}
              label="Exam Title"
              onChange={handleSemesterEndExamTitle}
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

      {/* {semesterEndCourse !== '' && semesterEndExamTitle !== '' && (
        <SingleCourseGraph course={semesterEndCourse} exam={semesterEndExamTitle} />
      )} */}
    </Box>
  );
}
