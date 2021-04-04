import React, { useState, createContext, useEffect } from 'react';
import axios from 'axios';

export const GetUsersContext = createContext();

export const GetUsersContextProvider = function (props) {
  const [managers, setManagers] = useState();
  const [employees, setEmployees] = useState();

  const getEmployees = async () => {
    const token = localStorage.getItem('token');
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    };
    axios
      .get('http://localhost:3000/getallemployee', config)
      .then((response) => {
        setEmployees(response.data);
      })
      .catch((err) => {
        console.log('Unable...');
      });
  };

  const getManagers = async () => {
    const token = localStorage.getItem('token');
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    };
    axios
      .get('http://localhost:3000/getallmanager', config)
      .then((response) => {
        setManagers(response.data);
      })
      .catch((err) => {
        console.log('Unable...');
      });
  };

  return (
    <GetUsersContext.Provider
      value={{ getManagers, managers, employees, getEmployees }}
    >
      {props.children}
    </GetUsersContext.Provider>
  );
};
