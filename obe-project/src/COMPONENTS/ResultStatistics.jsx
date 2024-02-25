import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

import EvaluationSelection from './EvaluationSelection';
import GraphTabs from './GraphTabs';
import AllCourseGraph from './AllCourseGraph';
import SingleCourseGraph from './SingleCourseGraph';

export default function ResultStatistics() {
  const [type, setType] = React.useState('');
  const [course, setCourse] = React.useState('');
  const [examTitle, setExamTitle] = React.useState('');
  const [incourseType, setIncourseType] = React.useState('');
  const [semesterEndCourseSelection, setSemesterEndCourseSelection] =
    React.useState('');
  const [semesterEndCourse, setSemesterEndCourse] = React.useState('');
  const [semesterEndExamTitle, setSemesterEndExamTitle] = React.useState('');

  const handleEvaluationTypeChange = (event) => {
    setType(event.target.value);
  };

  const handleCourseChange = (event) => {
    setCourse(event.target.value);
  };

  const handleExamTitleChange = (event) => {
    setExamTitle(event.target.value);
  };

  const handleIncourseTypeChange = (event) => {
    setIncourseType(event.target.value);
  };

  const handleSemesterEndCourseSelection = (event) => {
    setSemesterEndCourseSelection(event.target.value);
  };

  const handleSemesterEndCourse = (event) => {
    setSemesterEndCourse(event.target.value);
  };

  const handleSemesterEndExamTitle = (event) => {
    setSemesterEndExamTitle(event.target.value);
  };

  return (
    <Box
      component="main"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '4px',
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
        Result Statistics
      </Typography>
      <Stack spacing={4}>
        <EvaluationSelection
          type={type}
          handleEvaluationTypeChange={handleEvaluationTypeChange}
          course={course}
          handleCourseChange={handleCourseChange}
          examTitle={examTitle}
          handleExamTitleChange={handleExamTitleChange}
          incourseType={incourseType}
          handleIncourseTypeChange={handleIncourseTypeChange}
          semesterEndCourseSelection={semesterEndCourseSelection}
          handleSemesterEndCourseSelection={handleSemesterEndCourseSelection}
          semesterEndCourse={semesterEndCourse}
          handleSemesterEndCourse={handleSemesterEndCourse}
          semesterEndExamTitle={semesterEndExamTitle}
          handleSemesterEndExamTitle={handleSemesterEndExamTitle}
        />
        {incourseType !== '' && <GraphTabs incourse={incourseType} />}
        {semesterEndCourseSelection === 'All Completed Courses' && <AllCourseGraph />}
        {semesterEndCourse !== '' && semesterEndExamTitle !== '' && (
        <SingleCourseGraph course={semesterEndCourse} exam={semesterEndExamTitle} />
      )}
      </Stack>
    </Box>
  );
}
