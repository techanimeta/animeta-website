import React from 'react'
import Image from "next/image";
// import Heading from "../../public/images/hot-heading.png";
// import Blog1 from "../../public/images/blog-1.jpg";
// import Blog2 from "../../public/images/blog-2.jpg";
// import Blog3 from "../../public/images/blog-3.jpg";
import Slider from "react-slick";


function News() {
    var settings = {
        dots: false,
        controls: true,
        infinite: true,
        autoplay: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    const handlePlayVideo = (event) => {
        console.log("dsajdlkjasd", event.target);

    }
    return (
        <>
            <section className='News'>
                <div className='container'>
                    <div className='newsHeader'>
                        <div className='mobile-size-fix'>
                            <h2>WHAT’S <span>HOT!</span></h2>
                        </div>
                        <div className='section-discription color-block'>
                            <p>GET YOUR DAILY DOSE OF WHAT&apos;S UP AND COMING IN THE CONTENT CREATION WORLD.</p>
                        </div>
                    </div>
                    <div className='videoList desktop-only'>
                        <div className='videoGroup'>
                            <iframe className="lazyload" width="100%" height="315" src="https://www.youtube.com/embed/uOd8VG3vWYk" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        </div>
                        <div className='videoGroup'>
                            <iframe className="lazyload" width="100%" height="315" src="https://www.youtube.com/embed/BCOjopku3bk" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        </div>
                        <div className='videoGroup'>
                            <iframe className="lazyload" width="100%" height="315" src="https://www.youtube.com/embed/qJ-EF09srsE" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        </div>
                    </div>
                    <div className='mobile-only mobileS'>
                        <Slider {...settings}>
                            <div>
                            <iframe className="lazyload" width="100%" height="315" src="https://www.youtube.com/embed/uOd8VG3vWYk" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                            </div>
                            <div>
                            <iframe className="lazyload" width="100%" height="315" src="https://www.youtube.com/embed/BCOjopku3bk" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                            </div>
                            <div>
                            <iframe className="lazyload" width="100%" height="315" src="https://www.youtube.com/embed/qJ-EF09srsE" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                            </div>
                        </Slider>
                    </div>
                    <div className='text-center bottom-heading'>
                        <h5>Be the first to know of the latest, on the creator economy.</h5>
                    </div>
                </div>
            </section>
        </>
    )
}

export default News