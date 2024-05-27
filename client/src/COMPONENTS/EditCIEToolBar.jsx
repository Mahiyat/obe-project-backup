import axios from 'axios';
import React from 'react';
import { API_URL_CIE, API_URL_CIE_MARKSHEET } from '../constants';
import { GridRowModes, GridToolbarContainer, GridToolbarFilterButton } from '@mui/x-data-grid';
import { Button } from '@mui/material';
import AddIcon from "@mui/icons-material/Add";


export default function EditCIEToolBar(props) {
  const { c_pk, setCIEs, setRowModesModel } = props;
  //console.log(c_pk);

  const handleClick = async () => {
    try {
      const response = await axios.post(API_URL_CIE, {
        course_pk: c_pk,
        type: ' ',
        name: ' ',
      });
      const newRecord = response.data;
      const id = newRecord.id;
      const api = `${API_URL_CIE_MARKSHEET}category/create/${id}`;
      await axios.post(api);
      setCIEs((oldRows) => [
        ...oldRows,
        {
          id,
          course_pk: c_pk,
          name: '',
          details: {
            cie_pk: id,
            title: '',
          },
          isNew: true,
        },
      ]);
      setRowModesModel((oldModel) => ({
        ...oldModel,
        [id]: { mode: GridRowModes.Edit, fieldToFocus: 'exam' },
      }));
    } catch (error) {
      console.error('Error adding record:', error);
    }
  };

  return (
    <GridToolbarContainer>
      <Button color="primary" startIcon={<AddIcon />} onClick={handleClick}>
        Add exam
      </Button>
      <GridToolbarFilterButton />
    </GridToolbarContainer>
  );
}
