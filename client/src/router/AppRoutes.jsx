import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import App from "../App";
import Dashboard from "../COMPONENTS/Dashboard";
import CourseInfo from "../COMPONENTS/CourseInfo";
import CIECategoryMarkSheet from "../COMPONENTS/CIECategoryMarkSheet";
import ViewCourses from "../COMPONENTS/ViewCourses";
import SubmitRequest from "../COMPONENTS/SubmitRequest";
import ResultStatistics from "../COMPONENTS/ResultStatistics";
import FinalEvaluationSheet from "../COMPONENTS/FinalEvaluationSheet";
import ViewCIEMarksheet from "../COMPONENTS/ViewCIEMarksheet";

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
          path: "cie-category-marks",
          element: <CIECategoryMarkSheet authed={true} />,
        },
        {
          path: "view-courses",
          element: <ViewCourses />,
        },
        {
          path: "submit-request",
          element: <SubmitRequest />,
        },
        {
          path: "result-statistics",
          element: <ResultStatistics />,
        },
        {
          path: "final-evaluation-sheet",
          element: <FinalEvaluationSheet />,
        },
        {
          path: "view-cie-marksheet",
          element: <ViewCIEMarksheet />
        },
      ],
    },
  ]);

  return <RouterProvider router={routes} />;
}
