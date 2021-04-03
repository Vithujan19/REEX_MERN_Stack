import React, { useState, createContext, useEffect } from 'react';
import axios from 'axios';

export const GetUsersContext = createContext();

export const GetUsersContextProvider = function (props) {
  const [managers, setManagers] = useState();

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
    <GetUsersContext.Provider value={[getManagers, managers]}>
      {props.children}
    </GetUsersContext.Provider>
  );
};
