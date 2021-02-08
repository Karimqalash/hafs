// Routes/index.js
// Top level react routing for the application

// Created by: Karim Essam
// Creation date: 1 January 2021

// External dependencies
import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

// internal imports
import Home from './Home';
import Dashboard from './Dashboard';
import FreeSession from './FreeSession';
import FreeSessionDone from './FreeSessionDone';
import Articles from './Articles';
import Pricing from './Pricing';
import Games from './Games';
import FindTeacher from './FindTeacher';
import SingleTeacher from './SingleTeacher';
import Contactus from './Contactus';
import history from './history';
import StudentDashboard from "./StudentDashboard";

// Create a Router context and <Switch> component to render first matched <Route>
export default () => {
    return (
        <Router history={history}>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/student-dashboard" component={StudentDashboard} />
                <Route path="/free-session" component={FreeSession} />
                <Route path="/free-session-done" component={FreeSessionDone} />
                <Route path="/articles" component={Articles} />
                <Route path="/pricing" component={Pricing} />
                <Route path="/games" component={Games} />
                <Route path="/find-teacher" component={FindTeacher} />
                <Route path="/teacher/:id" component={SingleTeacher} />
                <Route path="/contact-us" component={Contactus} />
            </Switch>
        </Router>
    );
};
