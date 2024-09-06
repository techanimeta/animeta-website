import React from "react";

const AnimetaStarMakerSection = () => {
  return (
    <section className="animetaContentSections mt-16" id="animetaCreatorPartnerships">
      <div className="container mx-auto">
        <div className="flex  flex-col sm:flex-row  sectionContent">
          <div className="imageBox  w-full sm:w-3/6">
            <picture>
              <img
                src="/images/v3/creatorPartnership.png"
                alt="Brand Star"
                className="object-cover w-full h-full"
              />
            </picture>
          </div>
          <div className="contentBox  w-full sm:w-3/6">
            <div className="brandLogo">
              <picture>
                <img
                  src="/images/v3/animetaCreatorPartnerships.png"
                  alt="Brand Star"
                  className="object-contain"
                />
              </picture>
            </div>
            <div className="sectionDescription">
              <h3>YOU CREATE, <br />We take care of everything else!</h3>
              <p>
              We offer financial investment, data analytics & business intelligence, content strategy & creative supervision, brand, PR & social media expertise in addition to data driven, result oriented & authentic brand campaigns to our creator partners.
              </p>
              <p></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnimetaStarMakerSection;
