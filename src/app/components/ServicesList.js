import Image from "next/image";

const ServicesList = () => {
  return (
    <div className="services__list">
      <div className="container p-b-0">
        <div className="services__row">
          <div className="services__col">
            <div className="services__block _1">
              <Image
                style={{
                  transform:
                    "translate3d(0, 130px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                }}
                src="/images/images2/servicelist1.png"
                alt="one"
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
                src="/Lock-Square-Dial-Pad--Streamline-Nova.png"
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
                src="/Flash-Enable-Allow-1--Streamline-Nova.png"
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
                src="/Star--Streamline-Nova.png"
                alt=""
                width={70}
                height={70}
                className="image-8 _2"
              />
            </div>
            <div className="services__header">Top-notch quality</div>
            <p className="services__p">
              Senior design quality at your fingertips, whenever you need it.
            </p>
          </div>
          <div className="services__col">
            <div className="services__block _5">
              <Image
                style={{
                  transform:
                    "translate3d(0, 130px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                }}
                loading="lazy"
                alt=""
                src="/Resize-Expand--Streamline-Nova.png"
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
                style={{
                  transform:
                    "translate3d(0, 130px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                }}
                loading="lazy"
                alt=""
                src="/Touch-Id--Streamline-Nova.png"
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
        {/* Slider version - will decide later if needed or how to implement */}
        {/* <div style={{ opacity: 0, transform: 'translate3d(55px, 0px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)' }} className="slider-wrapper _33">
          </div> */}
        <div className="grid-line-right"></div>
        <div className="grid-line-left"></div>
      </div>
    </div>
  );
};

export default ServicesList;
