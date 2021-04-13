import React, { useState, createContext, useEffect } from 'react';
import axios from 'axios';

export const TransactionContext = createContext();

export const TransactionContextProvider = function (props) {
  const [transactions, setTransactions] = useState();
  // const [managerTransacations, setManagerTransactions] = useState();

  const getEmployeeTransactions = async () => {
    const token = localStorage.getItem('token');
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    };

    await axios
      .get('http://localhost:3000/transactionMade', config)
      .then((response) => {
        setTransactions(response.data);
      })
      .catch((err) => {
        console.log('Unable access ...');
      });
  };

  const getManagerTransactions = async () => {
    const token = localStorage.getItem('token');
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    };

    await axios
      .get('http://localhost:3000/transactionIncharge', config)
      .then((response) => {
        setTransactions(response.data);
      })
      .catch((err) => {
        console.log('Unable access ...');
      });
  };

  const getAllTransactions = async () => {
    const token = localStorage.getItem('token');
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    };

    await axios
      .get('http://localhost:3000/allTransactions', config)
      .then((response) => {
        setTransactions(response.data);
      })
      .catch((err) => {
        console.log('Unable access ...');
      });
  };

  return (
    <TransactionContext.Provider
      value={{
        transactions,
        getEmployeeTransactions,
        getManagerTransactions,
        getAllTransactions,
      }}
    >
      {props.children}
    </TransactionContext.Provider>
  );
};
