import { Box, Typography, FormControl, FormLabel, FormHelperText, Select, MenuItem } from "@mui/material";
import React from "react";
import TextField from "@mui/material/TextField";
import MessageSubmitButton from "./MessageSubmitButton";
import InputLabel from "@mui/material/InputLabel";

export default function SubmitRequest() {
  const [subject, setSubject] = React.useState('');

  const handleSubjectChange = (event) => {
    setSubject(event.target.value);
  };



  const [course,setCourse]=React.useState('');
  const handleCourseChange = (event) => {
    setCourse(event.target.value);
  };

  const [examName,setExamination]=React.useState('')
  const handleExaminationChange = (event) =>{
    setExamination(event.target.value)
  };




  return (
    <Box
      component="main"
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "24px",
        flexGrow: 1,
        bgcolor: "background.default",
        p: 3,
        position: "relative",
      }}
    >
      <Typography
        variant="h3"
        sx={{
          textAlign: "left",
          textDecoration: "underline #3d5afe",
        }}
        gutterBottom
      >
        Marks Update Request
      </Typography>

      <Typography
        variant="h6"
        sx={{
          textAlign: "left",
        }}
        gutterBottom
      >
        Explain your problem below and submit request
      </Typography>

      <FormControl
        sx={{
          minWidth: "50vw",
          textAlign:"left"
        }}
        size="small"
      >
        <InputLabel id="subject">Select Subject</InputLabel>
        <Select
          labelId="subject"
          id="subject"
          value={subject}
          label="Select Subject"
          onChange={handleSubjectChange}
        >
          <MenuItem value={1}>Access Request for Semester End Examination Marks</MenuItem>
          <MenuItem value={2}>Access Request for Continuous Internal Evaluation Marks</MenuItem>
        </Select>
      </FormControl>

      <FormControl
        sx={{
          minWidth: "50vw",
          textAlign:"left"
        }}
        size="small"
      >
        <InputLabel id="examName">Select Examination Name</InputLabel>
        <Select
          labelId="examNaem"
          id="examName"
          value={examName}
          label="Select Examination Name"
          onChange={handleExaminationChange}
        >
          <MenuItem value={1}>1st Year 1st Semester B.Sc. 2021</MenuItem>
          <MenuItem value={2}>1st Year 2nd Semester B.Sc. 2021</MenuItem>
        </Select>
      </FormControl>


      
      <FormControl
        sx={{
          minWidth: "50vw",
          textAlign:"left"
        }}
        size="small"
      >
        <InputLabel id="course">Select Course</InputLabel>
        <Select
          labelId="course"
          id="course"
          value={course}
          label="Select Course"
          onChange={handleCourseChange}
        >
          <MenuItem value={1}>CSE 107</MenuItem>
          <MenuItem value={2}>CSE 105</MenuItem>
          <MenuItem value={3}>CSE 205</MenuItem>
        </Select>
      </FormControl>
      

      <Box
        sx={{
          gap: "16px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
        }}
      >
        <TextField
          id="outlined-multiline-static"
          label="Message"
          multiline
          rows={10}
          placeholder="Write you message..."
          size="Normal"
          fullWidth
        />
        <MessageSubmitButton />
      </Box>
    </Box>
  );
}
