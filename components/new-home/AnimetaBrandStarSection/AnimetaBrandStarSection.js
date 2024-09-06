import React, { useState } from "react";
import RequestADemoForm from "../../common/RequestADemoForm";
import SignUpForm from "../../common/SignUpForm";

const AnimetaBrandStarSection = () => {
  const [show, setShow] = useState(false);
  const [isShowForm, setIsShowForm] = useState(false);
  return (
    <div>
    <section className="animetaContentSections" id="animetaBrandStar">
      <div className="container mx-auto">
        <div className="flex flex-col sm:flex-row sectionContent">
          <div className="imageBox w-full sm:w-3/6 ">
            <picture>
              <img
                src="/images/v3/brandstar.png"
                alt="Brand Star"
                className="object-cover w-full h-full"
              />
            </picture>
          </div>
          <div className="contentBox w-full sm:w-3/6">
            <div className="brandLogo">
              <picture>
                <img
                  src="/images/v3/equal-animetaBrandStar.png"
                  alt="Brand Star"
                  className="object-contain"
                />
              </picture>
            </div>
            <div className="sectionDescription">
              <h3>Influencer Marketing Platform</h3>
              <p>
                Animeta Brandstar is a first of its kind tech-data enabled
                influencer marketing platform, that enables brands to discover and
                execute campaigns, with the most relevant creators, in an
                advanced data intuitive way; with a strong focus on ROI &
                performance metrics.
              </p>
              <button onClick={() => setShow(true)} className='ctaButtons'>Request a Demo</button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="animetaCtaSection mt-16 mb-16">
      <div className="container mx-auto">
        <div className="flex flex-col  gap-[20px] sm:flex-row ctaSectionContent">
          <div className="ctaBoxContent w-full sm:w-3/6 ">
            <h3>Become an Animeta Verified creator</h3>
            <p>Improve your chances of getting discovered for brand deals, significantly! Build your complete profile, to make your portfolio stand out.</p>
            <a href="https://creatorform.animeta.ai/" target="_blank"  rel="noreferrer" className='ctaButtons'>Apply for Verification</a>
          </div>
          <div className="ctaBoxContent bg-black text-white w-full sm:w-3/6 ">
            <h3>MANAGE A ROSTER OF TALENTS?</h3>
            <p>Sign up as a preferred agency partner on Animeta Brandstar, for bulk verification, data management access, and many other benefits. </p>
            {/* <a href="#."   rel="noreferrer" className='ctaButtons'>Sign Up</a> */}
            <button onClick={() => setIsShowForm(true)} className="ctaButtons">Sign Up</button>
          </div>
        </div>
      </div>
    </section>

    {show && <RequestADemoForm show={show} setShow={setShow} />}
      {isShowForm && <SignUpForm show={isShowForm} setShow={setIsShowForm} />}
    </div>
  );
};

export default AnimetaBrandStarSection;
