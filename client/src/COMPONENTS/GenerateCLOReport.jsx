import { CircularProgress, Paper, Typography } from '@mui/material';
import MuiMarkdown from 'mui-markdown';
import React, { useCallback, useEffect, useMemo, useState } from 'react';

export default function GenerateCLOReport({ course, exam, type, stats }) {
  console.log(stats);
  const performance = useMemo(
    () => [
      stats['clo1'],
      stats['clo2'],
      stats['clo3'],
      stats['clo4'],
      stats['clo5'],
    ],
    [stats]
  );

  const [report, setReport] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError('');
    const api = 'http://localhost:11434/api/generate';
    const payload = {
      model: 'llama3',
      prompt: `Comment on the data ${performance} which is the overall performance (in percentage) of 54 students in ${type} in the CLOs (Course Learning Outcomes) CLO1 (Remember), CLO2 (Understand), CLO3 (Apply), CLO4 (Analyze), and CLO5 (Evaluate) respectively, and less than 40% respectively in a course with course code ${course} and exam title ${exam}. Also give your opinion of any improvements if needed.`,
      stream: false,
      options: {
        temperature: 0.5,
      },
    };

    try {
      const response = await fetch(api, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setReport(data.response);
    } catch (error) {
      console.error('Error fetching data:', error.message);
      setError('Failed to fetch report.');
    } finally {
      setLoading(false);
    }
  }, [performance, course, exam, type]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  console.log(report);

  return (
    <Paper sx={{ paddingY: '24px' }} elevation={8}>
      {loading ? (
        <CircularProgress />
      ) : error ? (
        <Typography
          variant="body1"
          style={{ fontSize: '16px', color: 'red', textAlign: 'justify' }}
        >
          {error}
        </Typography>
      ) : (
        <Typography
          variant="body1"
          style={{ fontSize: '16px', color: 'black', textAlign: 'justify' }}
        >
          <MuiMarkdown>{report}</MuiMarkdown>
        </Typography>
      )}
    </Paper>
  );
}
