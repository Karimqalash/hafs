import React ,  { useState } from 'react';
import AudioPlayer from "react-h5-audio-player";

const TeamCard = ({ homepage }) => {


    const [ShowTeacherInfo, setShowTeacherInfo] = useState(false);



    return (
        <div className={"team__card " + (ShowTeacherInfo == true ? 'active' : '')}>
            <div className="teacher-short-info" onClick={() => setShowTeacherInfo(!ShowTeacherInfo)}>
                <div className="team__card--image">
                    <img src="https://via.placeholder.com/90" alt="user"/>
                </div>
                <div className="team__card--text">
                    <span className="team__card--name">Mohammed Magdy</span>
                    <span className="team__card--gender"> - Male</span>
                    <p className="team__card--description">
                        * Assalamu Alikum. I'm a professional Quran teacher. I have been teaching Quran since my student life. I can teach Recitation, Hifz, Tajweed and Arabic Language
                    </p>
                    <ul className="team__card--list">
                        <span className="team__card--title">I Can Teach: </span>
                        <li>Quran memorization</li>
                        <li>Tajweed</li>
                        <li>Arabic</li>
                    </ul>
                    <ul className="team__card--list">
                        <span className="team__card--title">Languages: </span>
                        <li>Arabic</li>
                        <li>English</li>
                        <li>Hindi</li>
                    </ul>
                    <div className="team__card--group">
                        <span className="team__card--title">Hourly Rate: </span>
                        <span className="team__card--detail">10.00$</span>
                    </div>
                    <div className="team__card--group">
                        <span className="team__card--title">Conducted: </span>
                        <span className="team__card--detail">3350 Sessions</span>
                    </div>
                    <div className="team__card--group">
                        <span className="team__card--title">Last online: </span>
                        <span className="team__card--detail">1 day ago</span>
                    </div>
                    <div className="team__card--group">
                        <span className="team__card--title">Taught: </span>
                        <span className="team__card--detail">20 Students</span>
                    </div>
                    <div className="team__card--group">
                        <span className="team__card--title">Time zone: </span>
                        <span className="team__card--detail">Africa</span>
                    </div>
                </div>
            </div>
            {!homepage && (

                <div className="teacher-all-info">
                    <div className="teacher-all-info-content">
                        <div className="teacher-all-info-header d-flex justify-content-between align-items-center flex-wrap">
                            <div className="d-flex align-items-center">
                                <div className="team__card--image">
                                    <img className="mb-0"  src="https://via.placeholder.com/90" alt="user"/>
                                </div>
                                <div className="teacher-name-gender">
                                    <span className="team__card--name">Mohammed Magdy</span>
                                    <span className="team__card--gender d-block"> Male</span>
                                </div>
                            </div>
                            <div className="d-flex header-action-btn">
                                <button className="main-btn main-btn-primary">Send invitation</button>
                                <button className="main-btn main-btn-light ml-1">Message</button>
                            </div>
                        </div>
                        <div className="d-flex justify-content-end hour-price">
                            <span>Hourly Rate :</span>
                            <span className="price">10.00$</span>
                        </div>
                        <div className="team__card--text">
                            <p className="team__card--description">
                                Assalamu Alikum. I'm Md. Iqbal hossain, I'm a professional Quran teacher in Qutor. I have been teaching Quran since my student life. I can teach Recitation, Hifz, Tajweed and Arabic Language. I have taught many students all over the world online & face to face. Insha Allah within a short time i will take you from zero level to smart level in a pretty way.
                                <br/><br/>
                                Education :
                                I memorized the holy Quran , then completed a short course on the Arabic language, after which I completed an intensive study of the Holy Quran Majid's Tafseer and Hadith, then I received a B.A Honurs degree from the University of Chittagong on Arabic Language and Literature. I Completed my Graduation degree in 2016 & an M. A degree in the same language in 2017, I completed my Islamic studies in 2018, I can give myself and others a good incentive that acts as a spread.
                            </p>
                            <ul className="team__card--list">
                                <span className="team__card--title">I Can Teach: </span>
                                <li>Quran memorization</li>
                                <li>Tajweed</li>
                                <li>Arabic</li>
                            </ul>
                            <ul className="team__card--list">
                                <span className="team__card--title">Languages: </span>
                                <li>Arabic</li>
                                <li>English</li>
                                <li>Hindi</li>
                            </ul>
                            <div className="team__card--group">
                                <span className="team__card--title">Hourly Rate: </span>
                                <span className="team__card--detail">10.00$</span>
                            </div>
                            <div className="team__card--group">
                                <span className="team__card--title">Conducted: </span>
                                <span className="team__card--detail">3350 Sessions</span>
                            </div>
                            <div className="team__card--group">
                                <span className="team__card--title">Last online: </span>
                                <span className="team__card--detail">1 day ago</span>
                            </div>
                            <div className="team__card--group">
                                <span className="team__card--title">Taught: </span>
                                <span className="team__card--detail">20 Students</span>
                            </div>
                            <div className="team__card--group">
                                <span className="team__card--title">Time zone: </span>
                                <span className="team__card--detail">Africa</span>
                            </div>
                        </div>
                    </div>
                    <div className="teacher-all-info-content">
                        <p className="team__card--title">Recitation: </p>
                        <div className="audio-item">
                            <div className="audio-wrapper-item">
                                <AudioPlayer
                                    src="https://server6.mp3quran.net/abkr/001.mp3"
                                    layout="horizontal"
                                    customAdditionalControls={[]}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="teacher-all-info-content">
                        <p className="team__card--title">Schedule ( select a date and time suitable for you )</p>
                    </div>
                    <div className="teacher-all-info-content">
                        <p className="team__card--title">Certifications </p>
                        <p className="team__card--description mb-0">This teacher didn't add any certifications yes </p>
                    </div>
                    <div className="teacher-all-info-content">
                        <div className="d-flex justify-content-between align-items-center feedback-header flex-wrap">
                            <p className="team__card--title mb-0">Feedback & Rating</p>
                            <form action="" className="d-flex align-items-center">
                                <label>Show teacher feedback for</label>
                                <select name="" id="" className="feedback-select">
                                    <option value="">ALL</option>
                                </select>
                            </form>
                        </div>
                        <div className="d-flex justify-content-between feedback-body">
                            <ul className="feedback-list list-unstyled">
                                <li>
                                    <span className="list-title">Taught</span>
                                    <span>Recitation, Arabic, Hifz, Tajweed</span>
                                </li>
                                <li>
                                    <span className="list-title">Duration</span>
                                    <span>10 Oct -20 Oct 2020 </span>
                                </li>
                                <li>
                                    <span className="list-title">User feedback</span>
                                    <span>Excellent, my kids were engaged during the class. </span>
                                </li>
                            </ul>
                            <ul className="stars-rating-list list-inline">
                                <li className="list-inline-item">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="22.495" height="23.048" viewBox="0 0 22.495 23.048">
                                        <path id="Polygon_4" data-name="Polygon 4" d="M9.407,0l3.386,5.263,6.02,1.615-3.927,4.868.334,6.261L9.407,15.752,3.593,18.007l.334-6.261L0,6.878,6.02,5.263Z" transform="translate(0 18.085) rotate(-74)" fill="#4385a7" opacity="0.963"/>
                                    </svg>
                                </li>
                                <li className="list-inline-item">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="22.495" height="23.048" viewBox="0 0 22.495 23.048">
                                        <path id="Polygon_4" data-name="Polygon 4" d="M9.407,0l3.386,5.263,6.02,1.615-3.927,4.868.334,6.261L9.407,15.752,3.593,18.007l.334-6.261L0,6.878,6.02,5.263Z" transform="translate(0 18.085) rotate(-74)" fill="#4385a7" opacity="0.963"/>
                                    </svg>
                                </li>
                                <li className="list-inline-item">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="22.495" height="23.048" viewBox="0 0 22.495 23.048">
                                        <path id="Polygon_4" data-name="Polygon 4" d="M9.407,0l3.386,5.263,6.02,1.615-3.927,4.868.334,6.261L9.407,15.752,3.593,18.007l.334-6.261L0,6.878,6.02,5.263Z" transform="translate(0 18.085) rotate(-74)" fill="#4385a7" opacity="0.963"/>
                                    </svg>
                                </li>
                                <li className="list-inline-item">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="22.495" height="23.048" viewBox="0 0 22.495 23.048">
                                        <path id="Polygon_31" data-name="Polygon 31" d="M9.407,0l3.386,5.263,6.02,1.615-3.927,4.868.334,6.261L9.407,15.752,3.593,18.007l.334-6.261L0,6.878,6.02,5.263Z" transform="translate(0 18.085) rotate(-74)" fill="#a5a5a5" opacity="0.963"/>
                                    </svg>
                                </li>
                                <li className="list-inline-item">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="22.495" height="23.048" viewBox="0 0 22.495 23.048">
                                        <path id="Polygon_31" data-name="Polygon 31" d="M9.407,0l3.386,5.263,6.02,1.615-3.927,4.868.334,6.261L9.407,15.752,3.593,18.007l.334-6.261L0,6.878,6.02,5.263Z" transform="translate(0 18.085) rotate(-74)" fill="#a5a5a5" opacity="0.963"/>
                                    </svg>
                                </li>
                            </ul>
                        </div>
                        <div className="d-flex justify-content-between feedback-body">
                            <ul className="feedback-list list-unstyled">
                                <li>
                                    <span className="list-title">Taught</span>
                                    <span>Recitation, Arabic, Hifz, Tajweed</span>
                                </li>
                                <li>
                                    <span className="list-title">Duration</span>
                                    <span>10 Oct -20 Oct 2020 </span>
                                </li>
                                <li>
                                    <span className="list-title">User feedback</span>
                                    <span>Excellent, my kids were engaged during the class. </span>
                                </li>
                            </ul>
                            <ul className="stars-rating-list list-inline">
                                <li className="list-inline-item">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="22.495" height="23.048" viewBox="0 0 22.495 23.048">
                                        <path id="Polygon_4" data-name="Polygon 4" d="M9.407,0l3.386,5.263,6.02,1.615-3.927,4.868.334,6.261L9.407,15.752,3.593,18.007l.334-6.261L0,6.878,6.02,5.263Z" transform="translate(0 18.085) rotate(-74)" fill="#4385a7" opacity="0.963"/>
                                    </svg>
                                </li>
                                <li className="list-inline-item">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="22.495" height="23.048" viewBox="0 0 22.495 23.048">
                                        <path id="Polygon_4" data-name="Polygon 4" d="M9.407,0l3.386,5.263,6.02,1.615-3.927,4.868.334,6.261L9.407,15.752,3.593,18.007l.334-6.261L0,6.878,6.02,5.263Z" transform="translate(0 18.085) rotate(-74)" fill="#4385a7" opacity="0.963"/>
                                    </svg>
                                </li>
                                <li className="list-inline-item">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="22.495" height="23.048" viewBox="0 0 22.495 23.048">
                                        <path id="Polygon_4" data-name="Polygon 4" d="M9.407,0l3.386,5.263,6.02,1.615-3.927,4.868.334,6.261L9.407,15.752,3.593,18.007l.334-6.261L0,6.878,6.02,5.263Z" transform="translate(0 18.085) rotate(-74)" fill="#4385a7" opacity="0.963"/>
                                    </svg>
                                </li>
                                <li className="list-inline-item">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="22.495" height="23.048" viewBox="0 0 22.495 23.048">
                                        <path id="Polygon_31" data-name="Polygon 31" d="M9.407,0l3.386,5.263,6.02,1.615-3.927,4.868.334,6.261L9.407,15.752,3.593,18.007l.334-6.261L0,6.878,6.02,5.263Z" transform="translate(0 18.085) rotate(-74)" fill="#a5a5a5" opacity="0.963"/>
                                    </svg>
                                </li>
                                <li className="list-inline-item">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="22.495" height="23.048" viewBox="0 0 22.495 23.048">
                                        <path id="Polygon_31" data-name="Polygon 31" d="M9.407,0l3.386,5.263,6.02,1.615-3.927,4.868.334,6.261L9.407,15.752,3.593,18.007l.334-6.261L0,6.878,6.02,5.263Z" transform="translate(0 18.085) rotate(-74)" fill="#a5a5a5" opacity="0.963"/>
                                    </svg>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default TeamCard;