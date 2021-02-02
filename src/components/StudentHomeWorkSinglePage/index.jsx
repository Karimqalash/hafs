import React from 'react';


const StudentHomeWorkSinglePage = () => {

    return (
        <div className="dashboard-container-fluid st-hw-container">
            <div className="dashboard-main st-single-home-work">
                <div className="st-home-work-header">
                    <div className="home-work-info">
                        <a href="/student-dashboard/homework" className="back-link">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="15.556" viewBox="0 0 16 15.556">
                                <path id="Path_2102" data-name="Path 2102" d="M3.828,7,9.192,1.636,7.778.222,0,8l7.778,7.778,1.414-1.414L3.828,9H16V7Z" transform="translate(0 -0.222)"/>
                            </svg>
                             Back to my dashboard
                        </a>
                        <p className="">
                            <span className="home-work-title">
                                Tajweed
                                <span>Home work</span>
                            </span>
                            <span className="info">
                                <span>You can do this home work till </span>
                                15 , Nov at 1.30 Pm
                            </span>
                            <a href="#" className="do-later-link">Do It Later</a>
                        </p>
                    </div>
                    <a href= '#' className="hom-work-teacher text-center">
                        <div className="teacher-photo">
                            <img src="/img/st7.png" alt="teacher photo" className="img-fluid"/>
                        </div>
                        <p className="teacher-name">Mohamed Magdy</p>
                    </a>
                </div>
                <div className="st-question-body">
                    <div className="question-title">
                        <p className="question-name">Please , answer the following multiple questions</p>
                        <p className="question-number"><span>2</span> / 2 Questions </p>
                    </div>
                    <p className="question">Idgaam shafawee is... *</p>
                    <form action="">
                        <ul className="answers-list list-unstyled">
                            <li>
                                <label className="answer-content">
                                    <input type="radio" name='answer'/>
                                    <span className="custom-answer-radio">
                                        <span className="inner-circle"></span>
                                    </span>
                                    When a meem saakinah is followed by another meem
                                </label>
                            </li>
                            <li>
                                <label className="answer-content right-answer">
                                    <input type="radio" name='answer'/>
                                    <span className="custom-answer-radio">
                                        <span className="inner-circle"></span>
                                    </span>
                                    When meem saakinah is followed by the letter baa
                                </label>
                            </li>
                            <li>
                                <label className="answer-content">
                                    <input type="radio" name='answer'/>
                                    <span className="custom-answer-radio">
                                        <span className="inner-circle"></span>
                                    </span>
                                    When a noon saakinah is followed by laam or raa
                                </label>
                            </li>
                            <li>
                                <label className="answer-content">
                                    <input type="radio" name='answer'/>
                                    <span className="custom-answer-radio">
                                        <span className="inner-circle"></span>
                                    </span>
                                    When a meem saakinah is followed by another meem
                                </label>
                            </li>
                        </ul>
                        <div className="mt-4 d-flex justify-content-between flex-row-reverse">
                            <button type='button' className="main-btn main-btn-primary">Done</button>
                            <button type='button' className="main-btn light-primary-btn">Next</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default StudentHomeWorkSinglePage;