import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Box } from '@mui/material';
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

import { API_URL_CIE } from '../constants';
import CIEMarksViewActions from './CIEMarksViewActions';
import EditCIEToolBar from './EditCIEToolBar';

// const columns = [
//   {
//     field: 'id',
//     headerName: 'Sl No',
//     width: 250,
//   },
//   {
//     field: 'title',
//     headerName: 'Exam Name',
//     width: 600,
//   },
//   {
//     field: 'actions',
//     headerName: 'Details',
//     headerAlign: 'right',
//     align: 'right',
//     width: 150,
//     renderCell: (params) => (
//       <TutorialMarksViewActions title={params.value.title} />
//     ),
//   },
// ];

// const rows = [
//   {
//     id: 1,
//     title: 'Tutorial 1',
//     actions: { id: 1, title: 'Tutorial 1' },
//   },
//   {
//     id: 2,
//     title: 'Tutorial 2',
//     actions: { id: 2, title: 'Tutorial 2' },
//   },
//   {
//     id: 3,
//     title: 'Tutorial 3',
//     actions: { id: 3, title: 'Tutorial 3' },
//   },
// ];

export default function TutorialInfoTable(course_pk) {
  const coursePk = course_pk.course_pk;
  const c_pk = Number(coursePk.course_pk);
  const [cies, setCIEs] = useState([]);
  const [rowModesModel, setRowModesModel] = useState({});

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    const api = `${API_URL_CIE}show/${c_pk}/`;
    //console.log(api);
    axios
      .get(api)
      .then((response) => {
        setCIEs(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  };

  const getFormattedRows = () =>
    cies.map((cie) => ({
      ...cie,
      details: {
        cie_pk: cie.id,
        title: cie.name,
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
    setCIEs(cies.filter((row) => row.id !== id));
  };

  const handleCancelClick = (id) => () => {
    setRowModesModel({
      ...rowModesModel,
      [id]: { mode: GridRowModes.View, ignoreModifications: true },
    });

    const editedRow = cies.find((row) => row.id === id);
    if (editedRow.isNew) {
      setCIEs(cies.filter((row) => row.id !== id));
    }
  };

  const processRowUpdate = async (newRow) => {
    const api = API_URL_CIE + `${newRow.id}`;
    try {
      const updatedRow = newRow;
      if (newRow.name.search('Tutorial') !== -1) {
        newRow.type = 'tutorial';
      } else if (newRow.name.search('Assignment') !== -1) {
        newRow.type = 'assignment';
      } else if (newRow.name.search('Curricular') !== -1) {
        newRow.type = 'curricular';
      } else if (newRow.name.search('Quiz') !== -1) {
        newRow.type = 'quiz';
      }
      await axios.put(api, newRow);
      setCIEs((prevIncourses) =>
        prevIncourses.map((row) =>
          row.id === updatedRow.id ? updatedRow : row
        )
      );
      return updatedRow;
    } catch (error) {
      console.error('Error updating data:', error);
      throw error;
    }
  };

  const processRowDelete = async (id) => {
    const api = API_URL_CIE + `${id}`;
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
    {
      field: 'name',
      headerName: 'Exam Name',
      width: 250,
      editable: true,
    },
    {
      field: 'details',
      headerName: 'Details',
      width: 200,
      renderCell: (params) => (
        <CIEMarksViewActions
          cie_pk={params.value.cie_pk}
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
    <Box>
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
        // checkboxSelection
        disableRowSelectionOnClick
        slots={{
          toolbar: EditCIEToolBar,
        }}
        slotProps={{
          toolbar: { c_pk, setCIEs, setRowModesModel },
        }}
      />
    </Box>
  );
}
