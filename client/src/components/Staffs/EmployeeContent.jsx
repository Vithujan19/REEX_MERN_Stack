import React, { useEffect, useContext } from 'react';
import EmployeeStaffCard from './EmployeeCard';
import { Grid } from '@material-ui/core';
import { GetUsersContext } from '../../context/GetUsersContext';

const Content = () => {
  const { employees, getEmployees } = useContext(GetUsersContext);

  useEffect(async () => {
    await getEmployees();
  }, [])

  const getDate = (realDate) => {
    const datee = new Date(realDate);
    const year = datee.getUTCFullYear();
    const month = datee.getUTCMonth();
    const date = datee.getUTCDate();
    const correctDate = date + '-' + month + '-' + year;
    return correctDate;
  };

  const employeeDetails = [];

  if (employees) {
    employees.map((employee) => {
      const dataa = {
        name: employee.name,
        role: employee.role,
        gender: employee.gender,
        dateOfBirth: getDate(employee.dateOfBirth),
        mobileNumber: employee.mobileNumber,
        email: employee.email,
        userId: employee.userId,
        profilePicture: employee.profilePictureUrl,
      };
      employeeDetails.push(dataa);
    });
  }

  const getStaffCard = (staffObj) => {
    return (
      <Grid item xs={12} md={6} sm={12}>
        <EmployeeStaffCard {...staffObj} />
      </Grid>
    );
  };

  return (
    <div>
      <Grid container spacing={2}>
        {employeeDetails.map((staffObj) => getStaffCard(staffObj))}
      </Grid>
    </div>
  );
};

export default Content;
