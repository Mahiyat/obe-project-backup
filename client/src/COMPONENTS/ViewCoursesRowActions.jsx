import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, IconButton } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';

export default function ViewCoursesRowActions(props) {
  const navigate = useNavigate();

  return (
    <Box>
      <IconButton>
        <VisibilityIcon
          onClick={() =>
            navigate('/course-info', {
              state: {
                course_pk: props.course_pk,
                courseId: props.courseId,
                courseName: props.courseName,
                title: props.title,
              },
            })
          }
        />
      </IconButton>
    </Box>
  );
}
