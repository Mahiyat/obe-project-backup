import React from 'react';
import { Alert, Box, Button, Slide, Snackbar } from '@mui/material';

function SlideTransition(props) {
  return <Slide {...props} direction="up" />;
}

export default function MessageSubmitButton() {
  const [state, setState] = React.useState({
    open: false,
    Transition: Slide,
  });

  const handleClick = (Transition) => () => {
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

  return (
    <Box sx={{ width: 'fit-content' }}>
      <Button
        variant="contained"
        color="primary"
        onClick={handleClick(SlideTransition)}
      >
        Submit Request
      </Button>
      <Snackbar
        open={state.open}
        onClose={handleClose}
        TransitionComponent={state.Transition}
        key={state.Transition.name}
        autoHideDuration={1200}
      >
        <Alert
          onClose={handleClose}
          severity="success"
          sx={{ width: '100%' }}
        >
          Message Sent!
        </Alert>
      </Snackbar>
    </Box>
  );
}
