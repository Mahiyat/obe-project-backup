import {
  GridToolbarContainer,
  GridToolbarExport,
  GridToolbarFilterButton,
} from '@mui/x-data-grid';
import React from 'react';

export default function CustomToolBar() {
  return (
    <GridToolbarContainer>
      <GridToolbarExport
        printOptions={{
          hideFooter: true,
          hideToolbar: true,
          pageStyle: `
            @media print {
              body {
                -webkit-print-color-adjust: exact;
              }
              .MuiDataGrid-root .MuiDataGrid-main {
                width: 100%;
                max-width: 100%;
                overflow: visible;
                transform: scale(0.8);
                transform-origin: top left;
              }
              .MuiDataGrid-root .MuiDataGrid-windowContainer {
                overflow: visible !important;
              }
            }
            @page {
              size: landscape;
              margin: 0mm;  /* this affects the margin in the printer settings */
              overflow: visible;
              scale: custom;
            }
          `,
        }}
      />
      <GridToolbarFilterButton />
    </GridToolbarContainer>
  );
}
