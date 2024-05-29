import { Paper, Typography, CircularProgress } from '@mui/material';
import axios from 'axios';
import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { MuiMarkdown } from 'mui-markdown';

export default function GraphTabsReport({ counts, labelType }) {
  const performance = useMemo(
    () => [
      counts['80_100'],
      counts['70_79'],
      counts['60_69'],
      counts['50_59'],
      counts['40_49'],
      counts['0_39'],
    ],
    [counts]
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
      prompt: `Comment on the data ${performance} which is the overall performance of 54 students in the ranges 80%-100%, 70%-79%, 60%-69%, 50%-59%, 40%-49%, and less than 40% respectively in a course in ${labelType} exam. Also give your opinion of any improvements if needed.`,
      stream: false,
      options: {
        temperature: 0.7,
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
  }, [performance, labelType]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <Paper sx={{ paddingY: '24px' }}>
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
