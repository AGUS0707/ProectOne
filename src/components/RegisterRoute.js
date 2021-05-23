/**
 * Created by Sherlock on 16.05.2021.
 */

import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import NotFound from "./NotFound";
import Register from "./Register";
import Login from "./Login";
import Profile from "./Profile";
import PrivateRoute from "./PrivateRoute";

const RegisterRoute = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/register" component={Register}/>
                <Route path="/login" component={Login}/>
                <PrivateRoute path="/profile" component={Profile}/>
                <Route component={NotFound}/>
            </Switch>
        </BrowserRouter>
    );
};

export default RegisterRoute;