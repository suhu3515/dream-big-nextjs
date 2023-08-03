
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ScrollToTop from '../ScrollTop';

const Footer = (props) => {
    const { footerLogo, footerClass } = props;
    return (
        <>
            <footer className={footerClass ? footerClass : 'ms-footer ms-footer--template bg-black'}>
                <section className="container footer-container" data-parallax="on">
                    <div className="footer-title text-center golden">
                        <h1 className=''>Get in <strong>Touch</strong> with <br /> <strong>Dream Big Celebration</strong> </h1>
                        </div>
                        
                    <div className="social-area">
                        <div className="row area-inner">
                            <div className="col-lg-3 col-md-6 col-sm-2 col-2">
                                <div className="social-wrapper border-t border-white">
                                    <div className="content">
                                        <h3 className="platform golden font">YouTube</h3>
                                        <a href="#0" className="link font text-white">dreambigcelebration</a>
                                    </div>
                                    <div className="social">
                                        <a href="https://www.youtube.com/@dreambigcelebration" className="icon"><i className="socicon-youtube golden"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-2 col-2">
                                <div className="social-wrapper border-t border-white">
                                    <div className="content">
                                        <h3 className="platform golden font">Twitter</h3>
                                        <a href="#0" className="link font text-white">dreambigcelebration</a>
                                    </div>
                                    <div className="social">
                                        <a href="#0" className="icon"><i className="socicon-twitter golden"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-2 col-2">
                                <div className="social-wrapper border-t border-white">
                                    <div className="content">
                                        <h3 className="platform golden font">Instagram</h3>
                                        <a href="#0" className="link font text-white">dreambigcelebration</a>
                                    </div>
                                    <div className="social">
                                        <a href="https://instagram.com/dreambigcelebration?igshid=MjEwN2IyYWYwYw==" className="icon"><i className="socicon-instagram golden"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-2 col-2">
                                <div className="social-wrapper border-t border-white">
                                    <div className="content">
                                        <h3 className="platform golden font">Facebook</h3>
                                        <a href="#0" className="link font text-white">dreambigcelebration</a>
                                    </div>
                                    <div className="social">
                                        <a href="https://www.facebook.com/dreambigcelebrations?mibextid=ZbWKwL" className="icon"><i className="socicon-facebook golden"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="copyright-area">
                        <div className="left-side font text-white">

                        </div>
                        <div className="right-side font text-white">
                            <p>Copyright © 2023 DreamBig Celebration. All Rights Reserved.</p>
                        </div>
                    </div>
                </section>
            </footer>
            <ScrollToTop />
        </>
    );
}

export default Footer;