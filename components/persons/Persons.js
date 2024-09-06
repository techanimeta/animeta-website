import React, { useState } from "react";
import Image from "next/image";
import p1 from "../../public/images/person-1.jpg";
import p2 from "../../public/images/person-2.jpg";
import p3 from "../../public/images/person-3.jpg";
import p4 from "../../public/images/person-4.jpg";
import p5 from "../../public/images/person-5.jpg";
import p6 from "../../public/images/person-6.jpg";
import p7 from "../../public/images/person-7.jpg";
import p8 from "../../public/images/person-8.jpg";
import p9 from "../../public/images/person-9.jpg";
import p10 from "../../public/images/person-10.jpg";
import Modal from "../modal/Modal";
import RequestACallForm from "../common/RequestACallForm";

function Persons() {
  const [show, setShow] = useState(false);
  const [isShowForm, setIsShowForm] = useState(false);

  const [videoPath, setVideoPath] = useState("");

  const setUrl = (url) => {
    setShow(true);
    setVideoPath(url);
  };

  var settings = {
    dots: false,
    controls: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <section className="gallery  mt-16">
      <div className="container mx-auto">
        <div className="galleryBox">
          <article>
            <div className="galleryRow flex flex-wrap items-center">
              <div className="w-full sm:w-1/2 text-left">
                <div className="galleryText">
                  {/* <h2>calling all creators</h2> */}
                  <h2>Want to join our Creator Partnerships program?</h2>
                  <p>Click below to fill up your contact details or ping us on Whatsapp. </p>
                 <p className="text-right !pb-0"> <button onClick={() => setIsShowForm(true)} className="buttonBox">Request a Call</button></p>
                 {/* <p className="text-right !pb-0"><a href="https://creatorform.animeta.ai/" target="_blank"  rel="noreferrer" className='buttonBox'>Request a Call</a></p> */}
                </div>
              </div>
              <div className="w-1/2 sm:w-1/4">
                <div
                  onClick={() =>
                    setUrl("https://d3e066o7tnnbih.cloudfront.net/video8.mp4")
                  }
                  className="category galleryImage"
                >
                  <Image className="lazyload" src={p1} alt="p1" /> <h2>Pets</h2>
                </div>
              </div>
              <div className="w-1/2 sm:w-1/4">
                <div
                  onClick={() =>
                    setUrl(
                      "https://d3e066o7tnnbih.cloudfront.net/new_beauty_converted.mp4"
                    )
                  }
                  className="category galleryImage"
                >
                  <Image className="lazyload" src={p2} alt="p2" />{" "}
                  <h2>Beauty</h2>
                </div>
              </div>
            </div>
          </article>
          <article>
            <div className="galleryRow flex flex-wrap  items-center">
              <div className="w-1/2 sm:w-1/4">
                <div
                  onClick={() =>
                    setUrl(
                      "https://d3e066o7tnnbih.cloudfront.net/new_home_diy.mp4"
                    )
                  }
                  className="category"
                >
                  <Image className="lazyload" src={p3} alt="p3" /> <h2>DIY</h2>
                </div>
              </div>
              <div className="w-1/2 sm:w-1/4">
                <div
                  onClick={() =>
                    setUrl(
                      "https://d3e066o7tnnbih.cloudfront.net/family-parenting.mp4"
                    )
                  }
                  className="category"
                >
                  <Image className="lazyload" src={p4} alt="p4" />{" "}
                  <h2>Family</h2>
                </div>
              </div>
              <div className="w-1/2 sm:w-1/4">
                <div
                  onClick={() =>
                    setUrl(
                      "https://d3e066o7tnnbih.cloudfront.net/fashion-lifestyle.mp4"
                    )
                  }
                  className="category"
                >
                  <Image className="lazyload" src={p5} alt="p5" />{" "}
                  <h2>Fashion</h2>
                </div>
              </div>
              <div className="w-1/2 sm:w-1/4">
                <div
                  onClick={() =>
                    setUrl(
                      "https://d3e066o7tnnbih.cloudfront.net/new_food_beverage.mp4"
                    )
                  }
                  className="category"
                >
                  <Image className="lazyload" src={p6} alt="p6" /> <h2>Food</h2>
                </div>
              </div>
            </div>
          </article>
          <article>
            <div className="galleryRow flex flex-wrap  items-center">
              <div className="w-1/2 sm:w-1/4">
                <div
                  onClick={() =>
                    setUrl(
                      "https://d3e066o7tnnbih.cloudfront.net/new_gaming.mp4"
                    )
                  }
                  className="category"
                >
                  <Image className="lazyload" src={p7} alt="p7" />{" "}
                  <h2>gaming</h2>
                </div>
              </div>
              <div className="w-1/2 sm:w-1/4">
                <div
                  onClick={() =>
                    setUrl(
                      "https://d3e066o7tnnbih.cloudfront.net/new_health_fitness_self_help.mp4"
                    )
                  }
                  className="category"
                >
                  <Image className="lazyload" src={p8} alt="p8" />{" "}
                  <h2>health</h2>
                </div>
              </div>
              <div className="w-1/2 sm:w-1/4">
                <div
                  onClick={() =>
                    setUrl(
                      "https://d3e066o7tnnbih.cloudfront.net/new_pranks_and_challenges.mp4"
                    )
                  }
                  className="category"
                >
                  <Image className="lazyload" src={p9} alt="p9" />{" "}
                  <h2>Pranks</h2>
                </div>
              </div>
              <div className="w-1/2 sm:w-1/4">
                <div
                  onClick={() =>
                    setUrl(
                      "https://d3e066o7tnnbih.cloudfront.net/new_travel_new.mp4"
                    )
                  }
                  className="category"
                >
                  <Image className="lazyload" src={p10} alt="p10" />{" "}
                  <h2>travel</h2>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
      {show && <Modal show={show} setShow={setShow} videoPath={videoPath} />}
      {isShowForm && <RequestACallForm show={isShowForm} setShow={setIsShowForm} />}
    </section>
  );
}

export default Persons;
