import { Box, Button, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { API_URL_CIE_MARKSHEET } from '../constants';
import axios from 'axios';
import { DataGrid } from '@mui/x-data-grid';
import CustomToolBar from './CustomToolBar';

export default function ViewCIEMarksheet() {
  const navigate = useNavigate();
  const location = useLocation();
  const [marks, setMarks] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    //console.log(location.state.course_pk);
    const course_pk = location.state.course_pk;
    const numericValue = Number(course_pk.course_pk);
    //console.log(typeof course_pk);
    const api = `${API_URL_CIE_MARKSHEET}show/${numericValue}`;
    axios
      .get(api)
      .then((response) => {
        setMarks(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  };

  const columns = [
    {
      field: 'student_id',
      headerName: 'Class Roll',
      width: 250,
    },
    {
      field: 'tutorial',
      headerName: 'Tutorial (out of 20)',
      width: 150,
    },
    {
      field: 'assignment',
      headerName: 'Assignment (out of 10)',
      width: 200,
    },
    {
      field: 'curricular',
      headerName: 'Curricular/Co-curricular Activities (out of 5)',
      width: 300,
    },
    {
      field: 'quiz',
      headerName: 'Quiz (out of 5)',
      width: 150,
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
        Continuous Internal Evaluation Sheet
      </Typography>
      <Box>
        <DataGrid
          rows={marks}
          columns={columns}
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
      <Button variant="contained" onClick={() => navigate(-1)}>
        Back
      </Button>
    </Box>
  );
}
