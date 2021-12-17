import React from 'react';
import { Formik, Form } from 'formik';
import { TextField } from '../Form-Validation/TextField';
import * as Yup from 'yup';
import react_form_image from '../Form-Validation/react_form.png';
export const SignUp = () => {
    const validate = Yup.object().shape({
        firstname: Yup.string()
            .max(15, 'Must be 15 characters or less')
            .required('Firstname Required'),
        lastname: Yup.string()
            .max(20, 'Must be 20 characters or less')
            .required('Lastname Required'),
        email: Yup.string()
            .email('Email is Invalid')
            .required('Email is required'),
        password: Yup.string()
            .max(6, 'Password must be atleast 6 characters')
            .required('Passord is Required'),
        confirmpassword: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Passwword must match')
            .required('Confirm password is Required'),
    })
    return (

        <>
            <br />
            <hr className="line"></hr>
            <h5 className="title">🔵<u>React Form</u>- react form validation using Formik & Yup </h5><br /><br />
            <div className="container mt-3">
            <img src={react_form_image} alt="react form" style={{height: '150px', width: '450px'}} />
                <div className='row'>
                    <div className='col-md-5'>
                        <Formik
                            initialValues={{
                                firstname: '',
                                lastname: '',
                                email: '',
                                password: '',
                                confirmpassword: ''
                            }}
                            validationSchema={validate}
                            onSubmit={values => {
                                console.log(values)
                            }}
                        >
                            {formik => (
                                <div>
                                    <h1 className='my-4 font-weight-bold .display-4'>Sign Up</h1>
                                    <Form>
                                        <TextField label="First Name" name="firstname" type="text" />
                                        <TextField label="Last Name" name="lastname" type="text" />
                                        <TextField label="Email" name="email" type="email" />
                                        <TextField label="Password" name="password" type="password" />
                                        <TextField label="Confirm Password" name="confirmpassword" type="password" />
                                        <button className='btn btn-dark mt-3' type='submit'>Submit</button>&nbsp;&nbsp;
                                        <button className='btn btn-danger mt-3 ml-3' type='reset'>Reset</button>
                                    </Form>
                                </div>
                            )}
                        </Formik>
                    </div>
                </div>
            </div>
        </>
    )
}
