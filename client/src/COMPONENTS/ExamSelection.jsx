import React from 'react';
import { Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material';

import CourseTypeSelection from './CourseTypeSelection';

export default function EvaluationSelection(props) {
  const {
    semesterEndCourseSelection,
    handleSemesterEndCourseSelection,
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
              <MenuItem value={'1st Year 1st Semester 2021'}>
                1st Year 1st Semester 2021
              </MenuItem>
              <MenuItem value={'1st Year 1st Semester 2020'}>
                1st Year 1st Semester 2020
              </MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Box>
      {semesterEndExamTitle !== '' && (
        <CourseTypeSelection
          semesterEndCourseSelection={semesterEndCourseSelection}
          handleSemesterEndCourseSelection={handleSemesterEndCourseSelection}
          semesterEndCourse={semesterEndCourse}
          handleSemesterEndCourse={handleSemesterEndCourse}
          selectedCO={selectedCO}
          handleSelectedCO={handleSelectedCO}
        />
      )}
    </Box>
  );
}
