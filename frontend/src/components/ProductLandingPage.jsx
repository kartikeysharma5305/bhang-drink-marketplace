// src/components/ProductLandingPage.js
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  decreaseQuantity,
  increaseQuantity,
  increment,
} from "../store/cartSlice";
import { useEffect } from "react";

// ProductLandingPage component displays detailed info for a single product
const ProductLandingPage = () => {
  // Get product ID from URL parameters
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Find the product in the Redux store by ID
  const product = useSelector((state) =>
    state.product.products.find((p) => p.id === parseInt(id)),
  );

  // If product is not found, show a message
  if (!product) {
    return <div>Product not found</div>;
  }

  // Scroll to top when page mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  // Calculate discounted price if discount exists
  const discountedPrice = product.discount
    ? product.price * (1 - product.discount / 100)
    : product.price;

  // Get cart items from Redux store
  const items = useSelector((state) => state.cart.items);

  // Get all products for navigation
  const products = useSelector((state) => state.product.products);
  // Find the index of the current product
  const currentIndex = products.findIndex((p) => p.id === parseInt(id));
  const prevProduct = currentIndex > 0 ? products[currentIndex - 1] : null;
  const nextProduct =
    currentIndex < products.length - 1 ? products[currentIndex + 1] : null;

  return (
    <>
      {/* // Header section with product title and navigation buttons */}
      <div className="flex flex-col gap-2 px-2 py-3 font-[poppins] font-semibold text-[#23022E] sm:flex-row sm:justify-between sm:px-8 sm:py-8">
        <h1 className="text-base sm:text-2xl">{product.title}</h1>
        <div className="flex items-center justify-between text-sm sm:justify-normal sm:text-base">
          <button
            disabled={!prevProduct}
            onClick={() => {
              if (prevProduct) navigate(`/product/${prevProduct.id}`);
            }}
            className={`mr-2 flex items-center gap-1 rounded-full border border-gray-200 bg-white px-2 py-1 shadow-sm ${!prevProduct ? "cursor-not-allowed opacity-50" : "cursor-pointer hover:bg-gray-100"}`}
          >
            <i className="fa-solid fa-chevron-left"></i> Prev
          </button>
          <span className="hidden sm:inline">|</span>
          <button
            disabled={!nextProduct}
            onClick={() => {
              if (nextProduct) navigate(`/product/${nextProduct.id}`);
            }}
            className={`ml-2 flex items-center gap-1 rounded-full border border-gray-200 bg-white px-2 py-1 shadow-sm ${!nextProduct ? "cursor-not-allowed opacity-50" : "cursor-pointer hover:bg-gray-100"}`}
          >
            Next <i className="fa-solid fa-chevron-right"></i>
          </button>
        </div>
      </div>
      {/* // Main content section */}
      <section className="flex flex-col gap-4 p-2 text-[#23022E] sm:flex-row sm:gap-8 sm:p-8">
        {/* Product image */}
        <div className="flex justify-center">
          <div className="flex h-48 w-48 items-center justify-center rounded-2xl bg-[#FFFFFF] p-2 shadow-sm hover:bg-red-600 sm:h-[32rem] sm:w-[32rem] sm:p-4">
            <img
              className="h-auto w-40 rounded-2xl sm:w-[30rem]"
              src={product.image}
              alt={product.title}
            />
          </div>
        </div>

        {/* Product details */}
        <div className="flex flex-col justify-center gap-4 sm:gap-8 sm:pl-4">
          <h1 className="text-center font-[Playwrite_HU] text-lg font-bold sm:text-left sm:text-4xl">
            {product.title}
          </h1>

          {/* Price and discount display */}
          <div className="flex flex-row items-baseline justify-center gap-2 sm:justify-start sm:gap-3">
            {product.discount > 0 && (
              <p className="text-base line-through sm:text-[1.2rem]">
                ₹{product.price.toFixed(2)}
              </p>
            )}
            <p className="font-[Playwrite_HU] text-lg font-bold sm:text-2xl">
              ₹{discountedPrice.toFixed(2)}
            </p>
          </div>

          {/* Product description */}
          <p className="px-1 text-center font-[poppins] text-sm sm:text-left sm:text-base">
            {product.description}
          </p>

          {/* Quantity controls for this product only */}
          <div className="flex flex-col items-center sm:items-start">
            <p className="mb-1 text-base font-semibold text-[#23022E] sm:text-lg">
              Quantity
            </p>
            {items
              .filter((item) => item.id === product.id)
              .map((item) => (
                <div
                  key={item.id}
                  className="mt-1 flex items-center space-x-2 rounded-full bg-gray-50 px-2 py-1 sm:space-x-4 sm:px-4"
                >
                  <button
                    onClick={() => dispatch(decreaseQuantity(item.id))}
                    className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border border-gray-300 bg-white text-lg focus:outline-none"
                  >
                    <i className="fas fa-minus text-[#23022E]"></i>
                  </button>
                  <span className="text-base font-semibold text-[#23022E] sm:text-lg">
                    {item.quantity}
                  </span>
                  <button
                    onClick={() => dispatch(increaseQuantity(item.id))}
                    className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border border-gray-300 bg-white text-lg text-[#23022E] focus:outline-none"
                  >
                    <i className="fas fa-plus text-[#23022E]"></i>
                  </button>
                </div>
              ))}
          </div>

          {/* Add to Cart and Buy Now buttons */}
          <div className="flex flex-col items-center gap-2 sm:items-start sm:gap-4">
            <button
              onClick={() =>
                dispatch(
                  increment({
                    id: product.id,
                    title: product.title,
                    price: discountedPrice,
                    image: product.image,
                    realPrice: product.price,
                  }),
                )
              }
              className="w-full max-w-xs cursor-pointer rounded-full bg-[#23022E] p-3 font-[Playwrite_HU] font-bold text-white sm:w-[25rem] sm:p-4"
            >
              Add To Cart
            </button>
            <button className="w-full max-w-xs cursor-pointer rounded-full bg-[#0869D9] p-3 font-[Playwrite_HU] font-bold text-white sm:w-[25rem] sm:p-4">
              Buy Now
            </button>
          </div>

          {/* Social media icons */}
          <div className="mt-2 flex flex-row justify-center gap-4 sm:justify-start sm:gap-6">
            <i className="fab fa-whatsapp text-2xl sm:text-4xl"></i>
            <i className="fab fa-pinterest text-2xl sm:text-4xl"></i>
            <i className="fab fa-x-twitter text-2xl sm:text-4xl"></i>
            <i className="fab fa-instagram text-2xl sm:text-4xl"></i>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductLandingPage;
