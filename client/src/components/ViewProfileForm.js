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

    const formik = useFormik({
        initialValues: {
            name: '',
            role: '',
            gender: '',
            dateOfBirth: '',
            mobileNumber: '',
            email: '',
            userId: '',
            password: '',
            confirmPassword: '',
            profileImg: '',
            bank: '',
            branch: '',
            accountNumber: ''
        },
        validationSchema: yup.object({
            password: yup.string()
                .required("Password is required"),
            confirmPassword: yup.string()
                .oneOf([yup.ref('password'), null], "Password and confirm password must be same")
                .required("Confirm Password List is required")
        }),
        // validate,
        onSubmit: (user) => {
            console.log(user);
            axios.post('http://localhost:3000/users', user)
                .then(res => {
                    console.log("Done");
                    toast.success("User Register successful");
                    props.history.push('/user/me');
                })
                .catch(err => {
                    toast.error(err.response.user);
                })
        }
    })

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
                        <h3 style={{textAlign:"center"}}>Update Profile</h3>
                        <hr/>
                        
                            <Row>
                                <Col xs={12} sm={6}>
                                    <div className="form-group">
                                        <label>Name:</label>
                                        <input 
                                            disabled
                                            className="form-control"
                                            type="text"
                                            name="name"
                                            onChange={formik.handleChange}
                                            value={formik.values.name}
                                        />
                                    </div>
                                </Col>
                                <Col xs={12} sm={6}>
                                    <div className="form-group">
                                        <label>UserID:(Admin only)</label>
                                        <input
                                            disabled
                                            className="form-control"
                                            type="text"
                                            name="userId"
                                            onChange={formik.handleChange}
                                            value={formik.values.userId}
                                        />
                                    </div>
                                </Col>
                                <Col xs={12} sm={8}>
                                    <div className="form-group">
                                        <label>Email:</label>
                                        <input
                                            disabled
                                            className="form-control"
                                            type="text"
                                            name="email"
                                            onChange={formik.handleChange}
                                            value={formik.values.email}
                                        />
                                    </div>
                                </Col>
                                <Col xs={12} sm={4}>
                                    <div className="form-group">
                                        <label>Mobile Number:</label>
                                        <input
                                            disabled
                                            className="form-control"
                                            type="text"
                                            name="mobileNumber"
                                            onChange={formik.handleChange}
                                            value={formik.values.mobileNumber}
                                        />
                                    </div>
                                </Col>
                                <Col xs={12} sm={4}>
                                    <div className="form-group">
                                        <label>Role:(Admin only)</label>
                                        <Input
                                            disabled
                                            className="form-control"
                                            type="text"
                                            name="role"
                                            onChange={formik.handleChange}
                                            value={formik.values.role}
                                        >
                                        </Input>
                                    </div>
                                </Col>
                                <Col xs={12} sm={4}>
                                    <div className="form-group">
                                        <label>Gender:</label>
                                        <Input
                                            disabled
                                            className="form-control"
                                            type="select"
                                            name="gender"
                                            onChange={formik.handleChange}
                                            value={formik.values.gender}
                                        >
                                        </Input>
                                    </div>
                                </Col>
                                <Col xs={12} sm={4}>
                                    <div className="form-group">
                                        <label>Date of Birth:</label>
                                        <input
                                            disabled
                                            className="form-control"
                                            name="dateOfBirth"
                                            type="date"
                                            onChange={formik.handleChange}
                                            value={formik.values.dateOfBirth}
                                        />
                                    </div>
                                </Col>
                            </Row>
                            <h4>Bank Details</h4>
                            <hr />
                            <Row>
                                <Col xs={12} sm={6}>
                                    <div className="form-group">
                                        <label>Account Holder Name:</label>
                                        <input
                                            disabled
                                            className="form-control"
                                            type="text"
                                            name="owner"
                                            onChange={formik.handleChange}
                                            value={formik.values.owner}
                                        />
                                    </div>
                                </Col>
                                <Col xs={12} sm={6}>
                                    <div className="form-group">
                                        <label>Account Number:</label>
                                        <input
                                            disabled
                                            className="form-control"
                                            type="text"
                                            name="accountNumber"
                                            onChange={formik.handleChange}
                                            value={formik.values.accountNumber}
                                        />
                                    </div>
                                </Col>
                                <Col xs={12} sm={6}>
                                    <div className="form-group">
                                        <label>Bank Name:</label>
                                        <input
                                            disabled
                                            className="form-control"
                                            type="text"
                                            name="bank"
                                            onChange={formik.handleChange}
                                            value={formik.values.bank}
                                        />
                                    </div>
                                </Col>
                                <Col xs={12} sm={6}>
                                    <div className="form-group">
                                        <label>Branch Name:</label>
                                        <input
                                            disabled
                                            className="form-control"
                                            type="text"
                                            name="branch"
                                            onChange={formik.handleChange}
                                            value={formik.values.branch}
                                        />
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