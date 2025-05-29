"use client";
import Image from "next/image";
import Script from "next/script";
import useIntersectionObserver from "../hooks/useIntersectionObserver";

const LogoBlock = () => (
  <a href="#" className="hero__logo-block invert w-inline-block">
    <div className="lottie-animation-4 _33">
      <Image
        loading="lazy"
        src="/image/designlogo.svg"
        alt=""
        width={100}
        height={24}
        className="image-23 animate-clip-smooth will-change-[clip-path] transform-gpu"
      />
    </div>
    <Image
      loading="lazy"
      src="/image/designjoy.svg"
      alt="Designjoy Logo"
      width={100}
      height={24}
      className="image-23"
    />
  </a>
);

const FooterInfo = () => (
  <div className="div-block-26">
    <div className="head">Headquartered in Phoenix, Arizona</div>
    <a
      href="https://brettwill1025.notion.site/Terms-Conditions-4901d894656448a69c4c4e04d40d3bbc"
      target="_blank"
      rel="noopener noreferrer"
      className="text-link _3"
    >
      Terms of service
    </a>
    <a
      href="https://brettwill1025.notion.site/DesignJoy-Privacy-Policy-0011594d80724a68821940237f9f7b02"
      target="_blank"
      rel="noopener noreferrer"
      className="text-link _3"
    >
      Privacy Policy
    </a>
  </div>
);

const BookingCalendar = ({ isVisible, containerRef }) => (
  <div
    data-w-id="4bf06ab7-87fa-09aa-0827-16307073412e"
    style={{ opacity: 100 }}
    className={`book-a-call-wrapper ${
      isVisible ? "animate-float-up" : "opacity-0"
    }`}
    ref={containerRef}
  >
    <div className="book-desktop w-embed w-script">
      <div
        style={{
          width: "100%",
          height: "100%",
          overflow: "scroll",
        }}
        id="my-cal-inline"
      />
      <Script id="cal-embed-script" strategy="afterInteractive">
        {`
          (function (C, A, L) { let p = function (a, ar) { a.q.push(ar); }; let d = C.document; C.Cal = C.Cal || function () { let cal = C.Cal; let ar = arguments; if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement("script")).src = A; cal.loaded = true; } if (ar[0] === L) { const api = function () { p(api, arguments); }; const namespace = ar[1]; api.q = api.q || []; if (typeof namespace === "string") { cal.ns[namespace] = cal.ns[namespace] || api; p(cal.ns[namespace], ar); p(cal, ["initNamespace", namespace]); } else p(cal, ar); return; } p(cal, ar); }; })(window, "https://app.cal.com/embed/embed.js", "init");
          Cal("init", "15min", { origin: "https://cal.com" });
          Cal.ns["15min"]("inline", {
            elementOrSelector: "#my-cal-inline",
            config: { "layout": "month_view", "theme": "dark" },
            calLink: "designjoy/15min",
          });
          Cal.ns["15min"]("ui", { "theme": "dark", "cssVarsPerTheme": { "light": { "cal-brand": "#000000" }, "dark": { "cal-brand": "#ffffff" } }, "hideEventTypeDetails": true, "layout": "month_view" });
        `}
      </Script>
    </div>
  </div>
);

const Footer = () => {
  const [containerRef, isVisible] = useIntersectionObserver();

  return (
    <div id="book" className="footer">
      <div className="container hero-container foooooo">
        <div className="inner-container">
          <div className="footer__flex">
            <div className="div-block-25 desktop">
              <div className="hero__left white">
                <div className="hero__left-top">
                  <LogoBlock />
                </div>
                <div className="footer__bottom-top">
                  <h1 className="top footer__header">
                    See if Designjoy is the right fit for you{" "}
                    <span className="text-italics">(it totally is)</span>
                  </h1>
                  <p className="hero__left-bottom-p m-b-d foooo">
                    Schedule a quick, 15 minute guided tour through Designjoy.
                  </p>
                </div>
              </div>
              <div className="smiles-desktop">
                <Image
                  loading="lazy"
                  src="/image/smileyfaces.svg"
                  alt="Smiley faces"
                  width={700}
                  height={290}
                />
                <FooterInfo />
              </div>
            </div>
            <BookingCalendar
              isVisible={isVisible}
              containerRef={containerRef}
            />
            <div className="smiles-mobile">
              <Image
                loading="lazy"
                src="image/smileyfaces.svg"
                alt="Smiley faces"
                width={350}
                height={100}
              />
              <FooterInfo />
            </div>
          </div>
        </div>
        <div className="grid-line-right dark" />
        <div className="grid-line-left dark" />
      </div>
    </div>
  );
};

export default Footer;
