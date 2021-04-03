import React, { useState } from 'react';
import { DataGrid } from '@material-ui/data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'date', headerName: 'DATE', width: 150 },
  { field: 'category', headerName: 'Category', width: 130 },
  { field: 'firstName', headerName: 'Emploee Name', width: 160 },
  {
    field: 'amount',
    headerName: 'Amount',
    type: 'number',
    width: 130,
  },
  {
    field: 'receipt',
    headerName: 'View Receipt',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.getValue('firstName') || ''} ${params.getValue('lastName') || ''}`,
  },
];

const rows = [
  { id:1 , date: '01-05-2020', category: 'vehicle', firstName: 'Jon', amount: 35, receipt: {} },
  { id:2 , date: '02-05-2020', category: 'Food', firstName: 'Cersei', amount: 42, receipt: {} },
  { id:3 , date: '03-05-2020', category: 'Rent', firstName: 'Jaime', amount: 45, receipt: {} },
  { id:4 , date: '04-05-2020', category: 'vehicle', firstName: 'Arya', amount: 16, receipt: {} },
  { id:5 , date: '05-05-2020', category: 'Food', firstName: 'Daenerys', amount: null, receipt: {} },
  { id:6 , date: '06-05-2020', category: 'vehicle', firstName: null, amount: 150, receipt: {} },
  { id:7 , date: '07-05-2020', category: 'vehicle', firstName: 'Ferrara', amount: 44, receipt: {} },
  { id:8 , date: '08-05-2020', category: 'Food', firstName: 'Rossini', amount: 36, receipt: {} },
  { id:9 , date: '09-05-2020', category: 'Rent', firstName: 'Harvey', amount: 65, receipt: {} },
];

export default function TopupPending() {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <h3>Transaction Pending</h3>
      <DataGrid rows={rows} columns={columns} pageSize={5}  />
      
    </div>
  );
}
