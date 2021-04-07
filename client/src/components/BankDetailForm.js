import React from 'react';
import {Link} from 'react-router-dom';
import { useFormik, Field } from 'formik';
import * as yup from 'yup';
import axios from 'axios';
import { toast } from 'react-toastify';
import { Input, Row, Col } from 'reactstrap';
import { Select, Paper } from '@material-ui/core';
import DefaultProf from './Admin/profImg.jpg';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const BankDetailForm = (props) => {

    const formik = useFormik({
        initialValues: {
            name: '',
            bank: '',
            branch: '',
            accountNumber: ''
        },
        validationSchema: yup.object({
            name: yup.string()
                .required("Password is required"),
            bank: yup.string()
                .required("Confirm Password List is required"),
            branch: yup.string()
                .required("Confirm Password List is required"),
            accountNumber: yup.string()
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
            <Col xs={12} sm={8} style={{paddingTop:20}}>
                <div className="container" >
                    <Paper elevation={4} style={{ padding: "20px" }}>
                        <h3 style={{textAlign:"center"}}>Update Bank Details</h3>
                        <hr/>
                        <form autoComplete="off" onSubmit={formik.handleSubmit}>
                            <Row>
                                <Col xs={12} sm={6}>
                                    <div className="form-group">
                                        <label>Account Holder Name:</label>
                                        <input
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
                                            className="form-control"
                                            type="text"
                                            name="branch"
                                            onChange={formik.handleChange}
                                            value={formik.values.branch}
                                        />
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                            <Col xs={12} sm={9}>
                            <button className="btn btn-primary">Update Bank Details</button>
                                </Col>
                                <Col xs={12} sm={3} style={{paddingTop:10}}>
                                <Link style={{textDecoration:"none"}} to="/ChangePassword"><ArrowBackIcon/>Change Password </Link>
                                </Col>
                            </Row>
                        </form>
                    </Paper>
                </div>
            </Col>
        </Row>
    )

}

export default BankDetailForm;