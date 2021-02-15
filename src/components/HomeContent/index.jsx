import React, { useState } from 'react';
import TeamCard from './TeamCard';
import ArticlesContainer from '../ArticlesPage/ArticlesContainer';
import Games from '../GamesPage';
import ContactUs from '../ContactusPage';
import { Button } from 'react-bootstrap';
import CountUp from 'react-countup';

const HomeContent = () => {

    return (
    <div>
        <section className="header">
            <div className="container header__content">
                <h1 className="header__content--title">
                    Hafs <br />Quran
                </h1>
                <h3 className="header__content--think">
                    Think Quran, Think Hafs
                </h3>
                <p className="header__content--paragraph">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio eligendi qui amet quibusdam modi et distinctio soluta.
                </p>
                <div>
                    <a href="/free-session" className='btn btn--primary mr-3'>Free Session</a>
                    <a className='btn btn--light'>Sign up as a teacher</a>
                </div>
            </div>
        </section>
        <section className="board">
            <div className="board__content">
                <h2 className="board__title">
                    HONOR BOARD
                </h2>
                <div className="board__card">
                    <div className="board__first">
                        {/* <img src="img/f-av3.svg" alt="avatar 3"/>
                        <img src="img/Polygon 26.svg" alt="1st place"/>
                        <span>Aya Mohamed</span> */}
                    </div>
                </div>
            </div>
        </section>
        <section className="services">
            <div className="services__content">
                <h2 className="services__title">
                    Hafs Services
                </h2>
                <div className="services__cardContainer">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="services__card">
                                <img src="img/Reading-Only-300x300.png" alt="read only"/>
                                <h3 className="services__card--title">
                                    Read Only
                                </h3>
                                <p className="services__card--paragraph">
                                You can if you wish only recite with a specialist
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="services__card">
                                <img src="img/Tajweed-learning-300x300.png" alt="tajweed"/>
                                <h3 className="services__card--title">
                                    Tajweed
                                </h3>
                                <p className="services__card--paragraph">
                                    Learn pronunciation's rulings used by the holders of Ijazah
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="services__card">
                                <img src="img/group-learning-300x300.png" alt="memorization"/>
                                <h3 className="services__card--title">
                                    Memorization
                                </h3>
                                <p className="services__card--paragraph">
                                    Memorization sessions of the Noble Qur’an with proper rulings and pronunciation.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="services__card">
                                <img src="img/arabic-language-300x300.png" alt="arabic language"/>
                                <h3 className="services__card--title">
                                    Arabic language
                                </h3>
                                <p className="services__card--paragraph">
                                    Learn Arabic starting from the alphabet through the grammatical rules To end up speaking Arabic fluently.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="statistics">
            <div className="statistics__container">
                <h2 className="statistics__title">
                    statistics
                </h2>
                <div className="row">
                    <div className="col-lg-4">
                        <img src="img/teacher.svg" alt="teacher"/>
                        <span><CountUp end={27502} /></span>
                        <p>Teacher</p>
                    </div>
                    <div className="col-lg-4">
                        <img src="img/muslim.svg" alt="muslim"/>
                        <span><CountUp end={15230} /></span>
                        <p>Student</p>
                    </div>
                    <div className="col-lg-4">
                        <img src="img/teaching.svg" alt="teaching"/>
                        <span><CountUp end={6532} /></span>
                        <p>Classroom</p>
                    </div>
                </div>
            </div>
        </section>
        <section className="articles">
            <h2 className="articles__title">
                articles
            </h2>
            <ArticlesContainer view={'short'} />
            <a href="/articles" className="btn--view">View all</a>
        </section>
        <Games />
        <section className="team">
            <h2 className="team__title">
                Our team
            </h2>
            <div className="team__container">
                <div className="row">
                    <div className="col-lg-4">
                        <TeamCard homepage />
                    </div>
                    <div className="col-lg-4">
                        <TeamCard homepage />
                    </div>
                    <div className="col-lg-4">
                        <TeamCard homepage />
                    </div>
                </div>
            </div>
            <a href="" className="btn--view">View all</a>
        </section>
        <ContactUs />
    </div>
    )
}

export default HomeContent;