import Image from 'next/image';

const Footer = () => {
  return (
    <div className="footer">
      <div className="container p-t-0">
        <div style={{ opacity: 0 }} className="inner-container">
          <div className="footer__flex">
            <div className="footer__left">
              <div>Ready to make design your superpower?</div>
              <a href="#pricing" className="button-filled m-t-16 w-inline-block">
                <div>See pricing</div>
              </a>
            </div>
            <div className="footer__right">
              <div className="footer__links-flex">
                <a href="#" className="footer__link">Home</a>
                <a href="#work" className="footer__link">Work</a>
                <a href="#pricing" className="footer__link">Pricing</a>
                <a href="#faq" className="footer__link">FAQs</a>
                <a href="https://billing.stripe.com/p/login/14keXT4Qa8wh5k4dQQ" target="_blank" className="footer__link">Login</a>
              </div>
              <div className="footer__links-flex">
                <a href="https://x.com/brettfromdj" target="_blank" className="footer__link">Twitter</a>
                <a href="https://www.figma.com/@brettfromdj" target="_blank" className="footer__link">Figma</a>
                <a href="https://www.linkedin.com/in/brettfromdj/" target="_blank" className="footer__link">LinkedIn</a>
                <a href="mailto:hello@designjoy.co?subject=Hello!" className="footer__link">Email</a>
              </div>
            </div>
          </div>
          <div className="footer__bottom">
            <a href="#" className="footer__logo-block w-inline-block">
              <Image src="/Designjoy.svg" alt="" width={100} height={24} loading="lazy" className="image-23" />
            </a>
            <div className="footer__legal-text">Copyright © 2024 Designjoy LLC. All rights reserved.</div>
          </div>
        </div>
        <div className="grid-line-right"></div>
        <div className="grid-line-left"></div>
      </div>
    </div>
  );
};

export default Footer; 