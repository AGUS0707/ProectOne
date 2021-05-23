/**
 * Created by Sherlock on 16.05.2021.
 */

import React from 'react';
import {AvField, AvForm} from "availity-reactstrap-validation";

const Profile = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-4 mt-3 offset-4">
                    <div className="card">
                        <div className="card-header">
                            <h5>
                                {localStorage.getItem("firstname")} {localStorage.getItem("lastname")}
                            </h5>
                        </div>
                        <div className="card-body">
                            {localStorage.getItem("email")}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;