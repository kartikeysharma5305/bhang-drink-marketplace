import { useDispatch, useSelector } from "react-redux";
import {
  decreaseQuantity,
  decrement,
  increaseQuantity,
} from "../store/cartSlice";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAuth } from "../contexts/AuthContext"; // ADD: Import useAuth

// Cart component displays the user's shopping cart and order summary
const Cart = ({ onOpenLogin }) => {
  // ADD: onOpenLogin prop
  // ADD: Get authentication state
  const { user, loading } = useAuth();

  // Get the total amount from the Redux store
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  // Get the cart items from the Redux store
  const items = useSelector((state) => state.cart.items);

  const dispatch = useDispatch();

  // this is to redirect abd move the uses to the element that he clicked for
  const location = useLocation();

  // Scroll to top when page mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const [showPromo, setShowPromo] = useState(false);
  const [showNote, setShowNote] = useState(false);

  // ADD: Show loading while checking authentication
  if (loading) {
    return (
      <div
        id="head"
        className="flex min-h-[60vh] flex-col items-center justify-center px-3 py-8"
      >
        <div className="font-[poppins] text-xl text-[#23022E]">Loading...</div>
      </div>
    );
  }

  // ADD: Show login prompt if user is not authenticated
  if (!user) {
    return (
      <div className="min-h-[60vh] px-3 py-8 sm:px-6">
        <div className="mx-auto max-w-4xl">
          {/* Cart Header */}
          <div className="mb-8 text-center">
            <h1
              id="head"
              className="mb-2 font-[Playwrite_HU] text-2xl font-bold text-[#23022E]"
            >
              Your Shopping Cart
            </h1>
            <p className="font-[poppins] text-gray-600">
              {items?.length || 0} {items?.length === 1 ? "item" : "items"} in
              your cart
            </p>
          </div>

          {/* Login Required Message */}
          <div className="rounded-xl border border-gray-200 bg-white p-8 text-center shadow-md">
            <div className="mb-6">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                <i className="fas fa-user-lock text-2xl text-blue-600"></i>
              </div>
              <h2 className="mb-2 font-[Playwrite_HU] text-xl font-bold text-[#23022E]">
                Please Log In to Continue
              </h2>
              <p className="mb-6 font-[poppins] text-gray-600">
                You need to be logged in to view and manage your cart items.
              </p>
            </div>

            {/* Login/Signup Button */}
            <div className="space-y-4">
              <button
                onClick={onOpenLogin}
                className="flex w-full cursor-pointer items-center justify-center rounded-lg bg-[#F8CE35] px-6 py-3 font-[Playwrite_HU] font-bold text-[#23022E] transition-colors duration-200 hover:bg-[#E6B82F]"
              >
                <i className="fas fa-sign-in-alt mr-2"></i>
                Log In / Sign Up
              </button>

              <p className="font-[poppins] text-sm text-gray-500">
                Don't have an account? You can sign up when you click the button
                above.
              </p>
            </div>

            {/* Cart Preview (if items exist) */}
            {items && items.length > 0 && (
              <div className="mt-8 rounded-lg bg-gray-50 p-4">
                <p className="mb-2 font-[poppins] text-sm text-gray-600">
                  Your cart will be saved after you log in:
                </p>
                <div className="font-[poppins] text-sm font-bold text-[#23022E]">
                  {items.length} {items.length === 1 ? "item" : "items"} •
                  Total: ₹{totalAmount?.toFixed(2) || "0.00"}
                </div>
              </div>
            )}

            {/* Continue Shopping Link */}
            <div className="mt-6">
              <Link
                to="/shop"
                className="font-[poppins] font-bold text-blue-600 hover:underline"
              >
                Continue Shopping →
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // EXISTING: Empty cart check for authenticated users
  if (!items || items.length === 0) {
    return (
      <div
        id="head"
        className="flex min-h-[60vh] flex-col items-center justify-center px-3 py-8 sm:flex-row"
      >
        <div className="text-center">
          <h2 className="mb-4 font-[poppins] text-lg font-bold text-[#23022E] sm:text-2xl">
            Welcome back, {user.name}!
          </h2>
          <p className="mb-4 font-[poppins] text-base text-gray-600">
            Your cart is empty
          </p>
          <Link
            to="/shop"
            className="font-[poppins] font-bold text-blue-600 hover:underline"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  // EXISTING: Normal cart content for authenticated users (unchanged)
  return (
    <>
      <section className="mt-2 flex flex-col gap-8 px-1 pb-8 sm:mt-6 sm:flex-row sm:justify-evenly sm:gap-6 sm:px-2">
        {/* Cart items and actions section */}
        <div className="flex w-full flex-col gap-4 p-1 sm:w-2/3 sm:p-6">
          {/* Header with cart title and continue browsing link */}
          <div className="mt-2 mb-4 flex w-full flex-row items-center justify-between gap-2">
            <div>
              <h1 className="font-[Playwrite_HU] text-lg font-bold text-[#23022E] sm:text-2xl">
                Welcome back, {user.name}!
              </h1>
              <p className="font-[poppins] text-sm text-gray-600">My cart</p>
            </div>
            <Link
              to="/shop#all"
              className="font-[poppins] font-bold whitespace-nowrap text-[#0869D9] hover:underline"
            >
              Continue Browsing &gt;
            </Link>
          </div>

          {/* Divider line */}
          <hr className="mb-4 border-t border-[#23022E]" />

          {/* List of cart items with automatic dividers */}
          {items.map((item, idx) => (
            <div key={item.id + "-wrapper"} className="w-full">
              <div className="relative mb-4 flex flex-col rounded-xl border border-gray-200 bg-white p-3 font-[poppins] shadow-sm sm:flex-row sm:items-center sm:gap-0 sm:border-0 sm:bg-transparent sm:p-0 sm:shadow-none">
                {/* Remove item button - top right corner on all layouts */}
                <button
                  onClick={() => dispatch(decrement(item.id))}
                  className="absolute top-2 right-2 z-10 cursor-pointer text-[#23022E] transition-colors hover:text-red-600"
                  aria-label="Remove item"
                >
                  <i className="fas fa-trash"></i>
                </button>
                <div className="flex w-full flex-row items-center gap-3">
                  {/* Product image */}
                  <img
                    src={item.image}
                    alt="Image of a can with a cartoonish design"
                    className="h-20 w-20 rounded-lg border border-gray-100 bg-gray-50 object-contain shadow-sm sm:mr-4 sm:h-28 sm:w-28"
                  />
                  {/* Product details and controls */}
                  <div className="flex flex-1 flex-col justify-between">
                    <div className="flex flex-col items-start sm:items-start">
                      <h2 className="mb-1 text-base font-bold text-[#23022E] sm:text-xl">
                        {item.title}
                      </h2>
                      <div className="mb-2 flex flex-row gap-2">
                        <span className="text-xs text-gray-500 line-through sm:text-base">
                          ₹{item.realPrice}
                        </span>
                        <span className="text-base font-bold text-[#23022E] sm:text-xl">
                          ₹{item.price}
                        </span>
                      </div>
                    </div>
                    <div className="mt-2 flex w-full flex-row items-center justify-between">
                      {/* Quantity controls */}
                      <div className="flex items-center rounded-lg border border-gray-300 bg-gray-50">
                        <button
                          onClick={() => dispatch(decreaseQuantity(item.id))}
                          className="cursor-pointer px-2 py-1 text-lg text-gray-700"
                        >
                          -
                        </button>
                        <span className="min-w-[2rem] px-3 py-1 text-center text-gray-700">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => dispatch(increaseQuantity(item.id))}
                          className="cursor-pointer px-2 py-1 text-lg text-gray-700"
                        >
                          +
                        </button>
                      </div>
                      {/* Item price */}
                      <div className="ml-2 text-base font-bold text-[#23022E] sm:ml-4 sm:text-xl">
                        ₹{item.price}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {idx < items.length - 1 && (
                <hr
                  key={item.id + "-divider"}
                  className="mb-2 border-t border-[#23022E]"
                />
              )}
            </div>
          ))}

          {/* Divider line */}
          <hr className="mb-4 border-t border-[#23022E]" />

          {/* Promo code input section */}
          <div className="mb-4">
            <div
              onClick={() => setShowPromo((prev) => !prev)}
              className="mb-2 inline-block cursor-pointer items-center font-[poppins] font-bold text-blue-600"
            >
              <i className="fas fa-tag mr-2"></i>
              <span>Enter a promo code</span>
            </div>
            {showPromo && (
              <div className="flex w-full max-w-xs font-[poppins] sm:w-[25rem]">
                <input
                  type="text"
                  placeholder="e.g., SAVE50"
                  className="flex-1 rounded-l-lg border-2 border-[#23022E] p-2 font-bold focus:outline-none"
                />
                <button className="rounded-r-lg bg-[#23022E] px-4 py-2 font-bold text-white hover:bg-[#F8CE35] hover:text-[#23022E]">
                  Apply
                </button>
              </div>
            )}
          </div>

          {/* Note input section */}
          <div>
            <div
              onClick={() => setShowNote((prev) => !prev)}
              className="mb-2 inline-block cursor-pointer items-center font-[poppins] font-bold text-blue-600"
            >
              <i className="fas fa-sticky-note mr-2"></i>
              <span>Add a note</span>
            </div>
            {showNote && (
              <textarea
                placeholder="e.g., Leave outside the front door"
                className="flex w-full max-w-xs rounded-lg border-2 border-[#23022E] p-2 font-[poppins] font-bold focus:ring-2 focus:outline-none sm:w-[25rem]"
              ></textarea>
            )}
            {/* Divider under note input for mobile only */}
            <hr className="my-4 border-t border-[#23022E] sm:hidden" />
          </div>
        </div>

        {/* Order summary section */}
        <div className="flex w-full max-w-full flex-col gap-2 rounded-xl border border-gray-200 bg-white p-4 shadow-md sm:max-w-sm sm:border-0 sm:bg-transparent sm:p-4 sm:shadow-none">
          <h2 className="mb-2 text-center font-[Playwrite_HU] text-lg font-bold text-[#23022E] sm:mb-4 sm:text-left sm:text-xl">
            Order summary
          </h2>
          <hr className="mb-2 border-t border-[#23022E] sm:mb-4" />
          {/* Subtotal row */}
          <div className="mb-1 flex justify-between font-[poppins] text-sm sm:mb-2 sm:text-base">
            <span className="font-bold text-[#23022E]">Subtotal</span>
            <span className="text-[#23022E]">₹{totalAmount}</span>
          </div>
          {/* Delivery row */}
          <div className="mb-1 flex justify-between font-[poppins] text-sm sm:mb-2 sm:text-base">
            <span className="font-bold text-[#23022E]">Delivery</span>
            <span className="text-[#23022E]">FREE</span>
          </div>
          {/* Location link */}
          <div className="mb-1 text-right sm:mb-2 sm:text-left">
            <a
              href="#"
              className="font-[poppins] text-xs font-bold text-blue-700 underline sm:text-base"
            >
              Haryana, India
            </a>
          </div>
          {/* Sales tax row */}
          <div className="mb-1 flex justify-between font-[poppins] text-sm sm:mb-2 sm:text-base">
            <span className="font-bold text-[#23022E]">
              Sales Tax <i className="fas fa-question-circle text-gray-500"></i>
            </span>
            <span className="text-[#23022E]">₹0.00</span>
          </div>
          <hr className="mb-2 border-t border-[#23022E] sm:mb-4" />
          {/* Total row */}
          <div className="mb-3 flex justify-between font-[poppins] text-base font-bold sm:mb-4 sm:text-xl">
            <span className="text-[#23022E]">Total</span>
            <span className="text-[#23022E]">₹{totalAmount}</span>
          </div>
          {/* Checkout button */}
          <button className="mb-3 w-full cursor-pointer rounded-lg bg-blue-600 py-2 font-[Playwrite_HU] text-base font-bold text-white transition-colors hover:bg-blue-700 sm:mb-4 sm:text-lg">
            Checkout
          </button>
          {/* Secure checkout info */}
          <div className="flex items-center justify-center text-xs text-gray-700 sm:text-base">
            <i className="fas fa-lock mr-2"></i>
            <span className="font-[poppins] font-bold">Secure Checkout</span>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
