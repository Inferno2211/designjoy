"use client";
import Image from "next/image";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";

const Player = dynamic(
  () => import("@lottiefiles/react-lottie-player").then((mod) => mod.Player),
  {
    ssr: false,
  }
);

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 100 },
  animate: { opacity: 1, y: 0 },
  transition: { 
    duration: 0.8,
    ease: [0.42, 0, 0.58, 1.0]
  }
};

const fadeInDown = {
  initial: { opacity: 0, y: -100 },
  animate: { opacity: 1, y: 0 },
  transition: { 
    duration: 0.8,
    ease: [0.42, 0, 0.58, 1.0]
  }
};

// Pricing features data
const pricingFeatures = {
  left: [
    "One request at a time",
    "Avg. 48 hour delivery",
    "Unlimited brands",
    "Webflow development"
  ],
  right: [
    "Unlimited stock photos",
    "Up to 2 users",
    "Pause or cancel anytime"
  ]
};

// Logo data
const logos = [
  { src: "/images/images2/nectar.svg", width: 122, height: 20 },
  { src: "/images/images2/buycoffee.svg", width: 151, height: 33 },
  { src: "/images/images2/beehiiv.svg", width: 105, height: 26 },
  { src: "/images/images2/laravel.svg", width: 79, height: 19 },
  { src: "/images/images2/xfinity.svg", width: 74, height: 25 }
];

// Feature card data
const featureCards = [
  {
    icon: "/images/images2/pause.svg",
    title: "Pause anytime",
    description: "Temporarily pause your subscription anytime, no sweat.",
    className: "_1"
  },
  {
    icon: "/images/images2/tickmark.svg",
    title: "Try it for a week",
    description: "Not loving it after a week? Get 75% back, no questions asked.",
    className: "",
    iconClassName: "invert"
  }
];

const FeatureCard = ({ icon, title, description, className, iconClassName }) => (
  <div className={`div-block-10 ${className}`}>
    <div className={`div-block-11 ${className === "_1" ? "" : "_2"}`}>
      <div className="div-block-12">
        <Image
          loading="lazy"
          src={icon}
          alt=""
          width={24}
          height={24}
          className={iconClassName}
        />
        <div className="hiw__card-header m-b-0">{title}</div>
      </div>
      <p className="hiw__card-p text-black">{description}</p>
    </div>
  </div>
);

const PricingCard = () => {
  return (
    <div id="pricing" className="pricing">
      <motion.div 
        className="container p-b-0 p-t-0"
        initial={fadeInUp.initial}
        whileInView={fadeInUp.animate}
        viewport={{ once: true }}
        transition={fadeInUp.transition}
      >
        <div className="hiw__header-wrapper">
          <div className="eyebrow">PRICING</div>
          <h1 className="dddd">
            One subscription,{" "}
            <span className="text-italics">endless possibilities</span>
          </h1>
        </div>
        <div className="pricing__flex">
          <div className="div-block-3">
            <div>
              <div className="hero__member-card-badge flex items-center gap-0">
                <div className="lottie-animation-5 w-[30px] h-[30px]">
                  <Player
                    autoplay
                    loop
                    src="https://cdn.prod.website-files.com/678005a5d025f688a34957f1/67840672d2c7cd35037e445d_Main%20Scene.json"
                    style={{ height: "100%", width: "100%" }}
                  />
                </div>
                <div className="text-sm font-medium">Start today</div>
              </div>

              <div className="hero__member-card-header">
                Join
              </div>
              <div className="hero__member-card-header bottom">
                Designjoy
              </div>
            </div>

            <motion.div 
              className="image-10"
              initial={fadeInDown.initial}
              whileInView={fadeInDown.animate}
              viewport={{ once: true }}
              transition={{ ...fadeInDown.transition, delay: 1 }}
            >
              <Image
                sizes="(max-width: 688px) 100vw, 688px"
                alt="card"
                src="/images/images2/colorsmile.png"
                loading="lazy"
                width={1631}
                height={1000}
                className="animate-floatComplex2"
              />
            </motion.div>
          </div>
          <div style={{ opacity: 100 }} className={`pricing__card`}>
            <div className="div-block-4">
              <div className="pricing__card-header">Monthly Club</div>
              <div className="div-block-5">
                <div>PAUSE&nbsp;OR&nbsp;CANCEL&nbsp;ANYTIME</div>
              </div>
            </div>
            <div className="div-block-6">
              <h2 className="m-t-0 m-b-0 _3">$4,995</h2>
              <div className="pricing__month">/month</div>
            </div>
            <div className="div-block-7">
              <div className="w-layout-grid grid">
                <div className="pricing__list">
                  {pricingFeatures.left.map((feature, index) => (
                    <div key={index}>{feature}</div>
                  ))}
                </div>
                <div className="pricing__list">
                  {pricingFeatures.right.map((feature, index) => (
                    <div key={index}>{feature}</div>
                  ))}
                </div>
              </div>
              <div className="included">
                <div>Included</div>
              </div>
            </div>
            <div className="div-block-9">
              <a
                href="https://buy.stripe.com/fZe28BaiLfOO99e146"
                target="_blank"
                className="div-block-7-copy-copy w-inline-block"
              >
                <div className="div-block-8">
                  <Image
                    loading="lazy"
                    src="/images/images2/designlogo.svg"
                    alt=""
                    width={24}
                    height={24}
                  />
                </div>
                <div>Join today</div>
              </a>
            </div>
            <Image
              loading="lazy"
              src="/images/images2/yellowface.svg"
              alt=""
              width={265}
              height={264}
              className="image-29"
            />
          </div>
        </div>
        <div className="w-layout-grid grid-2">
          {featureCards.map((card, index) => (
            <FeatureCard key={index} {...card} />
          ))}
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
        <div className="grid-line-right"></div>
        <div className="grid-line-left"></div>
      </motion.div>
    </div>
  );
};

export default PricingCard;
