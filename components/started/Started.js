import React, { useEffect, useState } from 'react'
import Image from "next/image";
import HeadingTxt from "../../public/images/started-heading.png";
import $ from "jquery";


function Started() {

    // const scrollToSection = (e) => {
    //     if (typeof window !== "undefined") {
    //         $('html, body').animate({
    //             scrollTop: $("#Started").offset().top
    //         }, 2000);
    //     }
    // }
    // const [width, setWidth] = useState('20%');
    // useEffect(() => {
    //     if (typeof window !== "undefined") {
    //         window.onscroll = (e) => {
    //             console.log(e, "event target");
    //             setWidth(window.scrollY)
    //         }
    //     }
    // });

    return (
        <>
            {/* <button className='NextSection test' onClick={(e) => scrollToSection(e)}><Image src={Down} alt="Down" /></button> */}
            <section className='Started' id='Started'>
                <div className='container'>
                    <div className='create-me'>
                        <div className='section-title-layout'>
                            <h2>GET <span>STARRRED!</span></h2>
                        </div>
                        <div className='section-discription'>
                        <p>• GAIN POPULARITY.</p>
                        <p>• ACHIEVE GROWTH.</p>
                        <p>• GO GLOBAL.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Started