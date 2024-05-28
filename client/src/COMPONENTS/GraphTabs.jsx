import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import PieChartIcon from '@mui/icons-material/PieChart';
import StackedBarChartIcon from '@mui/icons-material/StackedBarChart';

import StackGraph from './StackGraph';
import PieChart from './PieChart';
import { API_URL_CIE_MARKSHEET, API_URL_SEE_MARKSHEET } from '../constants';
import axios from 'axios';
import GraphTabsReport from './GraphTabsReport';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
// import { Paper, Typography } from '@mui/material';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && children}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function GraphTabs({ labelType, id, type }) {
  console.log(id);
  const [counts, setCounts] = React.useState([]);
  const [showReport, setShowReport] = React.useState(false);
  React.useEffect(() => {
    fetchData();
  }, [labelType]);
  const fetchData = async () => {
    const api =
      type === 'Continuous Internal Evaluation'
        ? `${API_URL_CIE_MARKSHEET}${id}/${labelType.toLowerCase()}`
        : `${API_URL_SEE_MARKSHEET}${id}/${labelType.toLowerCase()}`;
    await axios
      .get(api)
      .then((response) => {
        setCounts(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  };
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box
        sx={{ borderBottom: 1, borderColor: 'divider', alignContent: 'center' }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab icon={<PieChartIcon />} label="Pie Chart" {...a11yProps(0)} />
          <Tab
            icon={<StackedBarChartIcon />}
            label="Stacked Bar Chart"
            {...a11yProps(1)}
          />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <PieChart labelType={labelType} counts={counts} />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <StackGraph labelType={labelType} counts={counts} />
      </CustomTabPanel>
      {/* <GraphTabsReport counts={counts} labelType={labelType} /> */}
      {type === 'Continuous Internal Evaluation' && (
        <Button sx={{ paddingY: '24px' }} onClick={() => setShowReport(true)}>
          Show Comments
        </Button>
      )}
      {showReport && <GraphTabsReport counts={counts} labelType={labelType} />}
    </Box>
  );
}
