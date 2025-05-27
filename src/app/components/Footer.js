"use client";
import Image from "next/image";
import Link from "next/link";

const FooterLink = ({ href, children }) => (
  <Link href={href} className="footer__link w-inline-block">
    {children}
  </Link>
);

const SocialLink = ({ href, src, alt }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="footer__social-link w-inline-block">
    <Image src={src} alt={alt} width={24} height={24} />
  </a>
);

const FooterSection = ({ title, links }) => (
  <div className="footer__column">
    <div className="footer__column-title">{title}</div>
    <div className="footer__links">
      {links.map((link, index) => (
        <FooterLink key={index} href={link.href}>
          {link.text}
        </FooterLink>
      ))}
    </div>
  </div>
);

const footerLinks = {
  company: [
    { href: "/about", text: "About" },
    { href: "/careers", text: "Careers" },
    { href: "/blog", text: "Blog" },
    { href: "/press", text: "Press" }
  ],
  resources: [
    { href: "/resources", text: "Resources" },
    { href: "/help", text: "Help" },
    { href: "/contact", text: "Contact" },
    { href: "/privacy", text: "Privacy" }
  ],
  legal: [
    { href: "/terms", text: "Terms" },
    { href: "/privacy", text: "Privacy" },
    { href: "/cookies", text: "Cookies" }
  ]
};

const socialLinks = [
  { href: "https://twitter.com/designjoy", src: "/images/twitter.svg", alt: "Twitter" },
  { href: "https://instagram.com/designjoy", src: "/images/instagram.svg", alt: "Instagram" },
  { href: "https://linkedin.com/company/designjoy", src: "/images/linkedin.svg", alt: "LinkedIn" }
];

export default function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__logo">
            <Image
              src="/images/logo.svg"
              alt="Designjoy"
              width={120}
              height={40}
              className="footer__logo-image"
            />
          </div>
          <div className="footer__social">
            {socialLinks.map((link, index) => (
              <SocialLink key={index} {...link} />
            ))}
          </div>
        </div>
        <div className="footer__columns">
          <FooterSection title="Company" links={footerLinks.company} />
          <FooterSection title="Resources" links={footerLinks.resources} />
          <FooterSection title="Legal" links={footerLinks.legal} />
        </div>
        <div className="footer__bottom">
          <div className="footer__copyright">
            © {new Date().getFullYear()} Designjoy. All rights reserved.
          </div>
        </div>
      </div>
    </div>
  );
}
