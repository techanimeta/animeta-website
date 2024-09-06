import React, { useState } from 'react'
import Modal from '../components/team/Modal';
import Head from 'next/head'
import Image from "next/image"
import Rajesh from "../public/images/rajesh.jpg"
import Sameer from "../public/images/sameer.jpg"
import Anish from "../public/images/anish.jpg"
import Devdatta from "../public/images/devdatta.jpg"
import Vipasha from "../public/images/vipasha.jpg"
import Krishna from "../public/images/krishna.jpg"

export default function Creator() {

    const [show, setShow] = useState(false);
    const [videoPath, setVideoPath] = useState("");

    const [teamData, setTeamData] = useState(null);
    const [founderData, setFounderData] = useState(null);
    const setUrl = (url) => {
        setShow(true);
        setVideoPath(url);
    }

    let managementTeam = [
        {
            name: "Devdatta Potnis",
            designation: "Chief Executive Officer",
            profile: Devdatta,
            description: `
            <p>With over 15 years in the media & entertainment space, Devdatta headed the revenue & strategy function at Cosmos-Maya and has been responsible in building Cosmos-Maya along with Anish since 2012. He has been responsible in getting content commissioning deals worth 100 Million USD+ and distributing it digitally worldwide in 120+ countries.</p>
            <p>Prior to Cosmos-Maya he has had significant stints across different media companies including Viacom18 Media Pvt. Ltd., Star India Pvt. Ltd., Reliance MediaWorks, Balaji Motion Pictures, among others.</p>
            <p>An ENTC Engineer from the University of Pune & MBA from MICA, Devdatta is passionate about the media business & loves to write.</p>
            `
        },
        {
            name: "Vipasha Joshi",
            designation: "Chief Operating Officer",
            profile: Vipasha,
            description: `
            <p>Vipasha Joshi is an ex-Googler with more than 14  years of experience in Digital marketing, Business Development, Strategy and Social Media. She has worked in 6 geographies across multiple industries such as eCommerce, Education, Automobile, Finance, Hospitality, Beauty, Food & Beverages and more. She has also been active in diverse roles as well as worked with Women Entrepreneurs in growing their digital footprint and training them. She was a part of the core member of the Google+ team in India and has worked with Sports and Bollywood Celebrities in increasing their social media footprint.</p>
            <p>As the Country Manager, India at Jellysmack, she created a new path in the creator landscape for creators and media partners and was instrumental in growing the creator business multi-folds across all content verticals.</p>
            `
        },
        {
            name: "Krishna Desai",
            designation: "Chief Product Officer & Data Scientist",
            profile: Krishna,
            description: `
            <p>With 20+ years with leading players in the media marketing and television industry. KD’s core competence lies in Content creation and acquisition, brand building, traditional & digital media marketing, sales & distribution strategy & planning, advertising media planning & buying, leveraging market research, translating  consumer insights into actionable plans, ensuring the channel/product & content strategy in a rapidly evolving customer preference and growing competition, leading inter-functional & geographically distributed teams.</p>
            <p>He has worked with Turner International (now, Discovery Warner Media), as an Executive Director and Network Head, South Asia. Led a high performing team and shouldered responsibility for all Network functions for kids’ business including content (creation, commissioning, localization, operations) communication (marketing and PR), P&L / budget planning, channel operations, long range planning and new business for South Asia and drove the P&L to its highest profitability in APAC.</p>
            `
        }
    ]

    let founding = [
        {
            name: "Rajesh Kamat",
            designation: "Founding Investor",
            profile: Rajesh,
            description: `
            <p>Singapore-based Rajesh Kamat is currently the Managing Director of Emerald Media, a pan-Asian platform established by global investment firm KKR to fund investment opportunities in the fast-growing media and entertainment industries.</p>
            <p>His penchant for risk-taking was put to test when he drew up the very successful India entry strategy for Endemol -- the world’s largest television production company (Endemol). He followed this up by launching India’s 11th GEC COLORS that overtook the 9-year category leader Star Plus in just nine-month CEO Rajesh, turned COLORS profitable in a record 15 months! Currently, successfully running two global media and entertainment focused PE funds, CA Media and Emerald Media, Rajesh has had an exceptional professional run.</p>
            <p>On the board of over 15 companies, Rajesh is today an accomplished and respected investor and executive in the M&E industry with a unique approach combining a sharp investment acumen with a valued operational expertise.</p>
            <p>Key investments in Asia and in India by Emerald Media:</p>
            <ul>
            <li>Yupp TV (2016): Acquires a significant minority stake in YuppTV one of the world’s leading over-the-top (OTT) video platforms for South Asian content.</li>
            <li>Yupp TV (2016): Acquires a significant minority stake in YuppTV one of the world’s leading over-the-top (OTT) video platforms for South Asian content.</li>
            <li>Cosmos-Maya (2018) – Acquires controlling stake in Cosmos-Maya the market leader in IP-led Indian kid’s animation content through a combination of primary and secondary stake acquisition. Fully exits with an upwards of 3X return in a span of 3 years.</li>
            <li>Global Sports Commerce -GSC (2018) – Acquires a significant minority stake in Global Sports Commerce (“GSC”), one of the world’s largest sports technology and management companies, for US$80mn, through a combination of primary and secondary investments.</li>
            </ul>
            `
        },
        {
            name: "Sameer Manchanda",
            designation: "Founding Investors",
            profile: Sameer,
            description: `
            <p>Sameer Manchanda is an ex-Googler with more than 14  years of experience in Digital marketing, Business Development, Strategy and Social Media. She has worked in 6 geographies across multiple industries such as eCommerce, Education, Automobile, Finance, Hospitality, Beauty, Food & Beverages and more. She has also been active in diverse roles as well as worked with Women Entrepreneurs in growing their digital footprint and training them. She was a part of the core member of the Google+ team in India and has worked with Sports and Bollywood Celebrities in increasing their social media footprint.</p>
            <p>As the Country Manager, India at Jellysmack, she created a new path in the creator landscape for creators and media partners and was instrumental in growing the creator business multi-folds across all content verticals.</p>
            `
        }
    ]

    let Founder = [
        {
            name: "Anish Mehta",
            designation: "Founder",
            profile: Anish,
            description: `
            <p>Anish has been the CEO & minority shareholder of Cosmos-Maya since 2012, one of the most accomplished & successful animation studios from Asia. The studio has grown multi-fold because of his strong ability to maintain a fine balance between business & creativity.</p>
            <p>Under Anish’s leadership the studio forayed into original Indian animation IP creation with the launch of Motu Patlu, India’s most successful animation series. Post that, the studio created over ‘10000’ hours of kids’ animation content across 20+ shows; maintaining a 50%+ market share of the original Indian kids & family content space for a decade. Key clients include – Nickelodeon, Disney, Cartoon Network, Sony, Amazon Prime Video, Disney+ Hotstar, Netflix, Discovery Kids, Facebook & YouTube.</p>
            <p>Anish laid the foundation of WowKidz the studio’s YouTube channel network for kids & family audiences. Within a span of just 5 years, the network has 35 channels & 80 million+ subscribers, 41 billion+ views worldwide across 10+ languages. He has an unparalleled grasp over the kids & family content business in South Asia & Southeast Asia.</p>
            <p>During his tenure as the CEO, the company grew from 30 employees to 1200 employees with 4 different business streams globally and a revenue & EBITDA growth of 25x+ from 2012 to 2022.</p>
            <p>His most notable achievement as the CEO of the studio is to repeatedly get in organized investment into this business & consistently give them a profitable exit through a higher valuation of the company. Key milestones include:</p>
            <ul>
            <li>Securing an angel investment from Singapore & providing a 5x exit in 2018.</li>
            <li>Securing PE investment from KKR backed Emerald Media in 2018 & providing a 4x exit in 2021 by getting the current investor, TPG backed NewQuest Capital Partners at a valuation of 90 Million USD.</li>
            </ul>
            `
        },
    ]

    return (
        <>
            <Head>
                <title>ANIMETA</title>
                <meta name="description" content="ANIMETA" />
                <link rel="icon" href="/favicon.ico" />
                <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap" rel="stylesheet"></link>
            </Head>
            <div className='team-floor'>
                <div className='team-title'>
                    <h2>Founding Investors</h2>
                </div>
                <div className='team-wrapp'>
                    {founding.map((founding, index) => {
                        return (
                            <div key={index} className='member-box' onClick={() => {
                                setTeamData(founding)
                                setShow(true)
                            }}>
                                <div className='image-member'>
                                    <Image src={founding.profile} className="lazyload" alt="Logo" />
                                    <h2>{founding.name}</h2>
                                    <h3>{founding.designation}</h3>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className='team-title'>
                    <h2>FOUNDER</h2>
                </div>
                <div className='team-wrapp'>
                    <div className='member-box' onClick={() => {
                        setFounderData(Founder)
                        setShow(true)
                    }}>
                        {Founder.map((founder, index) => {
                            return (
                                <div key={index} className='member-box' onClick={() => {
                                    setTeamData(founder)
                                    setShow(true)
                                }}>
                                    <div className='image-member'>
                                        <Image src={founder.profile} className="lazyload" alt="Logo" />
                                        <h2>{founder.name}</h2>
                                        <h3>{founder.designation}</h3>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className='team-title'>
                    <h2>Management Team</h2>
                </div>
                <div className='team-wrapp'>
                    {managementTeam.map((team, index) => {
                        return (
                            <div key={index} className='member-box' onClick={() => {
                                setTeamData(team)
                                setShow(true)
                            }}>
                                <div className='image-member'>
                                    <Image src={team.profile} className="lazyload" alt="Logo" />
                                    <h2>{team.name}</h2>
                                    <h3>{team.designation}</h3>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            {show && <Modal show={show} setShow={setShow} videoPath={videoPath} teamData={teamData} />}
        </>
    )
}
