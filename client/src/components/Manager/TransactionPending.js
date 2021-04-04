import React, { useState } from 'react';
import { DataGrid } from '@material-ui/data-grid';

export default function TopupPending(props) {
  const { transactions, employees } = props;
  const columns = [
    { field: 'submissionDate', headerName: 'Submission Date', width: 161 },
    { field: 'employeeName', headerName: 'Employee Name', width: 165 },
    { field: 'category', headerName: 'Category', width: 110 },
    { field: 'paymentMethod', headerName: 'Payment Method', width: 160 },
    { field: 'transactionDate', headerName: 'Transaction Date', width: 161 },
    { field: 'updatedDate', headerName: 'Updated Date', width: 151 },
    {
      field: 'amount',
      headerName: 'Amount',
      // type: 'number',
      width: 110,
    },
    {
      field: 'status',
      headerName: 'Status',
      width: 100,
    },
    {
      field: 'receiptUrl',
      headerName: 'receiptUrl',
      width: 0,
      hide: true,
    },
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

  if (transactions && employees) {
    const pendingTransactions = transactions.filter((transaction) => {
      return transaction.status === 'Pending';
    });

    pendingTransactions.reverse().map((pendingTransaction) => {
      const data = {
        id: pendingTransaction._id,
        submissionDate: getDate(pendingTransaction.createdAt),
        employeeName: getEmployeeName(pendingTransaction.transactionBy),
        category: pendingTransaction.category,
        paymentMethod: pendingTransaction.paymentMethod,
        transactionDate: getDate(pendingTransaction.transactionDate),
        updatedDate: getDate(pendingTransaction.updatedAt),
        amount: pendingTransaction.amount,
        status: pendingTransaction.status,
        receiptUrl: pendingTransaction.receiptUrl,
      };
      rows.push(data);
      // console.log('Rows : ', rows);
    });
  }

  return (
    <div style={{ height: 400, width: '100%' }}>
      <h3>Transactions Pending</h3>
      <DataGrid rows={rows} columns={columns} pageSize={5} />
    </div>
  );
}
