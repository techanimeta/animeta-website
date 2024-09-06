import React from 'react'

const HeroScreen = () => {
    return (
        <section className='hero-section relative'>
            <div className='container mx-auto h-full'>
                <div className='grid md:grid-cols-2 h-full items-center sm:grid-cols-1'>
                    <div className='py-6 h-full flex flex-col gap-[24px] justify-start sm:justify-center pt-16'>
                        <h1 className='section-title'>Stay Ahead, <br /> Stay relevant</h1>
                        <h4 className='section-sub-title'>AI powered tech-products <br /> for Creators & Brands</h4>
                    </div>
                    <div className='h-full flex flex-col gap-4 justify-center'>
                        <picture>
                            <img src="/images/v3/girlCutOut-2.png" alt="Hero Picture" className='hero-img' />
                        </picture>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroScreen