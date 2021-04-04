// import React from 'react';
// import { useTheme } from '@material-ui/core/styles';
// import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer } from 'recharts';
// import Title from './Title';

// // Generate Sales Data
// function createData(date, amount) {
//   return { date, amount };
// }

// const data = [
//   createData('1', 0),
//   createData('2', 300),
//   createData('3', 600),
//   createData('4', 800),
//   createData('5', 1500),
//   createData('6', 2000),
//   createData('7', 2400),
//   createData('8', 2400),
//   createData('9', undefined),
// ];

// export default function Chart() {
//   const theme = useTheme();

//   return (
//     <React.Fragment>
//       <Title>Expense of the Month</Title>
//       <ResponsiveContainer>
//         <LineChart
//           data={data}
//           margin={{
//             top: 16,
//             right: 16,
//             bottom: 0,
//             left: 24,
//           }}
//         >
//           <XAxis dataKey="date" stroke={theme.palette.text.secondary} />
//           <YAxis stroke={theme.palette.text.secondary}>
//             <Label
//               angle={270}
//               position="left"
//               style={{ textAnchor: 'middle', fill: theme.palette.text.primary }}
//             >
//               Expense (Rs)
//             </Label>
//           </YAxis>
//           <Line type="monotone" dataKey="amount" stroke={theme.palette.primary.main} dot={false} />
//         </LineChart>
//       </ResponsiveContainer>
//     </React.Fragment>
//   );
// }

import React from "react";
import Chart from 'react-apexcharts'
import { Grid, Container, Typography, Paper } from "@material-ui/core";

export default class ApexChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    
      series: [{
        name: 'series1',
        data: [310, 600, 280, 510, 420, 1090, 100]
      }, ],
      options: {
        chart: {
          height: 350,
          type: 'area'
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'smooth'
        },
        xaxis: {
          type: 'datetime',
          categories: ["2020-09-19T00:00:00.000Z", "2020-10-19T01:30:00.000Z", "2020-11-19T02:30:00.000Z", "2020-12-19T03:30:00.000Z", "2021-01-19T04:30:00.000Z", "2021-02-19T05:30:00.000Z", "2021-03-19T06:30:00.000Z"]
        },
        tooltip: {
          x: {
            format: 'dd/MM/yy'
          },
        },
      },
    
    
    };
  }



  render() {
    return (
      

<div id="chart">
<Chart options={this.state.options} series={this.state.series} type="area" height={200} />
</div>)}}