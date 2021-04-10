import React, { useState } from 'react';
import { DataGrid } from '@material-ui/data-grid';
import EmployeeReimburseDetail from '../Employee/EmployeeReimburseDetail';
import { Button } from 'reactstrap';

export default function ReimburseRequests(props) {
  const [rows, setRows] = useState();
  const [rowSelcted, setRowSelected] = useState(false);
  const { employees, reimbursements } = props;

  const columns = [
    { field: 'createdDate', headerName: 'Created Date', width: 150 },
    { field: 'employeeName', headerName: 'Employee Name Name', width: 130 },
    { field: 'bankDetails', headerName: 'Bank Details', width: 160 },
    {
      field: 'amount',
      headerName: 'Amount',
      width: 130,
    },
    { field: 'updatedDate', headerName: 'Updated Date', width: 160 },
    { field: 'status', headerName: 'Status', width: 160 },
    { field: 'transactionId', hide: true, headerName: 'Status', width: 160 },
    {
      field: "",
      headerName: "Action",
      disableClickEventBubbling: true,
      renderCell: (params) => {
        const onClick = () => {
          const api = params.api;
          const fields = api
            .getAllColumns()
            .map((c) => c.field)
            .filter((c) => c !== "__check__" && !!c);
          const thisRow = {};
  
          fields.forEach((f) => {
            thisRow[f] = params.getValue(f);
          });
          setRows(thisRow);
          return setRowSelected(true);
        };
  
        return <Button onClick={onClick}>Click</Button>;
      }
    }
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

  const details = [];
  if (reimbursements && employees) {
    console.log('Employee : ', employees);
    reimbursements.reverse().map((reimbursement) => {
      const data = {
        id: reimbursement._id,
        createdDate: getDate(reimbursement.createdAt),
        employeeName: getEmployeeName(reimbursement.reimbursementTo),
        amount: reimbursement.amount,
        status: reimbursement.status,
        bankDetails: reimbursement.reimbursementAccount,
        updatedDate: getDate(reimbursement.updatedAt),
        transactionId: reimbursement.transactionId,
      };
      details.push(data);
    });
  }

  return (
    <div style={{ height: 400, width: 'auto' }}>
      {rowSelcted ? (
        <EmployeeReimburseDetail rowData={rows} />
      ) : (
        <React.Fragment>
            <h3>Reimbursement Requests</h3>
            <DataGrid rows={details} columns={columns} pageSize={5} />
        </React.Fragment>
      )}
    </div>
  );
}
