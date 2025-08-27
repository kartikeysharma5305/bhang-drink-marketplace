import { useLocation } from "react-router-dom";
import blueberryImg from "../assets/images/blueberryImg.avif";
import grapesImg from "../assets/images/grapes-image.avif";
import hempLeavesImg from "../assets/images/hemp-leaves.avif";
import rasberryImg from "../assets/images/raspberry-image.avif";
import watermelonImg from "../assets/images/watermelon-image.avif";
import ContactUs from "../components/ContactUs";
import Faq from "../components/Faq";
import InfiniteSlider from "../components/InfiniteSlider";
import { useEffect } from "react";

const About = () => {
  // this is to redirect abd move the uses to the element that he clicked for
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const elementId = location.hash.replace("#", "");
      const element = document.getElementById(elementId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // Scroll to top if no hash is provided
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location]);

  return (
    <>
      <InfiniteSlider sliderText={"About Us"} />{" "}
      {/* Infinite Slider Component
       */}
      <div
        id="heading"
        className="grid grid-cols-4 grid-rows-1 justify-center gap-2 sm:grid-cols-4 sm:grid-rows-1"
      >
        <img
          className="xs:w-[9rem] w-[7rem] translate-y-[1.5rem] sm:w-[13rem] sm:translate-y-[3rem]"
          src={blueberryImg}
          alt="blueberry"
        />
        <img
          className="xs:w-[9rem] z-0 w-[7rem] translate-y-[-4rem] sm:w-[13rem] sm:translate-y-[-8rem]"
          src={grapesImg}
          alt="grapes"
        />
        <img
          className="xs:w-[8rem] z-0 w-[6rem] translate-y-[-4rem] sm:w-[10rem] sm:translate-y-[-8rem]"
          src={rasberryImg}
          alt="rasberry"
        />
        <img
          className="xs:w-[9rem] w-[7rem] sm:w-[13rem]"
          src={watermelonImg}
          alt="watermelon"
        />
      </div>
      <div className="text-center">
        <h1 className="xs:text-3xl mb-6 text-center font-[Playwrite_HU] text-2xl font-bold text-[#23022E] sm:text-3xl">
          All About The Making Process
        </h1>
        <p className="xs:text-base mx-auto w-[90vw] max-w-[40rem] px-2 font-[poppins] text-sm sm:w-[40rem]">
          Our hemp-infused beverage is crafted to deliver a unique, uplifting
          experience with every sip. We start by carefully extracting premium
          hemp to ensure purity and potency. The extract is then blended with
          natural fruit flavors such as blueberry, grape, raspberry, and
          watermelon, creating a refreshing and flavorful drink. Each batch is
          precisely formulated to maintain consistency and quality, ensuring a
          smooth taste and a pleasant high. The result is a delicious,
          ready-to-drink beverage that combines the benefits of hemp with the
          vibrant taste of your favorite fruits.
        </p>
      </div>
      <div
        id="find-us"
        className="mt-20 flex flex-col items-center justify-center sm:mt-40"
      >
        <svg
          preserveAspectRatio="none"
          data-bbox="0.664 0.252 558.844 15.407"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0.664 0.252 558.844 15.407"
          height="16"
          width="90vw"
          className="max-w-[560px]"
          data-type="color"
          role="presentation"
          aria-hidden="true"
          aria-label=""
        >
          <g>
            {" "}
            {/* path for uneven line above hemp leaf */}
            <path
              fill="#23022E"
              d="M62.68 4.508q-1.22.243-2.365.466c-3.128.607-6.309.98-9.448 1.337l-.456.052c-2.996.34-5.951.676-8.85 1.197a705 705 0 0 0-7.11 1.327c-10.6 2.015-21.996 4.18-32.787 4.18a1 1 0 1 1 0-2c10.583 0 21.745-2.12 32.337-4.131a753 753 0 0 1 7.207-1.345c2.964-.532 5.978-.874 8.958-1.213l.475-.054c3.146-.358 6.252-.723 9.293-1.313q1.12-.218 2.336-.462C68.194 1.367 75.582-.107 81.6.331c.694.05 1.376.3 1.993.603.623.306 1.241.699 1.814 1.09.334.227.684.476 1.011.71.216.153.422.3.608.43.506.352.915.615 1.238.768 5.45 2.584 11.841 4.206 18.686 5.188 14.1 2.023 31.61 1.51 46.161.726 42.85-2.309 85.385-3.19 128.365-3.7 4.836-.057 9.717-.178 14.621-.3 13.651-.337 27.477-.68 40.981.33 2.315.174 4.518.57 6.656.956l1.021.183c2.477.439 4.902.816 7.483.816 8.434 0 14.412-.986 21.722-3.585 7.95-2.827 17.552-1.9 25.731-.561 2.444.4 4.846.835 7.234 1.267 5.159.935 10.257 1.859 15.602 2.395 7.722.774 15.538 1.98 22.69 3.946 3.218.884 6.659 1.046 10.255 1.021a213 213 0 0 0 3.417-.06c2.503-.058 5.062-.116 7.563.01 1.648.084 3.464.3 5.283.517 1.16.138 2.321.276 3.441.38 2.963.275 5.785.334 8.219-.295 4.658-1.205 12.059-1.807 17.02-2.07 4.509-.238 8.839.13 13.091.549q.696.067 1.388.138c3.792.379 7.528.753 11.369.753 5.558 0 10.854-.365 16.154-.732l.111-.008c5.254-.364 10.514-.728 15.98-.728a1 1 0 0 1 0 2c-5.396 0-10.598.36-15.872.726l-.081.005c-5.291.367-10.654.737-16.292.737-3.947 0-7.786-.384-11.566-.763l-1.387-.138c-4.247-.419-8.445-.771-12.789-.542-4.971.263-12.186.861-16.626 2.01-2.785.72-5.896.629-8.904.35-1.243-.116-2.448-.26-3.618-.4-1.747-.21-3.417-.41-5.022-.491-2.428-.123-4.86-.067-7.323-.01a217 217 0 0 1-3.542.062c-3.641.025-7.307-.133-10.799-1.093-7.004-1.924-14.7-3.116-22.359-3.884-5.425-.544-10.655-1.491-15.854-2.433-2.37-.43-4.733-.857-7.106-1.246-8.17-1.337-17.315-2.167-24.738.472-7.543 2.682-13.749 3.701-22.392 3.701-2.769 0-5.34-.405-7.832-.847l-1.039-.186c-2.143-.386-4.235-.762-6.438-.927-13.397-1.002-27.074-.664-40.694-.326-4.925.122-9.842.243-14.735.301-42.971.51-85.474 1.39-128.281 3.697-14.55.784-32.237 1.31-46.553-.743-6.964-1-13.566-2.662-19.259-5.36-.488-.232-1.016-.581-1.524-.935a73 73 0 0 1-.662-.47c-.306-.217-.611-.434-.94-.66-.545-.37-1.072-.702-1.57-.946-.506-.249-.924-.38-1.257-.403-5.722-.417-12.81.994-18.775 2.182"
              clipRule="evenodd"
              fillRule="evenodd"
              data-color="1"
            ></path>
          </g>
        </svg>
        <img
          className="w-[13rem]"
          src={hempLeavesImg}
          alt="hemp leaves image"
        />
      </div>
      <div className="mt-8 flex flex-col items-center justify-center text-[#23022E] sm:mt-10">
        <h1 className="xs:text-3xl mb-4 text-center font-[Playwrite_HU] text-2xl font-bold sm:mb-5 sm:text-3xl">
          Where to Find Us
        </h1>
        <p className="xs:text-base mx-auto w-[90vw] max-w-[50rem] px-2 text-center font-[poppins] text-sm">
          Discover our refreshing beverage, expertly infused with premium hemp
          extract for a unique and uplifting experience. Whether you're seeking
          relaxation or a flavorful twist, our drink combines the natural
          benefits of hemp with delicious fruit flavors. Visit us to enjoy a
          taste that sets us apart in the world of infused beverages!
        </p>

        <span className="xs:text-base mt-2 w-[90vw] max-w-[20rem] text-center font-[poppins] text-sm">
          42, MG Road, Near Brigade Road,
          <br />
          Bengaluru, Karnataka 560001
          <br />
          +91-80-1234-5678
        </span>
      </div>
      <ContactUs /> {/*Contact Us component*/}
      <div id="faq">
        <Faq /> {/*FAQs component*/}
      </div>
    </>
  );
};

export default About;
