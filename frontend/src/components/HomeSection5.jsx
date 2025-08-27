import { useEffect, useRef } from "react";
import InfiniteSlider from "./InfiniteSlider";
import blueberryImg from "../assets/images/blueberryImg.avif";
import grapesImg from "../assets/images/grapes-image.avif";
import rasberryImg from "../assets/images/raspberry-image.avif";
import watermelonImg from "../assets/images/watermelon-image.avif";
import ReusableButton from "./ReusableButton";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const HomeSection5 = () => {
  // Reference to the container div holding the images
  const imagesRef = useRef(null);
  // Array of refs for each image to animate them individually
  const imgRefs = useRef([]);

  // Animate images on scroll using GSAP
  useEffect(() => {
    // Ensure images exist before animating
    if (imgRefs.current.length > 0) {
      imgRefs.current.forEach((img) => {
        gsap.to(img, {
          rotation: 360, // 1 full spin clockwise when scrolling down
          ease: "none",
          scrollTrigger: {
            trigger: img,
            start: "top 80%", // Start when image top hits 80% of viewport
            end: "bottom 20%", // End when image bottom hits 20% of viewport
            scrub: 1, // Smoothly tie animation to scroll position
            toggleActions: "play none none reverse", // Reverse to -360 (counterclockwise) on scroll up
          },
        });
      });
    }

    // Cleanup ScrollTriggers and animations on component unmount
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      gsap.killTweensOf(imgRefs.current);
    };
  }, []);
  return (
    <>
      {/* Section title slider */}
      <InfiniteSlider sliderText={"About Us"} />

      {/* Fruit images grid with animation refs */}
      <div
        ref={imagesRef}
        className="grid grid-cols-4 grid-rows-2 items-center justify-center gap-4 sm:grid-cols-4 sm:grid-rows-1"
      >
        <img
          ref={(el) => (imgRefs.current[0] = el)}
          className="mt-6 w-[7rem] sm:mt-14 sm:w-[13rem]"
          src={blueberryImg}
          alt="Blueberry illustration for About Us section"
        />
        <img
          ref={(el) => (imgRefs.current[1] = el)}
          className="z-0 w-[7rem] sm:mb-50 sm:w-[13rem]"
          src={grapesImg}
          alt="Grapes illustration for About Us section"
        />
        <img
          ref={(el) => (imgRefs.current[2] = el)}
          className="z-0 w-[6rem] sm:mb-30 sm:w-[10rem]"
          src={rasberryImg}
          alt="Raspberry illustration for About Us section"
        />
        <img
          ref={(el) => (imgRefs.current[3] = el)}
          className="z-0 w-[8rem] sm:w-[15rem]"
          src={watermelonImg}
          alt="Watermelon slice illustration for About Us section"
        />
      </div>

      {/* About section text and button */}
      <div className="flex flex-col items-center justify-center px-2 text-[#23022E]">
        {/* Section heading */}
        <h1 className="mt-[-9rem] mb-4 font-[poppins] text-base font-bold sm:mt-[-10rem] sm:mb-6 sm:text-[1.15rem]">
          About
        </h1>
        {/* Section subheading */}
        <p className="mb-4 font-[Playwrite_HU] text-xl font-bold sm:mb-10 sm:text-3xl">
          How We Make Our Drinks
        </p>
        {/* Section description */}
        <p className="mb-6 w-full max-w-lg text-center font-[poppins] text-sm sm:w-[40rem] sm:text-base">
          Our drinks are crafted using premium hemp extract, carefully blended
          to deliver a unique and uplifting experience. We focus on quality and
          consistency, ensuring every sip provides a smooth, enjoyable high
          while staying true to our commitment to natural ingredients and
          authentic flavor.
        </p>
        {/* Call-to-action button */}
        <Link to={"/about#heading"}>
          <ReusableButton
            text={"Know More"}
            styles={
              "bg-[#D71919] mb-8 text-[#23022E] hover:bg-white hover:shadow-[#D71919] hover:text-[#D71919] sm:mb-10"
            }
            buttonSize={1}
            iconColor={"white"}
          />
        </Link>
      </div>
    </>
  );
};

export default HomeSection5;
