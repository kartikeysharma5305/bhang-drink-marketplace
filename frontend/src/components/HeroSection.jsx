import splitHeroSection from "../assets/images/split-hero.svg";
import InteractiveSodaCan from "./InteractiveSodaCan";
import ReusableButton from "./ReusableButton";
import { Link } from "react-router-dom";

// HeroSection component displays the main hero area of the landing page
const HeroSection = () => {
  return (
    <>
      {/* Main container with background color and negative top margin for overlap effect */}
      <div className="xs:mt-0 mt-[-6.5rem] bg-[#F8CE35]">
        <h2 className="xs:text-lg md:text-1.5xl p-[8rem_1rem_4rem_1rem] text-center font-[poppins] text-base font-extrabold md:p-[10rem_2.5rem_0rem_0rem]">
          Craft Soft Sparkling Made with Joy and BHANG.
        </h2>
        {/* Flex container for soda can and main title */}
        <div className="xs:flex-row xs:mb-[-3rem] xs:gap-0 flex flex-col items-center justify-center gap-2 md:mb-[-3rem] md:flex-row md:gap-0">
          {/* Interactive soda can animation/component */}
          <InteractiveSodaCan />

          {/* Main hero title */}
          <h1
            className="xs:ml-[-2rem] xs:text-5xl md:floating-hero-title z-1 mt-2 font-[Playwrite_HU] text-3xl font-extrabold text-[#23022E] md:mt-0 md:ml-[-2rem] md:text-[7rem]"
            style={{ position: "relative" }}
          >
            <span className="mt-6 block md:hidden">Lets Get High AF</span>
            <span className="hidden md:block">
              Lets Get <br /> High AF
            </span>
          </h1>
        </div>

        {/* Button linking to the shop page */}
        <div className="xs:block xs:text-left flex justify-center md:block md:text-left">
          <Link to={"/shop#all"}>
            <ReusableButton
              text={"Bhang Drinks"}
              styles={
                "bg-red-600 mt-4 xs:mr-[10rem] md:mr-[10rem] hover:bg-white hover:text-red-600 hover:border-[shadow-red-600] hover:shadow-red-600"
              }
              iconColor={"#ffffff"}
              buttonSize={4}
            />
          </Link>
        </div>

        {/* Decorative split image at the bottom of the hero section */}
        <img
          className="xs:mt-0 mt-4 w-full md:mt-0"
          src={splitHeroSection}
          alt=""
        />
      </div>
    </>
  );
};

export default HeroSection;
