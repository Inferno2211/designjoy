import Image from 'next/image';

const PricingCard = () => {
  return (
    <div id="pricing" className="pricing">
      <div className="container p-b-0 p-t-0">
        <div style={{ opacity: 0 }} className="hiw__header-wrapper">
          <div className="eyebrow">PRICING</div>
          <h1 className="dddd">One subscription, <span className="text-italics">endless possibilities</span></h1>
        </div>
        <div className="pricing__flex">
          <div style={{ opacity: 0 }} className="div-block-3">
            <div>
              <div style={{ opacity: 0 }} className="hero__member-card-badge m-b-24">
                {/* Lottie animation */}
                <div className="lottie-animation-5"></div>
                <div>Start today</div>
              </div>
              <div style={{ opacity: 0 }} className="hero__member-card-header">Join</div>
              <div style={{ opacity: 0 }} className="hero__member-card-header bottom">Designjoy</div>
            </div>
            <Image
              className="image-10"
              src="/Group 1171274554.png"
              alt=""
              style={{ opacity: 0, transform: 'translate3d(0px, 0px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0)' }}
              width={1631}
              height={1000}            
              loading="lazy"
            />
          </div>
          <div style={{ opacity: 0 }} className="pricing__card">
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
                  <div>One request at a time</div>
                  <div>Avg. 48 hour delivery</div>
                  <div>Unlimited brands</div>
                  <div>Webflow development</div>
                </div>
                <div className="pricing__list">
                  <div>Unlimited stock photos</div>
                  <div>Up to 2 users</div>
                  <div>Pause or cancel anytime</div>
                </div>
              </div>
              <div className="included">
                <div>Included</div>
              </div>
            </div>
            <div className="div-block-9">
              <a href="https://buy.stripe.com/fZe28BaiLfOO99e146" target="_blank" className="div-block-7-copy-copy w-inline-block">
                <div className="div-block-8">
                  <Image loading="lazy" src="/smile.svg" alt="" width={24} height={24} />
                </div>
                <div>Join today</div>
              </a>
            </div>
            <Image loading="lazy" src="/Group 1171274461.svg" alt="" width={200} height={200} className="image-29" />
          </div>
        </div>
        <div className="w-layout-grid grid-2">
          <div className="div-block-10 _1">
            <div className="div-block-11">
              <div className="div-block-12">
                <Image loading="lazy" src="/Pause-Circle--Streamline-Micro.svg" alt="" width={24} height={24} />
                <div className="hiw__card-header m-b-0">Pause anytime</div>
              </div>
              <p className="hiw__card-p text-black">Temporarily pause your subscription anytime, no sweat.</p>
            </div>
          </div>
          <div className="div-block-10">
            <div className="div-block-11 _2">
              <div className="div-block-12">
                <Image width="24" loading="lazy" alt="" src="/Validation-Check-Circle--Streamline-Micro.svg" height={24} className="invert" />
                <div className="hiw__card-header m-b-0">Try it for a week</div>
              </div>
              <p className="hiw__card-p text-black">Not loving it after a week? Get 75% back, no questions asked.</p>
            </div>
          </div>
        </div>
        <div className="logos__row">
          <Image loading="lazy" src="/Nectar-sleep-logo-vector 1.svg" alt="" width={100} height={30} />
          <Image loading="lazy" src="/bmc-full-logo 1.svg" alt="" width={100} height={30} />
          <Image loading="lazy" src="/svg.svg" alt="" width={100} height={30} />
          <Image loading="lazy" src="/Vector.svg" alt="" width={100} height={30} />
          <Image loading="lazy" src="/6203180d8e14605fb2d2c003_Vector 1.svg" alt="" width={100} height={30} />
        </div>
        <div className="grid-line-right"></div>
        <div className="grid-line-left"></div>
      </div>
    </div>
  );
};

export default PricingCard; 