import React, { useState } from 'react';
import { DataGrid } from '@material-ui/data-grid';

export default function TopupPending(props) {
  const { topups, employees } = props;

  const columns = [
    { field: 'createdAt', headerName: 'Requested Date', width: 160 },
    { field: 'employeeName', headerName: 'Employee Name', width: 170 },
    { field: 'employeeId', headerName: 'Employee UserID', width: 170 },
    {
      field: 'amount',
      headerName: 'Amount',
      width: 130,
    },
    // {
    //   field: 'status',
    //   headerName: 'Status',
    //   width: 150,
    // },
  ];

  const getDate = (realDate) => {
    const datee = new Date(realDate);
    const year = datee.getUTCFullYear();
    const month = datee.getUTCMonth();
    const date = datee.getUTCDate();
    const correctDate = date + '-' + month + '-' + year;
    return correctDate;
  };

  const getEmployeeName = (id) => {
    let employee = employees.find((m) => m._id === id);
    return employee.name;
  };

  const getEmployeeId = (id) => {
    let employee = employees.find((m) => m._id === id);
    return employee.userId;
  };

  const rows = [];

  if (topups && employees) {
    const pendingTopups = topups.filter((topup) => {
      return topup.status === 'Pending';
    });

    pendingTopups.reverse().map((pendingTopup) => {
      const data = {
        id: pendingTopup._id,
        createdAt: getDate(pendingTopup.createdAt),
        employeeName: getEmployeeName(pendingTopup.requestBy),
        employeeId: getEmployeeId(pendingTopup.requestBy),
        amount: pendingTopup.amount,
        // status: pendingTopup.status,
      };
      rows.push(data);
    });

    console.log('Rows : ', rows);
  }

  return (
    <div style={{ height: 400, width: '100%' }}>
      <h3>Topups Pending</h3>
      <DataGrid rows={rows} columns={columns} pageSize={5} />
    </div>
  );
}
