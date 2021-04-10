import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { useFormik, Field } from 'formik';
import * as yup from 'yup';
import axios from 'axios';
import { toast } from 'react-toastify';
import {
    Button,
    Form,
    FormGroup,
    Label,
    Input,
    FormText,
    Container,
    Row,
    Col,
} from 'reactstrap';
import { Select, Paper } from '@material-ui/core';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { GetUsersContext } from '../context/GetUsersContext';
import { SuccessMessage, FailedMessage } from './layouts/Alert';
import DefaultProf from './Admin/profImg.jpg';

const EditProfileForm = (props) => {
    const [updateStatus, setUpdateStatus] = useState();
    const { reloadUser } = useContext(GetUsersContext);
    const currentUser = JSON.parse(localStorage.getItem('user'));

    const editedDetails = {};

    const formik = useFormik({
        initialValues: {
            name: currentUser.name,
            role: currentUser.role,
            gender: currentUser.gender,
            dateOfBirth: currentUser.dateOfBirth,
            mobileNumber: currentUser.mobileNumber,
            email: currentUser.email,
            userId: currentUser.userId,
        },
        validationSchema: yup.object({
            email: yup.string().email().required('Enter valid Email'),
        }),

        // validate,
        // onSubmit: (user) => {
        //     if (user.name !== currentUser.name) {
        //         editedDetails.name = user.name;
        //     }
        //     if (user.email !== currentUser.email) {
        //         editedDetails.email = user.email;
        //     }
        //     if (user.dateOfBirth !== currentUser.dateOfBirth) {
        //         editedDetails.dateOfBirth = user.dateOfBirth;
        //     }
        //     if (user.mobileNumber !== currentUser.mobileNumber) {
        //         editedDetails.mobileNumber = user.mobileNumber;
        //     }
        //     if (user.gender !== currentUser.gender) {
        //         editedDetails.gender = user.gender;
        //     }
        //     if (user.gender !== currentUser.gender) {
        //         editedDetails.gender = user.gender;
        //     }

        //     const config = {
        //         headers: {
        //             'Content-Type': 'application/json',
        //             Authorization: `Bearer ${localStorage.getItem('token')}`,
        //         },
        //     };

        //     axios
        //         .patch('http://localhost:3000/users/me', editedDetails, config)
        //         .then((res) => {
        //             toast.success('User Register successful');
        //             reloadUser();
        //             setUpdateStatus(true);
        //         })
        //         .catch((err) => {
        //             toast.error(err);
        //             setUpdateStatus(false);
        //         });
        // },
    });

    return (
        <Row>
            <Col xs={12} sm={4}>
                <Paper Container elevation={4}>
                    {/* {profileImg===null?<img src={DefaultProf} alt="" />: <img scr={profileImg}/>} */}
                    <img src={DefaultProf} alt="" />
                </Paper>
            </Col>
            <Col xs={12} sm={8}>
                <div className="container">
                    <Paper elevation={4} style={{ padding: '20px' }}>
                        <h3 style={{ textAlign: 'center' }}>Edit User</h3>
                        <hr />
                        {/* {updateStatus === true ? (
              <SuccessMessage message="Successfully Edited Your Profile" />
            ) : null}
            {updateStatus === false ? (
              <FailedMessage message="Editing You Profile Failed." />
            ) : null} */}
                        <form autoComplete="off" onSubmit={formik.handleSubmit}>
                            <Row>
                                <Col xs={12} sm={6}>
                                    <div className="form-group">
                                        <label>Name:</label>
                                        <input
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
                                        <label>UserID: </label>
                                        <input
                                            className="form-control"
                                            type="text"
                                            name="userId"
                                            onChange={formik.handleChange}
                                            value={formik.values.userId}
                                        />
                                    </div>
                                </Col>
                                {/* <Col xs={12} sm={8}>
                  <div className="form-group">
                    <label>Email:</label>
                    <input
                      className="form-control"
                      type="text"
                      name="email"
                      onChange={formik.handleChange}
                      value={formik.values.email}
                    />
                    {formik.errors.email ? (
                      <div className="text-danger">{formik.errors.email}</div>
                    ) : null}
                  </div>
                </Col> */}
                                {/* <Col xs={12} sm={4}>
                  <div className="form-group">
                    <label>Mobile Number:</label>
                    <input
                      className="form-control"
                      type="text"
                      name="mobileNumber"
                      onChange={formik.handleChange}
                      value={formik.values.mobileNumber}
                    />
                  </div>
                </Col> */}
                                <Col xs={12} sm={4}>
                                    <div className="form-group">
                                        <label>Role:</label>
                                        <Input
                                            className="form-control"
                                            type="select"
                                            name="role"
                                            onChange={formik.handleChange}
                                            value={formik.values.role}
                                        >
                                            <option value="admin">Admin</option>
                                            <option value="manager">Manager</option>
                                            <option value="employee">Employee</option>
                                        </Input>
                                    </div>
                                </Col>
                                {/* <Col xs={12} sm={4}>
                  <div className="form-group">
                    <label>Gender:</label>
                    <Select
                      className="form-control"
                      type="select"
                      name="gender"
                      onChange={formik.handleChange}
                      value={formik.values.gender}
                    >
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </Select>
                  </div>
                </Col>
                <Col xs={12} sm={4}>
                  <div className="form-group">
                    <label>Date of Birth:</label>
                    <input
                      className="form-control"
                      name="dateOfBirth"
                      type="date"
                      onChange={formik.handleChange}
                      value={formik.values.dateOfBirth}
                    />
                  </div>
                </Col> */}
                            </Row>
                            <Row>
                                <Col xs={12} sm={6}>
                                    <button className="btn btn-primary">Confirm</button>
                                </Col>
                                <Col xs={12} sm={6} style={{ paddingTop: 10 }}>
                                    <Row>
                                        <Col xs={12} sm={6}>
                                            {/* <Link
                                                style={{ textDecoration: 'none' }}
                                                to="/ViewProfile"
                                            >
                                                <ArrowBackIcon />
                                                View Profile{' '}
                                            </Link> */}
                                        </Col>
                                        <Col xs={12} sm={6}>
                                            <button className="btn btn-primary">
                                                <Link
                                                    style={{ textDecoration: 'none', color: "#FFF" }}
                                                    to="/ResetPassword"
                                                >
                                                    Reset Password{' '}
                                                </Link>
                                            </button>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </form>
                    </Paper>
                </div>
            </Col>
        </Row>
    );
};

export default EditProfileForm;
