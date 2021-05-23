/**
 * Created by Sherlock on 16.05.2021.
 */

import React from 'react';
import {Route} from "react-router-dom";
import Hooks from "./Hooks";
import NotFound from "./NotFound";

const PrivateRoute = (props) => {
    return localStorage.getItem("logged") === "true" ?
        <Route {...props}/> :
        <Route component={NotFound}/>
};

export default PrivateRoute;