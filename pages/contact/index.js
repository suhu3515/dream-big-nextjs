import React from 'react';

import HeaderTwo from '../../src/components/Header/HeaderTwo';
import logodark from "../../public/images/logo/logodark.png";
import Footer from '../../src/components/Footer';
import ContactForm from './ContactForm';

const Contact = () => {

    return (
        <>
            <HeaderTwo
                headerLogo={logodark}
                headerLogoLight={logodark}
            />
            <main className="ms-main">
                <div className="ms-page-content">
                    <div className="contact-area contact bg-black ">
                        <div className="container mt-6">
                            <div className="contact-area-inner mt-6">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="content">
                                            <h2 className="text-4xl font uppercase font-bold golden lg:hidden block">Dream Big</h2>
                                            <p className="text-4xl font uppercase font-bold golden lg:hidden block">Celebration</p>
                                            <h2 className="text-7xl font uppercase font-bold golden xl:block lg:block hidden">Dream Big</h2>
                                            <p className="text-7xl font uppercase font-bold golden xl:block lg:block hidden pt-2">Celebration</p>
                                        </div>
                                        <div className="row contact font">
                                            <ul className="col-lg-6 col-xl-6 col-md-6 col-sm-6 phone  xl:pt-6 pt-2">
                                                <li className="font-semibold golden font text-xl">Phone:</li>
                                                <li className="text-white ">+99 (0)1047011888</li>
                                                <li className="text-white ">+99 (0)1310011444</li>
                                            </ul>
                                            <ul className="col-lg-6 col-xl-6 col-md-6 col-sm-6  email  xl:pt-6 pt-2">
                                                <li className="font-semibold golden font ">Email:</li>
                                                <li className="text-white">hello@dreambigcelebration.com</li>
                                                <li className="text-white">contact@dreambigcelebration.com</li>
                                            </ul>
                                            <ul className="col-lg-6 phone xl:pt-6 pt-2">
                                                <li className="font-semibold golden font text-xl">Address:</li>
                                                <li className="text-white font xl:text-xl">
                                                    #3488, 14th Main Rd, HAL 2nd Stage,
                                                    Indiranagar, Bengaluru - 560008

                                                </li>

                                            </ul>
                                        </div>

                                    </div>
                                    <div className="col-lg-6">
                                        <ContactForm />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="contact-map-area">
                        <div className="container xl:hidden lg:hidden block">
                            <div className="row">
                                <div className="col-12">
                                    <div className="contact-map-area-fluid">
                                        <iframe className="contact-map" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14602.288851207937!2d90.47855065!3d23.798243149999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1663151706353!5m2!1sen!2sbd" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
                                        </iframe>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className=" xl:block lg:block hidden">
                            <div className="row">
                                <div className="col-12">
                                    <div className="contact-map-area-fluid">
                                        <iframe className="contact-map" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14602.288851207937!2d90.47855065!3d23.798243149999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1663151706353!5m2!1sen!2sbd" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
                                        </iframe>
                                    </div>
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

export default Contact;
