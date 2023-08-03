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



const About = () => {

    return (
        <>
            <HeaderTwo
                headerLogo={logodark}
                headerLogoLight={logodark}
                className="bg-black"
            />

            <main className="ms-main bg-black">
                <div className="ms-page-content">


                    {/*<div className="ms-hero-area-2">
                        <div className="row">
                            <div className="col-12">
                                <div className="hero-image">
                                    <Image src={aboutImg} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>*/}

                    {/* <div className='rightbg'>
                        <img src="https://demo.themewinter.com/wp/exhibz/multi-event/wp-content/uploads/sites/7/2021/07/image.png" alt="img" class="img" />
                        <img src="https://demo.themewinter.com/wp/exhibz/multi-event/wp-content/uploads/sites/7/2021/07/right_image_4.png" alt="img" class="img4" />
                        <img src="https://demo.themewinter.com/wp/exhibz/multi-event/wp-content/uploads/sites/7/2021/07/image.png" alt="img" class="img2" />
                        <img src="https://demo.themewinter.com/wp/exhibz/multi-event/wp-content/uploads/sites/7/2021/07/left_image_1.png" alt="img" class="img3" />

                        <div className='container py-24'>

                            <div className='text-center pb-24'>
                                <div className='font golden  text-3xl font-semibold pt-12'>
                                    The Leading Platform for
                                </div>
                                <div className=' text-center font aboutfont uppercase font-semibold pt-2'>
                                    EVENTS, MEETUPS &
                                </div>
                                <div className=' font aboutfont font-semibold uppercase '>
                                    CONFERENCES
                                </div>
                                <p className='abouttext font text-2xl pt-3'>
                                    World’s most influential media, entertainment & technology
                                    show
                                </p>
                                <p className='abouttext font text-2xl pb-32'>
                                    inspirational speakers including game changing ideas.
                                </p>
                            </div>
                        </div>
                    </div>*/}



                    {/* About Banner */}
                    <div className=' lg:block xl:block hidden'>
                        <div className='container pt-24'>
                            <div className='row '>
                                <div className='col-lg-6 pt-12'>
                                    <h3 className='golden text-xl fonts font-bold '>
                                        All-In-One Event Management
                                    </h3>
                                    <div className='text-white font font-bold text-6xl pt-3'>
                                        INDIA’S ONLY ALL
                                    </div>
                                    <div className='text-white font font-bold text-6xl pt-2'>
                                        WOMEN EVENT
                                    </div>
                                    <div className='text-white font font-bold text-6xl pt-2'>
                                        MANAGEMENT
                                    </div>

                                    <div className='flex mt-8 font font-bold'>
                                        <button className=' buttonbg px-12 py-2 uppercase text-white'>
                                            Join With Us
                                        </button>
                                        <button className='border border-white px-12 py-2 uppercase text-white ml-3'>
                                            Contact Us
                                        </button>
                                    </div>
                                </div>
                                <div className='col-lg-6'>
                                    <video autoPlay loop muted>
                                        <source src="https://www.zohowebstatic.com/sites/zweb/images/backstage/home/banner-intro.webm" type="video/mp4" />
                                    </video>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* About Banner */}
                    <div className=' lg:hidden xl:hidden block'>
                        <div className='container'>
                            <div className='row '>
                                <div className='col-sm-6 pt-12'>
                                    <h3 className='golden text-xl fonts font-bold '>
                                        All-In-One Event Management
                                    </h3>
                                    <div className='text-white font font-bold text-3xl pt-3'>
                                        INDIA’S ONLY ALL
                                    </div>
                                    <div className='text-white font font-bold text-3xl pt-2'>
                                        WOMEN EVENT
                                    </div>
                                    <div className='text-white font font-bold text-3xl pt-2'>
                                        MANAGEMENT
                                    </div>

                                    <div className='flex mt-6 font font-bold'>
                                        <button className='text-xs buttonbg px-6 py-2 uppercase text-white'>
                                            Join With Us
                                        </button>
                                        <button className='border border-white text-xs px-6 py-2 uppercase text-white ml-3'>
                                            Contact Us
                                        </button>
                                    </div>
                                </div>
                                <div className='col-sm-6 pt-6'>
                                    <video autoPlay loop muted>
                                        <source src="https://www.zohowebstatic.com/sites/zweb/images/backstage/home/banner-intro.webm" type="video/mp4" />
                                    </video>
                                </div>
                            </div>
                        </div>
                    </div>



                    <div className='aboutsection bg-black lg:block xl:block hidden'>
                        <div className='container py-24'>
                            <div className='row items-center pt-12'>
                                <div className='col-lg-6'>
                                    <div className='golden  fonts font-semibold text-xl'>
                                        Vision, Mission, Values
                                    </div>
                                    <div className='text-white font font-semibold text-4xl pt-2'>
                                        With best in class features
                                    </div>
                                    <div className='text-white font font-semibold text-4xl pt-2 typing-demo1'>
                                        and design templates.
                                    </div>
                                </div>
                                <div className='col-lg-6'>
                                    <p className='text-white font text-lg pt-3 font-medium '>
                                        Learn how to create impact & influence to enhance your Career,
                                        Business, Income, Social Network & Life. Learn how to create impact & influence to enhance your Career,
                                        Business, Income, Social Network & Life.  Learn how to create impact & influence to enhance your Career,
                                        Business,
                                    </p>
                                </div>
                            </div>

                            <div className='row pt-20'>
                                <div className='col-lg-4'>
                                    <div className='misionbg rounded p-4 cursor-pointer'>
                                        <div className='text-white text-xl font uppercase font-bold'>
                                            Our Mission
                                        </div>
                                        <div className='border my-2'></div>
                                        <h3 className='text-white font text-lg text-justify pt-2'>
                                            “One of the best themes I've ever used, didn't have to reach
                                            support yet and I've been working 3 months with it.
                                            Congratulations to Colabrio for their awesome work.”
                                        </h3>
                                    </div>
                                </div>
                                <div className='col-lg-4'>
                                    <div className='misionbg rounded p-4 fadeInRight cursor-pointer'>
                                        <div className='text-white text-xl font uppercase font-bold'>
                                            Our Vision
                                        </div>
                                        <div className='border my-2'></div>
                                        <h3 className='text-white font text-lg text-justify pt-2'>
                                            “One of the best themes I've ever used, didn't have to reach
                                            support yet and I've been working 3 months with it.
                                            Congratulations to Colabrio for their awesome work.”
                                        </h3>
                                    </div>
                                </div>
                                <div className='col-lg-4'>
                                    <div className='misionbg rounded p-4 cursor-pointer'>
                                        <div className='text-white text-xl font uppercase font-bold'>
                                            Our Values
                                        </div>
                                        <div className='border my-2'></div>
                                        <h3 className='text-white font text-lg text-justify pt-2'>
                                            “One of the best themes I've ever used, didn't have to reach
                                            support yet and I've been working 3 months with it.
                                            Congratulations to Colabrio for their awesome work.”
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>



                    <div className='lg:hidden xl:hidden block bg-black '>
                        <div className='container pt-4'>
                            <div className='row items-center pt-12'>
                                <div className='col-lg-6'>
                                    <div className='golden  fonts font-semibold text-xl'>
                                        Vision, Mission, Values
                                    </div>
                                    <div className='text-white font font-semibold text-2xl pt-2'>
                                        With best in class features
                                    </div>
                                    <div className='text-white font font-semibold text-2xl pt-1 '>
                                        and design templates.
                                    </div>
                                </div>
                                <div className='col-lg-6'>
                                    <p className='text-white font text-base pt-2 font-medium '>
                                        Learn how to create impact & influence to enhance your Career,
                                        Business, Income, Social Network & Life. Learn how to create impact & influence to enhance your Career,
                                        Business, Income, Social Network & Life.  Learn how to create impact & influence to enhance your Career,
                                        Business,
                                    </p>
                                </div>
                            </div>

                            <div className='row pt-4'>
                                <div className='col-lg-4 col-sm-4 py-2'>
                                    <div className='misionbg rounded p-4 cursor-pointer'>
                                        <div className='text-white text-xl font uppercase font-bold'>
                                            Our Mission
                                        </div>
                                        <div className='border my-2'></div>
                                        <h3 className='text-white font text-base text-justify pt-2'>
                                            “One of the best themes I've ever used, didn't have to reach
                                            support yet and I've been working 3 months with it.
                                            Congratulations to Colabrio for their awesome work.”
                                        </h3>
                                    </div>
                                </div>
                                <div className='col-lg-4 col-sm-4 py-2'>
                                    <div className='misionbg rounded p-4 fadeInRight cursor-pointer'>
                                        <div className='text-white text-xl font uppercase font-bold'>
                                            Our Vision
                                        </div>
                                        <div className='border my-2'></div>
                                        <h3 className='text-white font text-base text-justify pt-2'>
                                            “One of the best themes I've ever used, didn't have to reach
                                            support yet and I've been working 3 months with it.
                                            Congratulations to Colabrio for their awesome work.”
                                        </h3>
                                    </div>
                                </div>
                                <div className='col-lg-4 col-sm-4 py-2'>
                                    <div className='misionbg rounded p-4 cursor-pointer'>
                                        <div className='text-white text-xl font uppercase font-bold'>
                                            Our Values
                                        </div>
                                        <div className='border my-2'></div>
                                        <h3 className='text-white font text-base text-justify pt-2'>
                                            “One of the best themes I've ever used, didn't have to reach
                                            support yet and I've been working 3 months with it.
                                            Congratulations to Colabrio for their awesome work.”
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* About Founder */}
                    <section className='bg-black lg:block xl:block hidden'>
                        <div className='container '>
                            <div className='row border-b'>
                                <div className='col-lg-6 h-auto'>
                                    <img src='/images/about/spoorthi.png' alt='' />
                                </div>
                                <div className='col-lg-6 pt-24'>
                                    <div className='golden font-normal fonts text-xl '>
                                        About Founder
                                    </div>
                                    <div className='font text-white font-bold text-7xl pt-2'>
                                        Spoorthi Vishwas
                                    </div>
                                    <div className='text-white pt-2 text-base fonts'>
                                        - who is recognized as one of the <span className='golden text-lg fonts font-bold'>top female entrepreneurs</span> in India
                                    </div>
                                    <div className='buttonbg p-2 text-sm text-white font rounded mt-3'>
                                        LIFE COACH | MENTOR | ENTREPRENEURFOUNDER - KWAA AWARDS, IWAA AWARDS
                                    </div>
                                    {/* <p className='text-white text-base font text-justify pt-3'>
                                    MBA graduate, certified life coach, celebrated presenter for more than 1000+ 
                                    shows nationally and internationally, young achiever award winner from Whistle Woods- Mumbai ,
                                     featured as ‘Alpha Female’ by Ritz magazine.
                </p>*/}
                                    <div className='flex items-center pt-4'>
                                        <i class="fas fa-crown golden text-base"></i>
                                        <p className='text-white font pl-3 text-base '>
                                            Certified ATD trainer
                                        </p>
                                    </div>
                                    <div className='flex items-center pt-3'>
                                        <i class="fas fa-crown golden text-base"></i>
                                        <p className='text-white font pl-3 text-base '>
                                            Managing Director - Dream Big Groups of Companies
                                        </p>
                                    </div>
                                    <div className='flex items-center pt-3'>
                                        <i class="fas fa-crown golden text-base"></i>
                                        <p className='text-white font pl-3 text-base '>
                                            Founder - Indian Women Achievers Awards
                                        </p>
                                    </div>
                                    <div className='flex items-center pt-3'>
                                        <i class="fas fa-crown golden text-base"></i>
                                        <p className='text-white font pl-3 text-base '>
                                            Founder - Karnataka Women Achievers Awards
                                        </p>
                                    </div>
                                    <div className='flex items-center pt-3'>
                                        <i class="fas fa-crown golden text-base"></i>
                                        <p className='text-white font pl-3 text-base '>
                                            Actress & Impact Influencer
                                        </p>
                                    </div>
                                    <div className='flex items-center pt-3'>
                                        <i class="fas fa-crown golden text-base"></i>
                                        <p className='text-white font pl-3 text-base '>
                                            4X TEDX Speaker | ET 30 Under 30
                                        </p>
                                    </div>
                                    <div className='flex items-center pt-3'>
                                        <i class="fas fa-crown golden text-base"></i>
                                        <p className='text-white font pl-3 text-base '>
                                            Awarded as 30 women entrepreneurs to watch out in India in 2019 <br></br>by Ceo Story Magazine
                                        </p>
                                    </div>
                                    <div className='pt-8'>
                                        <p className='golden text-xl fonts font-bold'>
                                            She believes -
                                        </p>
                                        <p className='pt-1 text-white font text-lg'>
                                            “If you can imagine it in your mind, you can experience it in your reality”
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* About Founder */}
                    <section className=' lg:hidden xl:hidden block '>
                        <div className='container '>
                            <div className='row border-b'>
                                <div className='col-lg-6 col-sm-6 h-auto pt-6'>
                                    <img src='/images/about/spoorthi.png' alt='' />
                                </div>
                                <div className='col-lg-6 col-sm-6 pt-12'>
                                    <div className='golden font-normal fonts text-xl '>
                                        About Founder
                                    </div>
                                    <div className='font text-white font-bold text-3xl pt-2'>
                                        Spoorthi Vishwas
                                    </div>
                                    <div className='text-white pt-2 text-base fonts'>
                                        - who is recognized as one of the <span className='golden text-lg fonts font-bold'>top female entrepreneurs</span> in India
                                    </div>
                                    <div className='buttonbg p-2 text-xs text-white font rounded mt-3'>
                                        LIFE COACH | MENTOR | ENTREPRENEURFOUNDER - KWAA AWARDS, IWAA AWARDS
                                    </div>
                                    {/* <p className='text-white text-base font text-justify pt-3'>
                                    MBA graduate, certified life coach, celebrated presenter for more than 1000+ 
                                    shows nationally and internationally, young achiever award winner from Whistle Woods- Mumbai ,
                                     featured as ‘Alpha Female’ by Ritz magazine.
                </p>*/}
                                    <div className='flex items-center pt-4'>
                                        <i class="fas fa-crown golden text-base"></i>
                                        <p className='text-white font pl-3 text-base '>
                                            Certified ATD trainer
                                        </p>
                                    </div>
                                    <div className='flex items-center pt-3'>
                                        <i class="fas fa-crown golden text-base"></i>
                                        <p className='text-white font pl-3 text-base '>
                                            Managing Director - Dream Big Groups of Companies
                                        </p>
                                    </div>
                                    <div className='flex items-center pt-3'>
                                        <i class="fas fa-crown golden text-base"></i>
                                        <p className='text-white font pl-3 text-base '>
                                            Founder - Indian Women Achievers Awards
                                        </p>
                                    </div>
                                    <div className='flex items-center pt-3'>
                                        <i class="fas fa-crown golden text-base"></i>
                                        <p className='text-white font pl-3 text-base '>
                                            Founder - Karnataka Women Achievers Awards
                                        </p>
                                    </div>
                                    <div className='flex items-center pt-3'>
                                        <i class="fas fa-crown golden text-base"></i>
                                        <p className='text-white font pl-3 text-base '>
                                            Actress & Impact Influencer
                                        </p>
                                    </div>
                                    <div className='flex items-center pt-3'>
                                        <i class="fas fa-crown golden text-base"></i>
                                        <p className='text-white font pl-3 text-base '>
                                            4X TEDX Speaker | ET 30 Under 30
                                        </p>
                                    </div>
                                    <div className='flex items-center pt-3'>
                                        <i class="fas fa-crown golden text-base"></i>
                                        <p className='text-white font pl-3 text-base '>
                                            Awarded as 30 women entrepreneurs to watch out in India in 2019 <br></br>by Ceo Story Magazine
                                        </p>
                                    </div>
                                    <div className='pt-8'>
                                        <p className='golden text-xl fonts font-bold'>
                                            She believes -
                                        </p>
                                        <p className='pt-1 text-white font text-lg'>
                                            “If you can imagine it in your mind, you can experience it in your reality”
                                        </p>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </section>


                    <div className='lg:block xl:block hidden'>
                        <div className='container py-24'>
                            <div className='text-center golden fonts text-4xl'>
                                Awards & Recognization
                            </div>
                            <div className='row mt-12'>
                                <div className='col-lg-2'>
                                    <img src='/images/servicess/award1.svg' alt='' />
                                </div>
                                <div className='col-lg-2'>
                                    <img src='/images/servicess/award1.svg' alt='' />
                                </div>
                                <div className='col-lg-2'>
                                    <img src='/images/servicess/award1.svg' alt='' />
                                </div>
                                <div className='col-lg-2'>
                                    <img src='/images/servicess/award1.svg' alt='' />
                                </div>
                                <div className='col-lg-2'>
                                    <img src='/images/servicess/award1.svg' alt='' />
                                </div>
                                <div className='col-lg-2'>
                                    <img src='/images/servicess/award1.svg' alt='' />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='lg:hidden xl:hidden block'>
                        <div className='container py-24'>
                            <div className='text-center golden fonts text-3xl'>
                                Awards & Recognization
                            </div>
                            <div className='row mt-6'>
                                <div className='col-6 col-sm-4 py-2'>
                                    <img src='/images/servicess/award1.svg' alt='' />
                                </div>
                                <div className='col-6 col-sm-4  py-2'>
                                    <img src='/images/servicess/award1.svg' alt='' />
                                </div>
                                <div className='col-6 col-sm-4 py-2'>
                                    <img src='/images/servicess/award1.svg' alt='' />
                                </div>
                                <div className='col-6 col-sm-4 py-2'>
                                    <img src='/images/servicess/award1.svg' alt='' />
                                </div>
                                <div className='col-6 col-sm-4 py-2'>
                                    <img src='/images/servicess/award1.svg' alt='' />
                                </div>
                                <div className='col-6 col-sm-4 py-2'>
                                    <img src='/images/servicess/award1.svg' alt='' />
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className='lg:block xl:block hidden'>
                        <div className='container px-12'>
                            <div className='row items-center font px-12'>
                                <div className='shadow buttonbg lg:py-12 rounded-lg'>
                                    <div className='text-center text-white font font-semibold text-3xl'>
                                        Backstage by the numbers
                                    </div>
                                    <div className='row justify-center lg:pl-12'>
                                        <div className='col-lg-3 pt-5'>
                                            <img src="/images/about/image2.png" className='w-12' />
                                            <div className='text-white font font-bold text-3xl pt-2'>
                                                50,000+
                                                <p className='text-2xl'>
                                                    events
                                                </p>
                                            </div>
                                        </div>
                                        <div className='col-lg-3 pt-5'>
                                            <img src="/images/about/image2.png" className='w-12' />
                                            <div className='text-white font font-bold text-3xl pt-2'>
                                                20,000+
                                                <p className='text-2xl'>
                                                    event planners
                                                </p>
                                            </div>
                                        </div>
                                        <div className='col-lg-3 pt-5'>
                                            <img src="/images/about/image3.png" className='w-12' />
                                            <div className='text-white font font-bold text-3xl pt-2'>
                                                150+
                                                <p className='text-2xl'>
                                                    countries
                                                </p>
                                            </div>
                                        </div>
                                        <div className='col-lg-3 pt-5'>
                                            <img src="/images/about/image4.png" className='w-12' />
                                            <div className='text-white font font-bold text-3xl pt-2'>
                                                1.2M+
                                                <p className='text-2xl'>
                                                    attendees
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='lg:hidden xl:hidden block '>
                        <div className='container'>
                            <div className='row items-center font px-2'>
                                <div className='shadow buttonbg  rounded-lg'>
                                    <div className='text-center text-white font font-semibold text-3xl pt-12'>
                                        Backstage by the numbers
                                    </div>
                                    <div className='row justify-center lg:pl-12 '>
                                        <div className='col-6 col-sm-3 pt-4 pb-4'>
                                            <img src="/images/about/image2.png" className='w-12' />
                                            <div className='text-white font font-bold text-xl pt-2'>
                                                50,000+
                                                <p className='text-base'>
                                                    events
                                                </p>
                                            </div>
                                        </div>
                                        <div className=' col-6 col-sm-3 pt-4 pb-4'>
                                            <img src="/images/about/image2.png" className='w-12' />
                                            <div className='text-white font font-bold text-xl pt-2'>
                                                20,000+
                                                <p className='text-base'>
                                                    event planners
                                                </p>
                                            </div>
                                        </div>
                                        <div className='col-6 col-sm-3 pt-4 pb-4'>
                                            <img src="/images/about/image3.png" className='w-12' />
                                            <div className='text-white font font-bold text-xl pt-2'>
                                                150+
                                                <p className='text-base'>
                                                    countries
                                                </p>
                                            </div>
                                        </div>
                                        <div className='col-6 col-sm-3 pt-4 pb-4'>
                                            <img src="/images/about/image4.png" className='w-12' />
                                            <div className='text-white font font-bold text-xl pt-2'>
                                                1.2M+
                                                <p className='text-base'>
                                                    attendees
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="banner-area inner teams1 lg:block xl:block md:hidden hidden">
                        <div className="container ">
                            {/*<h1 className="heading-title font-medium font">We A Graphic <strong><span className='font'>Design Agency</span></strong> <br/> Forvisually Compelling Stories.​</h1>*/}

                            <div className='font golden  text-center text-xl font-semibold'>
                                Events may be forgotten,But an
                            </div>
                            <div className=' text-center font text-7xl text-white uppercase font-semibold pt-3 '>
                                experience will
                            </div>
                            <div className='text-center font text-7xl text-white uppercase font-semibold pt-3'>
                                last a lifetime
                            </div>
                            <p className='text-white text-center font text-base pt-3'>
                                World’s most influential media, entertainment & technology
                                show <br></br>nspirational speakers including game changing ideas.
                            </p>
                            <div className='text-center items-center justify-center pt-12'>
                                <button className='buttonbg text-white  px-12 py-2 rounded-lg font font-semibold text-base'>
                                    Join With us
                                </button>
                            </div>
                        </div>
                    </div>


                    <div className="banner-area inner teams1 lg:hidden xl:hidden  block">
                        <div className="container ">
                            {/*<h1 className="heading-title font-medium font">We A Graphic <strong><span className='font'>Design Agency</span></strong> <br/> Forvisually Compelling Stories.​</h1>*/}

                            <div className='font golden text-center text-xl font-semibold'>
                                Events may be forgotten,But an
                            </div>
                            <div className=' text-center font text-4xl text-white uppercase font-semibold pt-3 ' >
                                experience will
                            </div>
                            <div className='text-center font text-4xl text-white uppercase font-semibold pt-3'>
                                last a lifetime
                            </div>
                            <p className='text-white text-center font text-base pt-3'>
                                World’s most influential media, entertainment & technology
                                show inspirational speakers including game changing ideas.
                            </p>
                            <div className='text-center items-center justify-center pt-12'>
                                <button className='buttonbg text-white  px-12 py-2 rounded-lg font font-semibold text-base'>
                                    Join With us
                                </button>
                            </div>
                        </div>
                    </div>

                    <div id="animated-example" class="animated bounceIn"></div>


                    {/* Our Team Section */}
                    <div className='aboutbgg'>
                        <div className='container '>
                            <div className="team-area one three mt-12">
                                <div className="team-area-inner two">
                                    <div className="row">
                                        <div className="col-lg-4 col-sm-6 font">
                                            <SingleTeamThree
                                                itemImg={teamImg1}
                                                Title="Samantha Marisa"
                                                Designation="Graphic Designer"
                                            />
                                        </div>
                                        <div className="col-lg-4 col-sm-6  font">
                                            <SingleTeamThree
                                                itemImg={teamImg2}
                                                Title="Liam Willson"
                                                Designation="CO Founder"
                                            />
                                        </div>
                                        <div className="col-lg-4 col-sm-6 font">
                                            <SingleTeamThree
                                                itemImg={teamImg3}
                                                Title="Ava Ludger"
                                                Designation="Project Manager"
                                                className="font"
                                            />
                                        </div>
                                        <div className="col-lg-4 col-sm-6 font">
                                            <SingleTeamThree
                                                itemImg={teamImg4}
                                                Title="Liam Willson"
                                                Designation="CO Founder"
                                            />
                                        </div>
                                        <div className="col-lg-4 col-sm-6 font">
                                            <SingleTeamThree
                                                itemImg={teamImg1}
                                                Title="Liam Willson"
                                                Designation="CO Founder"
                                            />
                                        </div>
                                        <div className="col-lg-4 col-sm-6 font">
                                            <SingleTeamThree
                                                itemImg={teamImg2}
                                                Title="Liam Willson"
                                                Designation="CO Founder"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>



                    {/*<div className="team-rules-area">
                        <div className="container">
                            <div className="team-rules-area-inner">
                                <div className="border-line"></div>
                                <div className="top">
                                    <div className="row">
                                        <div className="col-lg-4 col-md-4">
                                            <h4 className="heading-title"> Our Team Rules</h4>
                                        </div>
                                        <div className="col-lg-8 col-md-8">
                                            <h1 className="title">Authoritatively seize web readiness. Completely benchmark partnerships. </h1>
                                        </div>
                                    </div>
                                </div>
                                <div className="middle">
                                    <div className="row">
                                        <div className="col-lg-4"></div>
                                        <div className="col-lg-4 col-md-6">
                                            <div className="inner">
                                                <div className="border-line"></div>
                                                <div className="content">
                                                    <p className="desc">Team Rule <br /> (No.01)</p>
                                                    <h2 className="sub-title">Love what de do</h2>
                                                    <p>Completely plagiarize intermandated services whereas multifunctional mindshare. Monotonectally mesh low-risk high-yield methods of empowerment after cross functional testing procedures.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6">
                                            <div className="inner">
                                                <div className="border-line"></div>
                                                <div className="content">
                                                    <p className="desc">Team Rule <br /> (No.02)</p>
                                                    <h2 className="sub-title">Trust</h2>
                                                    <p>Dynamically maintain reliable e-services without prospective supply chains. Continually deploy cross-unit niches via seamless networks. Synergistically foster ubiquitous methods…</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="bottom">
                                    <div className="row">
                                        <div className="col-lg-4 col-md-6">
                                            <div className="inner">
                                                <div className="border-line"></div>
                                                <div className="content">
                                                    <p className="desc">Team Rule <br /> (No.03)</p>
                                                    <h2 className="sub-title">Communication</h2>
                                                    <p>Appropriately parallel task cutting-edge mindshare rather than B2B catalysts for change. Efficiently myocardinate collaborative niche markets without excellent web-readiness.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6">
                                            <div className="inner">
                                                <div className="border-line"></div>
                                                <div className="content">
                                                    <p className="desc">Team Rule <br /> (No.04)</p>
                                                    <h2 className="sub-title">Honesty</h2>
                                                    <p>Monotonectally parallel task cross-unit e-tailers without performance based platforms. Phosfluorescently unleash market-driven niche markets via flexible functionalities.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>*/}

                    {/* <div className="team-area">
                        <div className="container ">
                            <div className="team-area-inner">
                                <div className="border-line"></div>
                                <div className="team-content">
                                    <h4 className="text-xl font">Our Event Speakers</h4>
                                    <h1 className="text-5xl font-semibold font">We Have Come </h1>
                                    <div className='py-2 text-5xl font-semibold font'> Together to Create</div>
                                </div>
                                <div className="team-member">
                                    <div className="row">
                                        <div className="col-lg-4 col-md-6">
                                            <SingleTeamTwo
                                                itemImg={teamImg1}
                                                Title="Samantha Marisa"
                                                Designation="Graphic Designer"
                                            />
                                        </div>
                                        <div className="col-lg-4 col-md-6">
                                            <SingleTeamTwo
                                                itemImg={teamImg2}
                                                Title="Liam Willson"
                                                Designation="CO Founder"
                                            />
                                        </div>
                                        <div className="col-lg-4 col-md-6">
                                            <SingleTeamTwo
                                                itemImg={teamImg3}
                                                Title="Ava Ludger"
                                                Designation="Project Manager"
                                            />
                                        </div>
                                        <div className="col-lg-4 col-md-6">
                                            <SingleTeamTwo
                                                itemImg={teamImg4}
                                                Title="Olivia Sixten"
                                                Designation="Web Developer"
                                            />
                                        </div>
                                        <div className="col-lg-4 col-md-6">
                                            <SingleTeamTwo
                                                itemImg={teamImg5}
                                                Title="Lena Karin"
                                                Designation="UI/UX Designer"
                                            />
                                        </div>
                                        <div className="col-lg-4 col-md-6">
                                            <SingleTeamTwo
                                                itemImg={teamImg6}
                                                Title="Ariane Halvar"
                                                Designation="Team Leader"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>*/}

                    {/*<div className="contact-area">
                        <div className="container">
                            <div className="border-line"></div>
                            <h4 className="heading-title">Send A Request</h4>
                            <div className="contact-area-inner">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="content">
                                            <h2 className="title">Got A Project Or <br /> A Partnership In Mind?</h2>
                                            <p className="desc">Holisticly leverage other’s user friendly platforms with progressive products. Proactively matrix exceptional content through B2C schemas. Seamlessly exploit cutting-edge niche markets rather than premium results. Collaboratively restore pandemic e-business and plug-and-play data. Conveniently target exceptional platforms whereas standards compliant data.</p>
                                        </div>
                                        <div className="row contact">
                                            <ul className="col-lg-6 phone">
                                                <li className="tag">Phone:</li>
                                                <li>+99 (0)1047011888</li>
                                                <li>+99 (0)1310011444</li>
                                            </ul>
                                            <ul className="col-lg-6 email">
                                                <li className="tag">Email:</li>
                                                <li>info@madsparrow.com</li>
                                                <li>contact@most.com</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="contact-form">
                                            <form action="#" method="post" aria-label="Contact form">
                                                <div className="row">
                                                    <div className="form-group col-6">
                                                        <input aria-required="true" aria-invalid="false" placeholder="Name" value="" type="text" name="your-name" required />
                                                    </div>
                                                    <div className="form-group col-6">
                                                        <input aria-required="true" aria-invalid="false" placeholder="Email" value="" type="email" name="your-email" required />
                                                    </div>
                                                    <div className="form-group col-12">
                                                        <input aria-invalid="false" placeholder="Title" value="" type="text" name="your-subject" required />
                                                    </div>
                                                    <div className="form-group col-12">
                                                        <textarea aria-invalid="false" placeholder="Message" name="message"></textarea>
                                                    </div>
                                                    <div className="ms-cf--bottom">
                                                        <input className="btn btn--primary" type="submit" value="Send" />
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>*/}
                </div>
            </main>

            <Footer />

        </>
    );
}

export default About;
