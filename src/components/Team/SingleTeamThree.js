import React from 'react';
import Image from 'next/image';

import teamImg1 from "../../../public/images/team/team-01.jpg";
import spoorthi from "../../../public/images/about/spoorthi.png"

const SingleTeamThree = (props) => {
    const { itemClass, Title, Designation, } = props;

    return (
        <div className={itemClass ? itemClass : 'ms-tm style-3 default d_row'}>
            <div className="ms-tm--box">
                <div className="ms-tm--img bg-black">
                    <Image width="675" height="900" src={spoorthi} className="attachment-full size-full wp-image-2094" alt="Team Image" />

                    <div className="ms-tm--content teams -mb-4">
                        <h3 className="golden font font-semibold text-2xl mt-3">{Title ? Title : 'Ava Ludger'}</h3>
                        <p className="ms-tm--function ">{Designation ? Designation : 'Project Manager'}</p>
                        <div className="ms-tm--desc">
                                <div className="ms-tm--socials mt-3">
                                    <a className="text-base px-2 golden hover:white" href="#0">
                                        <i aria-hidden="true" className="fab fa-facebook-f"></i>
                                    </a>
                                    <a className="text-base px-2 golden hover:white" href="#0">
                                        <i aria-hidden="true" className="fab fa-twitter"></i>
                                    </a>
                                    <a className="text-base px-2 golden hover:white" href="#0">
                                        <i aria-hidden="true" className="fab fa-linkedin-in"></i>
                                    </a>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleTeamThree