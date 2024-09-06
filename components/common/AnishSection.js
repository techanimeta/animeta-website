import React from 'react'
import Image from "next/image";
import Line from "../../public/images/heading-border.png";

function AnishSection() {
    return (
        <>
        {/* content: " ";
        position: absolute;
        right: 30px;
        top: -15px;
        border-top: none;
        border-right: 15px solid transparent;
        border-left: 15px solid transparent;
        border-bottom: 15px solid black; */}
           <section className="py-4 bg-black text-white modalContent">
                <div className='container mx-auto team-bio'>
                    <p>Anish has been the CEO & minority shareholder of Cosmos-Maya since 2012, one of the most accomplished & successful animation
                    studios from Asia. The studio has grown multi-fold because of his strong ability to maintain a fine balance between business &
                    creativity.</p>

                    <p>Under Anish’s leadership the studio forayed into original Indian animation IP creation with the launch of Motu Patlu, India’s most
                    successful animation series. Post that, the studio created over 10000’ hours of kids’ animation content across 20+ shows; maintaining
                    a 50%+ market share of the original Indian kids & family content space for a decade. Key clients include — Nickelodeon, Disney, Cartoon
                    Network, Sony, Amazon Prime Video, Disney+ Hotstar, Netflix, Discovery Kids, Facebook & YouTube.</p>

                    <p>Anish laid the foundation of WowKidz the studio’s YouTube channel network for kids & family audiences. Within a span of just 5 years,
                    the network has 35 channels & 80 million+ subscribers, 41 billion+ views worldwide across 10+ languages. He has an unparalleled
                    grasp over the kids & family content business in South Asia & Southeast Asia.</p>

                    <p>During his tenure as the CEO, the company grew from 30 employees to 1200 employees with 4 different business streams globally and
                    a revenue & EBITDA growth of 25x+ from 2012 to 2022.</p>

                    <div>
                        <p>
                            His most notable achievement as the CEO of the studio is to repeatedly get in organized investment into this business & consistently
                            give them a profitable exit through a higher valuation of the company. Key milestones include:
                        </p>
                        <ul>
                            <li><p>Securing an angel investment from Singapore & providing a 5x exit in 2018.</p></li>
                            <li><p>Securing PE investment from KKR backed Emerald Media in 2018 & providing a 4x exit in 2021 by getting the current investor, TPG
                                backed NewQuest Capital Partners at a valuation of 90 Million USD.</p></li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AnishSection
