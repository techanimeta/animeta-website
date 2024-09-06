import Head from "next/head";
import Image from "next/image";
import Script from "next/script";
import dotImg from "../public/images/dot-img.png";
// import icon1 from "../public/images/icon-1.png";
// import icon2 from "../public/images/icon-2.png";
// import icon3 from "../public/images/icon-3.png";
// import icon4 from "../public/images/icon-4.png";
// import founderTeam1 from "../public/images/founder-team-1.png";
import founderTeam1 from "../public/images/new-team-1.png";
import founderTeam2 from "../public/images/new-team-2.png";
import founderTeam3 from "../public/images/new-team-3.png";
import managementTeam1 from "../public/images/management-team-1.png";
import managementTeam2 from "../public/images/management-team-2.png";
import managementTeam3 from "../public/images/management-team-3.png";
import teamBanner from "../public/images/v3/teamBanner.png";

import Welcome from "../components/welcome/Welcome";
import Header from "../components/new-home/Header/Header";
import { useEffect, useState } from "react";
import useWindowSize from "../hooks/useWindowSize";
import AnishSection from "../components/common/AnishSection";
import RajeshSection from "../components/common/RajeshSection";
import SameerSection from "../components/common/SameerSection";

import DevdattaSection from "../components/common/DevdattaSection";
import BiswamitraSection from "../components/common/BiswamitraSection";
import KrishnaSection from "../components/common/KrishnaSection";
import $ from "jquery";

