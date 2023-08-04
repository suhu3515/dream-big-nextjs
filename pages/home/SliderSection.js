import { useRef, useEffect } from 'react';
import Image from 'next/image';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Mousewheel } from 'swiper';

SwiperCore.use([Mousewheel]);

import bannerImg1 from "../../public/images/slider/audience2.jpg";
import bannerImg2 from "../../public/images/slider/audience1.jpg";

const sliderOption = {
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        type: 'progressbar',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    loop: true,
    spaceBetween: 0,
    slidesPerView: '1',
    parallax: true,
    speed: 700,
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
    }
}

const HomeSlider = () => {

    const swiperRef = useRef(null);

    useEffect(() => {
        if (swiperRef.current) {
            swiperRef.current, sliderOption;
        }
    }, []);

    return (
        <div className="banner-horizental">
            <div className="swiper swiper-container-h">
                <Swiper {...sliderOption} mousewheel={true} ref={swiperRef} watchSlidesProgress className="swiper-wrapper">

                    <SwiperSlide className="swiper-slide">
                        <div className="slider-inner" data-swiper-parallax="100">
                            <Image src={bannerImg2} alt="full_screen-image" />
                            <div className="swiper-content" data-swiper-parallax="2000">
                                <div className="title-area lg:block xl:block hidden">
                                    <p className="tag font">INSPIRATION</p>
                                    <p className="text-white font-bold text-6xl uppercase font"> INDIA’S ONLY ALL <br></br>WOMEN EVENT <br></br>MANAGEMENT</p>
                                </div>
                                <div className="title-area lg:hidden xl:hidden block ">
                                    <p className="tag font">INSPIRATION</p>
                                    <p className="text-white font-bold text-4xl uppercase font"> INDIA’S ONLY ALL <br></br>WOMEN EVENT <br></br>MANAGEMENT</p>
                                </div>
                                <p className="text-white text-xl pt-2 font lg:block hidden ">
                                    Conveniently formulate progressive users for error-free
                                </p>
                                <p className="text-white text-xl font lg:block hidden ">
                                    interfaces. Monotonectally deploy superior
                                </p>
                                <p className="text-white text-xl pb-6 font lg:block hidden ">
                                    relationships without seamless infomediaries.
                                </p>
                                <p className='lg:hidden block text-white text-lg pb-6 font'>
                                    Conveniently formulate progressive users for error-free
                                    interfaces. Monotonectally deploy superior
                                    relationships without seamless infomediaries.
                                </p>


                                {/*<div className="btn-wrap">
                                    <a className="btn btn-circle btn--md" role="button" href="#0">
                                        <div className="ms-btn--circle">
                                            <div className="circle">
                                                <div className="circle-fill"></div>
                                                <svg viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg" className="circle-outline">
                                                    <circle cx="25" cy="25" r="23"></circle>
                                                </svg>
                                                <div className="circle-icon">
                                                    <svg viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon-arrow">
                                                        <path d="M0 5.65612V4.30388L8.41874 4.31842L5.05997 0.95965L5.99054 0L10.9923 4.97273L6.00508 9.96L5.07451 9.00035L8.43328 5.64158L0 5.65612Z"></path>
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="ms-btn--label">
                                        <div className="text-lg font-semibold">See More</div>
                                            <div className="ms-btn__border"></div>
                                        </div>
                                    </a>
                                </div>
                                <div className="btn-wrap ml-2">
                                    <a className="btn btn-circle btn--md" role="button" href="#0">
                                        <div className="ms-btn--circle">
                                            <div className="circle">
                                                <div className="circle-fill"></div>
                                                <svg viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg" className="circle-outline">
                                                    <circle cx="25" cy="25" r="23"></circle>
                                                </svg>
                                                <div className="circle-icon">
                                                    <svg viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon-arrow">
                                                        <path d="M0 5.65612V4.30388L8.41874 4.31842L5.05997 0.95965L5.99054 0L10.9923 4.97273L6.00508 9.96L5.07451 9.00035L8.43328 5.64158L0 5.65612Z"></path>
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="ms-btn--label">
                                            <div className="text-lg font-semibold">Contact Us</div>
                                            <div className="ms-btn__border"></div>
                                        </div>
                                    </a>
    </div>*/}

                                <div class="example-1"><i className='fas fa-arrow-right'></i></div>
                            </div>
                        </div>
                    </SwiperSlide>




                    <SwiperSlide className="swiper-slide">
                        <div className="slider-inner" data-swiper-parallax="100">
                            <Image src={bannerImg1} alt="full_screen-image" />
                            <div className="swiper-content" data-swiper-parallax="2000">
                                <div className="title-area lg:block xl:block hidden">
                                    <p className="tag font">INSPIRATION</p>
                                    <p className="text-white font-bold text-6xl uppercase font"> TOP Event <br></br>MANAGEMENT <br></br>Company In India</p>
                                </div>
                                <div className="title-area lg:hidden xl:hidden block ">
                                    <p className="tag font">INSPIRATION</p>
                                    <p className="text-white font-bold text-4xl uppercase font"> TOP Event <br></br>MANAGEMENT <br></br>Company In India</p>
                                </div>
                                <p className="text-white text-xl pt-2 font lg:block xl:block hidden">
                                    Conveniently formulate progressive users for error-free
                                </p>
                                <p className="text-white text-xl font lg:block xl:block hidden">
                                    interfaces. Monotonectally deploy superior
                                </p>
                                <p className="text-white text-xl pb-6 font lg:block xl:block hidden">
                                    relationships without seamless infomediaries.
                                </p>


                                {/*<div className="btn-wrap">
                                    <a className="btn btn-circle btn--md" role="button" href="#0">
                                        <div className="ms-btn--circle">
                                            <div className="circle">
                                                <div className="circle-fill"></div>
                                                <svg viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg" className="circle-outline">
                                                    <circle cx="25" cy="25" r="23"></circle>
                                                </svg>
                                                <div className="circle-icon">
                                                    <svg viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon-arrow">
                                                        <path d="M0 5.65612V4.30388L8.41874 4.31842L5.05997 0.95965L5.99054 0L10.9923 4.97273L6.00508 9.96L5.07451 9.00035L8.43328 5.64158L0 5.65612Z"></path>
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="ms-btn--label">
                                            <div className="ms-btn__text">Take A Look</div>
                                            <div className="ms-btn__border"></div>
                                        </div>
                                    </a>
                                </div>*/}
                                <div class="example-1"><i className='fas fa-arrow-right'></i></div>
                               
                            </div>
                        </div>
                    
                    </SwiperSlide>


                    {/*<SwiperSlide className="swiper-slide">
                        <div className="slider-inner" data-swiper-parallax="100">
                            <Image src={bannerImg1} alt="full_screen-image" />
                            <div className="swiper-content" data-swiper-parallax="2000">
                                <div className="title-area">
                                    <p className="tag font">INSPIRATION</p>
                                    <a href="#" className="title uppercase font"> Dream Big </a>
                                </div>
                                <p className="text-white text-xl pt-2 font">
                                    Conveniently formulate progressive users for error-free
                                </p>
                                <p className="text-white text-xl font">
                                    interfaces. Monotonectally deploy superior
                                </p>
                                <p className="text-white text-xl pb-6 font">
                                    relationships without seamless infomediaries.
                                </p>
                                {/*<div className="btn-wrap">
                                    <a className="btn btn-circle btn--md" role="button" href="#0">
                                        <div className="ms-btn--circle">
                                            <div className="circle">
                                                <div className="circle-fill"></div>
                                                <svg viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg" className="circle-outline">
                                                    <circle cx="25" cy="25" r="23"></circle>
                                                </svg>
                                                <div className="circle-icon">
                                                    <svg viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon-arrow">
                                                        <path d="M0 5.65612V4.30388L8.41874 4.31842L5.05997 0.95965L5.99054 0L10.9923 4.97273L6.00508 9.96L5.07451 9.00035L8.43328 5.64158L0 5.65612Z"></path>
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="ms-btn--label">
                                            <div className="ms-btn__text">Take A Look</div>
                                            <div className="ms-btn__border"></div>
                                        </div>
                                    </a>
                                </div>*/}
                    {/*<div class="example-1"><i className='fas fa-arrow-right'></i></div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className="swiper-slide">
                        <div className="slider-inner" data-swiper-parallax="100">
                            <video autoPlay loop muted>
                                <source src="/videos/video.mp4" type="video/mp4" />
                            </video>

                            <div className="swiper-content" data-swiper-parallax="2000">
                                <div className="title-area">

                                    <a href="#" className="title font"> ENGINE </a>

                                </div>
                                <p className="disc font">
                                    Conveniently formulate progressive users for error-free
                                    <br />
                                    interfaces. Monotonectally deploy superior
                                    <br />
                                    relationships without seamless infomediaries.
                                </p>
                                {/*<div className="btn-wrap">
                                    <a className="btn btn-circle btn--md" role="button" href="https://theme.madsparrow.me/most/list-style/">
                                        <div className="ms-btn--circle">
                                            <div className="circle">
                                                <div className="circle-fill"></div>
                                                <svg viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg" className="circle-outline">
                                                    <circle cx="25" cy="25" r="23"></circle>
                                                </svg>
                                                <div className="circle-icon">
                                                    <svg viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon-arrow">
                                                        <path d="M0 5.65612V4.30388L8.41874 4.31842L5.05997 0.95965L5.99054 0L10.9923 4.97273L6.00508 9.96L5.07451 9.00035L8.43328 5.64158L0 5.65612Z"></path>
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="ms-btn--label">
                                            <div className="ms-btn__text">Take A Look</div>
                                            <div className="ms-btn__border"></div>
                                        </div>
                                    </a>
                                </div>*/}
                    {/*  <div class="example-1"><i className='fas fa-arrow-right'></i></div>
                            </div>
                        </div>
                    </SwiperSlide>*/}
                </Swiper>
                <div className="swiper-button-wrapper">
                    <div className="swiper-button-next" tabIndex="0" role="button" aria-label="Next slide">
                    </div>
                    <div className="swiper-button-prev" tabIndex="0" role="button" aria-label="Previous slide">
                    </div>
                </div>
                <div className="slider-pagination-area">
                    <h5 className="slide-range one">01</h5>
                    <div className="swiper-pagination swiper-pagination-progressbar swiper-pagination-horizontal"><span className="swiper-pagination-progressbar-fill"></span></div>
                    <h5 className="slide-range three">03</h5>
                </div>
            </div>
        </div>
    );
}

export default HomeSlider;
