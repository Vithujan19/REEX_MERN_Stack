import React from 'react';
import {useFormik, Field} from 'formik';
import * as yup from 'yup';
import axios from 'axios';
import { toast } from 'react-toastify';


// validation method 1
// const validate = values =>{
//     var errors={}
//     if(!values.name){
//         errors.name = "Name is required"
//     }else if(values.name.length > 15){
//         errors.name = "Maximum 15 characters only"
//     }else if(values.name.length < 3){
//         errors.name = "Minimum 3 characters required"
//     }

//     return errors;
// }

const EditProfileForm = (props) => {

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
            confirmPassword: ''
        },
        validationSchema:yup.object({
            name:yup.string()
            .required("Name is required")
            .strict()
            .trim()
            .min(5, "Minimum 5 characters required")
            .max(15, "Maximum 15 characters only"),
            email:yup.string()
            .email()
            .required("Email is required"),
            dateOfBirth:yup.date()
            .required("DOB is required"),
            role:yup.string()
            .required("Role is required"),
            gender:yup.string()
            .required("Gender is required"),
            mobileNumber:yup.string()
            .required("Mobile Number is required"),
            userId:yup.string()
            .required("userId is required"),
            password:yup.string()
            .required("Password is required"),
            confirmPassword:yup.string()
            .oneOf([yup.ref('password'),null],"Password and confirm password must be same")
            .required("Confirm Password List is required")
        }),
        // validate,
        onSubmit:(user) => {
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

    return(
        <div className="container">
            <div className="jumbotron">
                <h4>Edit Profile</h4>
                <form autoComplete="off" onSubmit={formik.handleSubmit}>
                    <div className="form-group">
                        <label>Name:</label>
                        <input
                            className="form-control" 
                            type="text" 
                            name="name"
                            onChange={formik.handleChange}
                            value={formik.values.name}
                        />
                            {formik.errors.name ? 
                                <div className="text-danger">{formik.errors.name}</div>
                                : null
                            }
                    </div>
                    <div className="form-group">
                        <label>UserID:</label>
                        <input
                            className="form-control" 
                            type="text" 
                            name="userId"
                            onChange={formik.handleChange}
                            value={formik.values.userId}
                        />
                            {formik.errors.userId ? 
                                <div className="text-danger">{formik.errors.userId}</div>
                                : null
                            }
                    </div>
                    <div className="form-group">
                        <label>Email:</label>
                        <input
                            className="form-control" 
                            type="text" 
                            name="email"
                            onChange={formik.handleChange}
                            value={formik.values.email}
                        />
                            {formik.errors.email ? 
                                <div className="text-danger">{formik.errors.email}</div>
                                : null
                            }
                    </div>
                    <div className="form-group">
                        <label>Role:</label>
                        <input
                            className="form-control" 
                            type="text" 
                            name="role"
                            onChange={formik.handleChange}
                            value={formik.values.role}
                        />
                            {formik.errors.role ? 
                                <div className="text-danger">{formik.errors.role}</div>
                                : null
                            }
                    </div>
                    {/* <div id="checkbox-group">Role</div>
                    <div role="group" aria-labelledby="checkbox-group">
                        <label>
                            <Field type="checkbox" name="role" value="employee" />
                            Employee
                        </label>
                        <label>
                            <Field type="checkbox" name="role" value="manager" />
                            Manager
                        </label>
                    </div> */}
                    <div className="form-group">
                        <label>Gender:</label>
                        <input
                            className="form-control" 
                            type="text" 
                            name="gender"
                            onChange={formik.handleChange}
                            value={formik.values.gender}
                        />
                            {formik.errors.gender ? 
                                <div className="text-danger">{formik.errors.gender}</div>
                                : null
                            }
                    </div>
                    <div className="form-group">
                        <label>Password:</label>
                        <input
                            className="form-control" 
                            type="text" 
                            name="password"
                            onChange={formik.handleChange}
                            value={formik.values.password}
                        />
                            {formik.errors.password ? 
                                <div className="text-danger">{formik.errors.password}</div>
                                : null
                            }
                    </div>
                    <div className="form-group">
                        <label>Confirm Password:</label>
                        <input
                            className="form-control" 
                            type="text" 
                            name="confirmPassword"
                            onChange={formik.handleChange}
                            value={formik.values.confirmPassword}
                        />
                            {formik.errors.confirmPassword ? 
                                <div className="text-danger">{formik.errors.confirmPassword}</div>
                                : null
                            }
                    </div>
                    <div className="form-group">
                        <label>Mobile Number:</label>
                        <input
                            className="form-control" 
                            type="text" 
                            name="mobileNumber"
                            onChange={formik.handleChange}
                            value={formik.values.mobileNumber}
                        />
                            {formik.errors.mobileNumber ? 
                                <div className="text-danger">{formik.errors.mobileNumber}</div>
                                : null
                            }
                    </div>
                    <div className="form-group">
                        <label>Date of Birth:</label>
                        <input
                            className="form-control" 
                            name="dateOfBirth"
                            type="date"
                            onChange={formik.handleChange}
                            value={formik.values.dateOfBirth}
                        /> 
                            {formik.errors.dateOfBirth ? 
                                <div className="text-danger">{formik.errors.dateOfBirth}</div>
                                : null
                            }
                    </div>
                    <button className="btn btn-primary">Submit</button>    
                </form>
            </div>
        </div>
    )

}

export default EditProfileForm;