import React from 'react';
import { Form, Button } from 'react-bootstrap';
import TeamCard from '../HomeContent/TeamCard';
import {Link} from "react-router-dom";

const SingleTeacher = () => (
    <section className="find-teacher">
        <div className="container">
            <div className="row">
                <div className="col-lg-8">
                    <div className="recommended-students single-teacher">
                        <div className="st-item-card">
                            <div className="st-card-head">
                                <div className="st-info">
                                    <div className="st-avatar-box">
                                        <Link to="#">
                                            <img className="img-fluid" src="/img/st5.png" alt="Student Avatar"/>
                                        </Link>
                                    </div>
                                    <div className="st-info-details">
                                        <h5 className="mb-0">
                                            <Link to="#" className="st-name">
                                                Hamza Mohamed
                                            </Link>
                                        </h5>
                                        <span className="st-gender">Male</span>
                                    </div>
                                </div>
                                <div className="st-actions-list d-flex align-items-baseline">
                                    <button className="main-btn trans-main-btn mr-2">Send invitation</button>
                                    <Link to="#" className="main-icon-btn">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="18" viewBox="0 0 20 18">
                                            <path data-name="Path 2107" d="M14.525,0H5.456A5.533,5.533,0,0,0,0,5.859v6.282A5.533,5.533,0,0,0,5.456,18h9.061a5.522,5.522,0,0,0,4-1.773A5.6,5.6,0,0,0,19.989,12.1V5.859A5.557,5.557,0,0,0,14.525,0ZM5.456,1.528h9.052A4,4,0,0,1,17.4,2.816a4.064,4.064,0,0,1,1.072,3v6.327A4.1,4.1,0,0,1,17.4,15.184a4,4,0,0,1-2.894,1.287H5.456a4.018,4.018,0,0,1-3.939-4.331V5.859A4.018,4.018,0,0,1,5.456,1.528Zm10.568,4.11a.755.755,0,0,0-1.066-.119l-4.1,3.3-.118.083A1.379,1.379,0,0,1,9.16,8.818l-4.129-3.3-.093-.064a.755.755,0,0,0-.973.187.768.768,0,0,0,.123,1.074l4.134,3.3.161.118a2.889,2.889,0,0,0,3.416-.114l4.107-3.311.082-.077A.768.768,0,0,0,16.024,5.638Z" fill="#fff" fill-rule="evenodd"/>
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                            <div className="st-wants">
                                <p>Want to Teach :</p>
                                <ul className="list-unstyled list-inline">
                                    <li className="list-inline-item">
                                        <span className="ct-name">Quran memorization</span>
                                    </li>
                                    <li className="list-inline-item">
                                        <span className="ct-name">Tajweed</span>
                                    </li>
                                    <li className="list-inline-item">
                                        <span className="ct-name">Arabic</span>
                                    </li>
                                </ul>
                            </div>
                            <ul className="st-info-list list-unstyled d-flex">
                                <li>
                                    <span>Age :</span>
                                    <span>10 years old</span>
                                </li>
                                <li>
                                    <span>Country :</span>
                                    <span>Egypt</span>
                                </li>
                                <li>
                                    <span>Time zone :</span>
                                    <span>10.00$</span>
                                </li>
                            </ul>
                        </div>
                        <div className="st-item-card">
                            <div className="st-card-head">
                                <div className="st-info">
                                    <div className="st-avatar-box">
                                        <Link to="#">
                                            <img className="img-fluid" src="/img/st4.png" alt="Student Avatar"/>
                                        </Link>
                                    </div>
                                    <div className="st-info-details">
                                        <h5 className="mb-0">
                                            <Link to="#" className="st-name">
                                                Mona Ahmed
                                            </Link>
                                        </h5>
                                        <span className="st-gender">Male</span>
                                    </div>
                                </div>
                                <div className="st-actions-list d-flex align-items-baseline">
                                    <button className="main-btn trans-main-btn mr-2">Send invitation</button>
                                    <Link to="#" className="main-icon-btn">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="18" viewBox="0 0 20 18">
                                            <path data-name="Path 2107" d="M14.525,0H5.456A5.533,5.533,0,0,0,0,5.859v6.282A5.533,5.533,0,0,0,5.456,18h9.061a5.522,5.522,0,0,0,4-1.773A5.6,5.6,0,0,0,19.989,12.1V5.859A5.557,5.557,0,0,0,14.525,0ZM5.456,1.528h9.052A4,4,0,0,1,17.4,2.816a4.064,4.064,0,0,1,1.072,3v6.327A4.1,4.1,0,0,1,17.4,15.184a4,4,0,0,1-2.894,1.287H5.456a4.018,4.018,0,0,1-3.939-4.331V5.859A4.018,4.018,0,0,1,5.456,1.528Zm10.568,4.11a.755.755,0,0,0-1.066-.119l-4.1,3.3-.118.083A1.379,1.379,0,0,1,9.16,8.818l-4.129-3.3-.093-.064a.755.755,0,0,0-.973.187.768.768,0,0,0,.123,1.074l4.134,3.3.161.118a2.889,2.889,0,0,0,3.416-.114l4.107-3.311.082-.077A.768.768,0,0,0,16.024,5.638Z" fill="#fff" fill-rule="evenodd"/>
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                            <div className="st-wants">
                                <p>Want to Teach :</p>
                                <ul className="list-unstyled list-inline">
                                    <li className="list-inline-item">
                                        <span className="ct-name">Quran memorization</span>
                                    </li>
                                    <li className="list-inline-item">
                                        <span className="ct-name">Tajweed</span>
                                    </li>
                                    <li className="list-inline-item">
                                        <span className="ct-name">Arabic</span>
                                    </li>
                                </ul>
                            </div>
                            <ul className="st-info-list list-unstyled d-flex">
                                <li>
                                    <span>Age :</span>
                                    <span>10 years old</span>
                                </li>
                                <li>
                                    <span>Country :</span>
                                    <span>Egypt</span>
                                </li>
                                <li>
                                    <span>Time zone :</span>
                                    <span>10.00$</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
)

export default SingleTeacher;