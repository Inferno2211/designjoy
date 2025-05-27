'use client';
import Image from "next/image";
import useIntersectionObserver from "../hooks/useIntersectionObserver";

// Story text content
const storyText = {
  content: `First launched in 2017, Designjoy revolutionized the design industry with its subscription-based model. To this day, Designjoy is run entirely by Brett. Designjoy doesn't hire extra designers or outsource work—instead, it focuses on delivering top-notch quality to a limited roster of clients at a time.`,
  link: {
    text: "Brett",
    url: "https://x.com/BrettFromDJ"
  }
};

// Benefits section content
const benefitsContent = {
  eyebrow: "Membership benefits",
  title: {
    prefix: "It's",
    highlight: "you'll never go back",
    suffix: "better"
  },
  description: "Designjoy replaces unreliable freelancers and expensive agencies for one flat monthly fee, with designs delivered so fast you won't want to go anywhere else."
};

const StorySection = ({ content, link }) => (
  <div className="div-block-32">
    <p className="story-text _4">
      {content.split("Brett").map((part, index) => (
        index === 0 ? (
          <span key={index}>
            {part}
            <a href={link.url} target="_blank" className="link">
              {link.text}
            </a>
          </span>
        ) : (
          <span key={index}>{part}</span>
        )
      ))}
    </p>
  </div>
);

const BenefitsSection = ({ content, isVisible, containerRef }) => (
  <div 
    style={{ opacity: 100 }} 
    className={`hiw__header-wrapper ${isVisible ? 'animate-float-up-low' : ''}`} 
    ref={containerRef}
  >
    <div className="eyebrow">{content.eyebrow}</div>
    <h1 className="max">
      {content.title.prefix}{" "}
      <span className="text-italics">
        &quot;{content.title.highlight}&quot;
      </span>{" "}
      <span>{content.title.suffix}</span>
    </h1>
    <p className="benefits__p">{content.description}</p>
  </div>
);

const Services = () => {
  const [containerRef, isVisible] = useIntersectionObserver();

  return (
    <div className="services">
      <div className="container p-b-0">
        <div className="inner-container">
          <StorySection content={storyText.content} link={storyText.link} />
          <BenefitsSection 
            content={benefitsContent} 
            isVisible={isVisible} 
            containerRef={containerRef} 
          />
        </div>
        <div className="grid-line-right" />
        <div className="grid-line-left" />
      </div>
    </div>
  );
};

export default Services;
