// import Poster from "../../public/images/poster.jpg";
// if (typeof window !== 'undefined') {
//     var elem = document.getElementById("myvideo");
// }

// function openFullscreen() {
//     if (elem.requestFullscreen) {
//         elem.requestFullscreen();
//     } else if (elem.webkitRequestFullscreen) { /* Safari */
//         elem.webkitRequestFullscreen();
//     } else if (elem.msRequestFullscreen) { /* IE11 */
//         elem.msRequestFullscreen();
//     }
// }

function Banner() {
    return (
        <div className='BannerSection'>
            <video className='Bannervideo desktop-only' id="myvideo"  autoPlay loop muted playsInline>
                <source src="https://d3e066o7tnnbih.cloudfront.net/banner_video_updated.mp4" type="video/mp4" />
                {/* <source src="https://orla.ae/assets/video/banner_video_updated.mp4" type="video/mp4" /> */}
            </video>
            {/* poster="https://animeta.ai/images/cover-mobile.jpg" */}
            <video className='Bannervideo mobile-only'  poster="https://animeta.ai/images/cover-mobile.jpg"  autoPlay loop muted playsInline>
                <source src="https://orla.ae/assets/video/mobile-video.mp4" />
            </video>
        </div>
    )
}

export default Banner