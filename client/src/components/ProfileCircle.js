import React from 'react';
import {Redirect} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { Paper } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  typography: {
    padding: theme.spacing(2),
  },
}));

export default function ProfileCircle(props) {
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
    <div >
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
        <Typography style={{width:150, padding: 15}} className={classes.typography}>
          {/* {currentUser.role===null ? currentUser.role='other' : currentUser.role=currentUser.role} */}
          
            <p>{currentUser.name}</p>
            <p>{currentUser.role}</p>
            <Button>Edit profile</Button>
            <br/>
            <button onClick = {() => {
                localStorage.removeItem('user');
                localStorage.removeItem('token');
                return <Redirect to={'/login'} />
            }} className="btn btn-primary" >Logout</button>
        </Typography>
      </Popover>
    </div>
  );
}
