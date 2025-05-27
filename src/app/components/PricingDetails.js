'use client';
import Image from "next/image";
import { motion } from "framer-motion";

const PricingDetails = () => {
  return (
    <div className="pricing p-b-120">
      <div className="container m-t-0">
        <div className="inner-container">
          <div className="div-block-27">
            <motion.div 
              className="div-block-28"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.8,
                ease: [0.42, 0, 0.58, 1.0]
              }}
            >
              <div className="marquee overflow-hidden">
                <div className="marquee-inner flex whitespace-nowrap animate-scroll-left w-[200%]">
                  <div className="marquee-element w-[1/2] flex-shrink-0">
                    <Image
                      sizes="(max-width: 726px) 100vw, 726px"
                      src="/images/images2/pricingdetail1.png"
                      alt=""
                      width={726}
                      height={150}
                      loading="lazy"
                      className="image-26 _3"
                    />
                    <Image
                      sizes="(max-width: 726px) 100vw, 726px"
                      src="/images/images2/pricingdetail2.png"
                      alt=""
                      width={726}
                      height={150}
                      loading="lazy"
                      className="image-26"
                    />
                    <Image
                      sizes="(max-width: 726px) 100vw, 726px"
                      src="/images/images2/pricingdetail3.png"
                      alt=""
                      width={726}
                      height={150}
                      loading="lazy"
                      className="image-26"
                    />
                    <Image
                      sizes="(max-width: 726px) 100vw, 726px"
                      src="/images/images2/pricingdetail4.png"
                      alt=""
                      width={726}
                      height={150}
                      loading="lazy"
                      className="image-26"
                    />
                    <Image
                      sizes="(max-width: 726px) 100vw, 726px"
                      src="/images/images2/pricingdetail5.png"
                      alt=""
                      width={726}
                      height={150}
                      loading="lazy"
                      className="image-26"
                    />
                    <Image
                      sizes="100vw"
                      src="/images/images2/pricingdetail6.png"
                      alt=""
                      width={726}
                      height={150}
                      loading="lazy"
                      className="image-26"
                    />
                  </div>
                  <div className="marquee-element w-[1/2] flex-shrink-0">
                    <Image
                      sizes="(max-width: 726px) 100vw, 726px"
                      src="/images/images2/pricingdetail1.png"
                      alt=""
                      width={726}
                      height={150}
                      loading="lazy"
                      className="image-26 _3"
                    />
                    <Image
                      sizes="(max-width: 726px) 100vw, 726px"
                      src="/images/images2/pricingdetail2.png"
                      alt=""
                      width={726}
                      height={150}
                      loading="lazy"
                      className="image-26"
                    />
                    <Image
                      sizes="(max-width: 726px) 100vw, 726px"
                      src="/images/images2/pricingdetail3.png"
                      alt=""
                      width={726}
                      height={150}
                      loading="lazy"
                      className="image-26"
                    />
                    <Image
                      sizes="(max-width: 726px) 100vw, 726px"
                      src="/images/images2/pricingdetail4.png"
                      alt=""
                      width={726}
                      height={150}
                      loading="lazy"
                      className="image-26"
                    />
                    <Image
                      sizes="(max-width: 726px) 100vw, 726px"
                      src="/images/images2/pricingdetail5.png"
                      alt=""
                      width={726}
                      height={150}
                      loading="lazy"
                      className="image-26"
                    />
                    <Image
                      sizes="100vw"
                      src="/images/images2/pricingdetail6.png"
                      alt=""
                      width={726}
                      height={150}
                      loading="lazy"
                      className="image-26"
                    />
                  </div>
                </div>
              </div>
              <div className="_44959">
                <div>
                  <div className="div-block-33">
                    <div className="div-block-34">
                      <div className="div-block-36">
                        <div className="div-block-35">
                          <Image
                            src="/images/images2/coffeecup.svg"
                            loading="lazy"
                            alt=""
                            width={16}
                            height={16}
                          />
                        </div>
                        <div>Buy Me A Coffee</div>
                      </div>
                      <div className="text-block-4">
                        Fintech Product of the Year
                      </div>
                      <Image
                        src="/images/images2/producthunt.svg"
                        loading="lazy"
                        alt=""
                        width={90}
                        height={20}
                        className="image-31"
                      />
                    </div>
                    <div className="div-block-34">
                      <div className="div-block-36">
                        <div className="div-block-35">
                          <Image
                            src="/images/images2/switchboard.svg"
                            loading="lazy"
                            alt=""
                            width={16}
                            height={16}
                          />
                        </div>
                        <div>Switchboard</div>
                      </div>
                      <div className="text-block-4">
                        Remote Work Product of the Year
                      </div>
                      <Image
                        src="/images/images2/producthunt.svg"
                        loading="lazy"
                        alt=""
                        width={90}
                        height={20}
                        className="image-31"
                      />
                    </div>
                  </div>
                </div>
                <div className="hiw__card-header left _4">Recent work</div>
                <p className="hero__left-bottom-p m-t-12 left">
                  We&#x27;re talking &quot;Product of the Year&quot;&nbsp;good.
                </p>
                <a
                  href="https://www.figma.com/proto/wbWTRa1jCey4uhInRAmH1r/Latest-Projects?page-id=0%3A1&amp;type=design&amp;node-id=906-2343&amp;viewport=450%2C721%2C0.13&amp;t=ZYPXbxSFD1m31WCi-1&amp;scaling=min-zoom&amp;mode=design"
                  target="_blank"
                  className="button-filled m-t-24 m-t-12 w-inline-block"
                >
                  <div>See recent work</div>
                </a>
              </div>
            </motion.div>
            <motion.div 
              className="async _4"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.8,
                delay: 0.2,
                ease: [0.42, 0, 0.58, 1.0]
              }}
            >
              <div>
                <div className="div-block-29">
                  <div className="new-service-pill">Web design</div>
                  <div className="new-service-pill">Logos</div>
                  <div className="new-service-pill">Slide decks</div>
                  <div className="new-service-pill">Branding</div>
                  <div className="new-service-pill">Social media</div>
                  <div className="new-service-pill">UI/UX design</div>
                  <div className="new-service-pill">Webflow development</div>
                  <div className="new-service-pill">Mobile apps</div>
                  <div className="new-service-pill">Print design</div>
                  <div className="new-service-pill">Email</div>
                  <div className="new-service-pill">Display ads</div>
                  <div className="new-service-pill">Icons</div>
                  <div className="new-service-pill">Brand guides</div>
                  <div className="new-service-pill more">+ more</div>
                </div>
                <div className="div-block-31 _444">
                  <div className="hiw__card-header">
                    Apps, websites, logos &amp; more
                  </div>
                  <p className="hero__left-bottom-p m-t-12">
                    All the things you need under one roof.
                  </p>
                </div>
              </div>
              <Image
                loading="lazy"
                src="/images/images2/pinkface.svg"
                alt=""
                width={190}
                height={150}
                className="image-27"
              />
              <Image
                loading="lazy"
                src="/images/images2/blueface.svg"
                alt=""
                width={150}
                height={120}
                className="image-30"
              />
            </motion.div>
          </div>
        </div>
        <div className="grid-line-right"></div>
        <div className="grid-line-left"></div>
      </div>
    </div>
  );
};

export default PricingDetails;
