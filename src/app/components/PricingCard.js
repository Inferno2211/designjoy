"use client";
import Image from "next/image";
import dynamic from "next/dynamic";

const Player = dynamic(
  () => import("@lottiefiles/react-lottie-player").then((mod) => mod.Player),
  {
    ssr: false,
  }
);

const PricingCard = () => {
  return (
    <div id="pricing" className="pricing">
      <div className="container p-b-0 p-t-0">
        <div style={{ opacity: 100 }} className="hiw__header-wrapper">
          <div className="eyebrow">PRICING</div>
          <h1 className="dddd">
            One subscription,{" "}
            <span className="text-italics">endless possibilities</span>
          </h1>
        </div>
        <div className="pricing__flex">
          <div style={{ opacity: 100 }} className="div-block-3">
            <div>
              <div className="hero__member-card-badge flex items-center gap-0 ">
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

              <div
                style={{ opacity: 100 }}
                className="hero__member-card-header"
              >
                Join
              </div>
              <div
                style={{ opacity: 100 }}
                className="hero__member-card-header bottom"
              >
                Designjoy
              </div>
            </div>

            <Image
              sizes="(max-width: 688px) 100vw, 688px"
              alt="card"
              src="/images/smileHero.png"
              loading="lazy"
              width={1631}
              height={1000}
              className="image-10 animate-floatComplex3"
            />
          </div>
          <div style={{ opacity: 100 }} className="pricing__card">
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
          <div className="div-block-10 _1">
            <div className="div-block-11">
              <div className="div-block-12">
                <Image
                  loading="lazy"
                  src="/images/images2/pause.svg"
                  alt=""
                  width={24}
                  height={24}
                />
                <div className="hiw__card-header m-b-0">Pause anytime</div>
              </div>
              <p className="hiw__card-p text-black">
                Temporarily pause your subscription anytime, no sweat.
              </p>
            </div>
          </div>
          <div className="div-block-10">
            <div className="div-block-11 _2">
              <div className="div-block-12">
                <Image
                  width="24"
                  loading="lazy"
                  alt=""
                  src="/images/images2/tickmark.svg"
                  height={24}
                  className="invert"
                />
                <div className="hiw__card-header m-b-0">Try it for a week</div>
              </div>
              <p className="hiw__card-p text-black">
                Not loving it after a week? Get 75% back, no questions asked.
              </p>
            </div>
          </div>
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
        <div className="grid-line-right"></div>
        <div className="grid-line-left"></div>
      </div>
    </div>
  );
};

export default PricingCard;
