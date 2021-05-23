/**
 * Created by Sherlock on 16.05.2021.
 */

import React from 'react';
import {AvForm, AvField} from "availity-reactstrap-validation";

const Register = (props) => {

    const registerUser = (event, errors, values) => {
        localStorage.setItem("firstname", values.firstname)
        localStorage.setItem("lastname", values.lastname)
        localStorage.setItem("password", values.password)
        localStorage.setItem("email", values.email)

        props.history.push("/login")
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-4 mt-3 offset-4">
                    <div className="card">
                        <div className="card-body">
                            <AvForm onSubmit={registerUser}>
                                <AvField type="text" name="firstname" placeholder="Firstname"/>

                                <AvField type="text" name="lastname" placeholder="Lastname"/>

                                <AvField type="password" name="password" placeholder="Password"/>

                                <AvField type="email" name="email" placeholder="Email"/>

                                <button type="submit" className="btn btn-success mt-3 d-block ml-auto">Register</button>
                            </AvForm>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;