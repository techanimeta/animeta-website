import React, { useState } from 'react'
import Image from "next/image";
import CloseIcon from "../../public/images/close-icon.png";


function Modal({ setShow, show, videoPath  }) {
    // const [show, setShow] = useState(false);
    // const handleClick = () => {
    //     document.body.classList.remove('popupOpend');
    // };
    return (
        <>
            <div className='overlay'></div>
            <section className='modalBox'>
                <button onClick={() => setShow(false)} className='closePopup'><Image className="lazyload" src={CloseIcon} alt="CloseIcon" /></button>
                <div className='modal'>
                    <video className='Bannervideo' controls autoPlay={show} muted>
                        <source src={videoPath} type="video/mp4" />
                    </video>
                </div>
            </section>
        </>
    )
}

export default Modal