import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useFormik, Field } from 'formik';
import * as yup from 'yup';
import axios from 'axios';
import { toast } from 'react-toastify';
import { Button, Form, FormGroup, Label, Input, FormText, Container, Row, Col } from 'reactstrap';
import { Select, Paper } from '@material-ui/core';
import DefaultProf from './Admin/profImg.jpg';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ExpenseProgress from './Employee/ExpenseProgress';
import TopupProgress from './Employee/TopupProgress';
import ReimbursementProgress from './Employee/ReimbursementProgress';

const ViewUserForm = (props) => {

    //.....................User Details...........................
    const [detail, setDetail] = useState(false);

    const extraDetail = <Paper elevation={4} style={{ padding: 10 }}>
        <br />
        <Row>
            <Col xs={12} sm={6}>
                <div className="form-group">
                    <label><span style={{ fontWeight: "bold" }}>Name : </span>Kovarthanan</label>
                </div>
            </Col>
            
            <Col xs={12} sm={4}>
                <div className="form-group">
                    <label><span style={{ fontWeight: "bold" }}>Email : </span>kova@gmail.com</label>
                </div>
            </Col>
            <Col xs={12} sm={4}>
                <div className="form-group">
                    <label><span style={{ fontWeight: "bold" }}>UserID : </span>184081D</label>
                </div>
            </Col>
            <Col xs={12} sm={4}>
                <div className="form-group">
                    <label><span style={{ fontWeight: "bold" }}>Gender : </span>Male</label>
                </div>
            </Col>
            <Col xs={12} sm={4}>
                <div className="form-group">
                    <label><span style={{ fontWeight: "bold" }}>Role : </span>Admin</label>
                </div>
            </Col>
            <Col xs={12} sm={6}>
                <div className="form-group">
                    <label><span style={{ fontWeight: "bold" }}>Date of Birth : </span>1997-12-07</label>
                </div>
            </Col>
            <Col xs={12} sm={6}>
                <div className="form-group">
                    <label><span style={{ fontWeight: "bold" }}>Mobile Number : </span>0779726655</label>
                </div>
            </Col>
        </Row>
    </Paper>
    const PersonalDetailLink = detail ? 'Personal Details << ' : 'Personal Details >> '

    //.....................Bank Details...........................
    const [bankDetail, setBankDetail] = useState(false);
    const extraBankDetail = <Paper elevation={4} style={{ padding: 10 }}>
        {/* <h4>Bank Details</h4> */}
        {/* <hr /> */}
        <br/>
        <Row>
            <Col xs={12} sm={6}>
                <div className="form-group">
                    <label><span style={{ fontWeight: "bold" }}>Account Holder Name : </span>Kovarthanan.K</label>
                </div>
            </Col>
            <Col xs={12} sm={6}>
                <div className="form-group">
                    <label><span style={{ fontWeight: "bold" }}>Account Number : </span>8669568</label>
                </div>
            </Col>
            <Col xs={12} sm={6}>
                <div className="form-group">
                    <label><span style={{ fontWeight: "bold" }}>Bank Name : </span>BOC</label>
                </div>
            </Col>
            <Col xs={12} sm={6}>
                <div className="form-group">
                    <label><span style={{ fontWeight: "bold" }}>Branch Name :</span>Chunakam</label>
                </div>
            </Col>
        </Row>
    </Paper>
    const PersonalBankDetailLink = bankDetail ? 'Bank Details << ' : 'Bank Details >> '

    //.....................User Progress...........................
    const [userProgress, setUserProgress] = useState(false);
    const extraProgressDetail = <div>
        <Paper elevation={4} style={{ padding: 10 }}>
        <ExpenseProgress />
    </Paper>
    <br/>
    <Paper elevation={4} style={{ padding: 10 }}>
        <TopupProgress />
    </Paper>
    <br/>
    <Paper elevation={4} style={{ padding: 10 }}>
        <ReimbursementProgress />
    </Paper>
    </div>
    const ProgressLink = userProgress ? 'User Progress << ' : 'User Progress >> '

    return (
        <Row style={{fontSize:18}}>
            <Col xs={12} sm={4}>
                <Paper Container elevation={4}>
                    {/* {profileImg===null?<img src={DefaultProf} alt="" />: <img scr={profileImg}/>} */}
                    <img src={DefaultProf} alt="" />
                </Paper>
            </Col>
            <Col xs={12} sm={8}>
                <div className="container" >
                    <Paper elevation={4} style={{ padding: "20px" }}>
                        <a style={{ textDecoration: "none", cursor: "pointer", fontSize: 20 }} className="read-more-link" onClick={() => { setDetail(!detail) }}><span>{PersonalDetailLink}</span></a>
                        {detail && extraDetail}

                        <br />
                        <br />

                        <a style={{ textDecoration: "none", cursor: "pointer", fontSize: 20 }} className="read-more-link" onClick={() => { setBankDetail(!bankDetail) }}><span>{PersonalBankDetailLink}</span></a>
                        {bankDetail && extraBankDetail}

                        <br />
                        <br />

                        <a style={{ textDecoration: "none", cursor: "pointer", fontSize: 20 }} className="read-more-link" onClick={() => { setUserProgress(!userProgress) }}><span>{ProgressLink}</span></a>
                        {userProgress && extraProgressDetail}
                        <br />
                        <hr />
                       <Row>
                       <Col xs={12} sm={8}>
                       <button className="btn btn-primary">
                            <Link style={{ color:"#FFF", textDecoration: "none"}} to="/EditUser"> Edit User</Link>
                        </button>
                       </Col>
                       <Col xs={12} sm={4}>
                       <button className="btn btn-primary">
                            Reset Password
                        </button>
                       </Col>
                       </Row>
                    </Paper>
                </div>
            </Col>
        </Row>
    )

}

export default ViewUserForm;