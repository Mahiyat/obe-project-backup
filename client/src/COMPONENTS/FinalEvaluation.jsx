import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Card, Typography } from '@mui/material';

import SubmitMarksButton from './SubmitMarksButton';

export default function FinalEvaluation(course_pk) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        paddingY: '16px',
        gap: '16px',
      }}
    >
      <Typography variant="h5" sx={{ textAlign: 'left' }} gutterBottom>
        Semester End Examination
      </Typography>
      <Box>
        <Typography variant="body1" sx={{ textAlign: 'left' }} gutterBottom>
          For details click{' '}
          <Link to="/final-evaluation-sheet" state={{ course_pk: course_pk }}>
            here
          </Link>
        </Typography>
        <SubmitMarksButton type="Final" />
      </Box>
    </Box>
  );
}
