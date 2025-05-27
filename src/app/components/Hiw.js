"use client";
import Image from "next/image";
import { useState } from "react";
import useIntersectionObserver from "../hooks/useIntersectionObserver";
import { motion } from "framer-motion";

const Hiw = () => {
  const [flipped, setFlipped] = useState(false);
  const [containerRef, isVisible] = useIntersectionObserver();

  return (
    <div className="hiw" ref={containerRef}>
      <div className="container mmmm">
        <div className="inner-container">
          <div className="hiw__header-wrapper">
            <h2>
              The way design <span className="text-italics">should've</span>{" "}
              been done in the first place
            </h2>
          </div>
          <div className="w-layout-grid hiw__grid" ref={containerRef}>
            <motion.div
              className={`hiw__card ${isVisible ? 'animate-float-up-low' : ''}`}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.8,
                ease: [0.42, 0, 0.58, 1.0]
              }}
            >
              <div className="hiw__card-gradient">
                <div className="hiw__card-header">Subscribe</div>
                <p className="hiw__card-p text-black _2">
                  Subscribe to a plan &amp; request as many designs as you'd
                  like.
                </p>
              </div>
              <Image
                src="https://cdn.prod.website-files.com/5837424ae11409586f837994/678548430d58f4cbecec1977_price.svg"
                alt="price image"
                width={530}
                height={300}
                loading="lazy"
                className="image-3"
              />
            </motion.div>
            <motion.div
              className={`hiw__card _2 ${isVisible ? 'animate-float-up-low-delay-1' : ''}`}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.8,
                delay: 0.2,
                ease: [0.42, 0, 0.58, 1.0]
              }}
            >
              <div className="hiw__card-gradient _2">
                <div className="hiw__card-header">Request</div>
                <p className="hiw__card-p">
                  Request whatever you&#x27;d like, from mobile apps to logos.
                </p>
              </div>
              <div className="receive__image-wrapper">
                <div className="marquees">
                  <div className="marquee-1 _2">
                    <div className="marquee-1-inner animate-marquee">
                      <div className="marquee-1-element">
                        <div className="service-pill">Mobile apps</div>
                        <div className="service-pill">Presentations</div>
                        <div className="service-pill">Logos</div>
                        <div className="service-pill">Social Media</div>
                        <div className="service-pill">Email</div>
                      </div>
                      <div className="marquee-1-element">
                        <div className="service-pill">Mobile apps</div>
                        <div className="service-pill">Presentations</div>
                        <div className="service-pill">Logos</div>
                        <div className="service-pill">Social Media</div>
                        <div className="service-pill">Email</div>
                      </div>
                    </div>
                  </div>
                  <div className="marquee-1 _2 _4455">
                    <div className="marquee-1-inner _6886 animate-marquee">
                      <div className="marquee-1-element">
                        <div className="service-pill">Webflow</div>
                        <div className="service-pill">Print design</div>
                        <div className="service-pill">Packaging</div>
                        <div className="service-pill">Ad creative</div>
                        <div className="service-pill">
                          Landing pages
                          <br />
                        </div>
                      </div>
                      <div className="marquee-1-element">
                        <div className="service-pill">Webflow</div>
                        <div className="service-pill">Print design</div>
                        <div className="service-pill">Packaging</div>
                        <div className="service-pill">Ad creative</div>
                        <div className="service-pill">
                          Landing pages
                          <br />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="marquee-1 _2">
                    <div className="marquee-1-inner animate-marquee">
                      <div className="marquee-1-element">
                        <div className="service-pill">Branding</div>
                        <div className="service-pill">Email</div>
                        <div className="service-pill">Display ads</div>
                        <div className="service-pill">Packaging</div>
                        <div className="service-pill">User interface</div>
                      </div>
                      <div className="marquee-1-element">
                        <div className="service-pill">Branding</div>
                        <div className="service-pill">Email</div>
                        <div className="service-pill">Display ads</div>
                        <div className="service-pill">Packaging</div>
                        <div className="service-pill">User interface</div>
                      </div>
                    </div>
                  </div>
                  <div className=" request__block">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
                    >
                      <Image
                        src="/images/smile.png"
                        alt=""
                        width={70}
                        height={70}
                        loading="lazy"
                        className="image-7"
                        style={{ opacity: 1 }}
                      />
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              className={`hiw__card _3 ${isVisible ? 'animate-float-up-low-delay-2' : ''}`}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.8,
                delay: 0.4,
                ease: [0.42, 0, 0.58, 1.0]
              }}
            >
              <div className="hiw__card-gradient _3">
                <div className="hiw__card-header">Receive</div>
                <p className="hiw__card-p">
                  Receive your design within two business days on average.
                </p>
              </div>
              <div className="div-block-2">
                <div
                  style={{ opacity: 100 }}
                  className="stack cursor-pointer"
                  onMouseEnter={() => setFlipped(true)}
                  onMouseLeave={() => setFlipped(false)}
                >
                  <div
                    className="front-design"
                    style={{
                      transform: `rotate(${flipped ? 18 : 9}deg)`,
                      transition: "transform 0.5s ease-in-out",
                    }}
                  ></div>

                  <div className="middle-design"></div>

                  <div
                    className="bottom-design"
                    style={{
                      transform: `rotate(${flipped ? -30 : -23}deg)`,
                      transition: "transform 0.5s ease-in-out",
                    }}
                  ></div>
                </div>
              </div>
            </motion.div>
          </div>
          <div className="logos__row">
            <Image
              loading="lazy"
              src="/images/images2/nectar.svg"
              alt=""
              width={122}
              height={20}
            />
            <Image
              loading="lazy"
              src="/images/images2/buycoffee.svg"
              alt=""
              width={151}
              height={33}
            />
            <Image
              loading="lazy"
              src="/images/images2/beehiiv.svg"
              alt=""
              width={105}
              height={26}
            />
            <Image
              loading="lazy"
              src="/images/images2/laravel.svg"
              alt=""
              width={79}
              height={19}
            />
            <Image
              loading="lazy"
              src="/images/images2/xfinity.svg"
              alt=""
              width={74}
              height={25}
            />
          </div>
        </div>
        <div className="grid-line-right"></div>
        <div className="grid-line-left"></div>
      </div>
    </div >
  );
};

export default Hiw;
