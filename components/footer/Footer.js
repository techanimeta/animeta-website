import React from "react";
import Link from "next/link";
import Image from "next/image";
import FooterLogo from "../../public/images/v3/Logo.svg";
import WhatsApp from "../../public/images/v3/whataapps.png";
import Email from "../../public/images/v3/email.png";
import Phone from "../../public/images/v3/call.png";
import WhatsAppGreen from "../../public/images/whatspp-green.svg";

function Footer() {
  return (
    <>
      <section className="Footer bg-black" id="footer">
        <div className="container mx-auto flex flex-col sm:flex-row items-end justify-between">
          <div className="footer-left">
            <Image src={FooterLogo} className="lazyload" alt="FooterLogo" />

            <h2>
              Stay Ahead, <br /> Stay relevant
            </h2>

           
          </div>
          <div className="footer-right">
            <p className="heading">
              GET IN TOUCH:
            </p>
            <ul className="footer-social mb-12">
              <li>
                <a
                  aria-label="Chat on WhatsApp"
                  href="href='https://wa.me/919136061435'"
                  rel="noreferrer" 
                >
                  {" "}
                  <Image src={WhatsApp} className="lazyload" alt="FooterLogo" />
                </a>
              </li>
              <li>
                <Link href="mailto:collaborations@animeta.ai">
                  <Image src={Email} className="lazyload" alt="FooterLogo" />
                </Link>
              </li>
              <li>
                <Link href="tel:+919136061435">
                  <Image src={Phone} className="lazyload" alt="FooterLogo" />
                </Link>
              </li>
            </ul>
            <p>
              ANIMETA PTE. LTD. <br />
              (202238585K)
              <br />
              9 Raffles Place #27-100 <br /> Republic Plaza SINGAPORE
              <br />
              048619
            </p>
           
          </div>
        </div>
      </section>
      {/* <div className="floating-icon">
        <a aria-label="Chat on WhatsApp" href="https://wa.me/919136061435">
          {" "}
          <Image src={WhatsAppGreen} className="lazyload" alt="FooterLogo" />
        </a>
      </div> */}
    </>
  );
}

export default Footer;
