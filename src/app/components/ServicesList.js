"use client";
import Image from "next/image";
import React, { useRef } from "react";

// Helper function for easing (ease-in-out cubic)
const easeInOutCubic = t => t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

// Helper function for animated scroll with delay and easing
const animateScroll = ({ element, scrollAmount, duration, delay }) => {
  if (!element) return;

  setTimeout(() => {
    const initialScrollLeft = element.scrollLeft;
    // Calculate the theoretical final scroll position
    const theoreticalFinalScrollLeft = initialScrollLeft + scrollAmount;
    // Clamp the final position to the valid scroll range
    const maxScrollPossible = element.scrollWidth - element.clientWidth;
    const targetScrollLeft = Math.max(0, Math.min(theoreticalFinalScrollLeft, maxScrollPossible));

    // Determine the actual distance we will scroll.
    const actualDistanceToScroll = targetScrollLeft - initialScrollLeft;

    if (actualDistanceToScroll === 0) {
      // If no actual scrolling will occur (e.g., at a boundary and trying to scroll further),
      // ensure scrollLeft is at the (potentially clamped) target, then return.
      element.scrollLeft = targetScrollLeft; 
      return;
    }

    let startTime = null;

    const animationStep = (timestamp) => {
      if (!startTime) {
        startTime = timestamp;
      }
      const elapsedTime = timestamp - startTime;
      // Calculate progress, ensuring it's between 0 and 1
      const progress = Math.min(elapsedTime / duration, 1); 

      const easedProgress = easeInOutCubic(progress);
      
      element.scrollLeft = initialScrollLeft + actualDistanceToScroll * easedProgress;

      if (progress < 1) {
        requestAnimationFrame(animationStep);
      } else {
        // Ensure final position is exact after animation completion
        element.scrollLeft = targetScrollLeft;
      }
    };

    requestAnimationFrame(animationStep);
  }, delay);
};

const ServicesList = () => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      animateScroll({
        element: scrollRef.current,
        scrollAmount: -300, // pixels
        duration: 500,    // milliseconds (from previous Tailwind: duration-[1200ms])
        delay: 50         // milliseconds (from previous Tailwind: delay-[400ms])
      });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      animateScroll({
        element: scrollRef.current,
        scrollAmount: 300,  // pixels
        duration: 500,     // milliseconds
        delay: 50          // milliseconds
      });
    }
  };

  return (
    <div className="services__list">
      <div className="container p-b-0">
        <div
          ref={scrollRef}
          className="flex gap-8 overflow-x-auto scrollbar-none services__row"
          style={{ scrollbarWidth: "none" }}
        >

          <div className="services__col">
            <div className="services__block _1">
              <Image
                src="/images/images2/servicelist1.png"
                alt=""
                width={60}
                height={60}
                loading="lazy"
                className="image-8"
              />
            </div>
            <div className="services__header">Design board</div>
            <p className="services__p">
              Easily manage your design queue with a Trello board.
            </p>
          </div>
          <div className="services__col">
            <div className="services__block _3">
              <Image
                loading="lazy"
                src="/images/images2/lock.png"
                alt=""
                width={50}
                height={50}
                className="image-8 _4"
              />
            </div>
            <div className="services__header">Fixed monthly rate</div>
            <p className="services__p">
              No surprises here! Pay the same fixed price each month.
            </p>
          </div>
          <div className="services__col">
            <div className="services__block _2">
              <Image
                loading="lazy"
                src="/images/images2/arrowstream.png"
                alt=""
                width={60}
                height={60}
                className="image-8 _3"
              />
            </div>
            <div className="services__header">Fast delivery</div>
            <p className="services__p">
              Get your design one at a time in just a couple days on average.
            </p>
          </div>
          <div className="services__col">
            <div className="services__block _4">
              <Image
                loading="lazy"
                src="/images/images2/star.png"
                alt=""
                width={70}
                height={70}
                className="image-8 _2"
              />
            </div>
            <div className="services__header">Top-notch quality</div>
            <p className="services__p">
              Senior-level design quality at your fingertips, whenever you need it.
            </p>
          </div>
          <div className="services__col">
            <div className="services__block _5">
              <Image
                loading="lazy"
                alt=""
                src="/images/images2/block.png"
                width={60}
                height={60}
                className="image-8"
              />
            </div>
            <div className="services__header">Flexible and scalable</div>
            <p className="services__p">
              Scale up or down as needed, and pause or cancel at anytime.
            </p>
          </div>
          <div className="services__col last">
            <div className="services__block _6">
              <Image
                loading="lazy"
                alt=""
                src="/images/images2/nova.png"
                width={60}
                height={60}
                className="image-8"
              />
            </div>
            <div className="services__header">Unique and all yours</div>
            <p className="services__p">
              Every design is made especially for you and is 100% yours.
            </p>
          </div>
          <div className="div-block-18"></div>
        </div>

        <div className="mt-[5px] slider-wrapper _33 pl-10">
          <button
            className="left-arrow-2 transition-transform duration-200 ease-out hover:scale-[0.8]"
            onClick={scrollLeft}
            aria-label="Scroll left"
          >
            <div className="w-icon-slider-left"></div>
          </button>
          <button
            className="right-arrow-2 ml-[22px] transition-transform duration-200 ease-out hover:scale-[0.8]"
            onClick={scrollRight}
            aria-label="Scroll right"
          >
            <div className="w-icon-slider-right"></div>
          </button>
        </div>

        <div className="grid-line-right"></div>
        <div className="grid-line-left"></div>
      </div>

      {/* <style jsx>{`
        .services__row::-webkit-scrollbar {
          display: none;
        }
        .slider-wrapper {
          position: relative;
          margin-top: 20px;
          padding-bottom: 70px;
          overflow: hidden;
        }
        .left-arrow-2 {
          color: #232a37;
          background-color: #fff;
          border-radius: 100px;
          width: 52px;
          height: 52px;
          font-size: 14px;
          position: absolute;
          left: 0;
          bottom: -18%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          border: none;
          box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        }
        .right-arrow-2 {
          color: #232a37;
          background-color: #fff;
          border-radius: 100px;
          width: 52px;
          height: 52px;
          font-size: 14px;
          position: absolute;
          left: 74px;
          bottom: -18%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          border: none;
          box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        }
        .w-icon-slider-left {
          width: 0;
          height: 0;
          border-top: 8px solid transparent;
          border-bottom: 8px solid transparent;
          border-right: 12px solid #232a37;
        }
        .w-icon-slider-right {
          width: 0;
          height: 0;
          border-top: 8px solid transparent;
          border-bottom: 8px solid transparent;
          border-left: 12px solid #232a37;
        }
        @media screen and (max-width: 767px) {
          .left-arrow-2,
          .right-arrow-2 {
            bottom: -25%;
          }
        }
      `}</style> */}
    </div>
  );
};

export default ServicesList;
