/**
 * Created by Sherlock on 15.05.2021.
 */

import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Employee from "./Employee";
import Hooks from "./Hooks";
import Lifecycle from "./Lifecycle";
import Trello from "./Trello";
import NavBar from "./NavBar";
import Posts from "./Posts";
import PostView from "./PostView";
import NotFound from "./NotFound";
import PrivateRoute from "./PrivateRoute";

const Routing = () => {
    return (
        <BrowserRouter>
            <NavBar/>
            <Switch>
                <Route path="/" exact component={Employee}/>
                {/*<Route path="/hooks" exact component={Hooks}/>*/}
                <PrivateRoute path="/hooks" component={Hooks}/>
                <PrivateRoute path="/lifecycle" exact component={Lifecycle}/>
                <Route path="/trello" exact component={Trello}/>
                <Route path="/posts" exact component={Posts}/>
                {/*Dynamic routing*/}
                <Route path="/posts/:id" exact component={PostView}/>
                <Route component={NotFound}/>
            </Switch>
        </BrowserRouter>
    );
};

export default Routing;