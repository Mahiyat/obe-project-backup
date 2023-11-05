import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineSeparator,
} from "@mui/lab";
import TimelineOppositeContent, {
  timelineOppositeContentClasses,
} from "@mui/lab/TimelineOppositeContent";
import { Box, Typography } from "@mui/material";
import React from "react";

export default function RecentActivity() {
  return (
    <Box sx={{gap: "16px", paddingY: "16px"}}>
      <Typography variant="h4" sx={{ textAlign: "left" }} gutterBottom>
        Recent Activities
      </Typography>
      <Timeline
        sx={{
          [`& .${timelineOppositeContentClasses.root}`]: {
            flex: "0",
          },
        }}
      >
        <TimelineItem>
          <TimelineOppositeContent color="textSecondary">
            
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="info" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>Submitted Edit Access Request for Tutorial-1 Marksheet of 1st Year 1st Semester 2021 CSE-107</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent color="textSecondary">
            
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="info" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>Editted Final Evaluation Marksheet of 1st Year 1st Semester 2021 CSE-105</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent color="textSecondary">
            
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="info" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>Submitted Tutorial-1 Marksheet of 1st Year 1st Semester 2021 CSE-107</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent color="textSecondary">
            
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="info" />
          </TimelineSeparator>
          <TimelineContent>Editted Tutorial-1 Marksheet of 1st Year 1st Semester 2021 CSE-107</TimelineContent>
        </TimelineItem>
      </Timeline>
    </Box>
  );
}
