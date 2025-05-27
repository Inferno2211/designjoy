'use client';
import Image from "next/image";
import useIntersectionObserver from "../hooks/useIntersectionObserver";

const Services = () => {
  const [containerRef, isVisible] = useIntersectionObserver();

  return (
    <div className="services">
      <div className="container p-b-0">
        <div className="inner-container">
          <div className="div-block-32">
            <p className="story-text _4">
              First launched in 2017, Designjoy{" "}
              <span className="text-italics">revolutionized</span> the design
              industry with its subscription-based model. To this day, Designjoy
              is run entirely by{" "}
              <a
                href="https://x.com/BrettFromDJ"
                target="_blank"
                className="link"
              >
                Brett
              </a>
              . Designjoy doesn't hire extra designers or outsource
              work—instead, it focuses on delivering top-notch quality to a
              limited roster of clients at a time.
            </p>
          </div>
          <div style={{ opacity: 100 }} className={`hiw__header-wrapper ${isVisible ? 'animate-float-up-low' : ''}`} ref={containerRef}>
            <div className="eyebrow">Membership benefits</div>
            <h1 className="max">
              It&#x27;s{" "}
              <span className="text-italics">
                &quot;you&#x27;ll never go back&quot;
              </span>{" "}
              <span>better</span>
            </h1>
            <p className="benefits__p">
              Designjoy replaces unreliable freelancers and expensive agencies
              for one flat monthly fee, with designs delivered so fast you
              won&#x27;t want to go anywhere else.
            </p>
          </div>
        </div>
        <div className="grid-line-right"></div>
        <div className="grid-line-left"></div>
      </div>
    </div>
  );
};

export default Services;
