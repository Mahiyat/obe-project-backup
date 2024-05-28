import { Alert, Box, Button, Slide, Snackbar, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useLocation, useNavigate } from 'react-router-dom';

import CustomToolBar from './CustomToolBar';
import { API_URL_CIE_MARKSHEET } from '../constants';
import axios from 'axios';

function SlideTransition(props) {
  return <Slide {...props} direction="up" />;
}

// const columns = [
//   {
//     field: 'id',
//     headerName: 'Sl No',
//     width: 250,
//   },
//   {
//     field: 'roll',
//     headerName: 'Class Roll',
//     width: 350,
//   },
//   {
//     field: 'name',
//     headerName: 'Student Name',
//     width: 400,
//   },
//   {
//     field: 'marks',
//     headerName: 'Marks Obtained',
//     type: 'number',
//     align: 'center',
//     headerAlign: 'center',
//     width: 150,
//   },
// ];

// const rows = [
//   {
//     id: 1,
//     roll: 360,
//     name: 'Snigdha Rahman',
//     marks: 38,
//   },
//   {
//     id: 2,
//     roll: 361,
//     name: 'Mahiyat Tanzim',
//     marks: 38,
//   },
//   {
//     id: 3,
//     roll: 398,
//     name: 'Abrar Hameem',
//     marks: 38,
//   },
// ];

export default function CIECategoryMarkSheet() {
  const location = useLocation();
  const navigate = useNavigate();

  const [marks, setMarks] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    const c_pk = location.state.cie_pk;
    //console.log(location.state.tutorial_pk);
    const numericValue = Number(c_pk);
    const api = `${API_URL_CIE_MARKSHEET}category/show/${numericValue}`;
    axios
      .get(api)
      .then((response) => {
        setMarks(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  };

  const processRowUpdate = (newRow) => {
    const updatedRow = newRow;
    setMarks((prevMarks) =>
      prevMarks.map((mark) => (mark.id === updatedRow.id ? updatedRow : mark))
    );
    return updatedRow;
  };

  const [state, setState] = useState({
    open: false,
    Transition: Slide,
  });
  const [status, setStatus] = useState('');
  const handleStatus = (st) => {
    setStatus(st);
  };

  const handleClick = (Transition) => () => {
    marks.map(async (mark) => {
      const api = `${API_URL_CIE_MARKSHEET}category/${mark.id}`;
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

  const columns = [
    {
      field: 'student_id',
      headerName: 'Class Roll',
      width: 250,
    },
    {
      field: 'name',
      headerName: 'Student Name',
      width: 350,
    },
    {
      field: 'marks_obtained',
      type: 'number',
      headerName: 'Marks Obtained',
      editable: true,
      width: 150,
    },
  ];

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
        {location.state.title} Marks
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
          {/* <Alert
            onClose={handleClose}
            severity="success"
            sx={{ width: '100%' }}
          >
            Marks Saved!
          </Alert> */}
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
