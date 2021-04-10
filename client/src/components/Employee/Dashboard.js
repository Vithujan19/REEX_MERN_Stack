import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Sidenav from '../SideNav/Sidenav';
import AddExpense from './AddExpense';
import Topup from './Topup';
import Copyright from '../Footer/Footer';
import TotalExpenses from './TotalExpenses';
import TotalTopup from './TotalTopup';
import TotalReimbursement from './TotalReimbursement';
import NewsButton from '../Admin/NewsButton';
import CreateUserButton from '../Admin/CreateUserButton';
import { TransactionContext } from '../../context/TransactionContext';
import { TopupContext } from '../../context/TopupContext';
import { ReimbursementContext } from '../../context/ReimbursementContext';
import HowToVoteIcon from '@material-ui/icons/HowToVote';
import { Button } from 'reactstrap';
import CachedIcon from '@material-ui/icons/Cached';
import TotalEmployee from '../Manager/TotalEmployee';
import TotalStaffs from '../Admin/TotalStaffs';

const drawerWidth = '240';

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
    height: 250,
  },
}));

export default function Dashboard() {
  const { transactions, getEmployeeTransactions } = useContext(
    TransactionContext
  );

  const { reimbursements, getEmployeeReimbursement } = useContext(
    ReimbursementContext
  );

  const { topups, getEmployeeTopups } = useContext(TopupContext);

  useEffect(async () => {
    await getEmployeeTransactions();
  }, []);

  useEffect(async () => {
    await getEmployeeReimbursement();
  }, []);

  useEffect(async () => {
    await getEmployeeTopups();
  }, []);

  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  var currentUser = JSON.parse(localStorage.getItem('user'));
  return (
    <div className={classes.root}>
      <Sidenav />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />

        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={4} lg={4}>
              <Paper className={fixedHeightPaper} elevation={4}>
                  <TotalExpenses transactions={transactions} />
              </Paper>
            </Grid>
            <Grid item xs={12} md={4} lg={4}>
              <Paper className={fixedHeightPaper} elevation={6}>              
                  <TotalTopup topups={topups} />
              </Paper>
            </Grid>
            <Grid item xs={12} md={4} lg={4}>
              <Paper className={fixedHeightPaper} elevation={4}>
                  <TotalReimbursement reimbursements={reimbursements} />
              </Paper>
            </Grid>
            <Grid item xs={12} md={4} lg={6}>
              <Paper className={classes.paper} elevation={4}>
                {currentUser.role === 'employee' || currentUser.role === 'manager'  ? (
                  <TotalEmployee />
                ) : currentUser.role === 'admin' ? (
                  <TotalStaffs />
                ) : null}
              </Paper>
            </Grid>
            <Grid item xs={12} md={4} lg={3}>
              <Paper className={classes.paper} elevation={4}>
                {currentUser.role === 'employee' ? (
                  <AddExpense />
                ) : currentUser.role === 'manager' ? (
                  <Button style={{ backgroundColor: '#fff', color: '#1278B8' }}>
                    <Link
                      style={{ textDecoration: 'none' }}
                      to="/Reimbursement"
                    >
                      <CachedIcon style={{ width: 230, height: 100 }} />
                      <br />
                      Check Reimbursement Requests
                    </Link>
                  </Button>
                ) : currentUser.role === 'admin' ? (
                  <CreateUserButton />
                ) : null}
              </Paper>
            </Grid>
            <Grid item xs={12} md={4} lg={3}>
              <Paper className={classes.paper} elevation={4}>
                {currentUser.role === 'employee' ? (
                  <Topup />
                ) : currentUser.role === 'manager' ? (
                  <Button style={{ backgroundColor: '#fff', color: '#1278B8' }}>
                    <Link style={{ textDecoration: 'none' }} to="/Topup">
                      <HowToVoteIcon style={{ width: 230, height: 100 }} />
                      <br />
                      Check Topup
                      <br /> Requests
                    </Link>
                  </Button>
                ) : currentUser.role === 'admin' ? (
                  <NewsButton />
                ) : null}
              </Paper>
            </Grid>
          </Grid>

          <Box pt={4}>
            <Copyright />
          </Box>
        </Container>
      </main>
    </div>
  );
}
