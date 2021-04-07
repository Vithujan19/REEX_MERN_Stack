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
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const ChangePasswordForm = (props) => {

    const formik = useFormik({
        initialValues: {
            password: '',
            newpassword: '',
            confirmPassword: '',
        },
        validationSchema: yup.object({
            password: yup.string()
                .required("Password is required"),
            newpassword: yup.string()
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
            <Col xs={12} sm={8}  style={{paddingTop:30}}>
                <div className="container" >
                    <Paper elevation={4} style={{ padding: "20px" }}>
                        <h3 style={{textAlign:"center"}}>Change Password</h3>
                        <hr/>
                        <form autoComplete="off" onSubmit={formik.handleSubmit}>
                            <Row>
                                <Col xs={12} sm={4}>
                                    <div className="form-group">
                                        <label>Old Password:</label>
                                        <input
                                            className="form-control"
                                            type="password"
                                            name="password"
                                            onChange={formik.handleChange}
                                            value={formik.values.password}
                                        />
                                        {formik.errors.password ?
                                            <div className="text-danger">{formik.errors.password}</div>
                                            : null
                                        }
                                    </div>
                                </Col>
                                <Col xs={12} sm={4}>
                                    <div className="form-group">
                                        <label>New Password:</label>
                                        <input
                                            className="form-control"
                                            type="password"
                                            name="password"
                                            onChange={formik.handleChange}
                                            value={formik.values.newpassword}
                                        />
                                        {formik.errors.password ?
                                            <div className="text-danger">{formik.errors.newpassword}</div>
                                            : null
                                        }
                                    </div>
                                </Col>
                                <Col xs={12} sm={4}>
                                    <div className="form-group">
                                        <label>Confirm Password:</label>
                                        <input
                                            className="form-control"
                                            type="password"
                                            name="password"
                                            onChange={formik.handleChange}
                                            value={formik.values.confirmPassword}
                                        />
                                        {formik.errors.confirmPassword ?
                                            <div className="text-danger">{formik.errors.confirmPassword}</div>
                                            : null
                                        }
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                            <Col xs={12} sm={6}>
                            <button className="btn btn-primary">Change Password</button>
                                </Col>
                                <Col xs={12} sm={6} style={{paddingTop:10}}>
                                    <Row>
                                        <Col xs={12} sm={6}>
                                        <Link style={{textDecoration:"none"}} to="/EditProfile"><ArrowBackIcon/>Update Profile </Link>
                                        </Col>
                                        <Col xs={12} sm={6}>
                                        <Link style={{textDecoration:"none"}} to="/BankDetails"><ArrowForwardIcon/>Bank Details </Link>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </form>
                    </Paper>
                </div>
            </Col>
        </Row>
    )

}

export default ChangePasswordForm;