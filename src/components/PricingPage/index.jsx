import React from 'react';
// import Swiper core and required components
import SwiperCore, { Navigation,  A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';

// install Swiper components
SwiperCore.use([Navigation, A11y]);

const PricingPage = () => {
    return (
        <div className="pricing">
            <div className="main-hafs-header pricing-header">
                <div className="hafs-header-overlay">
                    <div className="hafs-header-content">
                        <h1>
                            Hafs pricing plans
                        </h1>
                        <p>Select  from our plans what reasonable for you</p>
                    </div>
                </div>
            </div>

            <div className="pricing-table-wrapper">
                <div className="container d-flex align-items-start">
                    <div className="pricing-sidemenu">
                        <div className="plan-row">
                            <div className="plan-row-title">
                                1 Class/week
                            </div>
                            <div className="plan-row-details">
                                4 Classes/Month
                            </div>
                        </div>
                        <div className="plan-row">
                            <div className="plan-row-title">
                                2 Class/week
                            </div>
                            <div className="plan-row-details">
                                8 Classes/Month
                            </div>
                        </div>
                        <div className="plan-row">
                            <div className="plan-row-title">
                                3 Class/week
                            </div>
                            <div className="plan-row-details">
                                12 Classes/Month
                            </div>
                        </div>
                        <div className="plan-row">
                            <div className="plan-row-title">
                                4 Class/week
                            </div>
                            <div className="plan-row-details">
                                16 Classes/Month
                            </div>
                        </div>
                        <div className="plan-row">
                            <div className="plan-row-title">
                                5 Class/week
                            </div>
                            <div className="plan-row-details">
                                20 Classes/Month
                            </div>
                        </div>
                    </div>
                    <div className="pricing-table-details">
                            <Swiper
                            spaceBetween={0}
                            slidesPerView={1}
                            onSlideChange={() => console.log('slide change')}
                            onSwiper={(swiper) => console.log(swiper)}
                            navigation
                            breakpoints= {
                                // when window width is >= 320px
                                {
                                    // when window width is >= 480px
                                    768: {
                                        slidesPerView: 2,
                                    },
                                    // when window width is >= 640px
                                    992: {
                                        slidesPerView: 3,
                                    }
                                }
                            }
                            >
                            <SwiperSlide>
                                    <div className="plan-col">
                                        <div className="plan-price">
                                            <p>
                                                <span>30</span> Min
                                                <br/>
                                                class
                                            </p>
                                        </div>
                                        <div className="plan-cells">
                                            <div className="plan-cell">
                                            <div className="plan-col-price">
                                                <p>4  € / Class</p>
                                                <p>5.5 $ / Class</p>
                                            </div>
                                            <div className="plan-col-price">
                                                <p className='colored'>16  € / Month</p>
                                                <p className='colored'>22 $ / Month</p>
                                            </div>
                                        </div>
                                            <div className="plan-cell">
                                                <div className="plan-col-price">
                                                    <p>4  € / Class</p>
                                                    <p>5.5 $ / Class</p>
                                                </div>
                                                <div className="plan-col-price">
                                                    <p className='colored'>16  € / Month</p>
                                                    <p className='colored'>22 $ / Month</p>
                                                </div>
                                            </div>
                                            <div className="plan-cell">
                                                <div className="plan-col-price">
                                                    <p>4  € / Class</p>
                                                    <p>5.5 $ / Class</p>
                                                </div>
                                                <div className="plan-col-price">
                                                    <p className='colored'>16  € / Month</p>
                                                    <p className='colored'>22 $ / Month</p>
                                                </div>
                                            </div>
                                            <div className="plan-cell">
                                                <div className="plan-col-price">
                                                    <p>4  € / Class</p>
                                                    <p>5.5 $ / Class</p>
                                                </div>
                                                <div className="plan-col-price">
                                                    <p className='colored'>16  € / Month</p>
                                                    <p className='colored'>22 $ / Month</p>
                                                </div>
                                            </div>
                                            <div className="plan-cell">
                                                <div className="plan-col-price">
                                                    <p>4  € / Class</p>
                                                    <p>5.5 $ / Class</p>
                                                </div>
                                                <div className="plan-col-price">
                                                    <p className='colored'>16  € / Month</p>
                                                    <p className='colored'>22 $ / Month</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                <div className="subscribe-plan">
                                    <button className="main-btn border-btn-primary">Subscribe</button>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                    <div className="plan-col">
                                        <div className="plan-price">
                                            <p className="blue-txt">
                                                <span>45</span> Min
                                                <br/>
                                                class
                                            </p>
                                        </div>
                                        <div className="plan-cells">
                                            <div className="plan-cell">
                                                <div className="plan-col-price">
                                                    <p>4  € / Class</p>
                                                    <p>5.5 $ / Class</p>
                                                </div>
                                                <div className="plan-col-price">
                                                    <p className='colored'>16  € / Month</p>
                                                    <p className='colored'>22 $ / Month</p>
                                                </div>
                                            </div>
                                            <div className="plan-cell">
                                                <div className="plan-col-price">
                                                    <p>4  € / Class</p>
                                                    <p>5.5 $ / Class</p>
                                                </div>
                                                <div className="plan-col-price">
                                                    <p className='colored'>16  € / Month</p>
                                                    <p className='colored'>22 $ / Month</p>
                                                </div>
                                            </div>
                                            <div className="plan-cell">
                                                <div className="plan-col-price">
                                                    <p>4  € / Class</p>
                                                    <p>5.5 $ / Class</p>
                                                </div>
                                                <div className="plan-col-price">
                                                    <p className='colored'>16  € / Month</p>
                                                    <p className='colored'>22 $ / Month</p>
                                                </div>
                                            </div>
                                            <div className="plan-cell">
                                                <div className="plan-col-price">
                                                    <p>4  € / Class</p>
                                                    <p>5.5 $ / Class</p>
                                                </div>
                                                <div className="plan-col-price">
                                                    <p className='colored'>16  € / Month</p>
                                                    <p className='colored'>22 $ / Month</p>
                                                </div>
                                            </div>
                                            <div className="plan-cell">
                                                <div className="plan-col-price">
                                                    <p>4  € / Class</p>
                                                    <p>5.5 $ / Class</p>
                                                </div>
                                                <div className="plan-col-price">
                                                    <p className='colored'>16  € / Month</p>
                                                    <p className='colored'>22 $ / Month</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                <div className="subscribe-plan">
                                    <button className="main-btn main-btn-primary">Subscribe</button>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="plan-col">
                                    <div className="plan-price">
                                        <p className="yellow-txt">
                                            <span>60</span> Min
                                            <br/>
                                            class
                                        </p>
                                    </div>
                                    <div className="plan-cells last-plan-cell">
                                        <div className="plan-cell">
                                        <div className="plan-col-price">
                                            <p>4  € / Class</p>
                                            <p>5.5 $ / Class</p>
                                        </div>
                                        <div className="plan-col-price">
                                            <p className='colored'>16  € / Month</p>
                                            <p className='colored'>22 $ / Month</p>
                                        </div>
                                    </div>
                                        <div className="plan-cell">
                                            <div className="plan-col-price">
                                                <p>4  € / Class</p>
                                                <p>5.5 $ / Class</p>
                                            </div>
                                            <div className="plan-col-price">
                                                <p className='colored'>16  € / Month</p>
                                                <p className='colored'>22 $ / Month</p>
                                            </div>
                                        </div>
                                        <div className="plan-cell">
                                            <div className="plan-col-price">
                                                <p>4  € / Class</p>
                                                <p>5.5 $ / Class</p>
                                            </div>
                                            <div className="plan-col-price">
                                                <p className='colored'>16  € / Month</p>
                                                <p className='colored'>22 $ / Month</p>
                                            </div>
                                        </div>
                                        <div className="plan-cell">
                                            <div className="plan-col-price">
                                                <p>4  € / Class</p>
                                                <p>5.5 $ / Class</p>
                                            </div>
                                            <div className="plan-col-price">
                                                <p className='colored'>16  € / Month</p>
                                                <p className='colored'>22 $ / Month</p>
                                            </div>
                                        </div>
                                        <div className="plan-cell">
                                            <div className="plan-col-price">
                                                <p>4  € / Class</p>
                                                <p>5.5 $ / Class</p>
                                            </div>
                                            <div className="plan-col-price">
                                                <p className='colored'>16  € / Month</p>
                                                <p className='colored'>22 $ / Month</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="subscribe-plan">
                                        <button className="main-btn border-btn-primary">Subscribe</button>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default PricingPage;