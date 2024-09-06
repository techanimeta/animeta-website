import Head from "next/head";
import React, { useEffect } from "react";
import HeroSection from "../components/new-home/HeroSection/HeroSection";
import CTAButtonsSection from "../components/new-home/CTAButtonsSection/CTAButtonsSection";
import AnimetaBrandStarSection from "../components/new-home/AnimetaBrandStarSection/AnimetaBrandStarSection";
import ANISection from "../components/new-home/ANISection/ANISection";
import AnimetaStarMakerSection from "../components/new-home/AnimetaStarMakerSection/AnimetaStarMakerSection";
import ImagesSection from "../components/new-home/ImagesSection/ImagesSection";
import SubscribeSection from "../components/new-home/SubscribeSection/SubscribeSection";
import Welcome from "../components/welcome/Welcome"
import Script from "next/script";

export default function Home() {
  // if (typeof window !== "undefined") {
  //   AOS.init();
  // }
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Spalsh Gone

      setTimeout(function () {
        var body = document.body;
        body.classList.add("SplashGone");
      }, 6000);

      // Navbar Loaded

      setTimeout(function () {
        var body = document.body;
        body.classList.add("NavLoad");
      }, 6500);

      // When the user scrolls the page, execute myFunction
      window.onscroll = function () {
        myFunction();
      };

      // Get the header
      var header = document.getElementById("navbar");

      // Get the offset position of the navbar
      var sticky = header?.offsetTop;

      // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
      myFunction(sticky, header);
    }
  }, []);

  function myFunction(sticky, header) {
    if (typeof window !== "undefined" && window.pageYOffset > sticky) {
      header?.classList.add("sticky");
    } else {
      header?.classList.remove("sticky");
    }
  }

  return (
    <>
      <Head>
        <meta
          httpEquiv="Content-Type"
          content="text/html; charset=utf-8"
        ></meta>
        <title>AI Powered Creator Tech Company | Animeta</title>
        <meta name="msapplication-TileImage" content="/og-image.png" />
        <meta
          property="og:site_name"
          content="AI Powered Creator Tech Company | Animeta"
        />
        <meta
          property="og:title"
          content="AI Powered Creator Tech Company | Animeta"
        />
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
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/parallax/3.1.0/parallax.min.js" async></Script>
      <Script src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9081900158205152" async crossOrigin="anonymous"></Script>
      <link itemProp="thumbnailUrl" href="https://animeta.ai/og-image.png" />

      <span
        itemProp="thumbnail"
        itemScope
        itemType="http://schema.org/ImageObject"
      >
        <link itemProp="url" href="https://animeta.ai/og-image.png" />
      </span>
      {/* <Welcome /> */}
      <HeroSection />
      <CTAButtonsSection />
      {/* <section>
        <picture>
          <img src="/images/v2/Animeta-Homepage-images-section.png" alt="animeta homepage images section" />
        </picture>
      </section> */}
      <AnimetaBrandStarSection />
      <ANISection />
      <AnimetaStarMakerSection />
      <ImagesSection />
      <SubscribeSection />
    </>
  );
}
