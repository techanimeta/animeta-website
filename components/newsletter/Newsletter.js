import React, { useEffect, useLayoutEffect, useRef } from 'react'
import Image from "next/image";
import Heading from "../../public/images/subscribe-heading.png";
import Signature from "../../public/images/signature.png";
import { useHubspotForm } from 'next-hubspot';
import $ from "jquery";

const HubspotForm = (props) => {
    useHubspotForm({
        region: props.region,
        portalId: props.portalId,
        formId: props.formId,
        target: '#hubspot-form-wrapper'
    });

    return (
        <div id="hubspot-form-wrapper" />
    )
}

export const formCSS = `
    <style>
        .hs-form-iframe {
            height: auto !important;
        }
        .hs-form-field label {
            display: none !important;
        }
        .hs-input {
            padding: 26px !important;
            border-radius: 50px;
            font-size: 22px;
        }
        .input {
            padding-top: 20px;
        }
        .field {
            margin-bottom: 0;
        }
        .hs_submit input {
            margin-left: auto;
            margin-right: auto;
            border-radius: 9999px;
            padding-top: 0.8rem;
            padding-bottom: 0.8rem;
            padding-left: 2rem;
            padding-right: 2rem;
            font-size: 1rem !important;
            line-height: 1.25rem !important;
            transition-property: all;
            transition-duration: 500ms;
            transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
            color: white !important;
            background: #f00 !important;
            border-color: transparent !important;
        }
        .hs_submit input:hover {
            background-color: #fff !important;
            color: #000 !important;
        }
        .hs_submit .actions {
            text-align: center !important;
        }
    </style>
`;

const Newsletter = () => {
    useEffect(() => {
        setTimeout(() => {
            const iframeFormParent = $("#hubspot-form-wrapper")[0];
            if (iframeFormParent.hasChildNodes()) {
                if ($("#hs-form-iframe-0")[0]) {
                    $("#hs-form-iframe-0").css("height", "auto");
                    let head = $("#hs-form-iframe-0").contents().find("head")[0];
                    $(head).append(formCSS);
                    return () => {
                        $("#hs-form-iframe-0")[0]?.removeEventListener('load', () => setIFrameLoaded(true));
                    };
                }
            }
        }, 5000);
    })

    return (
        <>
            <section className='bg-black section-padding'>
                <div className='container mx-auto text-center'>
                    <div>
                        <h2 className="brand-star-title text-[#f00] text-center">Subscribe to go global.</h2>
                        <br />
                        <div className="section-description text-white text-center">
                            <p>Get started on your creaTive journey,</p>
                        </div>
                    </div>
                    <br />
                    <div className='max-w-2xl mx-auto text-center hubspot-form'>
                        <HubspotForm
                            region="na1"
                            portalId="23140983"
                            formId='87dfc11d-6610-4a0f-a5a0-09db919fec0f'
                        />
                    </div>
                    <br />
                    <div className='section-description text-white text-center'><p>By signing up you agree to receive communications via email.</p></div>
                </div>
            </section>
        </>
    )
}

export default Newsletter