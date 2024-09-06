import Head from "next/head";
import { blogCategories, news } from "../utils/data";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
// import blogImg1 from "../public/images/Anish-Mehta-min.png";
// import blogImg2 from "../public/images/blog-2.png";
// import blogImg3 from "../public/images/blog-3.png";
// import blogImg4 from "../public/images/Rajesh-Kamat-min.jpg";
// import blogImg5 from "../public/images/blog-5.png";
// import blogImg6 from "../public/images/blog-6.jpg";
// import blogImg8 from "../public/images/Final-Animeta-logo_Black.png";
// import blogImg10 from "../public/images/blog-10.webp";
// import blogImg11 from "../public/images/blog-11.webp";
// import blogImg16 from "../public/images/blog-16.webp";
// import blogImg17 from "../public/images/blog-17.webp";
// import blogImg18 from "../public/images/blog-18.png";
// import blogImg19 from "../public/images/blog-19.jpg";
// import blogImg23 from "../public/images/blog-23.jpg";
// import blogImg24 from "../public/images/blog-24.png";
// import blogImg25 from "../public/images/2-0-1304105013-whatsapp-0_1679589704670_1682271113229.avif";
// import blogImg26 from "../public/images/Content-Creation-with-Artificial-Intelligence-by-Gaurav-Thakur.webp";
// import blogImg27 from "../public/images/1683715471_Q96nwX_BW_Car.jpg";
import Image from "next/image";
import Link from "next/link";
import moment from "moment/moment";
import Script from "next/script";
import Welcome from "../components/welcome/Welcome";
import Header from "../components/new-home/Header/Header";
// const blogs = [
// {
//   img: blogImg6,
//   headlines:
//     "Newly launched AI-powered creator tech venture to focus on creator economy",
//   portal: "India TV",
//   date: "09 Feb 2023",
//   link: "https://www.indiatvnews.com/business/news/newly-launched-ai-powered-creator-tech-venture-animeta-to-focus-on-creator-economy-artificial-intelligence-india-2023-02-09-845800",
//   category: "Corporate PR",
//   description:
//     "As many sectors around the world took a nosedive due to Covid restrictions and Russia-Ukraine war, the creator economy showed picked up pace",
// },
// {
//   img: blogImg16,
//   headlines:
//     "Animeta strengthens leadership with key hires from Google Meta and Viacom",
//   portal: "E4M",
//   date: "13 Mar 2023",
//   link: "https://www.exchange4media.com/people-movement-news/animeta-strengthens-leadership-with-key-hires-from-google-meta-and-viacom-125657.html",
//   category: "Corporate PR",
//   description:
//     "Animeta, the creator tech company recently launched by former Cosmos-Maya CEO Anish Mehta, today announced several strategic hires",
// },
//   {
//     img: blogImg24,
//     headlines:
//       "Here’s How Animeta Is Helping Indian Content Creators Crack The Monetisation Code",
//     portal: "Inc42",
//     date: "21 Mar 2023",
//     link: "https://inc42.com/startups/heres-how-animeta-is-helping-indian-content-creators-crack-the-monetisation-code/?login=1",
//     category: "Corporate PR",
//     description:
//       "Animeta help creators grow their communities and maximise their earnings across multiple social media platforms.",
//   },
//   {
//     img: blogImg19,
//     headlines:
//       "Animeta onboards its first set of creators",
//     portal: "Economic times",
//     date: "13 Mar 2023",
//     link: "https://economictimes.indiatimes.com/tech/startups/ai-powered-creator-tech-company-animeta-onboards-its-first-set-of-creator-partners/articleshow/98613227.cms",
//     category: "Corporate PR",
//     description:
//       "Animeta, the AI-powered creator tech company, has aimed to bring a ‘studio model’ in the creator economy business, with a view to bringing about a greater degree of organization into the space",
//   },
// {
//   img: blogImg3,
//   headlines:
//     "Over 1 million Indian social media creators to earn $500 per month in the next three years: Report",
//   portal: "LiveMint",
//   date: "23 Apr 2023",
//   link: "https://www.livemint.com/news/india/over-1-million-indian-social-media-creators-to-earn-500-per-month-in-the-next-three-years-report/amp-11682270973943.html",
//   category: "Corporate PR",
//   description:
//     "New Delhi: India is leading the digital content creation wave with 1 million creators in the country estimated to have at least 100,000 subscribers or followers in three years",
// },
// {
//   img: blogImg1,
//   headlines:
//     "AI-based platform Animeta launched, to focus on creator economy",
//   portal: "The Economic Times",
//   date: "08 Feb 2023",
//   link: "https://m.economictimes.com/tech/startups/ai-based-platform-animeta-launched-to-focus-on-creator-economy/amp_articleshow/97730754.cms",
//   category: "Corporate PR",
//   description:
//     "Former CEO of animation studio Cosmos-Maya, Anish Mehta, on Wednesday launched his new venture, Animeta",
// },
// {
//   img: blogImg2,
//   headlines: "Creator Tech Firm Animeta Taps Media Execs",
//   portal: "VC Circle",
//   date: "08 Feb 2023",
//   link: "https://www.vccircle.com/creatortech-firm-animeta-taps-media-execs",
//   category: "Corporate PR",
//   description:
//     "Rajesh Kamat, managing director of KKR-backed Emerald Media, and Den Networks founder and serial media entrepreneur Sameer Manchanda, have invested in Animeta",
// },
//   {
//     img: blogImg3,
//     headlines: "Animeta launched to reshape the future of BACE",
//     portal: "Adgully",
//     date: "08 Feb 2023",
//     link: "https://www.adgully.com/animeta-launched-to-reshape-the-future-of-bace-128263.html",
//     category: "Corporate PR",
//     description:
//       "Anish Mehta, the former CEO of leading Asian animation studio  Cosmos-Maya, today announced the launch of his new venture, Animeta",
//   },
//   {
//     img: blogImg4,
//     headlines: "Top media execs back creator tech co Animeta",
//     portal: "Mint",
//     date: "08 Feb 2023",
//     link: "https://www.livemint.com/companies/news/top-media-execs-back-creator-tech-co-animeta-11675797086438.html",
//     category: "Corporate PR",
//     description:
//       "Rajesh Kamat, managing director of KKR-backed Emerald Media, and Den Networks founder and serial media entrepreneur Sameer Manchanda, have invested in Animeta",
//   },
//   {
//     img: blogImg5,
//     headlines: "Creator Tech Firm Animeta Taps Media Execs",
//     portal: "VC Circle",
//     date: "08 Feb 2023",
//     link: "https://www.vccircle.com/creatortech-firm-animeta-taps-media-execs",
//     category: "Corporate PR",
//     description:
//       "Rajesh Kamat, managing director of KKR-backed Emerald Media, and Den Networks founder and serial media entrepreneur Sameer Manchanda, have invested in Animeta",
//   },
// {
//   img: blogImg1,
//   headlines:
//     "Anish Mehta announces the launch of ‘Animeta’; an AI-based self-service creator tech platform",
//   portal: "Event Faqs",
//   date: "09 Feb 2023",
//   link: "https://www.eventfaqs.com/news/ef-18915/anish-mehta-announces-the-launch-of-animeta-an-ai-based-self-service-creator-tech-platform",
//   category: "Corporate PR",
//   description:
//     "Anish Mehta, the former CEO of Asian animation studio Cosmos-Maya, announced the launch of his new venture, Animeta",
// },
// {
//   img: blogImg8,
//   headlines:
//     "Indian Animation Boss Anish Mehta Launches AI-Powered Creator Platform",
//   portal: "Asia Pacific News",
//   date: "09 Feb 2023",
//   link: "https://content-technology.com/asia-pacific-news/indian-animation-boss-anish-mehta-launches-ai-powered-creator-platform/",
//   category: "Corporate PR",
//   description:
//     "Anish Mehta, the former CEO of leading Asian animation studio Cosmos-Maya, has announced the launch of Animeta",
// },
// {
//   img: blogImg10,
//   headlines: "Animeta names Devdatta Potnis as chief executive officer",
//   portal: "Financial Express",
//   date: "15 Feb 2023",
//   link: "https://www.financialexpress.com/brandwagon/animeta-names-devdatta-potnis-as-chief-executive-officer/2982592/",
//   category: "Corporate PR",
//   description:
//     "Animeta, an AI-powered tech creator, has named Devdatta Potnis as its chief executive officer. The tech platform, which was launched recently",
// },
//   {
//     img: blogImg10,
//     headlines: "AI creator company Animeta appoints Devdatta Potnis as CEO",
//     portal: "Exchange4media",
//     date: "15 Feb 2023",
//     link: "https://www.exchange4media.com/people-movement-news/ai-creator-company-animeta-appoints-devdatta-potnis-as-ceo-125395.html",
//     category: "Corporate PR",
//     description:
//       "AI-powered tech creator company Animeta has appointed Devdatta Potnis as the Chief Executive Officer. This key appointment follows the recent launch of the AI-powered self-service creator tech platform",
//   },
//   {
//     img: blogImg11,
//     headlines: "Tech creator company Animeta appoints Devdatta Potnis as CEO",
//     portal: "Mint",
//     date: "17 Feb 2023",
//     link: "https://www.livemint.com/companies/people/tech-creator-company-animeta-appoints-devdatta-potnis-as-ceo-11676610435959.html",
//     category: "Corporate PR",
//     description:
//       "Artificial Intelligence (AI)-powered tech creator company, Animeta has appointed Devdatta Potnis as its chief executive officer. This follows the recent launch of the AI-powered self-service creator tech platform",
//   },
//   {
//     img: blogImg16,
//     headlines: "Tech creator company Animeta announces strategic hires",
//     portal: "Mint",
//     date: "01 Mar 2023",
//     link: "https://www.livemint.com/industry/media/tech-creator-company-animeta-announces-strategic-hires-11677655951614.html",
//     category: "Corporate PR",
//     description:
//       "Singapore-based creator tech company Animeta, launched by former Cosmos-Maya CEO Anish Mehta has announced several strategic hires",
//   },
// {
//   img: blogImg16,
//   headlines:
//     "Animeta taps talent from Google, Meta, Viacom & WarnerMedia for leadership roles",
//   portal: "The Economic Times",
//   date: "01 Mar 2023",
//   link: "https://economictimes.indiatimes.com/jobs/c-suite/animeta-taps-talent-from-google-meta-viacom-warnermedia-for-leadership-roles/articleshow/98324879.cms?from=mdr",
//   category: "Corporate PR",
//   description:
//     "Animeta, the creator tech company recently launched by former Cosmos-Maya CEO Anish Mehta, on Wednesday announced several strategic hires",
// },
//   {
//     img: blogImg16,
//     headlines:
//       "Animeta appoints Vipasha Joshi, Krishna Desai and Biswamitra Ray",
//     portal: "Campaign India",
//     date: "01 Mar 2023",
//     link: "https://www.campaignindia.in/article/animeta-appoints-vipasha-joshi-krishna-desai-and-biswamitra-ray/482413",
//     category: "Corporate PR",
//     description:
//       "Animeta has announced the appointment of Vipasha Joshi as chief operating officer, Krishna Desai as chief product officer and  Biswamitra ‘Vishu’ Ray as vice president -  branded content and creator projects",
//   },
//   {
//     img: blogImg16,
//     headlines: "Tech creator company Animeta announces strategic hires",
//     portal: "Live Mint",
//     date: "01 Mar 2023",
//     link: "https://www.livemint.com/industry/media/tech-creator-company-animeta-announces-strategic-hires/amp-11677655951614.html",
//     category: "Corporate PR",
//     description:
//       "Singapore-based creator tech company Animeta, launched by former Cosmos-Maya CEO Anish Mehta has announced several strategic hires",
//   },
//   {
//     img: blogImg17,
//     headlines: "Animeta onboards first set of creators",
//     portal: "Mint",
//     date: "13 Mar 2023",
//     link: "https://www.livemint.com/industry/media/animeta-onboards-first-set-of-creators-11678706368883.html",
//     category: "Corporate PR",
//     description:
//       "Tech creator company Animeta has onboarded its first set of creator partners with a total monthly viewership of 1 billion plus and a cumulative subscriber base of over 50 million",
//   },
// {
//   img: blogImg18,
//   headlines: "MarTech Interview with Anish Mehta, Founder at Animeta",
//   portal: "MarTech",
//   date: "16 Mar 2023",
//   link: "https://martechseries.com/mts-insights/interviews/martech-interview-with-anish-mehta-founder-at-animeta/",
//   category: "Corporate PR",
//   description:
//     "Anish Mehta, Founder at Animeta chats about the burgeoning creator economy and what’s to be expected from this segment:",
// },
// {
//   img: blogImg19,
//   headlines:
//     "Animeta onboards its first set of exclusive creator partners with a total monthly viewership of 1 Billion",
//   portal: "Indian Television",
//   date: "16 Mar 2023",
//   link: "https://www.indiantelevision.com/iworld/over-the-top-services/animeta-onboards-its-first-set-of-exclusive-creator-partners-with-a-total-monthly-viewership-of-1-billion-230313",
//   category: "Corporate PR",
//   description:
//     "Animeta, the AI-powered creator tech company, has aimed to bring a ‘studio model’ in the creator economy business, with a view to bringing about a greater degree of organization into the space",
// },
//   {
//     img: blogImg8,
//     headlines:
//       "5 Content Creators making a difference in varied content genres",
//     portal: "Outlook",
//     date: "20 Mar 2023",
//     link: "https://www.outlookindia.com/art-entertainment/5-content-creators-making-a-difference-in-varied-content-genres-news-271720",
//     category: "Corporate PR",
//     description:
//       "5 Content Creators making a difference in varied content genres",
//   },
// {
//   img: blogImg8,
//   headlines:
//     "International Content Creators Day 2023 Celebrating the Craft of digital content creation",
//   portal: "News 18",
//   date: "23 Apr 2023",
//   link: "https://www.news18.com/lifestyle/international-content-creators-day-2023-celebrating-the-craft-of-digital-content-creation-7610971.html",
//   category: "Corporate PR",
//   description:
//     "International Creators Day is a celebration of creativity and innovation that takes place on April 23rd every year",
// },
// {
//   img: blogImg3,
//   headlines:
//     "Over 1m Indian creators to cross $500/ month in next 3 years Animeta",
//   portal: "Adgully",
//   date: "23 Apr 2023",
//   link: "https://www.adgully.com/over-1m-indian-creators-to-cross-500us-month-in-next-3-years-animeta-130940.html",
//   category: "Corporate PR",
//   description:
//     "From passive addiction to being a hobby to a passion to a full-fledged profession, digital content creation has come a long way world over, and like other fronts, India is leading this trend too.",
// },
//   {
//     img: blogImg23,
//     headlines: "10 lakh content creators to earn INR 40k each month",
//     portal: "Hans India",
//     date: "23 Apr 2023",
//     link: "https://www.thehansindia.com/amp/business/10-lakh-content-creators-to-earn-rs-40k-a-month-each-794005",
//     category: "Corporate PR",
//     description:
//       "Over 10 lakh Indian digital content creators on social media are likely to earn more than $500 (a little over Rs 41,000) a month each in the next three years, a report revealed on Friday.",
//   },
//   {
//     img: blogImg19,
//     headlines:
//       "Animeta signs SIT to their starmaker program",
//     portal: "Indian Television",
//     date: "29 May 2023",
//     // https://www.youtube.com/watch?v=WXXy_7p6I6Q
//     link: "https://www.indiantelevision.com/mam/marketing/mam/animeta-signs-sit-to-their-starmaker-program-230529",
//     category: "Creator PR",
//     description: "Mumbai: Long before seeking trends to make videos on social media was a thing, Mohit Hussein and Chhavi Mittal, the founders of SIT – or ‘Shitty Ideas Trending’, already identified the immense power of providing relatable entertainment.",
//   },
//   {
//     img: blogImg1,
//     headlines:
//       "ONE MILLION INDIAN SOCIAL MEDIA CREATORS TO EARN OVER $500 MONTHLY WITHIN THREE YEARS: ANIMETA REPORT",
//     portal: "Outlook",
//     date: "22 Apr 2023",
//     // https://www.youtube.com/watch?v=WXXy_7p6I6Q
//     link: "https://startup.outlookindia.com/sector/saas/one-million-indian-social-media-creators-to-earn-over-500-monthly-within-three-years-animeta-report-news-8210",
//     category: "Creator PR",
//     description: "It has claimed in a statement that the creator economy has been a topic of interest for the entire world and there are many statistics that are often discussed. While every creator is a creator out of passion, a large chunk creates content as a hobby.",
//   },
// {
//   img: blogImg8,
//   headlines: "Rahul Vaidya sings Mehndi rach gayi for Lakhneet Wedding",
//   portal: "Times Of India",
//   date: "14 Apr 2023",
//   link: "https://timesofindia.indiatimes.com/entertainment/punjabi/music/rahul-vaidya-sings-mehndi-rach-gayi-for-lakhneet-wedding/articleshow/99489595.cms?from=mdr",
//   category: "Creator PR",
//   description:
//     "Playback singer Rahul Vaidya has lent his voice to the original song, 'Mehndi Rach Gayi' for the wedding of the internet sensations Lakhan Rawat and Neetu Bisht Rawat also known as the 'Lakhneet Wedding'",
// },
//   {
//     img: blogImg26,
//     headlines: "The Evolution of Content Creation In The Age Of Artificial Intelligence",
//     portal: "TechieXpert",
//     date: "22 May 2023",
//     link: "https://www.techiexpert.com/the-evolution-of-content-creation-in-the-age-of-artificial-intelligence/",
//     category: "Creator PR",
//     description:
//       "As the world becomes increasingly digital, businesses are turning to technology to help them create content more efficiently.",
//   },
//   {
//     img: blogImg27,
//     headlines: "Role Of Automotive Influencers In Shaping The Future Of The Industry",
//     portal: "Autoworld",
//     date: "10 May 2023",
//     link: "https://bwautoworld.businessworld.in/article/Role-Of-Automotive-Influencers-In-Shaping-The-Future-Of-The-Industry/10-05-2023-476042/",
//     category: "Creator PR",
//     description:
//       "There is a marked shift in content consumption across the globe and India leads this change with the most number of users (thanks to heavy mobile internet penetration in the smallest of towns",
//   },
//   {
//     img: blogImg8,
//     headlines:
//       "Lakhan Rawat ने क्यों कहा Neetu Bisht को अपना Lucky Charm ? कब और कैसे मिले Lakhan और Neetu ?",
//     portal: "N/A",
//     date: "29 Mar 2023",
//     // https://www.youtube.com/watch?v=WXXy_7p6I6Q
//     link: "#",
//     category: "Creator PR",
//     description: "",
//   },
//   {
//     img: blogImg8,
//     headlines:
//       "इस क्रिकेटर ने क्रिकेट से कम और दूसरी चीज़ों से कमाया नाम और पैसा",
//     portal: "N/A",
//     date: "25 Mar 2023",
//     // https://www.youtube.com/watch?v=vjNvhrKYPF8
//     link: "#",
//     category: "Creator PR",
//     description: "",
//   },
//   {
//     img: blogImg8,
//     headlines: "NewsX: Studio visit",
//     portal: "N/A",
//     date: "N/A",
//     link: "#",
//     category: "Creator PR",
//     description: "",
//   },
//   {
//     img: blogImg8,
//     headlines:
//       "Exclusive Interview With Lakhan Arjun Rawat & Neetu Bisht | @LakhneetVlogs | Uncut | Rapid Fire |",
//     portal: "N/A",
//     date: "25 Mar 2023",
//     // https://www.youtube.com/watch?v=d4tQO3m71ns
//     link: "#",
//     category: "Creator PR",
//     description: "",
//   },
//   {
//     img: blogImg8,
//     headlines: "2- Story on all 5 creators of Animeta",
//     portal: "N/A",
//     date: "N/A",
//     link: "#",
//     category: "Creator PR",
//     description: "",
//   },
// {
//   img: blogImg8,
//   headlines:
//     "5 Content Creators making a difference in varied content genres",
//   portal: "Outlook",
//   date: "20 Mar 2023",
//   link: "https://www.outlookindia.com/art-entertainment/5-content-creators-making-a-difference-in-varied-content-genres-news-271720",
//   category: "Creator PR",
//   description: "",
// },
//   {
//     img: blogImg8,
//     headlines: "3- Vandana Goswami: Ahmedabad coverage attached below.",
//     portal: "N/A",
//     date: "N/A",
//     link: "#",
//     category: "Creator PR",
//     description: "",
//   },
//   {
//     img: blogImg8,
//     headlines: "4- Orange Tree Entertainment: Sangli coverage attached below.",
//     portal: "N/A",
//     date: "N/A",
//     link: "#",
//     category: "Creator PR",
//     description: "",
//   },
//   {
//     img: blogImg8,
//     headlines: "Online coverage- https://dainikvasantsager.com/?p=1064",
//     portal: "Dainikvasantsager",
//     date: "21 Apr 2023",
//     link: "https://dainikvasantsager.com/?p=1064",
//     category: "Creator PR",
//     description: "",
//   },
//   {
//     img: blogImg8,
//     headlines: "5- News18: Story on International creators day",
//     portal: "N/A",
//     date: "N/A",
//     link: "#",
//     category: "Creator PR",
//     description: "",
//   },
//   {
//     img: blogImg8,
//     headlines: "Animeta onboards first set of exclusive creator partners",
//     portal: "News 18",
//     date: "13 Mar 2023",
//     link: "https://www.news18.com/lifestyle/international-content-creators-day-2023-celebrating-the-craft-of-digital-content-creation-7610971.html",
//     category: "Creator PR",
//     description:
//       "Animeta, the AI-powered creator tech company, has announced the first set of its Animeta exclusive creators",
//   },
// {
//   img: blogImg8,
//   headlines: "Animeta onboards first set of exclusive creator partners",
//   portal: "Buzz In Content",
//   date: "13 Mar 2023",
//   link: "https://www.buzzincontent.com/story/animeta-onboards-first-set-of-exclusive-creator-partners/",
//   category: "Creator PR",
//   description:
//     "Animeta, the AI-powered creator tech company, has announced the first set of its Animeta exclusive creators",
// },
// ];

