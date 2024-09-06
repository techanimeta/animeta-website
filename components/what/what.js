import React, { useEffect, useState } from 'react'
import Image from "next/image";
import Heading from "../../public/images/what-heading.png";

function What() {

    return (
        <>
            <section className='what'>
                <div className='container'>
                    <div className='create-me direction-change'>
                        <div className='section-title-layout color-block'>
                            <h2>WHAT <span>DO WE TAKE CARE OF?</span></h2>
                        </div>
                        <div className='section-discription what-p color-block'>
                            <p>We offer financial investment, data analytics & business intelligence, content strategy & creative supervision, brand, PR & social media expertise in addition to data driven, result oriented & authentic brand campaigns to our creator partners.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default What