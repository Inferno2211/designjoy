// "use client";
// import Image from "next/image";
// import React, { useRef } from "react";

// const ServicesList = () => {
//   const scrollRef = useRef(null);

//   const scrollLeft = () => {
//     if (scrollRef.current) {
//       scrollRef.current.scrollBy({ left: -200, behavior: "smooth" });
//     }
//   };

//   const scrollRight = () => {
//     if (scrollRef.current) {
//       scrollRef.current.scrollBy({ left: 200, behavior: "smooth" });
//     }
//   };

//   return (
//     <div className="slider-wrapper _33">
//       <div className="services__list">
//         <div className="container p-b-0">
//           <div
//             ref={scrollRef}
//             className="services__row overflow-x-scroll flex gap-6 scroll-smooth"
//             style={{
//               scrollBehavior: "smooth",
//               scrollbarWidth: "none" /* Firefox */,
//               msOverflowStyle: "none" /* IE and Edge */,
//             }}
//           >
//             <div className="services__col">
//               <div className="services__block _1">
//                 <Image
//                   src="/images/images2/servicelist1.png"
//                   alt="one"
//                   width={60}
//                   height={60}
//                   loading="lazy"
//                   className="image-8"
//                 />
//               </div>
//               <div className="services__header">Design board</div>
//               <p className="services__p">
//                 Easily manage your design queue with a Trello board.
//               </p>
//             </div>
//             <div className="services__col">
//               <div className="services__block _3">
//                 <Image
//                   loading="lazy"
//                   src="/images/images2/lock.png"
//                   alt="lk"
//                   width={50}
//                   height={50}
//                   className="image-8 _4"
//                 />
//               </div>
//               <div className="services__header">Fixed monthly rate</div>
//               <p className="services__p">
//                 No surprises here! Pay the same fixed price each month.
//               </p>
//             </div>
//             <div className="services__col">
//               <div className="services__block _2">
//                 <Image
//                   loading="lazy"
//                   src="/images/images2/arrowstream.png"
//                   alt=""
//                   width={60}
//                   height={60}
//                   className="image-8 _3"
//                 />
//               </div>
//               <div className="services__header">Fast delivery</div>
//               <p className="services__p">
//                 Get your design one at a time in just a couple days on average.
//               </p>
//             </div>
//             <div className="services__col">
//               <div className="services__block _4">
//                 <Image
//                   loading="lazy"
//                   src="/images/images2/star.png"
//                   alt=""
//                   width={70}
//                   height={70}
//                   className="image-8 _2"
//                 />
//               </div>
//               <div className="services__header">Top-notch quality</div>
//               <p className="services__p">
//                 Senior design quality at your fingertips, whenever you need it.
//               </p>
//             </div>
//             <div className="services__col">
//               <div className="services__block _5">
//                 <Image
//                   loading="lazy"
//                   alt=""
//                   src="/images/images2/block.png"
//                   width={60}
//                   height={60}
//                   className="image-8"
//                 />
//               </div>
//               <div className="services__header">Flexible and scalable</div>
//               <p className="services__p">
//                 Scale up or down as needed, and pause or cancel at anytime.
//               </p>
//             </div>
//             <div className="services__col last">
//               <div className="services__block _6">
//                 <Image
//                   loading="lazy"
//                   alt=""
//                   src="/images/images2/nova.png"
//                   width={60}
//                   height={60}
//                   className="image-8"
//                 />
//               </div>
//               <div className="services__header">Unique and all yours</div>
//               <p className="services__p">
//                 Every design is made especially for you and is 100% yours.
//               </p>
//             </div>
//             <div className="div-block-18"></div>
//           </div>
//         </div>
//         <button
//           className="left-arrow-2 w-slider-arrow-left"
//           onClick={scrollLeft}
//           aria-label="Scroll left"
//         >
//           <div className="w-icon-slider-left"></div>
//         </button>
//         <button
//           className="right-arrow-2 w-slider-arrow-right"
//           onClick={scrollRight}
//           aria-label="Scroll right"
//         >
//           <div className="w-icon-slider-right">::before</div>
//         </button>

//         {/* <style jsx>{`
//           .services__row::-webkit-scrollbar {
//             display: none;
//           }
//         `}</style> */}
//       </div>
//       <div className="grid-line-right"></div>
//       <div className="grid-line-left"></div>
//     </div>
//   );
// };

// export default ServicesList;
"use client";
import Image from "next/image";
import React, { useRef } from "react";

const ServicesList = () => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };

  return (
    <div className="slider-wrapper _33" style={{ position: "relative" }}>
      <div className="services__list">
        <div className="container p-b-0">
          <div
            ref={scrollRef}
            className="services__row overflow-x-scroll flex gap-6 scroll-smooth"
            style={{
              scrollBehavior: "smooth",
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            <div className="services__col">
              <div className="services__block _1">
                <Image
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
                  src="/images/images2/lock.png"
                  alt="lk"
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
                Senior design quality at your fingertips, whenever you need it.
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
        </div>

        {/* Navigation Arrows */}
        <button
          className="left-arrow-2 w-slider-arrow-left"
          onClick={scrollLeft}
          aria-label="Scroll left"
          style={{
            position: "absolute",
            left: "10px",
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 10,
            background: "rgba(255, 255, 255, 0.9)",
            border: "1px solid #ddd",
            borderRadius: "50%",
            width: "40px",
            height: "40px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
          }}
        >
          <div
            className="w-icon-slider-left"
            style={{
              width: "0",
              height: "0",
              borderTop: "8px solid transparent",
              borderBottom: "8px solid transparent",
              borderRight: "12px solid #333",
            }}
          ></div>
        </button>
        <button
          className="right-arrow-2 w-slider-arrow-right"
          onClick={scrollRight}
          aria-label="Scroll right"
          style={{
            position: "absolute",
            right: "10px",
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 10,
            background: "rgba(255, 255, 255, 0.9)",
            border: "1px solid #ddd",
            borderRadius: "50%",
            width: "40px",
            height: "40px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
          }}
        >
          <div
            className="w-icon-slider-right"
            style={{
              width: "0",
              height: "0",
              borderTop: "8px solid transparent",
              borderBottom: "8px solid transparent",
              borderLeft: "12px solid #333",
            }}
          ></div>
        </button>
      </div>

      {/* Hide scrollbar with CSS */}
      <style jsx>{`
        .services__row::-webkit-scrollbar {
          display: none;
        }
      `}</style>

      <div className="grid-line-right"></div>
      <div className="grid-line-left"></div>
    </div>
  );
};

export default ServicesList;
