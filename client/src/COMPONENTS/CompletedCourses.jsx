import React, { useEffect, useState } from 'react'
import axios from "axios";
import { Box, Typography } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';


import ViewCoursesRowActions from './ViewCoursesRowActions';
import { API_URL_COURSE } from '../constants';

const completedCourseAPI = API_URL_COURSE + "completed";

export default function CompletedCourses() {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get(completedCourseAPI)
      .then((response) => {
        setCourses(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
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

    const columns = [
      { field: "course_id", headerName: "Course ID",maxWidth:"250" },
      {
        field: "course_name",
        headerName: "Course Name",
        maxWidth:700,
        minWidth : 400,
        
    
      },
      {
        field: "exam_title",
        headerName: "Exam Title",
        maxWidth:700,
        minWidth : 400
      },
    
      {
        field: "details",
        headerName: "Details",
        renderCell: (params) => (
          <ViewCoursesRowActions
          course_pk={params.value.course_pk}
          courseId={params.value.courseId}
          courseName={params.value.courseName}
          title={params.value.title}
          />
        ),
      },
    ];

  return (
    <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          paddingY: "16px",
          gap: "16px",
        }}
      >
        <Typography variant="h5" gutterBottom>
          Completed Courses
        </Typography>
        <Box sx={{
          width: "100%",
        }}>
          <DataGrid
            rows={getFormattedRows()}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 10,
                },
              },
            }}
            pageSizeOptions={[10]}
            // checkboxSelection
            disableRowSelectionOnClick
          />

        </Box>

      </Box>
  )
}
