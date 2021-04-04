import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import TransactionPending from './TransactionPending';
import TransactionAccept from './TransactionAccept';
import TransactionReject from './TransactionReject';
import { Paper } from '@material-ui/core';
import { TransactionContext } from '../../context/TransactionContext';
import { GetUsersContext } from '../../context/GetUsersContext';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`nav-tabpanel-${index}`}
      aria-labelledby={`nav-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `nav-tab-${index}`,
    'aria-controls': `nav-tabpanel-${index}`,
  };
}

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={(event) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function NavTabs() {
  const { employees, getEmployees } = useContext(GetUsersContext);

  const { transactions, getManagerTransactions } = useContext(
    TransactionContext
  );

  useEffect(async () => {
    await getManagerTransactions();
  }, []);

  useEffect(async () => {
    await getEmployees();
  }, []);

  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Paper
        elevation={3}
        style={{ background: '#fff', color: '#1278B8', width: 'auto' }}
      >
        <Tabs
          indicatorColor="primary"
          variant="fullWidth"
          value={value}
          onChange={handleChange}
          aria-label="nav tabs example"
        >
          <Tab label="Pending" {...a11yProps(0)} />
          <Tab label="Accept" {...a11yProps(1)} />
          <Tab label="Reject" {...a11yProps(2)} />
        </Tabs>
      </Paper>
      <TabPanel value={value} index={0}>
        <TransactionPending transactions={transactions} employees={employees} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <TransactionAccept transactions={transactions} employees={employees} />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <TransactionReject transactions={transactions} employees={employees} />
      </TabPanel>
    </div>
  );
}