import { Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import React from 'react';

import GraphTabs from './GraphTabs';

export default function ContinuousIncourseMenu() {
  const [type, setType] = React.useState('');

  const handleIncourseTypeChange = (event) => {
    setType(event.target.value);
  };

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
              value={type}
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
      {type !== "" && (<GraphTabs incourse={type} />)}
    </Box>
  );
}
