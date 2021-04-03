import React, { useState, useEffect } from 'react';
import './App.css';
import Dashboard from './components/Employee/Dashboard';
import Report from './components/Report';
import History from './components/History';
import CreateNews from './components/News/CreateNews';
import Topup from './components/Manager/Topupreq';
import Transaction from './components/Manager/Transactionreq';
import NewsPage from './components/NewsPage';
import CreateUser from './components/Admin/CreateUser';
import Reimbursement from './components/Manager/Reimbursement';
import {
  BrowserRouter,
  Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import Landing from './components/landing';
import Login from './components/Login/login';
import { AuthTokenContextProvider } from './context/AuthTokenContext';
import ProtectedRouter from './components/protected';
import { GetUsersContextProvider } from './context/GetUsersContext';
import { TransactionContextProvider } from './context/TransactionContext';
import { TopupContextProvider } from './context/TopupContext';

function App() {
  return (
    <React.Fragment>
      <AuthTokenContextProvider>
      <TransactionContextProvider>
          <TopupContextProvider>
            <GetUsersContextProvider>
              <BrowserRouter> 
                <Switch>
                  <Route exact path="/" component={Landing} />
                  <Route exact path="/login" component={Login} />
                </Switch>
                <ProtectedRouter exact path="/Dashboard" component={Dashboard} />
                <ProtectedRouter exact path="/CreateUser" component={CreateUser} />
                <ProtectedRouter exact path="/Report" component={Report} />
                <ProtectedRouter exact path="/History" component={History} />
                <ProtectedRouter exact path="/Report" component={Report} />
                <ProtectedRouter exact path="/NewsPage" component={NewsPage} />
                <ProtectedRouter exact path="/Topup" component={Topup} />
                <ProtectedRouter exact path="/Transaction" component={Transaction} />
                <ProtectedRouter exact path="/Reimbursement" component={Reimbursement} />
              </BrowserRouter>
            </GetUsersContextProvider>
          </TopupContextProvider>
        </TransactionContextProvider>
      </AuthTokenContextProvider>
    </React.Fragment>
  );
}

export default App;