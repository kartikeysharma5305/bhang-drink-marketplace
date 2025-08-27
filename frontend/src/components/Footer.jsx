import svgBackground from "../assets/images/backgroundSvg";
import footerDivider from "../assets/images/footer-divider.avif";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      {/* Decorative divider image above the footer */}
      <img className="mt-6 text-white" src={footerDivider} alt="" />

      {/* Main footer section with background SVG */}
      <footer
        style={{ backgroundImage: svgBackground }}
        className="bg-[#23022E] px-2 py-8 sm:px-5 sm:py-10"
      >
        {/* Newsletter subscription form */}
        <div className="p-2 sm:p-8">
          <h2 className="mb-6 text-left font-[poppins] text-base font-bold text-white sm:mb-12 sm:text-lg">
            Subscribe to Our Newsletter
          </h2>
          <form className="space-y-4">
            {/* Email input field */}
            <div>
              <label
                htmlFor="email"
                className="mb-2 block font-[poppins] text-white"
              >
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                className="w-full rounded-full border-4 border-white bg-transparent p-2 font-[Playwrite_HU] text-base font-bold text-white placeholder-white hover:border-[#F8CE35] sm:p-4 sm:text-[1.5rem]"
              />
            </div>
            {/* Checkbox and submit button */}
            <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <input
                  type="checkbox"
                  id="subscribe"
                  name="subscribe"
                  className="mr-2 h-5 w-5 cursor-pointer appearance-none border-2 border-white bg-transparent text-white checked:bg-[#F8CE35] hover:border-[#F8CE35] sm:h-6 sm:w-6"
                />
                <label
                  htmlFor="subscribe"
                  className="font-indie-flower font-[Playwrite_HU] text-base font-bold text-white sm:text-[1.5rem]"
                >
                  Yes, subscribe me to your newsletter. *
                </label>
              </div>

              {/* Submit button for the form */}
              <button
                type="submit"
                className="w-full rounded-full bg-[#F8CE35] px-4 py-3 font-[Playwrite_HU] text-base font-bold text-[#23022E] hover:bg-white sm:w-[22rem] sm:px-8 sm:py-4 sm:text-[1.5rem]"
              >
                Submit
              </button>
            </div>
          </form>
        </div>

        {/* Footer navigation and contact info */}
        <div className="container mx-auto flex flex-col gap-8 p-2 font-bold text-white sm:flex-row sm:justify-between sm:p-6">
          {/* Brand and main navigation links + Policy and legal links side by side on mobile, all in a row on desktop */}
          <div className="flex w-full flex-row justify-between gap-4 sm:w-auto sm:flex-1 sm:flex-row sm:gap-8">
            {/* Brand and main navigation links */}
            <div className="mb-4 flex flex-col items-start font-[poppins] sm:mb-0 sm:text-left">
              <Link
                to="/#home"
                className="mb-2 font-[playwrite_HU] text-2xl font-bold text-yellow-400"
              >
                Zigh
              </Link>
              <ul className="w-full">
                <li className="mt-2 mb-1">
                  <Link to="/shop#all" className="hover:underline">
                    Shop
                  </Link>
                </li>
                <li className="mb-1">
                  <Link to="/shop#subscription" className="hover:underline">
                    Subscription
                  </Link>
                </li>
                <li className="mb-1">
                  <Link to="/about#heading" className="hover:underline">
                    About
                  </Link>
                </li>
                <li className="mb-1">
                  <Link to="/about#find-us" className="hover:underline">
                    Find Us
                  </Link>
                </li>
                <li className="mb-1">
                  <Link to="/about#faq" className="hover:underline">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
            {/* Policy and legal links */}
            <div className="flex flex-col items-start font-[poppins] sm:mt-0 sm:mb-0 sm:text-left">
              <ul className="w-full">
                <li className="mb-1">
                  <Link to="/terms&condition" className="hover:underline">
                    Terms & Conditions
                  </Link>
                </li>
                <li className="mb-1">
                  <Link to="/privacy-policy" className="hover:underline">
                    Privacy Policy
                  </Link>
                </li>
                <li className="mb-1">
                  <Link to="/refund-policy" className="hover:underline">
                    Refund Policy
                  </Link>
                </li>
                <li className="mb-1">
                  <Link to="/shipping-policy" className="hover:underline">
                    Shipping Policy
                  </Link>
                </li>
                <li className="mb-1">
                  <Link
                    to="/accessibility-statement"
                    className="hover:underline"
                  >
                    Accessibility Statement
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          {/* Contact information */}
          <div className="mb-4 flex flex-col items-start font-[poppins] sm:mt-0 sm:mb-0 sm:flex-1 sm:text-left">
            <p className="mb-1">info@mysite.com</p>
            <p className="mb-1">+91-80-1234-5678</p>
            <p className="mb-1">42, MG Road, Near Brigade Road, </p>
            <p className="mb-1">Bengaluru, Karnataka 560001</p>
          </div>

          {/* Social media icons */}
          <div className="mt-2 mb-4 flex w-full justify-start space-x-4 sm:mt-12 sm:mr-12 sm:block sm:w-auto sm:space-x-4">
            <a
              href="#"
              className="text-[#23022e] transition-transform duration-200 hover:scale-110 hover:text-[#F8CE35]"
            >
              <i className="fab fa-youtube rounded-4xl bg-white p-3"></i>
            </a>
            <a
              href="#"
              className="text-[#23022e] transition-transform duration-200 hover:scale-110 hover:text-[#F8CE35]"
            >
              <i className="fab fa-instagram rounded-4xl bg-white p-3"></i>
            </a>
            <a
              href="#"
              className="text-[#23022e] transition-transform duration-200 hover:scale-110 hover:text-[#F8CE35]"
            >
              <i className="fab fa-snapchat rounded-4xl bg-white p-3"></i>
            </a>
          </div>
        </div>
        {/* Copyright notice */}
        <h1 className="mb-0 pl-2 text-left font-[poppins] text-xs font-bold text-white sm:pl-8 sm:text-base">
          © 2025 by Zigh.com
        </h1>
      </footer>
    </>
  );
};

export default Footer;
