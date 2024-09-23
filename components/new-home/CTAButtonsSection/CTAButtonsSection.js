import React from "react";

const CTAButtonsSection = () => {
    return (
        <section className="ctaButtonSection">
            <div className="container mx-auto">
                
                <div className="flex flex-col sm:flex-row gap-[20px]">
                    <div className="card ctaBox bg-[#f6f6f6]">
                        <div className="imageBox">
                            <picture>
                                <img src="/images/v3/equal-animetaBrandStar.png" alt="Brand Star" className='object-contain image1' />
                            </picture>
                        </div>
                        <div className="ctaContentBox">
                            <h5>Infleuncer marketing platform <br />for Brand and Talent Agency</h5>
                            <a href="#animetaBrandStar" className='ctaButtons'>More info</a>
                        </div>
                    </div>
                    <div className="card ctaBox bg-black text-white">
                        <div className="imageBox">
                            <picture>
                                <img src="/images/v3/equal-animetaAiCreatorBuddy.png" alt="Brand Star" className='object-contain image2' />
                            </picture>
                        </div>
                        <div className="ctaContentBox">
                            <h5 className='text-white'>AI-Powered Content Strategy App</h5>
                            <a href="#aniAiCreatorBuddy" className='ctaButtons'>More info</a>
                        </div>
                    </div>
                    <div className="card ctaBox bg-[#f6f6f6]">
                        <div className="imageBox">
                            <picture>
                                <img src="/images/v3/equal-animetaCreatorPartnerships.png" alt="Brand Star" className='object-contain image3' />
                            </picture>
                        </div>
                        <div className="ctaContentBox">
                            <h5>YOU CREATE, We take care of everything else!</h5>
                            <a href="#animetaCreatorPartnerships" className='ctaButtons'>More info</a>
                        </div>
                    </div>
                </div>
                
                <div className='flex flex-col justify-center'>
                    <h2 className='section-sub-title text-center mt-12'>Our products for the creator economy</h2>
                </div>
                
            </div>
        </section>
    )
}

export default CTAButtonsSection;