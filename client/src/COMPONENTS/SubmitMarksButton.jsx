import { Alert, Box, Button, Slide, Snackbar, Typography } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { API_URL_BUTTON, API_URL_COURSE } from '../constants';
import axios from 'axios';

function SlideTransition(props) {
  return <Slide {...props} direction="up" />;
}

export default function SubmitMarksButton({ type, course_pk }) {
  console.log(course_pk);
  const [state, setState] = React.useState({
    open: false,
    Transition: Slide,
  });

  const handleClick = (Transition) => async () => {
    const numericValue = Number(course_pk.course_pk);
    console.log(numericValue);
    const api = `${API_URL_BUTTON}${numericValue}/${type}`;
    try {
      await axios.put(api, {
        click_status: true,
      });
      if (type === 'SEE') {
        const courseAPI = `${API_URL_COURSE}status/${numericValue}`;
        await axios.put(courseAPI, {
          completed_status: true,
        });
      }
    } catch (error) {
      console.error('Error adding record:', error);
    }

    setState({
      open: true,
      Transition,
    });
  };

  const handleClose = () => {
    setState({
      ...state,
      open: false,
    });
  };

  const navigate = useNavigate();

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingY: '16px',
        gap: '16px',
      }}
    >
      {type === 'CIE' && (
        <Button
          variant="contained"
          color="primary"
          onClick={() =>
            navigate('/view-cie-marksheet', { state: { course_pk: course_pk } })
          }
        >
          View Marksheet
        </Button>
      )}
      <Button
        variant="contained"
        color="primary"
        onClick={handleClick(SlideTransition)}
      >
        Submit Marks
      </Button>
      <Snackbar
        open={state.open}
        onClose={handleClose}
        TransitionComponent={state.Transition}
        key={state.Transition.name}
        autoHideDuration={1200}
      >
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Marks Submitted!
        </Alert>
      </Snackbar>
      <Typography
        variant="body2"
        sx={{ color: 'red', textAlign: 'left' }}
        gutterBottom
      >
        N.B. Marks once submitted cannot be undone
      </Typography>
    </Box>
  );
}
