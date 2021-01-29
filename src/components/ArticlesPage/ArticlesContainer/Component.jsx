import React, { useState, useEffect } from 'react';
import ArticlesCard from './ArticlesCard';
import VideoCard from './VideoCard';
import { Nav } from 'react-bootstrap';

import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

const Component = props => {
    const { view, articles, getAllArticles } = props;
    const [loaded, setLoaded] = useState(false);
    const [tab, setTab] = useState("1");

    useEffect(() => {
        getAllArticles();
    },[loaded]);

    const renderTab = tabKey => {
        switch (tabKey) {
            case "1":
                if (view==='short') {
                    return (
                        <div className="tab-articles" id="articles">
                            <div className="row">
                                {articles.slice(0,3).map(article => {
                                    return (
                                        <div className="col-lg-4 mb-5">
                                            <ArticlesCard article={article} />
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    );
                }else {
                    return (
                        <div className="tab-articles" id="articles">
                            <div className="row">
                                {articles.map(article => {
                                    return (
                                        <div className="col-lg-4 mb-5">
                                            <ArticlesCard article={article} />
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    );
                }
                break;
            case "2":
                return (
                    <div className="tab-video">
                        <div className="row">
                            <div className="col-lg-4">
                                <VideoCard />
                            </div>
                            <div className="col-lg-4">
                                <VideoCard />
                            </div>
                            <div className="col-lg-4">
                                <VideoCard />
                            </div>
                        </div>
                    </div>
                );

            case "3":
                return (
                    <div className="tab-audio">
                        <div className="audio-list">
                            <div className="audio-item">
                                <h1 className="audio-track-name">
                                    Track name1
                                </h1>
                                <div className="audio-wrapper-item">
                                    <div className="audio-icon-box">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="23.488" height="29.36" viewBox="0 0 23.488 29.36">
                                            <path data-name="Path 2111" d="M11.926,0h-.364A6.426,6.426,0,0,0,5.211,6.5v6.7a6.425,6.425,0,0,0,6.352,6.5h.364a6.425,6.425,0,0,0,6.352-6.5V6.5A6.426,6.426,0,0,0,11.926,0Zm-.364,2.209h.364A4.24,4.24,0,0,1,16.118,6.5v6.7a4.239,4.239,0,0,1-4.191,4.286h-.364A4.239,4.239,0,0,1,7.371,13.2V6.5A4.24,4.24,0,0,1,11.563,2.209Zm10.845,9.9a1.093,1.093,0,0,1,1.08,1.1A11.91,11.91,0,0,1,12.825,25.17v3.086a1.079,1.079,0,0,1-2.151.15l-.01-.15V25.17A11.909,11.909,0,0,1,0,13.21a1.093,1.093,0,0,1,1.08-1.1,1.093,1.093,0,0,1,1.08,1.1,9.693,9.693,0,0,0,9.584,9.8,9.693,9.693,0,0,0,9.584-9.8A1.093,1.093,0,0,1,22.408,12.1Z" fill="#004e6e" fill-rule="evenodd"/>
                                        </svg>
                                    </div>
                                    <AudioPlayer
                                        src="https://server6.mp3quran.net/abkr/001.mp3"
                                        layout="horizontal"
                                        customAdditionalControls={[]}
                                    />
                                </div>
                            </div>

                            <div className="audio-item">
                                <h1 className="audio-track-name">
                                    Track name2
                                </h1>
                                <div className="audio-wrapper-item">
                                    <div className="audio-icon-box">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="23.488" height="29.36" viewBox="0 0 23.488 29.36">
                                            <path data-name="Path 2111" d="M11.926,0h-.364A6.426,6.426,0,0,0,5.211,6.5v6.7a6.425,6.425,0,0,0,6.352,6.5h.364a6.425,6.425,0,0,0,6.352-6.5V6.5A6.426,6.426,0,0,0,11.926,0Zm-.364,2.209h.364A4.24,4.24,0,0,1,16.118,6.5v6.7a4.239,4.239,0,0,1-4.191,4.286h-.364A4.239,4.239,0,0,1,7.371,13.2V6.5A4.24,4.24,0,0,1,11.563,2.209Zm10.845,9.9a1.093,1.093,0,0,1,1.08,1.1A11.91,11.91,0,0,1,12.825,25.17v3.086a1.079,1.079,0,0,1-2.151.15l-.01-.15V25.17A11.909,11.909,0,0,1,0,13.21a1.093,1.093,0,0,1,1.08-1.1,1.093,1.093,0,0,1,1.08,1.1,9.693,9.693,0,0,0,9.584,9.8,9.693,9.693,0,0,0,9.584-9.8A1.093,1.093,0,0,1,22.408,12.1Z" fill="#004e6e" fill-rule="evenodd"/>
                                        </svg>
                                    </div>
                                    <AudioPlayer
                                        src="https://server6.mp3quran.net/abkr/002.mp3"
                                        layout="horizontal"
                                        customAdditionalControls={[]}
                                    />
                                </div>
                            </div>
                            <div className="audio-item">
                                <h1 className="audio-track-name">
                                    Track name3
                                </h1>
                                <div className="audio-wrapper-item">
                                    <div className="audio-icon-box">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="23.488" height="29.36" viewBox="0 0 23.488 29.36">
                                            <path data-name="Path 2111" d="M11.926,0h-.364A6.426,6.426,0,0,0,5.211,6.5v6.7a6.425,6.425,0,0,0,6.352,6.5h.364a6.425,6.425,0,0,0,6.352-6.5V6.5A6.426,6.426,0,0,0,11.926,0Zm-.364,2.209h.364A4.24,4.24,0,0,1,16.118,6.5v6.7a4.239,4.239,0,0,1-4.191,4.286h-.364A4.239,4.239,0,0,1,7.371,13.2V6.5A4.24,4.24,0,0,1,11.563,2.209Zm10.845,9.9a1.093,1.093,0,0,1,1.08,1.1A11.91,11.91,0,0,1,12.825,25.17v3.086a1.079,1.079,0,0,1-2.151.15l-.01-.15V25.17A11.909,11.909,0,0,1,0,13.21a1.093,1.093,0,0,1,1.08-1.1,1.093,1.093,0,0,1,1.08,1.1,9.693,9.693,0,0,0,9.584,9.8,9.693,9.693,0,0,0,9.584-9.8A1.093,1.093,0,0,1,22.408,12.1Z" fill="#004e6e" fill-rule="evenodd"/>
                                        </svg>
                                    </div>
                                    <AudioPlayer
                                        src="https://server6.mp3quran.net/abkr/004.mp3"
                                        layout="horizontal"
                                        customAdditionalControls={[]}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                );

            default:
                break;
        }
    };

    return (
        <div className="articles__container">
            <div className="container">
                <Nav variant="tabs" activeKey={tab} onSelect={eventKey => setTab(eventKey)} >
                    <Nav.Item>
                        <Nav.Link eventKey="1"  href="">
                            Articles
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="2" href="">
                            Video
                        </Nav.Link>
                    </Nav.Item><Nav.Item>
                    <Nav.Link eventKey="3" href="">
                        Audio
                    </Nav.Link>
                </Nav.Item>
                </Nav>
                {renderTab(tab)}
            </div>
        </div>
    );
}

export default Component;