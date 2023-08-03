import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import Header from '../../src/components/Header';
import HomeSlider from './SliderSection';

import logodark from "../../public/images/logo/logodark.png";

const Home = () => {
    return (
        <div className="index-two" data-menu="fixed">
            <Header 
                headerLogo={logodark}
                headerLogoLight={logodark}
            />
            
            <main className="ms-main">
                <HomeSlider />
            </main>
                    
        </div>
    );
}

export default Home;
