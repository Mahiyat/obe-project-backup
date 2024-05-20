import React from 'react';
import { Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material';

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
  } = props;

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
              <MenuItem value={'CSE-105'}>CSE-105</MenuItem>
              <MenuItem value={'CSE-107'}>CSE-107</MenuItem>
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
        {/* <Box sx={{ minWidth: 250 }}>
          <FormControl fullWidth>
            <InputLabel id="exam-select-label">Exam Title</InputLabel>
            <Select
              labelId="exam-select-label"
              id="exam-select"
              value={semesterEndExamTitle}
              label="Exam Title"
              onChange={handleSemesterEndExamTitle}
            >
              <MenuItem value={'1st Year 1st Semester 2021'}>
                1st Year 1st Semester 2021
              </MenuItem>
              <MenuItem value={'1st Year 1st Semester 2020'}>
                1st Year 1st Semester 2020
              </MenuItem>
            </Select>
          </FormControl>
        </Box> */}
      </Box>

      {/* {semesterEndCourse !== '' && semesterEndExamTitle !== '' && (
        <SingleCourseGraph course={semesterEndCourse} exam={semesterEndExamTitle} />
      )} */}
    </Box>
  );
}
