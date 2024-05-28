import { Paper, Typography } from '@mui/material';
import axios from 'axios';
import React, { useState, useEffect, useMemo } from 'react';

export default function GraphTabsReport({ counts, labelType }) {
  const [report, setReport] = useState('');

  useEffect(() => {
    if (counts && labelType) {
      fetchData();
    }
  }, [counts, labelType]);

  const fetchData = async () => {
    const api = 'http://localhost:11434/api/generate';
    const payload = {
      model: 'llama3',
      prompt: `Comment on the data ${counts} of the students in ${labelType} exam. Also give your opinion of any improvements if needed.`,
      stream: false,
      options: {
        temperature: 1,
      },
    };

    try {
      const response = await axios.post(api, payload);
      setReport(response.data['response']);
    } catch (error) {
      console.error(
        'Error fetching data:',
        error.response ? error.response.data : error.message
      );
      setReport('Failed to fetch report.');
    }
  };

  const memoizedReport = useMemo(() => report, [report]);
  console.log(memoizedReport);

  return (
    <Paper sx={{ paddingY: '24px' }}>
      <Typography
        variant="body1"
        style={{ fontSize: '16px', color: 'black', textAlign: 'justify' }}
      >
        {memoizedReport}
      </Typography>
    </Paper>
  );
}
