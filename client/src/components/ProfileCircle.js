import React, { useContext } from 'react';
import { Redirect, useHistory,Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { AuthTokenContext } from '../context/AuthTokenContext';
import { Paper } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  typography: {
    padding: theme.spacing(2),
  },
}));

export default function ProfileCircle(props) {
  let history = useHistory();
  const { logout } = useContext(AuthTokenContext);
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  var currentUser = JSON.parse(localStorage.getItem('user'));

  return (
    <div>
      {/* <Button aria-describedby={id} variant="contained" color="none" onClick={handleClick}>
      <AccountCircleIcon />
      </Button> */}
      <AccountCircleIcon onClick={handleClick} />
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <Typography
          style={{ width: 150, padding: 15 }}
          className={classes.typography}
        >
          {/* {currentUser.role===null ? currentUser.role='other' : currentUser.role=currentUser.role} */}

          <p>{currentUser.name}</p>
          <p>{currentUser.role}</p>
          <Button><Link to="/EditProfile" >Edit profile</Link></Button>
          <br />
          <button
            onClick={() => {
              logout();
              history.push('/');
              // localStorage.removeItem('user');
              // localStorage.removeItem('token');
              // props.history.push('/');
            }}
            className="btn btn-primary"
          >
            Logout
          </button>
        </Typography>
      </Popover>
    </div>
  );
}
