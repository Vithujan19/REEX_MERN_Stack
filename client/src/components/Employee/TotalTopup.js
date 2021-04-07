import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from '../../components/Title';
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
      <Title>Total Topups</Title>
      <Typography component="p" variant="h4">
        Rs 1,024.00
      </Typography>
      <Typography color="textSecondary">
      until: {new Date().toDateString()}
      </Typography> 
    </div>
  );
}