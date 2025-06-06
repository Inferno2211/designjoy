"use client";
import Image from "next/image";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const easeInOutCubic = (t) =>
  t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

const animateScroll = ({ element, scrollAmount, duration, delay }) => {
  if (!element) return;

  setTimeout(() => {
    const initialScrollLeft = element.scrollLeft;
    const theoreticalFinalScrollLeft = initialScrollLeft + scrollAmount;
    const maxScrollPossible = element.scrollWidth - element.clientWidth;
    const targetScrollLeft = Math.max(
      0,
      Math.min(theoreticalFinalScrollLeft, maxScrollPossible)
    );

    const actualDistanceToScroll = targetScrollLeft - initialScrollLeft;

    if (actualDistanceToScroll === 0) {
      element.scrollLeft = targetScrollLeft;
      return;
    }

    let startTime = null;

    const animationStep = (timestamp) => {
      if (!startTime) {
        startTime = timestamp;
      }
      const elapsedTime = timestamp - startTime;
      const progress = Math.min(elapsedTime / duration, 1);

      const easedProgress = easeInOutCubic(progress);

      element.scrollLeft =
        initialScrollLeft + actualDistanceToScroll * easedProgress;

      if (progress < 1) {
        requestAnimationFrame(animationStep);
      } else {
        element.scrollLeft = targetScrollLeft;
      }
    };

    requestAnimationFrame(animationStep);
  }, delay);
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const services = [
  {
    imgSrc: "/image/servicelist1.png",
    alt: "",
    width: 60,
    height: 60,
    header: "Design board",
    description: "Easily manage your design queue with a Trello board.",
    blockClass: "_1",
    imgClass: "image-8",
  },
  {
    imgSrc: "/image/lock.png",
    alt: "",
    width: 50,
    height: 50,
    header: "Fixed monthly rate",
    description: "No surprises here! Pay the same fixed price each month.",
    blockClass: "_3",
    imgClass: "image-8 _4",
  },
  {
    imgSrc: "/image/arrowstream.png",
    alt: "",
    width: 60,
    height: 60,
    header: "Fast delivery",
    description:
      "Get your design one at a time in just a couple days on average.",
    blockClass: "_2",
    imgClass: "image-8 _3",
  },
  {
    imgSrc: "/image/star.png",
    alt: "",
    width: 70,
    height: 70,
    header: "Top-notch quality",
    description:
      "Senior-level design quality at your fingertips, whenever you need it.",
    blockClass: "_4",
    imgClass: "image-8 _2",
  },
  {
    imgSrc: "/image/block.png",
    alt: "",
    width: 60,
    height: 60,
    header: "Flexible and scalable",
    description: "Scale up or down as needed, and pause or cancel at anytime.",
    blockClass: "_5",
    imgClass: "image-8",
  },
  {
    imgSrc: "/image/nova.png",
    alt: "",
    width: 60,
    height: 60,
    header: "Unique and all yours",
    description: "Every design is made especially for you and is 100% yours.",
    blockClass: "_6",
    imgClass: "image-8",
  },
];

const ServiceCard = ({ service }) => (
  <motion.div className="services__col" variants={itemVariants}>
    <div className={`services__block ${service.blockClass}`}>
      <Image
        loading="lazy"
        src={service.imgSrc}
        alt={service.alt}
        width={service.width}
        height={service.height}
        className={service.imgClass}
      />
    </div>
    <div className="services__header">{service.header}</div>
    <p className="services__p">{service.description}</p>
  </motion.div>
);

const ScrollButton = ({ direction, onClick }) => (
  <motion.button
    className={`${direction}-arrow-2 ${
      direction === "right" ? "ml-[22px]" : ""
    } transition-transform duration-200 ease-out hover:scale-[0.8]`}
    onClick={onClick}
    aria-label={`Scroll ${direction}`}
    whileHover={{ scale: 0.8 }}
    whileTap={{ scale: 0.9 }}
  >
    <div className={`w-icon-slider-${direction}`} />
  </motion.button>
);

const ServicesList = () => {
  const scrollRef = useRef(null);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });

  const handleScroll = (amount) => {
    if (scrollRef.current) {
      animateScroll({
        element: scrollRef.current,
        scrollAmount: amount,
        duration: 500,
        delay: 50,
      });
    }
  };

  return (
    <div className="services__list" ref={containerRef}>
      <div className="container p-b-0">
        <motion.div
          ref={scrollRef}
          className="flex gap-8 overflow-x-auto scrollbar-none services__row"
          style={{ scrollbarWidth: "none" }}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
          <div className="div-block-18" />
        </motion.div>

        <div className="mt-[5px] slider-wrapper _33 pl-10">
          <ScrollButton direction="left" onClick={() => handleScroll(-250)} />
          <ScrollButton direction="right" onClick={() => handleScroll(250)} />
        </div>

        <div className="grid-line-right" />
        <div className="grid-line-left" />
      </div>
    </div>
  );
};

export default ServicesList;
