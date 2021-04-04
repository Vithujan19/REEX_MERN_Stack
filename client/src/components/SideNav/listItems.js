import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import BarChartIcon from '@material-ui/icons/BarChart';
import AssignmentIcon from '@material-ui/icons/Assignment';
import HistoryIcon from '@material-ui/icons/History';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import MobileFriendlyIcon from '@material-ui/icons/MobileFriendly';
import { Link } from "react-router-dom";

export const mainListItems = (
  <div>
    <Link className="nav-link" to="/Dashboard"><span className="sr-only"></span>
      <ListItem >
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItem>
    </Link>
    <Link className="nav-link" to="/Report">
      <ListItem >
        <ListItemIcon>
          <BarChartIcon />
        </ListItemIcon>
        <ListItemText primary="Report" />
      </ListItem>
    </Link>
    <Link className="nav-link" to="/History">
      <ListItem>
        <ListItemIcon>
          <HistoryIcon />
        </ListItemIcon>
        <ListItemText primary="History" />
      </ListItem>
    </Link>
    <Link className="nav-link" to="/NewsPage">
      <ListItem>
        <ListItemIcon>
          <LibraryBooksIcon />
        </ListItemIcon>
        <ListItemText primary="News" />
      </ListItem>
    </Link>
    <Link className="nav-link" to="/Topup">
      <ListItem>
        <ListItemIcon>
          <LibraryBooksIcon />
        </ListItemIcon>
        <ListItemText primary="Topup Request" />
      </ListItem>
    </Link>
    <Link className="nav-link" to="/Transaction">
      <ListItem>
        <ListItemIcon>
          <LibraryBooksIcon />
        </ListItemIcon>
        <ListItemText primary="Transaction Request" />
      </ListItem>
    </Link>
    <Link className="nav-link" to="/Reimbursement">
      <ListItem>
        <ListItemIcon>
          <MobileFriendlyIcon />
        </ListItemIcon>
        <ListItemText primary="Reimbursement" />
      </ListItem>
    </Link>
  </div>
);