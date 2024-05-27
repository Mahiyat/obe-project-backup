import axios from 'axios';
import React from 'react';
import {
  GridRowModes,
  GridToolbarContainer,
  GridToolbarFilterButton,
} from '@mui/x-data-grid';
import { Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

import {
  API_URL_BUTTON,
  API_URL_COURSE,
  API_URL_SEE_MARKSHEET,
} from '../constants';

export default function EditCourseToolBar(props) {
  const { setCourses, setRowModesModel } = props;

  const handleClick = async () => {
    try {
      const response = await axios.post(API_URL_COURSE, {
        course_id: ' ',
        course_name: ' ',
        exam_title: ' ',
      });
      const newRecord = response.data;
      const id = newRecord.id;
      const api = `${API_URL_SEE_MARKSHEET}create/${id}`;
      const buttonsAPI = API_URL_BUTTON;
      await axios.post(api);
      await axios.post(buttonsAPI, {
        course_pk: id,
        type: 'CIE',
      });
      await axios.post(buttonsAPI, {
        course_pk: id,
        type: 'SEE',
      });
      setCourses((oldRows) => [
        ...oldRows,
        {
          id,
          course_id: '',
          course_name: '',
          exam_title: '',
          details: {
            course_pk: id,
            courseId: '',
            courseName: '',
            title: '',
          },
          isNew: true,
        },
      ]);
      setRowModesModel((oldModel) => ({
        ...oldModel,
        [id]: { mode: GridRowModes.Edit, fieldToFocus: 'course_id' },
      }));
    } catch (error) {
      console.error('Error adding record:', error);
    }
  };

  return (
    <GridToolbarContainer>
      <Button color="primary" startIcon={<AddIcon />} onClick={handleClick}>
        Add course
      </Button>
      <GridToolbarFilterButton />
    </GridToolbarContainer>
  );
}
