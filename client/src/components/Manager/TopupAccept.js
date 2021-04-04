import React, { useState } from 'react';
import { DataGrid } from '@material-ui/data-grid';

export default function TopupAccept(props) {
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
    const approvedTopups = topups.filter((topup) => {
      return topup.status === 'Approved';
    });

    approvedTopups.reverse().map((approvedTopup) => {
      const data = {
        id: approvedTopup._id,
        createdAt: getDate(approvedTopup.createdAt),
        employeeName: getEmployeeName(approvedTopup.requestBy),
        employeeId: getEmployeeId(approvedTopup.requestBy),
        amount: approvedTopup.amount,
        // status: approvedTopup.status,
      };
      rows.push(data);
    });
  }
  return (
    <div style={{ height: 400, width: '100%' }}>
      <h3>Topups Accepted</h3>
      <DataGrid rows={rows} columns={columns} pageSize={5} />
    </div>
  );
}
