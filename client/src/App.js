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
import Staffs from './components/Staffs/Staffs';
import {
  BrowserRouter,
  Router,
  Route,
  Switch,
  Redirect,
  withRouter,
} from 'react-router-dom';
import Landing from './components/landing';
import Login from './components/Login/login';
import { AuthTokenContextProvider } from './context/AuthTokenContext';
import { GetUsersContextProvider } from './context/GetUsersContext';
import { TransactionContextProvider } from './context/TransactionContext';
import { TopupContextProvider } from './context/TopupContext';
import {
  ProtectedRouterEmployee,
  ProtectedRouterManager,
  ProtectedRouterAdmin,
  ProtectedRouter,
  ProtectedRouterEmployeeManager,
} from './components/ProtecterRouter';

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

                  {/* Common Routes */}
                  <ProtectedRouter
                    exact
                    path="/Dashboard"
                    component={Dashboard}
                  />
                  <ProtectedRouter
                    exact
                    path="/NewsPage"
                    component={NewsPage}
                  />

                  {/* Admin Routes */}
                  <ProtectedRouterAdmin
                    exact
                    path="/Staffs"
                    component={Staffs}
                  />

                  {/* Employee & Manager Routes */}
                  <ProtectedRouterEmployeeManager
                    exact
                    path="/Report"
                    component={Report}
                  />
                  <ProtectedRouterEmployeeManager
                    exact
                    path="/Reimbursement"
                    component={Reimbursement}
                  />

                  {/* Manager Routes */}
                  <ProtectedRouterManager
                    exact
                    path="/Topup"
                    component={Topup}
                  />
                  <ProtectedRouterManager
                    exact
                    path="/Transaction"
                    component={Transaction}
                  />

                  {/* Employee Routes */}
                  <ProtectedRouterEmployee
                    exact
                    path="/History"
                    component={History}
                  />
                  <Route path="*" component={() => '404 NOT FOUND'} />
                </Switch>
              </BrowserRouter>
            </GetUsersContextProvider>
          </TopupContextProvider>
        </TransactionContextProvider>
      </AuthTokenContextProvider>
    </React.Fragment>
  );
}

export default App;
