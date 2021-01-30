import React from 'react';
import StudentDashboardSidebar from '../StudentDashboardSidebar';
import {Link, Route, Switch} from "react-router-dom";


const StudentHomeWorkPage = () => (
    <div className='dashboard-page dashboard-with-sidebar'>
        <StudentDashboardSidebar />

        <div className="dashboard-content-page">
            <div className="dsh-head">
                <h3 className="dsh-title">HOME WORK</h3>
                <p className="dash-p">You have 3 homework to do</p>
            </div>
            <div className="dsh-body">
                <ul className="homework-list list-unstyled">
                    <li className='homework-item'>
                        <div className="teacher-info">
                            <div className="teacher-photo">
                                <img src="/img/st7.png" alt="student photo" className="img-fluid"/>
                            </div>
                            <div className="info-content">
                                <p className="homework-name">Tajweed</p>
                                <div className="teacher-name">
                                    <span>With</span>
                                    Mohamed Magdy
                                </div>
                            </div>
                        </div>
                        <div className="homework-info">
                            <p className="homework-date">
                                <span>You can do this home work till </span>
                                15 , Nov at 1.30 Pm
                            </p>
                            <a href="#" className="start-btn">Start now</a>
                        </div>
                    </li>
                    <li className='homework-item'>
                        <div className="teacher-info">
                            <div className="teacher-photo">
                                <img src="/img/st7.png" alt="student photo" className="img-fluid"/>
                            </div>
                            <div className="info-content">
                                <p className="homework-name">Tajweed</p>
                                <div className="teacher-name">
                                    <span>With</span>
                                    Mohamed Magdy
                                </div>
                            </div>
                        </div>
                        <div className="homework-info">
                            <p className="homework-date">
                                <span>You can do this home work till </span>
                                15 , Nov at 1.30 Pm
                            </p>
                            <a href="#" className="start-btn">Start now</a>
                        </div>
                    </li>
                    <li className='homework-item'>
                        <div className="teacher-info">
                            <div className="teacher-photo">
                                <img src="/img/st7.png" alt="student photo" className="img-fluid"/>
                            </div>
                            <div className="info-content">
                                <p className="homework-name">Tajweed</p>
                                <div className="teacher-name">
                                    <span>With</span>
                                    Mohamed Magdy
                                </div>
                            </div>
                        </div>
                        <div className="homework-info">
                            <p className="homework-date">
                                <span>You can do this home work till </span>
                                15 , Nov at 1.30 Pm
                            </p>
                            <a href="#" className="start-btn">Start now</a>
                        </div>
                    </li>
                </ul>

            </div>
        </div>

    </div>
)

export default StudentHomeWorkPage;