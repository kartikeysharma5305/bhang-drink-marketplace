import ReusableButton from "./ReusableButton";
import divider from "../assets/images/footer-divider.avif";
import { Link } from "react-router-dom";

// HomeSection4 component displays a section highlighting best selling drinks
const HomeSection4 = () => {
  return (
    <>
      {/* Main container with background color and vertical alignment */}
      <div className="flex flex-col items-center justify-center bg-[#23022E] pt-6 pb-6 sm:pt-10">
        {/* Section title */}
        <h1 className="pb-1 font-[poppins] text-base font-bold text-white sm:pb-2 sm:text-2xl">
          Our Best Feel Good Drinks
        </h1>
        {/* Section subtitle */}
        <p className="px-4 pt-2 pb-6 text-center font-[Playwrite_HU] text-lg font-bold text-white sm:p-12 sm:text-3xl">
          You'll Love These Flavours
        </p>

        {/* "Explore All" button with custom styles */}
        <div className="pb-4 sm:pb-10">
          <Link to={"/shop#all"}>
            <ReusableButton
              text="Explore Zigh Drinks"
              styles="text-white bg-[#0869D9] hover:bg-[white] hover:border-[#0869D9] hover:shadow-[#0869D9] hover:text-[#0869D9]"
              iconColor="white"
              buttonSize={1}
            />
          </Link>
        </div>
      </div>
      {/* Decorative divider image at the bottom, rotated 180 degrees */}
      <img
        className="mt-[-0.1rem] w-full rotate-180 text-white"
        src={divider}
        alt=""
      />
    </>
  );
};

export default HomeSection4;
