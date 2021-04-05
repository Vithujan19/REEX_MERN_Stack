import React, { useContext } from 'react';
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
import { Link, Redirect } from 'react-router-dom';
import { AuthTokenContext } from '../../context/AuthTokenContext';

function ListItems(props) {
  const currentUser = JSON.parse(localStorage.getItem('user'));
  const { authData } = useContext(AuthTokenContext);
  return (
    <div>
      {currentUser.role === 'employee' ? (
        <div>
          <Link className="nav-link" to="/Dashboard">
            <span className="sr-only"></span>
            <ListItem>
              <ListItemIcon>
                <DashboardIcon />
              </ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItem>
          </Link>
          <Link className="nav-link" to="/NewsPage">
            <ListItem>
              <ListItemIcon>
                <BarChartIcon />
              </ListItemIcon>
              <ListItemText primary="NewsPage" />
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
          <Link className="nav-link" to="/Report">
            <ListItem>
              <ListItemIcon>
                <LibraryBooksIcon />
              </ListItemIcon>
              <ListItemText primary="Report" />
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
      ) : currentUser.role === 'manager' ? (
        <div>
          <Link className="nav-link" to="/Dashboard">
            <span className="sr-only"></span>
            <ListItem>
              <ListItemIcon>
                <DashboardIcon />
              </ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItem>
          </Link>
          <Link className="nav-link" to="/NewsPage">
            <ListItem>
              <ListItemIcon>
                <BarChartIcon />
              </ListItemIcon>
              <ListItemText primary="NewsPage" />
            </ListItem>
          </Link>
          <Link className="nav-link" to="/Topup">
            <span className="sr-only"></span>
            <ListItem>
              <ListItemIcon>
                <DashboardIcon />
              </ListItemIcon>
              <ListItemText primary="Topup" />
            </ListItem>
          </Link>
          <Link className="nav-link" to="/Transaction">
            <span className="sr-only"></span>
            <ListItem>
              <ListItemIcon>
                <DashboardIcon />
              </ListItemIcon>
              <ListItemText primary="Transaction" />
            </ListItem>
          </Link>
          <Link className="nav-link" to="/Report">
            <ListItem>
              <ListItemIcon>
                <LibraryBooksIcon />
              </ListItemIcon>
              <ListItemText primary="Report" />
            </ListItem>
          </Link>
          <Link className="nav-link" to="/Reimbursement">
            <ListItem>
              <ListItemIcon>
                <LibraryBooksIcon />
              </ListItemIcon>
              <ListItemText primary="Reimbursement" />
            </ListItem>
          </Link>
        </div>
      ) : currentUser.role === 'admin' ? (
        <div>
          <Link className="nav-link" to="/Dashboard">
            <span className="sr-only"></span>
            <ListItem>
              <ListItemIcon>
                <DashboardIcon />
              </ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItem>
          </Link>
          <Link className="nav-link" to="/NewsPage">
            <ListItem>
              <ListItemIcon>
                <BarChartIcon />
              </ListItemIcon>
              <ListItemText primary="NewsPage" />
            </ListItem>
          </Link>
          <Link className="nav-link" to="/Staffs">
            <ListItem>
              <ListItemIcon>
                <BarChartIcon />
              </ListItemIcon>
              <ListItemText primary="Staffs" />
            </ListItem>
          </Link>
        </div>
      ) : currentUser.role === null || currentUser.role === '' ? (
        <div>
          <Redirect to={'/login'} />;
        </div>
      ) : (
        <div>
          <p>Please login</p>
        </div>
      )}
    </div>
  );
}
export default ListItems;
