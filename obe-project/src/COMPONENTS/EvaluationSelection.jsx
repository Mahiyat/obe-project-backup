import React from 'react';
import { Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material';

import CourseTypeSelection from './CourseTypeSelection';
import ContinuousIncourseSelection from './ContinuousIncourseSelection';

export default function EvaluationSelection() {
  const [type, setType] = React.useState('');

  const handleEvaluationTypeChange = (event) => {
    setType(event.target.value);
  };

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
              <MenuItem value={'Continuous Incourse Evaluation'}>
                Continuous Incourse Evaluation
              </MenuItem>
              <MenuItem value={'Semester End Evaluation'}>
                Semester End Evaluation
              </MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Box>

      {type === 'Semester End Evaluation' ? (
        <CourseTypeSelection />
      ) : type === 'Continuous Incourse Evaluation' ? (
        <ContinuousIncourseSelection />
      ) : null}
    </Box>
  );
}
