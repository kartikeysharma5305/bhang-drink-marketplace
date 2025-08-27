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
        className="bg-[#23022E] px-2 py-4 sm:px-5 sm:py-8"
      >
        {/* Newsletter subscription form */}
        <div className="p-2 sm:p-6">
          <h2 className="mb-3 text-center font-[poppins] text-xs font-bold text-white sm:mb-8 sm:text-base">
            Subscribe to Our Newsletter
          </h2>
          <form className="space-y-2">
            {/* Email input field */}
            <div>
              <label
                htmlFor="email"
                className="mb-1 block font-[poppins] text-xs text-white"
              >
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                className="w-full rounded-full border-2 border-white bg-transparent p-1 font-[Playwrite_HU] text-xs font-bold text-white placeholder-white focus:border-[#F8CE35]"
              />
            </div>
            {/* Checkbox and submit button */}
            <div className="mb-2 flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="subscribe"
                  name="subscribe"
                  className="mr-2 h-3 w-3 cursor-pointer appearance-none border-2 border-white bg-transparent text-white checked:bg-[#F8CE35] focus:border-[#F8CE35]"
                />
                <label
                  htmlFor="subscribe"
                  className="font-[Playwrite_HU] text-xs font-bold text-white"
                >
                  Yes, subscribe me to your newsletter. *
                </label>
              </div>
              <button
                type="submit"
                className="w-full rounded-full bg-[#F8CE35] px-2 py-1 font-[Playwrite_HU] text-xs font-bold text-[#23022E] hover:bg-white sm:w-[10rem] sm:px-4 sm:py-2 sm:text-sm"
              >
                Submit
              </button>
            </div>
          </form>
        </div>

        {/* Footer navigation and contact info */}
        <div className="container mx-auto flex flex-col gap-2 p-1 font-bold text-white sm:flex-row sm:justify-between sm:p-4">
          {/* Brand and main navigation links + Policy and legal links stacked on mobile */}
          <div className="flex flex-col gap-2 sm:flex-row sm:gap-6">
            {/* Brand and main navigation links */}
            <div className="mb-1 flex flex-col items-center font-[poppins] sm:mb-0 sm:items-start">
              <Link
                to="/#home"
                className="mb-1 font-[playwrite_HU] text-base font-bold text-yellow-400"
              >
                Zigh
              </Link>
              <ul className="w-full text-center sm:text-left">
                <li className="mt-1 mb-1">
                  <Link to="/shop#all" className="text-xs hover:underline">
                    Shop
                  </Link>
                </li>
                <li className="mb-1">
                  <Link
                    to="/shop#subscription"
                    className="text-xs hover:underline"
                  >
                    Subscription
                  </Link>
                </li>
                <li className="mb-1">
                  <Link to="/about#heading" className="text-xs hover:underline">
                    About
                  </Link>
                </li>
                <li className="mb-1">
                  <Link to="/about#find-us" className="text-xs hover:underline">
                    Find Us
                  </Link>
                </li>
                <li className="mb-1">
                  <Link to="/about#faq" className="text-xs hover:underline">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
            {/* Policy and legal links */}
            <div className="flex flex-col items-center font-[poppins] sm:items-start">
              <ul className="w-full text-center sm:text-left">
                <li className="mb-1">
                  <Link
                    to="/terms&condition"
                    className="text-xs hover:underline"
                  >
                    Terms & Conditions
                  </Link>
                </li>
                <li className="mb-1">
                  <Link
                    to="/privacy-policy"
                    className="text-xs hover:underline"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li className="mb-1">
                  <Link to="/refund-policy" className="text-xs hover:underline">
                    Refund Policy
                  </Link>
                </li>
                <li className="mb-1">
                  <Link
                    to="/shipping-policy"
                    className="text-xs hover:underline"
                  >
                    Shipping Policy
                  </Link>
                </li>
                <li className="mb-1">
                  <Link
                    to="/accessibility-statement"
                    className="text-xs hover:underline"
                  >
                    Accessibility Statement
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          {/* Contact information */}
          <div className="mb-1 flex flex-col items-center font-[poppins] sm:items-start">
            <p className="mb-1 text-xs">info@mysite.com</p>
            <p className="mb-1 text-xs">+91-80-1234-5678</p>
            <p className="mb-1 text-xs">42, MG Road, Near Brigade Road, </p>
            <p className="mb-1 text-xs">Bengaluru, Karnataka 560001</p>
          </div>
          {/* Social media icons */}
          <div className="mt-1 mb-1 flex w-full justify-center space-x-2 sm:mt-8 sm:mr-8 sm:block sm:w-auto sm:space-x-2">
            <a
              href="#"
              className="text-[#23022e] transition-transform duration-200 hover:scale-110 hover:text-[#F8CE35]"
            >
              <i className="fab fa-youtube rounded-4xl bg-white p-1"></i>
            </a>
            <a
              href="#"
              className="text-[#23022e] transition-transform duration-200 hover:scale-110 hover:text-[#F8CE35]"
            >
              <i className="fab fa-instagram rounded-4xl bg-white p-1"></i>
            </a>
            <a
              href="#"
              className="text-[#23022e] transition-transform duration-200 hover:scale-110 hover:text-[#F8CE35]"
            >
              <i className="fab fa-snapchat rounded-4xl bg-white p-1"></i>
            </a>
          </div>
        </div>
        {/* Copyright notice */}
        <h1 className="mb-0 pt-1 text-center font-[poppins] text-[10px] font-bold text-white sm:pl-8 sm:text-xs">
          © 2025 by Zigh.com
        </h1>
      </footer>
    </>
  );
};

export default Footer;
