import React, { useState, useEffect } from 'react';
import './App.css';
import Dashboard from './components/Employee/Dashboard';
import Report from './components/Report';
import History from './components/History';
import CreateNews from './components/News/CreateNews';
import Topup from './components/Manager/Topupreq';
import Transaction from './components/Manager/Transactionreq';
import NewsPage from './components/News/NewsPage';
import CreateUser from './components/Admin/CreateUser';
import Reimbursement from './components/Manager/Reimbursement';
import Staffs from './components/Staffs/Staffs';
import ViewProfile from './components/ViewProfile';
import EditProfile from './components/EditProfile';
import EditUser from './components/EditUser';
import BankDetails from './components/BankDetail';
import ChangePassword from './components/ChangePassword';
import EmployeeReimbursement from './components/Employee/EmployeeReimbursement';
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
import { BankDetailsContextProvider } from './context/BankDetailsContext';
import { ReimbursementContextProvider } from './context/ReimbursementContext';
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
              <ReimbursementContextProvider>
                <BankDetailsContextProvider>
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
                      <ProtectedRouter
                        exact
                        path="/EditProfile"
                        component={EditProfile}
                      />
                      <ProtectedRouter
                        exact
                        path="/ViewProfile"
                        component={ViewProfile}
                      />
                      <ProtectedRouter
                        exact
                        path="/BankDetails"
                        component={BankDetails}
                      />
                      <ProtectedRouter
                        exact
                        path="/ChangePassword"
                        component={ChangePassword}
                      />

                      {/* Admin Routes */}
                      <ProtectedRouterAdmin
                        exact
                        path="/Staffs"
                        component={Staffs}
                      />
                      <ProtectedRouterAdmin
                        exact
                        path="/CreateUser"
                        component={CreateUser}
                      />
                      <ProtectedRouterAdmin
                        exact
                        path="/CreateNews"
                        component={CreateNews}
                      />
                      <ProtectedRouterAdmin
                        exact
                        path="/EditUser"
                        component={EditUser}
                      />

                      {/* Employee & Manager Routes */}
                      <ProtectedRouterEmployeeManager
                        exact
                        path="/Report"
                        component={Report}
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
                      <ProtectedRouterManager
                        exact
                        path="/Reimbursement"
                        component={Reimbursement}
                      />

                      {/* Employee Routes */}
                      <ProtectedRouterEmployee
                        exact
                        path="/History"
                        component={History}
                      />
                      <ProtectedRouterEmployee
                        exact
                        path="/EmployeeReimburement"
                        component={EmployeeReimbursement}
                      />
                      <Route path="*" component={() => '404 NOT FOUND'} />
                    </Switch>
                  </BrowserRouter>
                </BankDetailsContextProvider>
              </ReimbursementContextProvider>
            </GetUsersContextProvider>
          </TopupContextProvider>
        </TransactionContextProvider>
      </AuthTokenContextProvider>
    </React.Fragment>
  );
}

export default App;
