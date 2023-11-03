import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import App from "../App";
import Dashboard from "../COMPONENTS/Dashboard";
import CourseInfo from "../COMPONENTS/CourseInfo";
import TutorialMarkSheet from "../COMPONENTS/TutorialMarkSheet";
import ViewCourses from "../COMPONENTS/ViewCourses";
import SubmitRequest from "../COMPONENTS/SubmitRequest";
import ResultStatistics from "../COMPONENTS/ResultStatistics";

export default function AppRoutes() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        { index: true, element: <Dashboard /> },
        {
          path: "course-info",
          element: <CourseInfo />,
        },
        {
          path: "tutorial-marks",
          element: <TutorialMarkSheet authed={true} />,
        },
        {
          path: "view-courses",
          element: <ViewCourses />
        },
        {
          path: "submit-request",
          element: <SubmitRequest />
        },
        {
          path: "result-statistics",
          element: <ResultStatistics />
        }
      ],
    },
  ]);

  return <RouterProvider router={routes} />;
}
