import React, {useState} from 'react';
import StudentDashboardSidebar from '../StudentDashboardSidebar';
import {Carousel, Form, Nav} from "react-bootstrap";
import {Link} from "react-router-dom";


const StudentDashboardPage = () => {
    const [tab, setTab] = useState("1");
    const renderTab = tabKey => {
        switch (tabKey) {
            case "1":
                return (
                    <div className="mydash-booking-wrapper booking-students">
                        <div className="booking-student-card align-items-start">
                            <div className="st-avatar">
                                <img className="img-fluid" src="/img/st6.png" alt="Student Avatar"/>
                            </div>
                            <p className="st-booking-details">
                                <strong>Mohammed Magdy</strong> <br/> Teacher has agreed for teaching <br/> <span>Tajweed</span>  On <span>Sat 15 , Nov</span>  At <span>12.30 Pm</span>
                            </p>
                            <small className="text-success font-weight-bold">
                                Agreed
                            </small>
                        </div>
                        <div className="booking-student-card align-items-start">
                            <div className="st-avatar">
                                <img className="img-fluid" src="/img/st7.png" alt="Student Avatar"/>
                            </div>
                            <p className="st-booking-details">
                                <strong>Mohammed Magdy</strong> <br/> Teacher has agreed for teaching <br/> <span>Tajweed</span>  On <span>Sat 15 , Nov</span>  At <span>12.30 Pm</span>
                            </p>
                            <small className="text-success font-weight-bold">
                                Agreed
                            </small>
                        </div>
                    </div>
                );
            case "2":
                return (
                    <div className="mydash-booking-wrapper booking-students">
                        <div className="booking-student-card">
                            <div className="st-avatar">
                                <img className="img-fluid" src="/img/st6.png" alt="Student Avatar"/>
                            </div>
                            <p className="st-booking-details">
                                <strong>Mohammed Magdy</strong> in <span>Tajweed</span> <br/>  from <span>Sat 15 , Nov</span>  to <span>Sat 22 , Nov</span>
                            </p>
                            <Link to="#" className="main-icon-btn">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="18" viewBox="0 0 20 18">
                                    <path data-name="Path 2107" d="M14.525,0H5.456A5.533,5.533,0,0,0,0,5.859v6.282A5.533,5.533,0,0,0,5.456,18h9.061a5.522,5.522,0,0,0,4-1.773A5.6,5.6,0,0,0,19.989,12.1V5.859A5.557,5.557,0,0,0,14.525,0ZM5.456,1.528h9.052A4,4,0,0,1,17.4,2.816a4.064,4.064,0,0,1,1.072,3v6.327A4.1,4.1,0,0,1,17.4,15.184a4,4,0,0,1-2.894,1.287H5.456a4.018,4.018,0,0,1-3.939-4.331V5.859A4.018,4.018,0,0,1,5.456,1.528Zm10.568,4.11a.755.755,0,0,0-1.066-.119l-4.1,3.3-.118.083A1.379,1.379,0,0,1,9.16,8.818l-4.129-3.3-.093-.064a.755.755,0,0,0-.973.187.768.768,0,0,0,.123,1.074l4.134,3.3.161.118a2.889,2.889,0,0,0,3.416-.114l4.107-3.311.082-.077A.768.768,0,0,0,16.024,5.638Z" fill="#fff" fill-rule="evenodd"/>
                                </svg>
                            </Link>
                        </div>
                        <div className="booking-student-card">
                            <div className="st-avatar">
                                <img className="img-fluid" src="/img/st7.png" alt="Student Avatar"/>
                            </div>
                            <p className="st-booking-details">
                                <strong>Mohammed Magdy</strong> in <span>Tajweed</span> <br/>  from <span>Sat 15 , Nov</span>  to <span>Sat 22 , Nov</span>
                            </p>
                            <Link to="#" className="main-icon-btn">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="18" viewBox="0 0 20 18">
                                    <path data-name="Path 2107" d="M14.525,0H5.456A5.533,5.533,0,0,0,0,5.859v6.282A5.533,5.533,0,0,0,5.456,18h9.061a5.522,5.522,0,0,0,4-1.773A5.6,5.6,0,0,0,19.989,12.1V5.859A5.557,5.557,0,0,0,14.525,0ZM5.456,1.528h9.052A4,4,0,0,1,17.4,2.816a4.064,4.064,0,0,1,1.072,3v6.327A4.1,4.1,0,0,1,17.4,15.184a4,4,0,0,1-2.894,1.287H5.456a4.018,4.018,0,0,1-3.939-4.331V5.859A4.018,4.018,0,0,1,5.456,1.528Zm10.568,4.11a.755.755,0,0,0-1.066-.119l-4.1,3.3-.118.083A1.379,1.379,0,0,1,9.16,8.818l-4.129-3.3-.093-.064a.755.755,0,0,0-.973.187.768.768,0,0,0,.123,1.074l4.134,3.3.161.118a2.889,2.889,0,0,0,3.416-.114l4.107-3.311.082-.077A.768.768,0,0,0,16.024,5.638Z" fill="#fff" fill-rule="evenodd"/>
                                </svg>
                            </Link>
                        </div>
                    </div>
                );

            default:
                break;
        }
    }
    return (
    <div className='dashboard-page dashboard-with-sidebar'>
        <StudentDashboardSidebar />
        <div className="dashboard-content-page p-0">
            <div className="mydsh-wrapper">

                <div className="mydash-classes">
                    <div className="dsh-head-with-btn">
                        <h3 className="dsh-title">Ongoing sessions</h3>
                    </div>
                    <div className="ongoing-sessions">
                        <div className="next-session-alert">
                            You have class will start Tomorrow
                        </div>
                        <ul className="ongoing-session-list list-unstyled">
                            <li className="session-item">
                                <div className="session-info">
                                    <div className="teacher-photo">
                                        <img src="/img/st5.png" alt="teacher photo" className="img-fluid"/>
                                    </div>
                                    <div className="session-info-content">
                                        <p className="session-subtitle">Teacher</p>
                                        <p className="session-title">Mohamed Magdy</p>
                                    </div>
                                    <div className="session-info-content">
                                        <p className="session-subtitle">Lesson</p>
                                        <p className="session-title">Tajweed</p>
                                    </div>
                                    <div className="session-info-content">
                                        <p className="session-subtitle">Next session </p>
                                        <p className="session-title time">10 h 50 min</p>
                                    </div>
                                </div>
                                <a href="#" className="session-btn">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="18" viewBox="0 0 20 18">
                                        <path id="Path_2107" data-name="Path 2107" d="M14.525,0H5.456A5.533,5.533,0,0,0,0,5.859v6.282A5.533,5.533,0,0,0,5.456,18h9.061a5.522,5.522,0,0,0,4-1.773A5.6,5.6,0,0,0,19.989,12.1V5.859A5.557,5.557,0,0,0,14.525,0ZM5.456,1.528h9.052A4,4,0,0,1,17.4,2.816a4.064,4.064,0,0,1,1.072,3v6.327A4.1,4.1,0,0,1,17.4,15.184a4,4,0,0,1-2.894,1.287H5.456a4.018,4.018,0,0,1-3.939-4.331V5.859A4.018,4.018,0,0,1,5.456,1.528Zm10.568,4.11a.755.755,0,0,0-1.066-.119l-4.1,3.3-.118.083A1.379,1.379,0,0,1,9.16,8.818l-4.129-3.3-.093-.064a.755.755,0,0,0-.973.187.768.768,0,0,0,.123,1.074l4.134,3.3.161.118a2.889,2.889,0,0,0,3.416-.114l4.107-3.311.082-.077A.768.768,0,0,0,16.024,5.638Z" fill="#fff" fill-rule="evenodd"/>
                                    </svg>

                                </a>
                            </li>
                            <li className="session-item">
                                <div className="session-info">
                                    <div className="teacher-photo">
                                        <img src="/img/st4.png" alt="teacher photo" className="img-fluid"/>
                                    </div>
                                    <div className="session-info-content">
                                        <p className="session-subtitle">Teacher</p>
                                        <p className="session-title">Mona Ahmed</p>
                                    </div>
                                    <div className="session-info-content">
                                        <p className="session-subtitle">Lesson</p>
                                        <p className="session-title">Tajweed</p>
                                    </div>
                                    <div className="session-info-content">
                                        <p className="session-subtitle">Next session </p>
                                        <p className="session-title coming-soon">This session will start in 6 h</p>
                                    </div>
                                </div>
                                <a href="#" className="session-btn">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="18" viewBox="0 0 20 18">
                                        <path id="Path_2107" data-name="Path 2107" d="M14.525,0H5.456A5.533,5.533,0,0,0,0,5.859v6.282A5.533,5.533,0,0,0,5.456,18h9.061a5.522,5.522,0,0,0,4-1.773A5.6,5.6,0,0,0,19.989,12.1V5.859A5.557,5.557,0,0,0,14.525,0ZM5.456,1.528h9.052A4,4,0,0,1,17.4,2.816a4.064,4.064,0,0,1,1.072,3v6.327A4.1,4.1,0,0,1,17.4,15.184a4,4,0,0,1-2.894,1.287H5.456a4.018,4.018,0,0,1-3.939-4.331V5.859A4.018,4.018,0,0,1,5.456,1.528Zm10.568,4.11a.755.755,0,0,0-1.066-.119l-4.1,3.3-.118.083A1.379,1.379,0,0,1,9.16,8.818l-4.129-3.3-.093-.064a.755.755,0,0,0-.973.187.768.768,0,0,0,.123,1.074l4.134,3.3.161.118a2.889,2.889,0,0,0,3.416-.114l4.107-3.311.082-.077A.768.768,0,0,0,16.024,5.638Z" fill="#fff" fill-rule="evenodd"/>
                                    </svg>
                                </a>
                            </li>
                            <li className="session-item">
                                <div className="session-info">
                                    <div className="teacher-photo">
                                        <img src="/img/st6.png" alt="teacher photo" className="img-fluid"/>
                                    </div>
                                    <div className="session-info-content">
                                        <p className="session-subtitle">Teacher</p>
                                        <p className="session-title">Mohamed Magdy</p>
                                    </div>
                                    <div className="session-info-content">
                                        <p className="session-subtitle">Lesson</p>
                                        <p className="session-title">Tajweed</p>
                                    </div>
                                    <div className="session-info-content">
                                        <p className="session-subtitle">Next session </p>
                                        <p className="session-title time">10 h 50 min</p>
                                    </div>
                                </div>
                                <a href="#" className="session-btn">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="18" viewBox="0 0 20 18">
                                        <path id="Path_2107" data-name="Path 2107" d="M14.525,0H5.456A5.533,5.533,0,0,0,0,5.859v6.282A5.533,5.533,0,0,0,5.456,18h9.061a5.522,5.522,0,0,0,4-1.773A5.6,5.6,0,0,0,19.989,12.1V5.859A5.557,5.557,0,0,0,14.525,0ZM5.456,1.528h9.052A4,4,0,0,1,17.4,2.816a4.064,4.064,0,0,1,1.072,3v6.327A4.1,4.1,0,0,1,17.4,15.184a4,4,0,0,1-2.894,1.287H5.456a4.018,4.018,0,0,1-3.939-4.331V5.859A4.018,4.018,0,0,1,5.456,1.528Zm10.568,4.11a.755.755,0,0,0-1.066-.119l-4.1,3.3-.118.083A1.379,1.379,0,0,1,9.16,8.818l-4.129-3.3-.093-.064a.755.755,0,0,0-.973.187.768.768,0,0,0,.123,1.074l4.134,3.3.161.118a2.889,2.889,0,0,0,3.416-.114l4.107-3.311.082-.077A.768.768,0,0,0,16.024,5.638Z" fill="#fff" fill-rule="evenodd"/>
                                    </svg>

                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="recommended--booking">
                    <Nav className="recommended--booking-tabs" variant="tabs" activeKey={tab} onSelect={eventKey => setTab(eventKey)}>
                        <Nav.Item>
                            <Nav.Link eventKey="1"  href="">
                                Invites
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="2" href="">
                                Past Teachers
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>

                    {renderTab(tab)}
                </div>
            </div>
        </div>
    </div>
    );
}

export default StudentDashboardPage;