export default function News() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("All Topics");
  const [updatedBlogs, setUpdatedBlogs] = useState(news);
  const handleFilterBlog = (slug) => {
    setActiveTab(slug);
  };
  useEffect(() => {
    if (activeTab !== "All Topics") {
      let filterBlogs = news.filter((item) => item.category === activeTab);
      setUpdatedBlogs(filterBlogs);
    } else {
      // blogs.sort(function (a, b) {
      //   return new Date(b.date) - new Date(a.date);
      // });
      setUpdatedBlogs(news);
    }
  }, [activeTab]);
  return (
    <>
      <Head>
        <meta
          httpEquiv="Content-Type"
          content="text/html; charset=utf-8"
        ></meta>
        <title>News | Animeta</title>
        <meta name="msapplication-TileImage" content="/og-image.png" />
        <meta property="og:site_name" content="News | Animeta" />
        <meta property="og:title" content="News | Animeta" />
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
      <section className="container mx-auto">
        <div className="team-section">
          {/* <h1 class="team-heading">Latest News</h1> */}

          <ul className="blog-categories-tab">
            {blogCategories.map((category, index) => {
              return (
                <li
                  key={index}
                  className={`${
                    activeTab === category.slug
                      ? "category-tab active"
                      : "category-tab"
                  }`}
                  onClick={() => handleFilterBlog(category.slug)}
                >
                  {category.name}
                </li>
              );
            })}
          </ul>
          <div className="blog-items">
            {updatedBlogs.map((item, index) => {
              return (
                <div key={index} className="single-blog-item">
                  <div className="blog-card">
                    <Link
                      href={item.link}
                      legacyBehavior
                      className="cursor-pointer"
                    >
                      <a target="_blank" className="blog-img">
                        <Image
                          src={item.img}
                          alt={item.headlines.split(" ").join("-")}
                        />
                      </a>
                    </Link>
                    <div className="blog-content">
                      <div className="blog-info">
                        <h3>
                          {item.portal}
                          <br />
                          <span className="date">{item.date}</span> -{" "}
                          <span className="category">{item.category}</span>
                        </h3>
                        <h2>
                          <Link
                            href={item.link}
                            legacyBehavior
                            className="cursor-pointer"
                          >
                            <a target="_blank">
                              <h2 className="blog-title"><span dangerouslySetInnerHTML={{
                                  __html: item.headlines,
                                }}></span></h2>
                            </a>
                          </Link>
                        </h2>
                      </div>
                      <div className="readMoreutton">
                        <Link
                          href={item.link}
                          legacyBehavior
                          className="cursor-pointer"
                        >
                          <a target="_blank">Read More</a>
                        </Link>
                      </div>
                      {/* {item.description && (
                        <div
                          className="blog-description"
                          dangerouslySetInnerHTML={{ __html: item.description }}
                        />
                      )} */}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
