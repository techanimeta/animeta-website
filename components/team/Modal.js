import React, { useState } from 'react'
import Image from "next/image";
import Rajesh from "../../public/images/rajesh.jpg"
import CloseIcon from "../../public/images/close-icon.png";


function Modal({ setShow, show, videoPath, teamData, founderData }) {
    // const [show, setShow] = useState(false);
    // const handleClick = () => {
    //     document.body.classList.remove('popupOpend');
    // };
    return (
        <>
            <div className='overlay'></div>
            <section className='modalBox profile-team'>
                <button onClick={() => setShow(false)} className='closePopup'><Image className="lazyload" src={CloseIcon} alt="CloseIcon" /></button>
                <div className='member-modal'>
                    <div className='picture-member'>
                        <Image src={teamData.profile} className="lazyload" alt="Logo" />
                    </div>
                    <div className='detail-member'>
                        <h2>{teamData.name}</h2>
                        <h3>{teamData.designation}</h3>
                        <div dangerouslySetInnerHTML={{__html: teamData.description}} />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Modal