"use client";

import Image from "next/image";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";

// Dynamic import for Lottie Player
const Player = dynamic(
  () => import("@lottiefiles/react-lottie-player").then((mod) => mod.Player),
  { ssr: false }
);

// Logo Component
const Logo = () => (
  <a href="#" className="hero__logo-block w-inline-block">
    <div className="lottie-animation-4 _33">
      <Image
        loading="lazy"
        src="/images/images2/designlogo.svg"
        alt=""
        width={100}
        height={24}
        className="image-23 animate-clip-smooth will-change-[clip-path] transform-gpu"
      />
    </div>
    <Image
      loading="lazy"
      src="https://cdn.prod.website-files.com/5837424ae11409586f837994/678548430d58f4cbecec19d7_Designjoy.svg"
      alt=""
      width={100}
      height={24}
      className="image-23"
    />
  </a>
);

// Navigation Buttons Component
const NavigationButtons = () => (
  <div className="hero__buttons-flex">
    <a
      href="https://billing.stripe.com/p/login/14keXT4Qa8wh5k4dQQ"
      target="_blank"
      className="button-outline w-inline-block"
    >
      <div>Login</div>
    </a>
    <a href="#book" className="button-outline w-inline-block">
      <Image
        loading="lazy"
        src="https://cdn.prod.website-files.com/5837424ae11409586f837994/678548430d58f4cbecec19bf_Phone--Streamline-Ultimate%20(1).svg"
        alt="book a call"
        width={24}
        height={24}
        className="image"
      />
      <div>Book a call</div>
    </a>
    <a href="#pricing" className="button-filled w-inline-block">
      <div>See pricing</div>
    </a>
  </div>
);

// Member Card Badge Component
const MemberCardBadge = () => (
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
);

// Member Card Call Component
const MemberCardCall = () => (
  <motion.a
    style={{ opacity: 100 }}
    href="#book"
    className="hero__member-card-call w-inline-block"
    initial={{ opacity: 0, y: 60 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{
      duration: 0.8,
      delay: 0.2,
      ease: [0.4, 0, 0.2, 1]
    }}
  >
    <div className="hero__member-card-call-left">
      <Image
        loading="lazy"
        src="/images/images2/smileface.png"
        alt="card icon"
        width={50}
        height={50}
        className="image2"
      />
      <div>
        <div>Book a 15-min intro call</div>
        <div className="hero__member-card-call-schedule">Schedule now</div>
      </div>
    </div>
    <Image
      loading="lazy"
      src="/images/images2/arrow.svg"
      alt="arrow"
      width={34}
      height={34}
    />
  </motion.a>
);

// Main Hero Component
const Hero = () => {
  return (
    <div className="hero">
      <div className="container hero-container">
        <div className="inner-container">
          <div className="hero__flex">
            {/* Left Section */}
            <div className="hero__left">
              <div className="hero__left-top">
                <Logo />
                <NavigationButtons />
              </div>
              <div className="hero__left-bottom">
                <h1>
                  Design subscriptions for{" "}
                  <span className="text-italics">everyone</span>
                </h1>
                <p className="hero__left-bottom-p">
                  <span className="text-span _3">Pause or cancel anytime.</span>
                </p>
              </div>
            </div>

            {/* Right Section */}
            <div className="div-block-37">
              <div className="hero__member-card">
                <MemberCardBadge />
                
                <div className="hero__member-card-splash">
                  <div className="hero__member-card-header">Join</div>
                  <div className="hero__member-card-header">Designjoy</div>
                  <div className="hero__member-card-p">
                    One subscription to rule them all.
                  </div>
                  <motion.a
                    style={{ opacity: 100 }}
                    href="#pricing"
                    className="button w-button"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 1,
                      ease: [0.42, 0, 0.58, 1.0],
                      delay: 0.2,
                    }}
                  >
                    See pricing
                  </motion.a>
                </div>

                <MemberCardCall />

                <Image
                  sizes="(max-width: 688px) 100vw, 688px"
                  alt="card"
                  src="/images/images2/colorsmile.png"
                  loading="lazy"
                  width={688}
                  height={460}
                  className="hero__member-card-mockup animate-floatComplex2"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="grid-line-right"></div>
        <div className="grid-line-left"></div>
      </div>
    </div>
  );
};

export default Hero;
