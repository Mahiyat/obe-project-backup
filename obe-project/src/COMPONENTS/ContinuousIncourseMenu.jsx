import { Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import React from 'react';


export default function ContinuousIncourseMenu(props) {
  // const [incourseType, setIncourseType] = React.useState('');

  // const handleIncourseTypeChange = (event) => {
  //   setIncourseType(event.target.value);
  // };

  const {incourseType, handleIncourseTypeChange}=props;

  return (
    <Box sx={{display: 'flex', flexDirection: 'row', gap: '24px'}}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'flex-start',
          alignItems: 'center',
        }}
      >
        <Box sx={{ minWidth: 150 }}>
          <FormControl fullWidth>
            <InputLabel id="incourse-select-label">
              Select Incourse Type
            </InputLabel>
            <Select
              labelId="incourse-select-label"
              id="incourse-select"
              value={incourseType}
              label="Select Incourse Type"
              onChange={handleIncourseTypeChange}
            >
              <MenuItem value={'Tutorial'}>Tutorial</MenuItem>
              <MenuItem value={'Assignment'}>Assignment</MenuItem>
              <MenuItem value={'Curricular'}>
                Curricular/Co-curricular Activities
              </MenuItem>
              <MenuItem value={'Quiz'}>Quiz</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Box>
      {/* {incourseType !== "" && (<GraphTabs incourse={incourseType} />)} */}
    </Box>
  );
}
