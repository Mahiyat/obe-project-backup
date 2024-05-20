import React from 'react';
import { Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material';

import ExamSelection from './ExamSelection';
import ContinuousIncourseSelection from './ContinuousIncourseSelection';

export default function EvaluationSelection(props) {
  // const [type, setType] = React.useState('');

  // const handleEvaluationTypeChange = (event) => {
  //   setType(event.target.value);
  // };
  const {
    type,
    handleEvaluationTypeChange,
    course,
    handleCourseChange,
    examTitle,
    handleExamTitleChange,
    incourseType,
    handleIncourseTypeChange,
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
        <Box sx={{ minWidth: 240 }}>
          <FormControl fullWidth>
            <InputLabel id="evaluation-select-label">
              Select Evaluation Type
            </InputLabel>
            <Select
              labelId="evaluation-select-label"
              id="evaluation-select"
              value={type}
              label="Select Evaluation Type"
              onChange={handleEvaluationTypeChange}
            >
              <MenuItem value={'Continuous Internal Evaluation'}>
                Continuous Internal Evaluation
              </MenuItem>
              <MenuItem value={'Semester End Examination'}>
                Semester End Examination
              </MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Box>

      {type === 'Semester End Examination' ? (
        <ExamSelection
          semesterEndCourseSelection={semesterEndCourseSelection}
          handleSemesterEndCourseSelection={handleSemesterEndCourseSelection}
          semesterEndCourse={semesterEndCourse}
          handleSemesterEndCourse={handleSemesterEndCourse}
          semesterEndExamTitle={semesterEndExamTitle}
          handleSemesterEndExamTitle={handleSemesterEndExamTitle}
          selectedCO={selectedCO}
          handleSelectedCO={handleSelectedCO}
        />
      ) : type === 'Continuous Internal Evaluation' ? (
        <ContinuousIncourseSelection
          course={course}
          handleCourseChange={handleCourseChange}
          examTitle={examTitle}
          handleExamTitleChange={handleExamTitleChange}
          incourseType={incourseType}
          handleIncourseTypeChange={handleIncourseTypeChange}
        />
      ) : null}
    </Box>
  );
}
