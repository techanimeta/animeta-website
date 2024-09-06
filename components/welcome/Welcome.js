import Image from "next/image";
import char1 from "../../public/images/A-char.png";
import char2 from "../../public/images/N-char.png";
import char3 from "../../public/images/I-char.png";
import char4 from "../../public/images/M-char.png";
import char5 from "../../public/images/E-char.png";
import char6 from "../../public/images/T-char.png";
import char7 from "../../public/images/A-char-2.png";


const Welcome = () => {
    return (
        <>
            <section className="Splash">
                <video className='Bannervideo' id="myvideo" autoPlay muted playsInline>
                    <source src="https://orla.ae/assets/video/preloader.mp4" type="video/mp4" />
                </video>
            </section>
        </>
    )
}

export default Welcome