import React from 'react';
import { withRouter } from 'react-router-dom';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Iconimg from './Login/regi.png';
import Chart from './Login/landing.svg';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

// const useStyles = makeStyles((theme) => ({
// full: {
//   backgroundColor: '#FFF',
// }
// }));

export default function Landn() {
  return (
    <div className="container">
      <Grid container style={{ minHeight: '' }}>
        <Grid
          item
          xs={12}
          sm={6}
          container
          xs={12}
          sm={6}
          alignItems="center"
          direction="column"
          justify="space-between"
          style={{ padding: 10 }}
        >
          <div />
          <div>
            {/* <Grid container justify='center'> */}
            <img
              src={Iconimg}
              alt="logo"
              width={100}
              height={80}
              style={{ margin: 10 }}
            />
            {/* </Grid> */}
            <div style={{ marginBottom: 160, marginTop: 60 }}>
              <p style={{ fontSize: 35 }}>
                <b>Welcome to</b>
              </p>
              <p style={{ fontSize: 35 }}>
                <b>Recipt & Expense Managment System</b>
              </p>
              <p style={{ fontSize: 15 }}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the{' '}
              </p>
              {/* <button type="submit"
            fullWidth
            variant="contained"
            color="blue"><Link to="/Login">Log In</Link></button> */}
              <Button variant="contained" color="primary">
                <Link
                  style={{ color: '#fff', textDecoration: 'none' }}
                  to="/Login"
                >
                  Log In
                </Link>
              </Button>
            </div>
          </div>
          <div />
        </Grid>

        <Grid
          container
          xs={12}
          sm={6}
          alignItems="center"
          direction="column"
          justify="space-between"
          style={{ padding: 10 }}
        >
          <div />
          <div>
            <Grid container justify="center">
              <img
                className="container"
                src={Chart}
                alt="logo"
                width={450}
                height={500}
              />
            </Grid>
          </div>
          <div />
        </Grid>
      </Grid>
    </div>
  );
}
