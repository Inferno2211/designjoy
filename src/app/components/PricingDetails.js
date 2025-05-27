'use client';
import Image from "next/image";
import { motion } from "framer-motion";

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 100 },
  animate: { opacity: 1, y: 0 },
  transition: {
    duration: 0.8,
    ease: [0.42, 0, 0.58, 1.0]
  }
};

// Marquee images data
const marqueeImages = [
  { src: "/images/images2/pricingdetail1.png", className: "image-26 _3" },
  { src: "/images/images2/pricingdetail2.png", className: "image-26" },
  { src: "/images/images2/pricingdetail3.png", className: "image-26" },
  { src: "/images/images2/pricingdetail4.png", className: "image-26" },
  { src: "/images/images2/pricingdetail5.png", className: "image-26" },
  { src: "/images/images2/pricingdetail6.png", className: "image-26" }
];

// Service pills data
const servicePills = [
  "Web design", "Logos", "Slide decks", "Branding", "Social media",
  "UI/UX design", "Webflow development", "Mobile apps", "Print design",
  "Email", "Display ads", "Icons", "Brand guides", "+ more"
];

// Award data
const awards = [
  {
    icon: "/images/images2/coffeecup.svg",
    company: "Buy Me A Coffee",
    award: "Fintech Product of the Year",
    logo: {
      src: "/images/images2/producthunt.svg",
      width: 90,
      height: 20,
      className: "image-31"
    }
  },
  {
    icon: "/images/images2/switchboard.svg",
    company: "Switchboard",
    award: "Remote Work Product of the Year",
    logo: {
      src: "/images/images2/producthunt.svg",
      width: 90,
      height: 20,
      className: "image-31"
    }
  }
];

const MarqueeImage = ({ src, className }) => (
  <Image
    sizes="(max-width: 726px) 100vw, 726px"
    src={src}
    alt=""
    width={726}
    height={150}
    loading="lazy"
    className={className}
  />
);

const AwardCard = ({ award }) => (
  <div className="div-block-34">
    <div className="div-block-36">
      <div className="div-block-35">
        <Image
          src={award.icon}
          loading="lazy"
          alt=""
          width={16}
          height={16}
        />
      </div>
      <div>{award.company}</div>
    </div>
    <div className="text-block-4">{award.award}</div>
    <Image
      src={award.logo.src}
      loading="lazy"
      alt=""
      width={award.logo.width}
      height={award.logo.height}
      className={award.logo.className}
    />
  </div>
);

const PricingDetails = () => {
  return (
    <div className="pricing p-b-120">
      <div className="container m-t-0">
        <div className="inner-container">
          <div className="div-block-27">
            <motion.div
              className="div-block-28"
              initial={fadeInUp.initial}
              whileInView={fadeInUp.animate}
              viewport={{ once: true }}
              transition={fadeInUp.transition}
            >
              <div className="marquee overflow-hidden">
                <div className="marquee-inner flex whitespace-nowrap animate-scroll-left w-[200%]">
                  {[1, 2].map((_, index) => (
                    <div key={index} className="marquee-element w-[1/2] flex-shrink-0">
                      {marqueeImages.map((image, imgIndex) => (
                        <MarqueeImage key={imgIndex} {...image} />
                      ))}
                    </div>
                  ))}
                </div>
              </div>

              <div className="_44959">
                <motion.div
                  className="div-block-28"
                  initial={fadeInUp.initial}
                  whileInView={fadeInUp.animate}
                  viewport={{ once: true }}
                  transition={fadeInUp.transition}
                >
                  <div>
                    <div className="div-block-33">
                      {awards.map((award, index) => (
                        <AwardCard key={index} award={award} />
                      ))}
                    </div>
                  </div>
                  <div className="hiw__card-header left _4">Recent work</div>
                  <p className="hero__left-bottom-p m-t-12 left">
                    We&apos;re talking &quot;Product of the Year&quot; good.
                  </p>
                  <a
                    href="https://www.figma.com/proto/wbWTRa1jCey4uhInRAmH1r/Latest-Projects?page-id=0%3A1&type=design&node-id=906-2343&viewport=450%2C721%2C0.13&t=ZYPXbxSFD1m31WCi-1&scaling=min-zoom&mode=design"
                    target="_blank"
                    className="button-filled m-t-24 m-t-12 w-inline-block"
                  >
                    <div>See recent work</div>
                  </a>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              className="async _4"
              initial={fadeInUp.initial}
              whileInView={fadeInUp.animate}
              viewport={{ once: true }}
              transition={{ ...fadeInUp.transition, delay: 0.2 }}
            >
              <div>
                <motion.div
                  className="div-block-28"
                  initial={fadeInUp.initial}
                  whileInView={fadeInUp.animate}
                  viewport={{ once: true }}
                  transition={fadeInUp.transition}
                >
                  <div className="div-block-29">
                    {servicePills.map((pill, index) => (
                      <div key={index} className={`new-service-pill ${pill === '+ more' ? 'more' : ''}`}>
                        {pill}
                      </div>
                    ))}
                  </div>
                  <div className="div-block-31 _444">
                    <div className="hiw__card-header">
                      Apps, websites, logos & more
                    </div>
                    <p className="hero__left-bottom-p m-t-12">
                      All the things you need under one roof.
                    </p>
                  </div>
                </motion.div>
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
        <div className="grid-line-right" />
        <div className="grid-line-left" />
      </div>
    </div>
  );
};

export default PricingDetails;
