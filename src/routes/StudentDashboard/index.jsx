// External dependencies
import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Navigation from './../../components/Navigation';
import StudentDashboardPage from '../../components/StudentDashboardPage';
import HomeWorkPage from './../../components/HomeWorkPage';
import Footer from './../../components/Footer';
import HomeWorkTypePage from "../../components/HomeWorkTypePage";
import StudentHomeWorkPage from "../../components/StudentHomeWorkPage";
import HomeWorkSinglePage from "../../components/HomeWorkSinglePage";

const StudentDashboard = () => (
        <div className="page-container">
            <Navigation />
            <div className="dashboard">
                <Switch>
                    <Route exact path='/student-dashboard' component={StudentDashboardPage} />
                    <Route path='/student-dashboard/homework/tajweed' component={HomeWorkTypePage} />
                    <Route path='/student-dashboard/homework/:id' component={HomeWorkSinglePage} />
                    <Route path='/student-dashboard/homework' component={StudentHomeWorkPage} />
                </Switch>
            </div>
            <Footer />
        </div>
);

export default StudentDashboard;