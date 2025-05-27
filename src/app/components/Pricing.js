import Image from "next/image";

const testimonials = [
  {
    quote: "Designjoy shows that they know the art of subtlety.",
    company: {
      logo: "/image/webflow.svg",
      width: 196,
      height: 33,
      className: "image-12",
    },
  },
  {
    quote: "Design is everything, and these guys have nailed it.",
    person: {
      name: "Kevin O'Leary",
      role: "Shark Tank",
      image: {
        src: "/image/kevin.png",
        width: 70,
        height: 70,
        className: "image-13",
      },
    },
  },
];

const TestimonialCard = ({ testimonial }) => (
  <div className="div-block-17">
    <div className="div-block-14">
      <div className="text-block-2">
        &quot;{testimonial.quote}&quot;
        <br />
      </div>
      {testimonial.company ? (
        <Image
          loading="lazy"
          src={testimonial.company.logo}
          alt=""
          width={testimonial.company.width}
          height={testimonial.company.height}
          className={testimonial.company.className}
        />
      ) : (
        <div className="div-block-15">
          <Image
            loading="lazy"
            src={testimonial.person.image.src}
            alt=""
            width={testimonial.person.image.width}
            height={testimonial.person.image.height}
            className={testimonial.person.image.className}
          />
          <div className="div-block-16">
            <div className="text-block-3">{testimonial.person.name}</div>
            <div>{testimonial.person.role}</div>
          </div>
        </div>
      )}
    </div>
  </div>
);

const Pricing = () => {
  return (
    <div className="pricing">
      <div className="container">
        <div className="inner-container slider">
          <div className="w-layout-grid grid-3">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} />
            ))}
          </div>
        </div>
        <div className="grid-line-right" />
        <div className="grid-line-left" />
      </div>
    </div>
  );
};

export default Pricing;
