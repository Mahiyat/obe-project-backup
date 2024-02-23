import React from 'react';
import { Box, Typography } from '@mui/material';

import EvaluationSelection from './EvaluationSelection';

export default function ResultStatistics() {
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
      <EvaluationSelection />
    </Box>
  );
}
