'use client';

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const PricingDetails = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <div className="pricing p-b-120">
      <div className="container m-t-0">
        <div className="inner-container">
          <div className="div-block-27" ref={ref}>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 100, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
              className="div-block-28"
            >
              <div className="marquee overflow-hidden">
                <div className="marquee-inner flex whitespace-nowrap animate-scroll-left w-[200%]">
                  {[1, 2].map((_, index) => (
                    <div key={index} className="marquee-element w-[1/2] flex-shrink-0">
                      {[1, 2, 3, 4, 5, 6].map((num) => (
                        <Image
                          key={num}
                          sizes="(max-width: 726px) 100vw, 726px"
                          src={`/images/images2/pricingdetail${num}.png`}
                          alt=""
                          width={726}
                          height={150}
                          loading="lazy"
                          className={`image-26 ${num === 1 ? '_3' : ''}`}
                        />
                      ))}
                    </div>
                  ))}
                </div>
              </div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 100, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="_44959"
              >
                <div>
                  <div className="div-block-33">
                    {[
                      {
                        icon: "/images/images2/coffeecup.svg",
                        title: "Buy Me A Coffee",
                        subtitle: "Fintech Product of the Year"
                      },
                      {
                        icon: "/images/images2/switchboard.svg",
                        title: "Switchboard",
                        subtitle: "Remote Work Product of the Year"
                      }
                    ].map((item, index) => (
                      <motion.div 
                        key={index} 
                        className="div-block-34"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 100, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                      >
                        <div className="div-block-36">
                          <div className="div-block-35">
                            <Image
                              src={item.icon}
                              loading="lazy"
                              alt=""
                              width={16}
                              height={16}
                            />
                          </div>
                          <div>{item.title}</div>
                        </div>
                        <div className="text-block-4">{item.subtitle}</div>
                        <Image
                          src="/images/images2/producthunt.svg"
                          loading="lazy"
                          alt=""
                          width={90}
                          height={20}
                          className="image-31"
                        />
                      </motion.div>
                    ))}
                  </div>
                </div>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 100, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5 }}
                  className="hiw__card-header left _4"
                >
                  Recent work
                </motion.div>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 100, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="hero__left-bottom-p m-t-12 left"
                >
                  We&#x27;re talking &quot;Product of the Year&quot;&nbsp;good.
                </motion.p>
                <motion.a
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 100, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  href="https://www.figma.com/proto/wbWTRa1jCey4uhInRAmH1r/Latest-Projects?page-id=0%3A1&amp;type=design&amp;node-id=906-2343&amp;viewport=450%2C721%2C0.13&amp;t=ZYPXbxSFD1m31WCi-1&amp;scaling=min-zoom&amp;mode=design"
                  target="_blank"
                  className="button-filled m-t-24 m-t-12 w-inline-block"
                >
                  <div>See recent work</div>
                </motion.a>
              </motion.div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 100, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="async _4"
            >
              <div>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 100, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="div-block-29"
                >
                  {[
                    "Web design", "Logos", "Slide decks", "Branding", 
                    "Social media", "UI/UX design", "Webflow development", 
                    "Mobile apps", "Print design", "Email", "Display ads", 
                    "Icons", "Brand guides", "+ more"
                  ].map((service, index) => (
                    <motion.div 
                      key={index} 
                      className={`new-service-pill ${service === "+ more" ? "more" : ""}`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 100, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                    >
                      {service}
                    </motion.div>
                  ))}
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 100, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="div-block-31 _444"
                >
                  <div className="hiw__card-header">
                    Apps, websites, logos &amp; more
                  </div>
                  <p className="hero__left-bottom-p m-t-12">
                    All the things you need under one roof.
                  </p>
                </motion.div>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 100, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Image
                  loading="lazy"
                  src="/images/images2/pinkface.svg"
                  alt=""
                  width={190}
                  height={150}
                  className="image-27"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 100, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Image
                  loading="lazy"
                  src="/images/images2/blueface.svg"
                  alt=""
                  width={150}
                  height={120}
                  className="image-30"
                />
              </motion.div>
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