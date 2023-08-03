import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import Header from '../../src/components/Header';
import logodark from "../../public/images/logo/logodark.png";
import Footer from '../../src/components/Footer';
import SingleTeamThree from '@/components/Team/SingleTeamThree';

import aboutImg from '../../public/images/about/about-us.png';
import teamImg1 from '../../public/images/team/team-01.jpg';
import teamImg2 from '../../public/images/team/team-02.jpg';
import teamImg3 from '../../public/images/team/team-03.jpg';
import teamImg4 from '../../public/images/team/team-04.jpg';
import teamImg5 from '../../public/images/team/team-05.jpg';
import teamImg6 from '../../public/images/team/team-06.jpg';
import dreambigbg from '../../public/images/about/dreambigbg.webp';
import spoorthi from '../../public/images/about/spoorthi.png';
import spoorthi2 from '../../public/images/about/spoorthi2.webp';
import customer from "../../public/images/about/customer.png";
import image1 from "../../public/images/about/image1.png";
import image2 from "../../public/images/about/image2.png";
import image3 from "../../public/images/about/image3.png";
import image4 from "../../public/images/about/image4.png";
import HeaderTwo from '@/components/Header/HeaderTwo';



const Corporate = () => {

    return (
        <>
            <HeaderTwo
                headerLogo={logodark}
                headerLogoLight={logodark}
                className="bg-black"
            />
            <main className="ms-main bg-black">
                <div className="ms-page-content">

                    {/*  Corporate Events */}
                    <div className=''>
                        <div className='container lg:pt-24 pt-12' id='corporate'>
                            <div className='row '>
                                <div className='col-lg-6 lg:pt-12'>
                                    <div className=' text-white font font-bold xl:text-6xl text-4xl'>
                                        Corporate Events
                                    </div>
                                    <div className='golden font font-bold xl:text-4xl text-2xl pt-2'>
                                        Shift your perspective on
                                    </div>
                                    <div className='golden font font-bold xl:text-4xl text-2xl pt-1 pb-2'>
                                        digital business
                                    </div>
                                    <p className='text-white xl:text-xl font pt-2 xl:block lg:block hidden'>
                                        Get the clarity you need to move your priorities forward
                                    </p>
                                    <p className='text-white xl:text-xl font pt-1 xl:block lg:block hidden'>
                                        while making connections that drive success.  while making connections that drive success.
                                    </p>
                                    <p className='text-white xl:text-base font xl:hidden lg:hidden block'>
                                        Get the clarity you need to move your priorities forward while making connections
                                        that drive success.  while making connections that drive success.
                                    </p>
                                </div>
                                <div className='col-lg-6 lg:pt-0 pt-12'>
                                    <img src='/images/servicess/corporatebg.png' alt='' />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Training Programs */}
                    <div className=' py-24 xl:block lg:block hidden'>
                        <div className='pt-24' id='training-programs'>
                            <div className='row '>
                                <div className='col-lg-6 '>
                                    <img src='/images/servicess/conference.jpg' alt='' />
                                </div>
                                <div className='col-lg-6 conferencebgg lg:pt-12'>
                                    <div className='text-white font font-bold xl:text-5xl text-4xl lg:pl-12 pt-4 '>
                                        Training Programs
                                    </div>
                                    <div className='golden xl:text-lg fonts font-bold lg:pl-12 pt-3'>
                                        Get Experience
                                    </div>
                                    <p className='font xl:text-3xl lg:pl-12 pt-2 text-white'>
                                        Shift your perspective on
                                    </p>
                                    <p className='font xl:text-3xl lg:pl-12 pt-2 text-white'>
                                        digital business
                                    </p>
                                    <p className='lg:pl-12 pt-4 xl:text-base font text-white'>
                                        How you transform your business as technology, consumer, <br></br>
                                        habits industry dynamics change? Find out from <br></br>those leading the charge.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Training Programs */}
                    <div className='container pt-12 xl:hidden lg:hidden block'>
                        <div className='' id='training-programs'>
                            <div className='row flex-col-reverse'>
                                <div className='col-lg-6 pt-6'>
                                    <img src='/images/servicess/conference.jpg' alt='' />
                                </div>
                                <div className='col-lg-6 conferencebgg lg:pt-12'>
                                    <div className='text-white font font-bold xl:text-5xl text-4xl lg:pl-12 pt-4 '>
                                        Training Programs
                                    </div>
                                    <div className='golden xl:text-lg fonts font-bold lg:pl-12 pt-2'>
                                        Get Experience
                                    </div>
                                    <p className='font font-semibold text-xl lg:pl-12 pt-2 text-white'>
                                        Shift your perspective on
                                    </p>
                                    <p className='font font-semibold text-xl lg:pl-12 pt-1 text-white'>
                                        digital business
                                    </p>
                                    <p className='lg:pl-12 pt-1 xl:text-base font text-white'>
                                        How you transform your business as technology, consumer,
                                        habits industry dynamics change? Find out from those leading the charge.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Workshop & Conference */}
                    <div className='bg-black '>
                        <div className='container lg:pt-24 pt-6' id='workshops'>
                            <div className='row '>
                                <div className='col-lg-6 pt-12'>
                                    <div className=' text-white font font-bold xl:text-6xl text-4xl'>
                                        Workshops & Conference
                                    </div>
                                    <div className='golden font font-bold xl:text-4xl text-2xl pt-2'>
                                        Shift your perspective on
                                    </div>
                                    <div className='golden font font-bold xl:text-4xl text-2xl pt-1 pb-2'>
                                        digital business
                                    </div>
                                    <p className='text-white xl:text-xl font pt-2 xl:block lg:block hidden'>
                                        Get the clarity you need to move your priorities forward
                                    </p>
                                    <p className='text-white xl:text-xl font pt-1 xl:block lg:block hidden'>
                                        while making connections that drive success.  while making connections that drive success.
                                    </p>
                                    <p className='text-white xl:text-base font xl:hidden lg:hidden block'>
                                        Get the clarity you need to move your priorities forward while making connections
                                        that drive success.  while making connections that drive success.
                                    </p>
                                </div>
                                <div className='col-lg-6 lg:pt-0 pt-12'>
                                    <img src='/images/servicess/corporatebg.png' alt='' />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Awards Ceremonies*/}
                    <div className='lg:block xl:block hidden  py-24'>
                        <div className='pt-24' id='award'>
                            <div className='row '>
                                <div className='col-lg-6 '>
                                    <img src='/images/servicess/awardsceremony.jpg' alt='' />
                                </div>
                                <div className='col-lg-6 conferencebgg pt-12'>
                                    <div className='text-white font font-bold xl:text-5xl lg:pl-12 pt-4'>
                                        Awards Ceremonies
                                    </div>
                                    <div className='golden xl:text-lg fonts font-bold lg:pl-12 pt-3'>
                                        Get Experience
                                    </div>
                                    <p className='font xl:text-3xl lg:pl-12 pt-2 text-white'>
                                        Shift your perspective on
                                    </p>
                                    <p className='font xl:text-3xl lg:pl-12 pt-2 text-white'>
                                        digital business
                                    </p>
                                    <p className='lg:pl-12 pt-4 xl:text-base font text-white'>
                                        How you transform your business as technology, consumer, <br></br>
                                        habits industry dynamics change? Find out from <br></br>those leading the charge.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Awards Ceremonies*/}
                    <div className='container lg:hidden xl:hidden block '>
                        <div className='' id='award'>
                            <div className='row flex-col-reverse'>
                                <div className='col-lg-6 pt-6'>
                                    <img src='/images/servicess/awardsceremony.jpg' alt='' />
                                </div>
                                <div className='col-lg-6 conferencebgg pt-6'>
                                    <div className='text-white font font-bold xl:text-5xl text-4xl lg:pl-12 pt-4 '>
                                        Awards Ceremonies
                                    </div>
                                    <div className='golden xl:text-lg fonts font-bold lg:pl-12 pt-2'>
                                        Get Experience
                                    </div>
                                    <p className='font font-semibold text-xl lg:pl-12 pt-2 text-white'>
                                        Shift your perspective on
                                    </p>
                                    <p className='font font-semibold text-xl lg:pl-12 pt-1 text-white'>
                                        digital business
                                    </p>
                                    <p className='lg:pl-12 pt-1 xl:text-base font text-white'>
                                        How you transform your business as technology, consumer,
                                        habits industry dynamics change? Find out from those leading the charge.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Luxury Social Events */}
                    <div className='bg-black '>
                        <div className='container lg:pt-24' id='luxury-events'>
                            <div className='row '>
                                <div className='col-lg-6 pt-12'>
                                    <div className=' text-white font font-bold xl:text-6xl text-4xl'>
                                        Luxury Social <br></br>Events
                                    </div>
                                    <div className='golden font font-bold xl:text-4xl text-2xl pt-2'>
                                        Shift your perspective on
                                    </div>
                                    <div className='golden font font-bold xl:text-4xl text-2xl pt-1 pb-2'>
                                        digital business
                                    </div>
                                    <p className='text-white xl:text-xl font pt-2 xl:block lg:block hidden'>
                                        Get the clarity you need to move your priorities forward
                                    </p>
                                    <p className='text-white xl:text-xl font pt-1 xl:block lg:block hidden'>
                                        while making connections that drive success.  while making connections that drive success.
                                    </p>
                                    <p className='text-white xl:text-base font xl:hidden lg:hidden block'>
                                        Get the clarity you need to move your priorities forward while making connections
                                        that drive success.  while making connections that drive success.
                                    </p>
                                </div>
                                <div className='col-lg-6 lg:pt-0 pt-12'>
                                    <img src='/images/servicess/corporatebg.png' alt='' />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Signature IP events */}
                    <div className='lg:block xl:block hidden  py-24'>
                        <div className='pt-24' id='signature'>
                            <div className='row '>
                                <div className='col-lg-6 '>
                                    <img src='/images/servicess/conference.jpg' alt='' />
                                </div>
                                <div className='col-lg-6 conferencebgg pt-12'>
                                    <div className='text-white font font-bold xl:text-5xl lg:pl-12 pt-4'>
                                        Siganture IP Events
                                    </div>
                                    <div className='golden xl:text-lg fonts font-bold lg:pl-12 pt-3'>
                                        Get Experience
                                    </div>
                                    <p className='font xl:text-3xl lg:pl-12 pt-2 text-white'>
                                        Shift your perspective on
                                    </p>
                                    <p className='font xl:text-3xl lg:pl-12 pt-2 text-white'>
                                        digital business
                                    </p>
                                    <p className='lg:pl-12 pt-4 xl:text-base font text-white'>
                                        How you transform your business as technology, consumer, <br></br>
                                        habits industry dynamics change? Find out from <br></br>those leading the charge.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* Signature IP events */}
                    <div className='container lg:hidden xl:hidden block '>
                        <div className='' id='signature'>
                            <div className='row flex-col-reverse'>
                                <div className='col-lg-6 pt-6'>
                                    <img src='/images/servicess/conference.jpg' alt='' />
                                </div>
                                <div className='col-lg-6 conferencebgg pt-6'>
                                    <div className='text-white font font-bold xl:text-5xl text-4xl lg:pl-12 pt-4 '>
                                        Signature IP Events
                                    </div>
                                    <div className='golden xl:text-lg fonts font-bold lg:pl-12 pt-2'>
                                        Get Experience
                                    </div>
                                    <p className='font font-semibold text-xl lg:pl-12 pt-2 text-white'>
                                        Shift your perspective on
                                    </p>
                                    <p className='font font-semibold text-xl lg:pl-12 pt-1 text-white'>
                                        digital business
                                    </p>
                                    <p className='lg:pl-12 pt-1 xl:text-base font text-white'>
                                        How you transform your business as technology, consumer,
                                        habits industry dynamics change? Find out from those leading the charge.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </main>

            <Footer />

        </>
    );
}

export default Corporate;
