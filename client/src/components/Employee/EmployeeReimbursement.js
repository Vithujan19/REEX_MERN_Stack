import React, { useState, useContext, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Sidenav from '../SideNav/Sidenav';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Footer from '../Footer/Footer';
import { ReimbursementContext } from '../../context/ReimbursementContext';
import { GetUsersContext } from '../../context/GetUsersContext';
import { TransactionContext } from '../../context/TransactionContext';
import { BankDetailsContext } from '../../context/BankDetailsContext';
import EmployeeReimbursementData from './EmployeeReimbursementData';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },
}));

export default function EmployeeReimbursement() {
  const classes = useStyles();

  const { transactions, getEmployeeTransactions } = useContext(
    TransactionContext
  );

  const { bankDetails, getUserBankDetails } = useContext(BankDetailsContext);

  const { getManagers, managers } = useContext(GetUsersContext);

  const {
    reimbursements,
    getEmployeeReimbursement,
    getManagerReimbursement,
  } = useContext(ReimbursementContext);

  useEffect(async () => {
    await getUserBankDetails();
  }, []);

  useEffect(async () => {
    await getEmployeeTransactions();
  }, []);

  useEffect(async () => {
    await getEmployeeReimbursement();
  }, []);

  useEffect(async () => {
    await getManagers();
  }, []);

  return (
    <div className={classes.root}>
      <Sidenav />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <EmployeeReimbursementData
            managers={managers}
            reimbursements={reimbursements}
            transactions={transactions}
            bankDetails={bankDetails}
          />
          <Box pt={4}>
            <Footer />
          </Box>
        </Container>
      </main>
    </div>
  );
}
