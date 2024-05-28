import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Box, Typography } from '@mui/material';
import {
  DataGrid,
  GridActionsCellItem,
  GridRowEditStopReasons,
  GridRowModes,
} from '@mui/x-data-grid';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Close';

import { API_URL_COURSE } from '../constants';
import ViewCoursesRowActions from './ViewCoursesRowActions';
import EditCourseToolBar from './EditCourseToolbar';

const pendigCoursesAPI = API_URL_COURSE + 'pending';


export default function PendingCourses() {
  const [courses, setCourses] = useState([]);
  const [rowModesModel, setRowModesModel] = useState({});
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get(pendigCoursesAPI)
      .then((response) => {
        setCourses(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  };

  const getFormattedRows = () =>
    courses.map((course) => ({
      ...course,
      details: {
        course_pk: course.id,
        courseId: course.course_id,
        courseName: course.course_name,
        title: course.exam_title,
      },
    }));

  const handleRowEditStop = (params, event) => {
    if (params.reason === GridRowEditStopReasons.rowFocusOut) {
      event.defaultMuiPrevented = true;
    }
  };

  const handleEditClick = (id) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.Edit } });
  };

  const handleSaveClick = (id) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.View } });
  };

  const handleDeleteClick = (id) => () => {
    processRowDelete(id);
    setCourses(courses.filter((row) => row.id !== id));
  };

  const handleCancelClick = (id) => () => {
    setRowModesModel({
      ...rowModesModel,
      [id]: { mode: GridRowModes.View, ignoreModifications: true },
    });

    const editedRow = courses.find((row) => row.id === id);
    if (editedRow.isNew) {
      setCourses(courses.filter((row) => row.id !== id));
    }
  };

  const processRowUpdate = async (newRow) => {
    const api = API_URL_COURSE + `${newRow.id}`;
    try {
      await axios.put(api, newRow);
      const updatedRowFromServer = newRow;
      setCourses((prevCourses) =>
        prevCourses.map((row) =>
          row.id === updatedRowFromServer.id ? updatedRowFromServer : row
        )
      );
      return updatedRowFromServer;
    } catch (error) {
      console.error('Error updating data:', error);
      throw error;
    }
  };

  const processRowDelete = async (id) => {
    const api = API_URL_COURSE + `${id}`;
    try {
      await axios.delete(api);
    } catch (error) {
      console.error('Error deleting data:', error);
      throw error;
    }
  };

  const handleRowModesModelChange = (newRowModesModel) => {
    setRowModesModel(newRowModesModel);
  };

  const columns = [
    { field: 'course_id', headerName: 'Course ID', width: 90, editable: true },
    {
      field: 'course_name',
      headerName: 'Course Name',
      maxWidth: 700,
      minWidth: 400,
      editable: true,
    },
    {
      field: 'exam_title',
      headerName: 'Exam Title',
      maxWidth: 700,
      minWidth: 400,
      editable: true,
    },
    {
      field: 'details',
      headerName: 'Details',
      width: 200,
      renderCell: (params) => (
        <ViewCoursesRowActions
          course_pk={params.value.course_pk}
          courseId={params.value.courseId}
          courseName={params.value.courseName}
          title={params.value.title}
        />
      ),
    },
    {
      field: 'actions',
      type: 'actions',
      headerName: 'Actions',
      width: 100,
      cellClassName: 'actions',
      getActions: ({ id }) => {
        const isInEditMode = rowModesModel[id]?.mode === GridRowModes.Edit;

        if (isInEditMode) {
          return [
            <GridActionsCellItem
              icon={<SaveIcon />}
              label="Save"
              sx={{
                color: 'primary.main',
              }}
              onClick={handleSaveClick(id)}
            />,
            <GridActionsCellItem
              icon={<CancelIcon />}
              label="Cancel"
              className="textPrimary"
              onClick={handleCancelClick(id)}
              color="inherit"
            />,
          ];
        }

        return [
          <GridActionsCellItem
            icon={<EditIcon />}
            label="Edit"
            className="textPrimary"
            onClick={handleEditClick(id)}
            color="inherit"
          />,
          <GridActionsCellItem
            icon={<DeleteIcon />}
            label="Delete"
            onClick={handleDeleteClick(id)}
            color="inherit"
          />,
        ];
      },
    },
  ];

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
      <Typography variant="h5" gutterBottom>
        Pending Courses
      </Typography>

      <Box
        sx={{
          width: '100%',
        }}
      >
        <DataGrid
          rows={getFormattedRows()}
          columns={columns}
          editMode="row"
          rowModesModel={rowModesModel}
          onRowModesModelChange={handleRowModesModelChange}
          onRowEditStop={handleRowEditStop}
          processRowUpdate={processRowUpdate}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          pageSizeOptions={[5]}
          disableRowSelectionOnClick
          slots={{
            toolbar: EditCourseToolBar,
          }}
          slotProps={{
            toolbar: { setCourses, setRowModesModel },
          }}
        />
      </Box>
    </Box>
  );
}
