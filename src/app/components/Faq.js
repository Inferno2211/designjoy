'use client';
import { useState } from 'react';
import Image from 'next/image';

const faqData = [
  {
    question: "How fast will I receive my designs?",
    answer: "On average, most requests are completed in just two days or less. However, more complex requests can take longer."
  },
  {
    question: "How does onboarding work?",
    answer: "Subscribe to a plan and we'll quickly add you to your very own Trello board. This process usually takes about an hour to complete from the time you subscribe. Once you accept the invite to Trello, you're ready to rock.\n\nFurther instructions on how to use the Trello board to request designs can be found on the board itself."
  },
  {
    question: "Who are the designers?",
    answer: "Designjoy is a one-man agency, ran by Brett, the founder. Designjoy does not employ other designers, or outsource work to any other entity. You'll work directly with me through the entirety of your experience."
  },
  {
    question: "Is there a limit to how many requests I can make?",
    answer: "Once subscribed, you're able to add as many design requests to your queue as you'd like, and they will be delivered one by one."
  },
  {
    question: "How does the pause feature work?",
    answer: "We understand you may not have enough design work to fill up entire month. Perhaps you only have one or two design requests at the moment. That's where pausing your subscription comes in handy.\n\nBilling cycles are based on 31 day period. Let's say you sign up and use the service for 21 days, and then decide to pause your subscription. This means that the billing cycle will be paused and you'll have 10 days of service remaining to be used anytime in the future."
  },
  {
    question: "How do you handle larger requests?",
    answer: "Larger requests are broken down on Designjoy's end. This applies to full-scale website or mobile app designs, UI/UX work, etc. You should expect to receive a reasonable amount of work every 24-48 hours until the entire request is done."
  },
  {
    question: "What programs do you design in?",
    answer: "Most requests are designed using Figma."
  },
  {
    question: "How does Webflow development work?",
    answer: "Webflow development is included with all subscriptions and is simply treated as a design request. As long as your website can be supported by the Webflow platform, Designjoy will take care of the development to ensure maximum fidelity when it comes to the final product.\n\nOnce the website is fully developed, the site will be transferred to your account, where you will own it from that point forward. Therefore, a Designjoy subscription is not necessary to maintain your website."
  },
  {
    question: "How will I request designs?",
    answer: "Designjoy offers a ton of flexibility in how you request designs using Trello. Some common ways clients request designs is directly via Trello, sharing Google docs or wireframes, or even recording a brief Loom video (for those who prefer not to write their briefs out). Basically, if it can be linked to or shared in Trello, it's fair game."
  },
  {
    question: "What if I don't like the design?",
    answer: "No worries! We'll continue to revise the design until you're 100% satisfied."
  },
  {
    question: "Are there any requests you don't support?",
    answer: "Absolutely. Designjoy does not cover the following design work: 3D modeling, animated graphics (GIFS, etc.), document design (medical forms, etc.), complex packaging, extensive print design (magazines, books, etc.), and Adobe InDesign documents."
  },
  {
    question: "What if I only have a single request?",
    answer: "That's fine. You can pause your subscription when finished and return when you have additional design needs. There's no need to let the remainder of your subscription go to waste."
  },
  {
    question: "Are there any refunds?",
    answer: "Due to the high quality nature of the work, there will be no refunds issued past the first week of service. However, no refunds will be issued for completed work."
  },
  {
    question: "Can I use Designjoy for just a month?",
    answer: "For sure. Whether you need Designjoy for a month or a year, the choice is yours. Just feel free to come back when you have additional design needs."
  }
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="container faqq">
      <div className="hero__flex">
        <div className="faq__left">
          <h1><span className="text-italics">Frequently</span> asked questions</h1>
          <div className="div-block-13">
            {faqData.map((faq, index) => (
              <div
                key={index}
                className="faq__row"
                onClick={() => toggleFaq(index)}
                style={{ cursor: 'pointer' }}
              >
                <div>
                  <div className="faq__question m-b-0">{faq.question}</div>
                  <p
                    className="faq__answer"
                    style={{
                      display: openIndex === index ? 'block' : 'none',
                      marginTop: '12px',
                      marginBottom: '0',
                      fontSize: '16px',
                      lineHeight: '20px',
                      color: '#99948f'
                    }}
                  >
                    {faq.answer.split('\n\n').map((paragraph, i) => (
                      <span key={i}>
                        {paragraph}
                        {i < faq.answer.split('\n\n').length - 1 && <><br /><br /></>}
                      </span>
                    ))}
                  </p>
                </div>
                <Image
                  src="/chevron-down.svg"
                  alt=""
                  width={24} 
                  height={24}
                  className="faq__arrow"
                  style={{
                    transform: openIndex === index ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: 'transform 0.3s ease'
                  }}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="faq__card">
          <div className="faq__card-inner">
            <Image
              loading="lazy"
              src="/Group 10.png" 
              alt=""
              width={130} 
              height={115} 
              className="image-11"
            />
            <div className="hero__member-card-header _2">Book a 15-min intro call</div>
            <a href="#book" className="button w-button">Book a call</a>
          </div>
          <a href="mailto:hello@designjoy.co?subject=Website%20Inquiry" className="hero__member-card-call w-inline-block">
            <div className="hero__member-card-call-left">
              <Image
                loading="lazy"
                src="/Send-Email--Streamline-Ultimate.png" 
                alt=""
                width={30} 
                height={30} 
                className="image-2 send"
              />
              <div>
                <div>Prefer to email?</div>
                <div className="hero__member-card-call-schedule">hello@designjoy.co</div>
              </div>
            </div>
            <Image 
              loading="lazy" 
              src="/arrow.svg" 
              alt="" 
              width={24} 
              height={24} 
            />
          </a>
        </div>
      </div>
    </div>
  );
}
