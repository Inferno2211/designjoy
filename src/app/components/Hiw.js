"use client";
import Image from "next/image";
import { useState } from "react";
import useIntersectionObserver from "../hooks/useIntersectionObserver";
import { motion } from "framer-motion";

// Animation variants for cards
const cardAnimation = {
  initial: { opacity: 0, y: 100 },
  animate: { opacity: 1, y: 0 },
  transition: {
    duration: 0.8,
    ease: [0.42, 0, 0.58, 1.0],
  },
};

// Service pills data
const servicePills = [
  ["Mobile apps", "Presentations", "Logos", "Social Media", "Email"],
  ["Webflow", "Print design", "Packaging", "Ad creative", "Landing pages"],
  ["Branding", "Email", "Display ads", "Packaging", "User interface"],
];

// Logo data
const logos = [
  { src: "/image/nectar.svg", width: 122, height: 20 },
  { src: "/image/buycoffee.svg", width: 151, height: 33 },
  { src: "/image/beehiiv.svg", width: 105, height: 26 },
  { src: "/image/laravel.svg", width: 79, height: 19 },
  { src: "/image/xfinity.svg", width: 74, height: 25 },
];

const ServiceMarquee = ({ pills }) => (
  <div className="marquee-1 _2">
    <div className="marquee-1-inner animate-marquee">
      <div className="marquee-1-element">
        {pills.map((pill, index) => (
          <div key={index} className="service-pill">
            {pill}
          </div>
        ))}
      </div>
      <div className="marquee-1-element">
        {pills.map((pill, index) => (
          <div key={index} className="service-pill">
            {pill}
          </div>
        ))}
      </div>
    </div>
  </div>
);

const HiwCard = ({
  className,
  header,
  description,
  children,
  delay = 0,
  isVisible,
}) => (
  <motion.div
    className={`hiw__card ${className} ${
      isVisible ? `animate-float-up-low${delay ? `-delay-${delay}` : ""}` : ""
    }`}
    initial={cardAnimation.initial}
    whileInView={cardAnimation.animate}
    viewport={{ once: true }}
    transition={{ ...cardAnimation.transition, delay }}
  >
    <div className={`hiw__card-gradient ${className}`}>
      <div className="hiw__card-header">{header}</div>
      <p className="hiw__card-p">{description}</p>
    </div>
    {children}
  </motion.div>
);

const Hiw = () => {
  const [flipped, setFlipped] = useState(false);
  const [containerRef, isVisible] = useIntersectionObserver();

  return (
    <div className="hiw" ref={containerRef}>
      <div className="container mmmm">
        <div className="inner-container">
          <div className="hiw__header-wrapper">
            <h2>
              The way design{" "}
              <span className="text-italics">should&apos;ve</span> been done in
              the first place
            </h2>
          </div>
          <div className="w-layout-grid hiw__grid" ref={containerRef}>
            <HiwCard
              header="Subscribe"
              description="Subscribe to a plan & request as many designs as you'd like."
              isVisible={isVisible}
            >
              <Image
                src="/image/price.svg"
                alt="price image"
                width={530}
                height={300}
                loading="lazy"
                className="image-3"
              />
            </HiwCard>
            <HiwCard
              className="_2"
              header="Request"
              description="Request whatever you'd like, from mobile apps to logos."
              delay={0.2}
              isVisible={isVisible}
            >
              <div className="receive__image-wrapper">
                <div className="marquees">
                  {servicePills.map((pills, index) => (
                    <ServiceMarquee key={index} pills={pills} />
                  ))}
                  <div className="request__block">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
                    >
                      <Image
                        src="/image/smile.png"
                        alt=""
                        width={70}
                        height={70}
                        loading="lazy"
                        className="image-7 hover:scale-125 transition-all duration-300"
                        style={{ opacity: 1 }}
                      />
                    </motion.div>
                  </div>
                </div>
              </div>
            </HiwCard>
            <HiwCard
              className="_3"
              header="Receive"
              description="Receive your design within two business days on average."
              delay={0.4}
              isVisible={isVisible}
            >
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
                  />
                  <div className="middle-design" />
                  <div
                    className="bottom-design"
                    style={{
                      transform: `rotate(${flipped ? -30 : -23}deg)`,
                      transition: "transform 0.5s ease-in-out",
                    }}
                  />
                </div>
              </div>
            </HiwCard>
          </div>
          <div className="logos__row">
            {logos.map((logo, index) => (
              <Image
                key={index}
                loading="lazy"
                src={logo.src}
                alt=""
                width={logo.width}
                height={logo.height}
              />
            ))}
          </div>
        </div>
        <div className="grid-line-right"></div>
        <div className="grid-line-left"></div>
      </div>
    </div>
  );
};

export default Hiw;
