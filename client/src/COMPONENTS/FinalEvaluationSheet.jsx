import React, { useEffect, useState } from 'react';
import { Alert, Box, Button, Slide, Snackbar, Typography } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { useLocation, useNavigate } from 'react-router-dom';
import CustomToolBar from './CustomToolBar';
import { API_URL_SEE_MARKSHEET } from '../constants';
import axios from 'axios';

function SlideTransition(props) {
  return <Slide {...props} direction="up" />;
}

export default function FinalEvaluationSheet() {
  const navigate = useNavigate();
  const location = useLocation();
  //console.log(location.state);

  const [marks, setMarks] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    //console.log(location.state.course_pk);
    const course_pk = location.state.course_pk;
    const numericValue = Number(course_pk.course_pk);
    //console.log(typeof course_pk);
    const api = `${API_URL_SEE_MARKSHEET}show/${numericValue}`;
    axios
      .get(api)
      .then((response) => {
        setMarks(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  };

  const calculateTotalMarks = (mark) => {
    const marks_obtained =
      mark.clo1 + mark.clo2 + mark.clo3 + mark.clo4 + mark.clo5;
    console.log(marks_obtained);
    return marks_obtained;
  };

  const processRowUpdate = (newRow) => {
    const updatedRow = {
      ...newRow,
      marks_obtained: calculateTotalMarks(newRow),
    };
    setMarks((prevMarks) =>
      prevMarks.map((mark) => (mark.id === updatedRow.id ? updatedRow : mark))
    );
    return updatedRow;
  };

  const columns = [
    { field: 'exam_roll', headerName: 'Exam Roll', width: 300 },
    {
      field: 'clo1',
      headerName: 'CLO1 (out of 12)',
      type: 'number',
      width: 120,
      editable: true,
      align: 'center',
      headerAlign: 'center',
    },
    {
      field: 'clo2',
      headerName: 'CLO2 (out of 12)',
      type: 'number',
      width: 120,
      editable: true,
      align: 'center',
      headerAlign: 'center',
    },

    {
      field: 'clo3',
      headerName: 'CLO3 (out of 12)',
      type: 'number',
      width: 120,
      editable: true,
      align: 'center',
      headerAlign: 'center',
    },
    {
      field: 'clo4',
      headerName: 'CLO4 (out of 12)',
      type: 'number',
      width: 120,
      editable: true,
      align: 'center',
      headerAlign: 'center',
    },
    {
      field: 'clo5',
      headerName: 'CLO5 (out of 12)',
      type: 'number',
      width: 120,
      editable: true,
      align: 'center',
      headerAlign: 'center',
    },
    {
      field: 'marks_obtained',
      headerName: 'Total Marks  (out of 60)',
      type: 'number',
      width: 120,
      align: 'center',
      headerAlign: 'center',
    },
  ];

  const [state, setState] = React.useState({
    open: false,
    Transition: Slide,
  });
  const [status, setStatus] = useState('');
  const handleStatus = (st) => {
    setStatus(st);
  };

  const handleClick = (Transition) => () => {
    marks.map(async (mark) => {
      const api = API_URL_SEE_MARKSHEET + `${mark.id}`;
      try {
        await axios.put(api, mark);
        handleStatus('okay');
      } catch (error) {
        handleStatus('not okay');
        console.error('Error updating marksheet:', error);
        throw error;
      }
    });
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
    <Box
      component="main"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '24px',
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
        Semester End Examination Sheet
      </Typography>

      <Box>
        <DataGrid
          rows={marks}
          columns={columns}
          editMode="cell"
          processRowUpdate={processRowUpdate}
          slots={{ toolbar: CustomToolBar }}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 100 },
            },
          }}
          pageSizeOptions={[100]}
          disableRowSelectionOnClick
        />
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'flex-start',
          position: 'relative',
          paddingY: '16px',
          gap: '16px',
        }}
      >
        <Button variant="contained" onClick={() => navigate(-1)}>
          Back
        </Button>
        <Button variant="contained" onClick={handleClick(SlideTransition)}>
          Save
        </Button>
        <Snackbar
          open={state.open}
          onClose={handleClose}
          TransitionComponent={state.Transition}
          key={state.Transition.name}
          autoHideDuration={1200}
        >
          {status === 'okay' ? (
            <Alert
              onClose={handleClose}
              severity="success"
              sx={{ width: '100%' }}
            >
              Marks Saved!
            </Alert>
          ) : (
            status === 'not okay' && (
              <Alert
                onClose={handleClose}
                severity="error"
                sx={{ width: '100%' }}
              >
                Something Went Wrong:!
              </Alert>
            )
          )}
        </Snackbar>
      </Box>
    </Box>
  );
}
