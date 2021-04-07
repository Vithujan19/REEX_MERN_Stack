import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from '../Title';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

export default function Deposits() {
  // const classes = useStyles();
  return (
    <div>
      <Title>Total Number of Expenses</Title>
      <Typography component="p" variant="h4">
        50
      </Typography>
      <Title>Total Number of Topups</Title>
      <Typography component="p" variant="h4">
        30
      </Typography>
      <Typography color="textSecondary">
      until: {new Date().toDateString()}
      </Typography> 
    </div>
  );
}