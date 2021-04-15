import React from 'react';
import {Link} from 'react-router-dom';
import { useFormik, Field } from 'formik';
import * as yup from 'yup';
import axios from 'axios';
import { toast } from 'react-toastify';
import { Button, Form, FormGroup, Label, Input, FormText, Container, Row, Col } from 'reactstrap';
import { Select, Paper } from '@material-ui/core';
import DefaultProf from './Admin/profImg.jpg';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

const ViewProfileForm = (props) => {

    return (
        <Row>
            <Col xs={12} sm={4}>
                <Paper Container elevation={4}>
                    {/* {profileImg===null?<img src={DefaultProf} alt="" />: <img scr={profileImg}/>} */}
                    <img src={DefaultProf} alt="" />
                </Paper>
            </Col>
            <Col xs={12} sm={8}>
                <div className="container" >
                    <Paper elevation={4} style={{ padding: "20px" }}>
                        <h3 style={{textAlign:"center"}}>View Profile</h3>
                        <hr/>
                            <Row>
                                <Col xs={12} sm={4}>
                                    <div className="form-group">
                                        <label><span style={{fontWeight:"bold"}}>Name : </span>Kovarthanan</label>    
                                    </div>
                                </Col>
                                <Col xs={12} sm={4}>
                                    <div className="form-group">
                                        <label><span style={{fontWeight:"bold"}}>Email : </span>kova@gmail.com</label>    
                                    </div>
                                </Col>
                                <Col xs={12} sm={4}>
                                    <div className="form-group">
                                        <label><span style={{fontWeight:"bold"}}>Date of Birth : </span>1997-12-07</label>
                                    </div>
                                </Col>
                                <Col xs={12} sm={3}>
                                    <div className="form-group">
                                        <label><span style={{fontWeight:"bold"}}>UserID : </span>184081D</label>  
                                    </div>
                                </Col>
                                <Col xs={12} sm={3}>
                                    <div className="form-group">
                                        <label><span style={{fontWeight:"bold"}}>Gender : </span>Male</label>
                                    </div>
                                </Col>
                                <Col xs={12} sm={2}>
                                    <div className="form-group">
                                        <label><span style={{fontWeight:"bold"}}>Role : </span>Admin</label>
                                    </div>
                                </Col>
                                <Col xs={12} sm={4}>
                                    <div className="form-group">
                                        <label><span style={{fontWeight:"bold"}}>Mobile Number : </span>0779726655</label>
                                    </div>
                                </Col>
                            </Row>
                            </Paper>
                            <br/>
                            <Paper elevation={4} style={{ padding: "20px" }}>
                            <h4 style={{textAlign:"center"}}>Bank Details</h4>
                            <hr />
                            <Row>
                                <Col xs={12} sm={6}>
                                    <div className="form-group">
                                        <label><span style={{fontWeight:"bold"}}>Account Holder Name:</span>Kovarthanan.K</label>
                                    </div>
                                </Col>
                                <Col xs={12} sm={6}>
                                    <div className="form-group">
                                        <label><span style={{fontWeight:"bold"}}>Account Number:</span>8669568</label>
                                    </div>
                                </Col>
                                <Col xs={12} sm={6}>
                                    <div className="form-group">
                                        <label><span style={{fontWeight:"bold"}}>Bank Name:</span>BOC</label>
                                    </div>
                                </Col>
                                <Col xs={12} sm={6}>
                                    <div className="form-group">
                                        <label><span style={{fontWeight:"bold"}}>Branch Name:</span>Chunakam</label>
                                    </div>
                                </Col>
                            </Row>
                            <Link style={{textDecoration:"none", fontWeight:"bold"}} to="/EditProfile"> Edit Profile <ArrowForwardIcon/></Link>                       
                    </Paper>
                </div>
            </Col>
        </Row>
    )

}

export default ViewProfileForm;