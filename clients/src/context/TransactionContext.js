import React, { useState, createContext, useEffect } from 'react';
import axios from 'axios';

export const TransactionContext = createContext();

export const TransactionContextProvider = function (props) {
  const [transactions, setTransactions] = useState();

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

  return (
    <TransactionContext.Provider
      value={[transactions, getEmployeeTransactions]}
    >
      {props.children}
    </TransactionContext.Provider>
  );
};
