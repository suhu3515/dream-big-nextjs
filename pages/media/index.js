import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import Masonry from 'react-masonry-css';




const Media = () => {
    const breakpointColumnsObj = {
        default: 3,
        1200: 3,
        992: 2,
        576: 1
    };

    return (
        <>


            <main className="ms-main bg-black">
                <div className="ms-page-content">


                    <div className="ms-portfolio-filter-area  project gallery">
                        <div className="container">
                            <h4 className="heading-title golden font font-bold">Gallery Widget</h4>
                            <h1 className="title text-white font ">Videos</h1>
                            <div className="portfolio_wrap">
                                <div className="filter grid-masonary ms-masonry-gallery portfolio-feed">
                                    <Masonry
                                        breakpointCols={breakpointColumnsObj}
                                        className="my-masonry-grid"
                                        columnClassName="my-masonry-grid_column"
                                    >
                                        <div>
                                            <div className="fadein zoom h-align-middle grid-item-p element-item transition creative" data-category="transition">
                                                <div className="item--inner">
                                                    <iframe width="560" height="315" src="https://www.youtube.com/embed/7L9-dtHFQxc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                                </div>
                                            </div>
                                            <div className="fadein zoom h-align-middle grid-item-p element-item transition creative" data-category="transition">
                                                <div className="item--inner">
                                                    <iframe width="560" height="315" src="https://www.youtube.com/embed/l43ZiCo0Uf4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                                </div>
                                            </div>
                                            <div className="fadein zoom h-align-middle grid-item-p element-item transition creative" data-category="transition">
                                                <div className="item--inner">
                                                    <iframe width="560" height="315" src="https://www.youtube.com/embed/FcpkXC7D7jc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="fadein zoom h-align-middle grid-item-p element-item transition creative" data-category="transition">
                                                <div className="item--inner">
                                                    <iframe width="560" height="315" src="https://www.youtube.com/embed/uJj8DMmj7aE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                                </div>
                                            </div>
                                            <div className="fadein zoom h-align-middle grid-item-p element-item transition creative" data-category="transition">
                                                <div className="item--inner">
                                                    <iframe width="560" height="315" src="https://www.youtube.com/embed/d74WSlYp3ns" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                                </div>
                                            </div>
                                            <div className="fadein zoom h-align-middle grid-item-p element-item transition creative" data-category="transition">
                                                <div className="item--inner">
                                                    <iframe width="560" height="315" src="https://www.youtube.com/embed/lpsSlpfw6e0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                                </div>
                                            </div>
                                        </div>

                                        <div>
                                            <div className="fadein zoom h-align-middle grid-item-p element-item transition creative" data-category="transition">
                                                <div className="item--inner">
                                                <iframe width="560" height="315" src="https://www.youtube.com/embed/VU7VIcd_i68" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                                   </div>
                                            </div>
                                            <div className="fadein zoom h-align-middle grid-item-p element-item transition creative" data-category="transition">
                                                <div className="item--inner">
                                                    <iframe width="560" height="315" src="https://www.youtube.com/embed/FcpkXC7D7jc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                                </div>
                                            </div>
                                            <div className="fadein zoom h-align-middle grid-item-p element-item transition creative" data-category="transition">
                                                <div className="item--inner">
                                                    <iframe width="560" height="315" src="https://www.youtube.com/embed/FcpkXC7D7jc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                                </div>
                                            </div>
                                        </div>
                                    </Masonry>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </main>



        </>
    );
}

export default Media;
