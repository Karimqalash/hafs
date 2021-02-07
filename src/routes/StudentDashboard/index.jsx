// External dependencies
import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Navigation from './../../components/Navigation';
import StudentDashboardPage from '../../components/StudentDashboardPage';
import Footer from './../../components/Footer';
import StudentHomeWorkPage from "../../components/StudentHomeWorkPage";
import StudentHomeWorkSinglePage from "../../components/StudentHomeWorkSinglePage";

const StudentDashboard = () => (
        <div className="page-container">
            <Navigation />
            <div className="dashboard">
                <Switch>
                    <Route exact path='/student-dashboard' component={StudentDashboardPage} />
                    <Route path='/student-dashboard/homework/:id' component={StudentHomeWorkSinglePage} />
                    <Route path='/student-dashboard/homework' component={StudentHomeWorkPage} />
                </Switch>
            </div>
            <Footer />
        </div>
);

export default StudentDashboard;