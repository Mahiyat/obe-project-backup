import React from 'react';
import { Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material';

import SingleCourseMenu from './SingleCourseMenu';

export default function CourseTypeSelection(props) {
  // const [type, setType] = React.useState('');

  // const handleTypeChange = (event) => {
  //   setType(event.target.value);
  // };

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
        <Box sx={{ minWidth: 200 }}>
          <FormControl fullWidth>
            <InputLabel id="type-select-label">Select Type</InputLabel>
            <Select
              labelId="type-select-label"
              id="type-select"
              value={semesterEndCourseSelection}
              label="Select Type"
              onChange={handleSemesterEndCourseSelection}
            >
              <MenuItem value={'Single Course'}>Single Course</MenuItem>
              <MenuItem value={'All Completed Courses'}>
                All Completed Courses
              </MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Box>

      {/* {semesterEndCourseSelection === 'All Completed Courses' ? (
        <AllCourseGraph />
      ) : semesterEndCourseSelection === 'Single Course' ? (
        <SingleCourseMenu />
      ) : null} */}
      {semesterEndCourseSelection === 'Single Course' && (
        <SingleCourseMenu
          semesterEndCourse={semesterEndCourse}
          handleSemesterEndCourse={handleSemesterEndCourse}
          semesterEndExamTitle={semesterEndExamTitle}
          handleSemesterEndExamTitle={handleSemesterEndExamTitle}
          selectedCO={selectedCO}
          handleSelectedCO={handleSelectedCO}
        />
      )}
    </Box>
  );
}
