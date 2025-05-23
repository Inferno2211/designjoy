import Image from "next/image";

const Faq = () => {
  return (
    <div className="faq">
      <div className="container p-t-0">
        <div className="inner-container">
          <div style={{ opacity: 100 }} className="hiw__header-wrapper">
            <div className="eyebrow">FAQs</div>
            <h1 className="max">
              Got <span className="text-italics">questions?</span>
            </h1>
          </div>
          <div className="faq__wrapper">
            {/* FAQ items will be dynamically generated or a sub-component */}
            <div className="faq__item">
              <div className="faq__question-flex">
                <div className="faq__question">
                  Why wouldn&#x27;t I just hire a full-time designer?
                </div>
                <Image
                  loading="lazy"
                  src="/arrow-down.svg"
                  alt=""
                  width={20}
                  height={20}
                  className="faq__arrow"
                />
              </div>
              <div style={{ height: "0px" }} className="faq__answer-wrapper">
                <div className="faq__answer">
                  Good question! For starters, the annual cost of a full-time
                  senior-level designer now exceeds $100,000, plus benefits (and
                  good luck finding one available). Aside from that, you may not
                  always have enough work to keep them busy at all times,
                  meaning you're stuck paying for time you aren't able to
                  utilize.
                  <br />
                  <br />
                  With the monthly plan, you can pause and resume your
                  subscription as often as you need to ensure you're only paying
                  your designer when you have work available for them.
                </div>
              </div>
            </div>
            {/* ... more FAQ items ... */}
          </div>
          <a
            style={{ opacity: 100 }}
            href="#book"
            className="button-filled m-t-48 w-inline-block"
          >
            <Image
              loading="lazy"
              src="/Phone--Streamline-Ultimate (1).svg"
              alt=""
              width={24}
              height={24}
              className="image"
            />
            <div>Book a call</div>
          </a>
        </div>
        <div className="grid-line-right"></div>
        <div className="grid-line-left"></div>
      </div>
    </div>
  );
};

export default Faq;
