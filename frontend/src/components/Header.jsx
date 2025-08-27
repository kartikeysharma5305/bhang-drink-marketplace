import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";

const Header = ({ onOpenLogin }) => {
  // Add onOpenLogin prop
  // Get the total quantity of items in the cart from Redux store
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const [menuOpen, setMenuOpen] = useState(false);

  // Get authentication state and functions
  const { user, logout, loading } = useAuth();

  const handleLogout = () => {
    logout();
    setMenuOpen(false); // Close mobile menu after logout
  };

  const handleLoginClick = () => {
    onOpenLogin(); // Open the login modal
    setMenuOpen(false); // Close mobile menu if open
  };

  return (
    <>
      {/* Sticky header container */}
      <div className="sticky top-0 z-50 flex justify-center">
        <div className="mx-5 mt-5 flex w-[90%] items-center justify-between rounded-full border-2 border-[#FFD700] bg-white px-5 py-4.5">
          {/* Logo linking to homepage */}
          <Link
            to={"/#home"}
            className="text-1rem font-['Playwrite_HU'] font-bold text-[#23022E]"
          >
            Zigh
          </Link>

          {/* Navigation links section (hidden on mobile) */}
          <div className="ml-26 hidden gap-5 md:flex">
            <Link
              to="/shop#all"
              className="text-1rem font-['Playwrite_HU'] font-bold text-[#23022E] no-underline hover:text-sky-700"
            >
              Shop
            </Link>
            <Link
              to="/shop#pack"
              className="text-1rem font-['Playwrite_HU'] font-bold text-[#23022E] no-underline hover:text-sky-700"
            >
              Packs
            </Link>
            <Link
              to="/about#heading"
              className="text-1rem font-['Playwrite_HU'] font-bold text-[#23022E] no-underline hover:text-sky-700"
            >
              About
            </Link>
            <Link
              to="/about#find-us"
              className="text-1rem font-['Playwrite_HU'] font-bold text-[#23022E] no-underline hover:text-sky-700"
            >
              Find Us
            </Link>
          </div>

          {/* Login/User section and Cart */}
          <div className="flex items-center gap-2.5">
            {/* Authentication section */}
            {loading ? (
              <span className="font-['Playwrite_HU'] text-sm text-[#23022E]">
                ...
              </span>
            ) : user ? (
              <div className="relative flex items-center gap-2">
                {/* Greeting */}
                <span className="font-['Playwrite_HU'] text-base font-bold text-[#23022E]">
                  Hi, {user.name || user.email?.split("@")[0] || "User"}!
                </span>
                {/* Dropdown menu for user actions */}
                <div className="group relative">
                  <button className="font-poppins ml-2 flex items-center gap-1 rounded bg-[#FFF8DC] px-2 py-1 text-sm font-bold text-[#23022E] hover:bg-[#FFE066] focus:outline-none">
                    <i className="fas fa-chevron-down"></i>
                  </button>
                  <div className="absolute top-full right-0 z-10 hidden min-w-[120px] rounded bg-white py-2 shadow-lg group-hover:block">
                    <button
                      onClick={handleLogout}
                      className="font-poppins w-full px-4 py-2 text-left font-bold text-red-600 hover:bg-[#FFD700]"
                    >
                      Logout
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              /* Login button - opens modal instead of navigating */
              <button
                onClick={handleLoginClick}
                className="cursor-pointer font-['Playwrite_HU'] text-lg font-bold text-[#23022E] no-underline transition-colors hover:text-sky-700"
              >
                Log In
              </button>
            )}

            {/* Cart icon with total quantity, links to cart page */}
            <Link to={"/cart#head"}>
              <div className="flex items-center justify-center rounded-full bg-[#1E90FF] p-2.5 font-bold text-white transition-colors hover:bg-[#1C7ED6]">
                <i className="fas fa-shopping-cart pr-2"></i>
                {totalQuantity}
              </div>
            </Link>

            {/* Hamburger menu for mobile */}
            <button
              className="ml-auto flex flex-col items-center justify-center rounded-2xl bg-[#23022E] p-2.5 md:hidden"
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label="Open menu"
            >
              <span className="mb-1 block h-1 w-8 rounded bg-white"></span>
              <span className="mb-1 block h-1 w-8 rounded bg-white"></span>
              <span className="block h-1 w-8 rounded bg-white"></span>
            </button>
          </div>
        </div>

        {/* Mobile menu overlay */}
        <div
          className={`bg-opacity-40 fixed inset-0 z-50 flex flex-col items-end opacity-100 backdrop-blur-md transition-opacity duration-300 ease-in-out md:hidden ${
            menuOpen ? "pointer-events-auto" : "pointer-events-none"
          }`}
          style={{ visibility: menuOpen ? "visible" : "hidden" }}
        >
          <div
            className={`flex h-full w-2/3 flex-col bg-white p-8 font-bold shadow-lg transition-transform duration-300 ease-in-out ${
              menuOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <button
              className="mb-8 self-end text-3xl text-[#23022E]"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
            >
              &times;
            </button>

            {/* User info in mobile menu */}
            {user && (
              <div className="mb-6 border-b border-gray-200 pb-4">
                <p className="mb-2 font-['Playwrite_HU'] text-lg font-bold text-[#23022E]">
                  Welcome, {user.name || user.email?.split("@")[0] || "User"}!
                </p>
              </div>
            )}

            {/* Navigation links in mobile menu */}
            <Link
              to="/shop#all"
              className="mb-4 font-['Playwrite_HU'] text-xl font-bold text-[#23022E] no-underline hover:text-sky-700"
              onClick={() => setMenuOpen(false)}
            >
              Shop
            </Link>
            <Link
              to="/shop#pack"
              className="mb-4 font-['Playwrite_HU'] text-xl font-bold text-[#23022E] no-underline hover:text-sky-700"
              onClick={() => setMenuOpen(false)}
            >
              Packs
            </Link>
            <Link
              to="/about#heading"
              className="mb-4 font-['Playwrite_HU'] text-xl font-bold text-[#23022E] no-underline hover:text-sky-700"
              onClick={() => setMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to="/about#find-us"
              className="mb-4 font-['Playwrite_HU'] text-xl font-bold text-[#23022E] no-underline hover:text-sky-700"
              onClick={() => setMenuOpen(false)}
            >
              Find Us
            </Link>

            {/* Auth actions in mobile menu */}
            <div className="mt-auto border-t border-gray-200 pt-4">
              {user ? (
                <button
                  onClick={handleLogout}
                  className="font-['Playwrite_HU'] text-xl font-bold text-red-600 transition-colors hover:text-red-800"
                >
                  Logout
                </button>
              ) : (
                <button
                  onClick={handleLoginClick}
                  className="font-['Playwrite_HU'] text-xl font-bold text-[#23022E] no-underline transition-colors hover:text-sky-700"
                >
                  Log In
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