export default function People() {
  const [profileData, setProfileData] = useState(null);
  const [isActiveProfile, setIsActiveProfile] = useState(false);
  const handleSetProfileData = (event, data) => {
    if (profileData === data && isActiveProfile) {
      setIsActiveProfile(false);
      setProfileData(null);
    } else {
      setProfileData(data);
      setIsActiveProfile(true);
    }
  };
  const windowSize = useWindowSize();
  useEffect(() => {
    if (profileData && typeof window !== "undefined") {
      window.scroll(0, $("."+profileData).offset().top - 80);
    }
  }, [profileData]);
  return (
    <>
      <Head>
        <meta
          httpEquiv="Content-Type"
          content="text/html; charset=utf-8"
        ></meta>
        <title>People | Animeta</title>
        <meta name="msapplication-TileImage" content="/og-image.png" />
        <meta property="og:site_name" content="People | Animeta" />
        <meta property="og:title" content="People | Animeta" />
        <meta
          property="og:description"
          content="Animeta is the World's first Social Media Influencer collaboration platform for Digital Creators, TikTok stars, & everyone else - powered by AIJoin the revolution of influencers that make money with digital creator tech, empower the creator economy, and get famous faster."
        />
        <meta property="og:image" content="/og-image.png" />
        <meta name="robots" content="index, follow"></meta>
        <meta name="language" content="English"></meta>

        <meta
          name="keywords"
          content="Creator Economy, Influencer collaboration, Animeta, Influencer Marketing, Social Media Influencer, Digital Creator, Social Commerce"
        ></meta>
        <meta property="og:type" content="website" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="300" />
        <meta property="og:image:height" content="300" />
        <meta property="og:url" content="https://animeta.ai/" />

        <link rel="icon" href="/favicon.ico" />
        <link
          rel="icon"
          href="https://animeta.ai/og-image.png"
          sizes="192x192"
        />
        <link rel="apple-touch-icon" href="https://animeta.ai/og-image.png" />
        <meta
          name="msapplication-TileImage"
          content="https://animeta.ai/og-image.png"
        />
      </Head>
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/parallax/3.1.0/parallax.min.js"
        async
      ></Script>
      <Script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9081900158205152"
        crossOrigin="anonymous"
      ></Script>
      <link itemProp="thumbnailUrl" href="https://animeta.ai/og-image.png" />

      <span
        itemProp="thumbnail"
        itemScope
        itemType="http://schema.org/ImageObject"
      >
        <link itemProp="url" href="https://animeta.ai/og-image.png" />
      </span>
      {/* <Welcome /> */}
      {/* <Header /> */}
      <section className="people-page-header">
        <div className="mx-auto">
          <div className="people-hero-section">
            <h1>
              MEET THE <span>PEOPLE</span>
            </h1>
            <img src="/images/v3/teamBanner.png" alt="icon meta 1" className="!w-full object-bottom" />
           
            {/* <Image src={teamBanner} alt="icon meta 1" className="!w-full object-cover" /> */}
            {/* <p className="bg-black"><mark>We offer financial investment, data analytics & business intelligence, content strategy<br className="break-in-title" />& creative supervision, brand, PR & social media.</mark></p> */}
          </div>
        </div>
      </section>
      <section className="people-page-icons-section !pb-20">
        <div className="team-section lg:container lg:mx-auto">
          <h1 className="team-heading">Founding Team</h1>
          <div className="icons-section">
            <div
              className={`icon-box cursor-pointer anishMehta ${isActiveProfile && profileData === "anishMehta" && 'ArrowAftar'}`}
              onClick={(event) => handleSetProfileData(event, "anishMehta")}
            >
              <div className="icon">
                <Image src={founderTeam1} alt="icon meta 1" />
              </div>
              <div className="icon-box-info">
                <div className="title">
                  <h1>FOUNDER</h1>
                </div>
                <div className="designation">
                  <p>Anish Mehta</p>
                </div>
              </div>
            </div>
            {profileData && windowSize.width < 767 && (
              <>{isActiveProfile && profileData === "anishMehta" && <AnishSection />}</>
            )}
            <div
              id="box"
              className={`icon-box cursor-pointer rajeshKamat ${isActiveProfile && profileData === "rajeshKamat" && 'ArrowAftar'}`}
              onClick={(event) => handleSetProfileData(event, "rajeshKamat")}
            >
              <div className="icon rajesh">
                <Image src={founderTeam2} alt="icon meta 4" />
              </div>
              <div className="icon-box-info">
                <div className="title">
                  <h1>FOUNDING INVESTOR</h1>
                </div>
                <div className="designation">
                  <p>Rajesh Kamat</p>
                </div>
              </div>
            </div>
            {profileData && windowSize.width < 767 && (
              <>{isActiveProfile && profileData === "rajeshKamat" && <RajeshSection />}</>
            )}
            <div
              className={`icon-box cursor-pointer sameerManchanda ${isActiveProfile && profileData === "sameerManchanda" && 'ArrowAftar'}`}
              onClick={(event) => handleSetProfileData(event, "sameerManchanda")}
            >
              <div className="icon">
                <Image src={founderTeam3} alt="icon meta 1" />
              </div>
              <div className="icon-box-info">
                <div className="title">
                  <h1>FOUNDING INVESTOR</h1>
                </div>
                <div className="designation">
                  <p>Sameer Manchanda</p>
                </div>
              </div>
            </div>
            {profileData && windowSize.width < 767 && (
              <>{isActiveProfile && profileData === "sameerManchanda" && <SameerSection />}</>
            )}
          </div>
        </div>
        {profileData && windowSize.width > 767 && (
          <>
            {isActiveProfile && profileData === "anishMehta" ? (
              <AnishSection />
            ) : isActiveProfile && profileData === "rajeshKamat" ? (
              <RajeshSection />
            ) : isActiveProfile && profileData === "sameerManchanda" ? (
              <SameerSection />
            ) : null}
          </>
        )}
         {/* ${!isActiveProfile && profileData !== "devdattaPotnis" && profileData !== "krishnaDesai" && profileData !== "biswamitraRay" ? 'pb-28' : ''} */}
        <div className={`team-section team-section2 lg:container lg:mx-auto`}>
          <h1 className="team-heading">Management Team</h1>
          <div className="icons-section">
            <div
              className={`icon-box cursor-pointer devdattaPotnis ${isActiveProfile && profileData === "devdattaPotnis" && 'ArrowAftar'}`}
              onClick={(event) => handleSetProfileData(event, "devdattaPotnis")}
            >
              <div className="icon devdatta">
                <Image src={managementTeam1} alt="icon meta 2" />
              </div>
              <div className="icon-box-info">
                <div className="title">
                  <h1>CHIEF EXECUTIVE <br />OFFICER</h1>
                </div>
                <div className="designation">
                  <p>Devdatta Potnis</p>
                </div>
              </div>
            </div>
            {profileData && windowSize.width < 767 && (
              <>{isActiveProfile && profileData === "devdattaPotnis" && <DevdattaSection />}</>
            )}
            <div
              className={`icon-box cursor-pointer krishnaDesai ${isActiveProfile && profileData === "krishnaDesai" && 'ArrowAftar'}`}
              onClick={(event) => handleSetProfileData(event, "krishnaDesai")}
            >
              <div className="icon">
                <Image src={managementTeam2} alt="icon meta 3" />
              </div>
              <div className="icon-box-info">
                <div className="title">
                  <h1>CHIEF PRODUCT OFFICER<br />& DATA SCIENTIST</h1>
                </div>
                <div className="designation">
                  <p>Krishna Desai</p>
                </div>
              </div>
            </div>
            {profileData && windowSize.width < 767 && (
              <>{isActiveProfile && profileData === "krishnaDesai" && <KrishnaSection />}</>
            )}
            <div
              className={`icon-box cursor-pointer biswamitraRay ${isActiveProfile && profileData === "biswamitraRay" && 'ArrowAftar'}`}
              onClick={(event) => handleSetProfileData(event, "biswamitraRay")}
            >
              <div className="icon">
                <Image src={managementTeam3} alt="icon meta 1" />
              </div>
              <div className="icon-box-info">
                <div className="title">
                  <h1>SVP - BRANDED CONTENT<br />& CREATOR STRATEGY</h1>
                </div>
                <div className="designation">
                  <p>Biswamitra Ray</p>
                </div>
              </div>
            </div>
            {profileData && windowSize.width < 767 && (
              <>{isActiveProfile && profileData === "biswamitraRay" && <BiswamitraSection />}</>
            )}
          </div>
        </div>
        {profileData && windowSize.width > 767 && (
          <>
            {isActiveProfile && profileData === "devdattaPotnis" ? (
              <DevdattaSection />
            ) : isActiveProfile && profileData === "krishnaDesai" ? (
              <KrishnaSection />
            ) : isActiveProfile && profileData === "biswamitraRay" ? (
              <BiswamitraSection />
            ): null}
          </>
        )}
      </section>
    </>
  );
}
