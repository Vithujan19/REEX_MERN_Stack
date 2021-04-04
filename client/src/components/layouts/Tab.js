import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Dashboard from '../Dashboard';
import Report from '../Report';
import History from '../History';
import News from '../News';
import Reimbursement from '../Reimbursement';

class Tab extends Component {
    render() {
        return (
            <div>
                <React.Fragment>
        <BrowserRouter>
                <div className="mt-3">
                    <ul className="nav nav-tabs" style={{backgroundColor:"#EEE7E7", width:"100%"}}>
                        <li className="nav-item">
                        <Link className="nav-link active" data-toggle="tab" to="/">Dashboard <span className="sr-only">(current)</span></Link>
                            {/* <a className="nav-link active" data-toggle="tab" href="#dashboard">Dashboard</a> */}
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" data-toggle="tab" to="/Report">Report</Link>
                            {/* <a className="nav-link" data-toggle="tab" href="#report">Report</a> */}
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" data-toggle="tab" to="/History">History</Link>
                            {/* <a className="nav-link" data-toggle="tab" href="#history">History</a> */}
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" data-toggle="tab" to="/News">News</Link>
                            {/* <a className="nav-link" data-toggle="tab" href="#news">News</a> */}
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" data-toggle="tab" to="/Reimbursement">Reimbursement</Link>
                            {/* <a className="nav-link" data-toggle="tab" href="#reimbursement">Reimbursement</a> */}
                        </li>
                    </ul>


                    <div className="tab-content">
                        {/* <Dashboard/>
                        <Report/>
                        <History/>
                        <News/>
                        <Reimbursement/> */}
                    </div>
                </div>
                </BrowserRouter>
      </React.Fragment>
            </div>

        )
    }
}

export default Tab;
