import Image from 'next/image';

const Hero = () => {
  return (
    <div className="hero">
      <div className="container hero-container">
        <div className="inner-container">
          <div className="hero__flex">
            <div className="hero__left">
              <div className="hero__left-top">
                <a href="#" className="hero__logo-block w-inline-block">
                  {/* Lottie animation will be handled later or replaced with a static image */}
                  <div className="lottie-animation-4 _33"></div>
                  <Image loading="lazy" src="/Designjoy.svg" alt="" width={100} height={24} className="image-23" />
                </a>
                <div className="hero__buttons-flex">
                  <a href="https://billing.stripe.com/p/login/14keXT4Qa8wh5k4dQQ" target="_blank" className="button-outline w-inline-block">
                    <div>Login</div>
                  </a>
                  <a href="#book" className="button-outline w-inline-block">
                    <Image loading="lazy" src="/Phone--Streamline-Ultimate (1).svg" alt="" width={24} height={24} className="image" />
                    <div>Book a call</div>
                  </a>
                  <a href="#pricing" className="button-filled w-inline-block">
                    <div>See pricing</div>
                  </a>
                </div>
              </div>
              <div className="hero__left-bottom">
                <h1>Design subscriptions for <span className="text-italics">everyone</span></h1>
                <p className="hero__left-bottom-p">
                  <span className="text-span _3">Pause or cancel anytime.</span>
                </p>
              </div>
            </div>
            <div className="div-block-37">
              <div className="hero__member-card">
                <div className="hero__member-card-badge">
                  {/* Lottie animation will be handled later or replaced with a static image */}
                  <div className="lottie-animation-5"></div>
                  <div>Start today</div>
                </div>
                <div className="hero__member-card-splash">
                  <div className="hero__member-card-header">Join</div>
                  <div className="hero__member-card-header">Designjoy</div>
                  <div className="hero__member-card-p">One subscription to rule them all.</div>
                  <a style={{ opacity: 0 }} href="#pricing" className="button w-button">See pricing</a>
                </div>
                <a style={{ opacity: 0 }} href="#book" className="hero__member-card-call w-inline-block">
                  <div className="hero__member-card-call-left">
                    <Image loading="lazy" src="/Group 11.png" alt="" width={40} height={40} className="image-2" />
                    <div>
                      <div>Book a 15-min intro call</div>
                      <div className="hero__member-card-call-schedule">Schedule now</div>
                    </div>
                  </div>
                  <Image loading="lazy" src="/arrow.svg" alt="" width={24} height={24} />
                </a>
                <Image
                  sizes="(max-width: 688px) 100vw, 688px"
                  alt=""
                  src="/card.png"
                  loading="lazy"
                  width={688}
                  height={460}
                  className="hero__member-card-mockup"
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