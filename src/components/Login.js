/**
 * Created by Sherlock on 16.05.2021.
 */

import React from 'react';
import {AvField, AvForm} from "availity-reactstrap-validation";

const Login = (props) => {

    const loginUser = (event, errors, values) => {
        if (localStorage.getItem("email") === values.email && localStorage.getItem("password") === values.password){
            localStorage.setItem("logged", true);
            props.history.push("/profile");
        }
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-4 mt-3 offset-4">
                    <div className="card">
                        <div className="card-body">
                            <AvForm onSubmit={loginUser}>

                                <AvField type="email" name="email" placeholder="Email"/>

                                <AvField type="password" name="password" placeholder="Password"/>

                                <button type="submit" className="btn btn-success mt-3 d-block ml-auto">Register</button>
                            </AvForm>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;