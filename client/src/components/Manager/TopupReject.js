import React, { useState } from 'react';
import { DataGrid } from '@material-ui/data-grid';

export default function TopupReject(props) {
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
    const notApprovedTopups = topups.filter((topup) => {
      return topup.status === 'Not Approved';
    });

    notApprovedTopups.reverse().map((notApprovedTopup) => {
      const data = {
        id: notApprovedTopup._id,
        createdAt: getDate(notApprovedTopup.createdAt),
        employeeName: getEmployeeName(notApprovedTopup.requestBy),
        employeeId: getEmployeeId(notApprovedTopup.requestBy),
        amount: notApprovedTopup.amount,
        // status: notApprovedTopup.status,
      };
      rows.push(data);
    });
  }
  return (
    <div style={{ height: 400, width: '100%' }}>
      <h3>Topups Rejected</h3>
      <DataGrid rows={rows} columns={columns} pageSize={5} />
    </div>
  );
}
