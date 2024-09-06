import React from "react";

const ANISection = () => {
  return (
    <section className="animetaContentSections mt-16" id="aniAiCreatorBuddy">
      <div className="container mx-auto">
        <div className="flex sectionContent  flex-col-reverse sm:flex-row text-white">
          <div className="contentBox !bg-black w-full sm:w-3/6">
            <div className="brandLogo">
              <picture>
                <img
                  src="/images/v3/equal-animetaAiCreatorBuddy.png"
                  alt="Brand Star"
                  className="object-contain"
                />
              </picture>
            </div>
            <div className="sectionDescription">
              <h3 className="textWhite">
              AI-Powered  <br />Content Strategy App
              </h3>
              <p className="textWhite mb-6">
              Ani is Animeta’s Creator content app that provides AI based content recommendation, video ideas, trending content, channel growth & overall optimization to creators.
              </p>

              <p className="textWhite mb-0"><b>Coming Soon</b></p>
              <div className="appButtons">
                <div className="imageBox">
                  <a href="#." target="_blank">
                    <picture>
                      <img
                        src="/images/v3/appStore.svg"
                        alt="Brand Star"
                        className="object-contain"
                      />
                    </picture>
                  </a>
                </div>
                <div className="imageBox">
                  <a href="#." target="_blank">
                    <picture>
                      <img
                        src="/images/v3/googlePlay.svg"
                        alt="Brand Star"
                        className="object-contain"
                      />
                    </picture>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="imageBox bg-[#E6E7E8] flex align-middle w-full sm:w-3/6">
            <picture className="flex align-middle">
              <img
                src="/images/v3/aboutAnimeta.svg"
                alt="Brand Star"
                className="object-contain w-[90%] mx-auto"
              />
            </picture>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ANISection;
