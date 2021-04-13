import React, { useState, useContext, useEffect } from 'react';
import { Col, Row } from 'reactstrap';
import Typography from '@material-ui/core/Typography';
import Title from '../../components/Title';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

export default function TotalExpenses(props) {
  const { transactions } = props;

  let expenses = [];

  let totalExpense = 0;
  let pending = [];
  let approved = [];
  let rejected = [];
  if (transactions) {
    expenses = transactions;

    pending = transactions.filter((transaction) => {
      return transaction.status === 'Pending';
    });

    approved = transactions.filter((transaction) => {
      return transaction.status === 'Approved';
    });

    rejected = transactions.filter((transaction) => {
      return transaction.status === 'Rejected';
    });

    transactions.map((transaction) => {
      totalExpense += transaction.amount;
    });
  }
  var currentUser = JSON.parse(localStorage.getItem('user'));
  return (
    <div>
      {currentUser.role === 'employee' ? (
        <Title>Expenses</Title>
      ) : currentUser.role === 'manager' || currentUser.role === 'admin' ? (
        <Title>Transaction</Title>
      ) : null}
      <hr />
      <Row>
        <Col xs={12} sm={6}>
          {currentUser.role === 'employee' || currentUser.role === 'admin' ? (
            <Typography
              component="p"
              variant="h6"
              style={{ fontWeight: 'bold' }}
            >
              Expenses(Rs.):
            </Typography>
          ) : currentUser.role === 'manager' ? (
            <Typography
              component="p"
              variant="h6"
              style={{ fontWeight: 'bold' }}
            >
              Transaction(Rs.):
            </Typography>
          ) : null}
        </Col>
        <Col xs={12} sm={6}>
          <Typography component="p" variant="h6">
            {totalExpense}
          </Typography>
        </Col>
        <Col xs={12} sm={6}>
          <Typography component="p" variant="h6" style={{ fontWeight: 'bold' }}>
            Total(Number):
          </Typography>
        </Col>
        <Col xs={12} sm={6}>
          <Typography component="p" variant="h6">
            {expenses.length}
          </Typography>
        </Col>
      </Row>
      <br />
      <Typography>
        <Row>
          <Col xs={12} sm={4}>
            <span style={{ color: '#ff6600' }}>Pending: {pending.length}</span>
          </Col>
          <Col xs={12} sm={4}>
            <span style={{ color: '#00b300' }}>
              Accepted: {approved.length}
            </span>
          </Col>
          <Col xs={12} sm={4}>
            <span style={{ color: '#ff0000' }}>
              Rejected: {rejected.length}
            </span>
          </Col>
        </Row>
      </Typography>
      <br />
      <Typography color="textSecondary">
        until: {new Date().toDateString()}
      </Typography>
    </div>
  );
}
