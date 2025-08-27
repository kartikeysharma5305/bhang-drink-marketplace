// src/components/HomeSection3.js
import sectionDivider from "../assets/images/home-section-3-divider.avif";
import ReusableButton from "./ReusableButton";
import footerDivider from "../assets/images/footer-divider.avif";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { increment } from "../store/cartSlice";

// HomeSection3 component displays a section with category buttons and featured products
const HomeSection3 = () => {
  // Get the list of products from Redux store
  const products = useSelector((state) => state.product.products);

  const dispatch = useDispatch();

  return (
    <section className="bg-[#F0F0F0]">
      {/* Section divider image at the top */}
      <img src={sectionDivider} alt="Section divider" />

      {/* Section title */}
      <h1 className="mt-5 mb-12 text-center font-[poppins] font-bold text-[#23022E]">
        Shop by Category
      </h1>

      {/* Category buttons */}
      <div className="mb-8 flex flex-wrap justify-center gap-4 px-2 sm:gap-8">
        <Link to={"/shop#exotic"} className="max-w-[10rem] flex-1 sm:flex-none">
          <ReusableButton
            text="Exotic"
            styles="text-white bg-[#D71919] hover:bg-[#F0F0F0] hover:text-[#D71919] hover:shadow-[#D71919] hover:border-[#D71919]"
            iconColor="white"
            buttonSize={2}
          />
        </Link>
        <Link to={"/shop#sour"} className="max-w-[10rem] flex-1 sm:flex-none">
          <ReusableButton
            text="Sour"
            styles="text-white bg-[#0869D9] hover:bg-[#F0F0F0] hover:text-[#0869D9] hover:shadow-[#0869D9] hover:border-[#0869D9]"
            iconColor="white"
            buttonSize={2}
          />
        </Link>
        <Link to={"/shop#sweet"} className="max-w-[10rem] flex-1 sm:flex-none">
          <ReusableButton
            text="Sweet"
            styles="text-white bg-[#9A4C95] hover:bg-[#F0F0F0] hover:text-[#9A4C95] hover:shadow-[#9A4C95] hover:border-[#9A4C95]"
            iconColor="white"
            buttonSize={2}
          />
        </Link>
      </div>

      {/* Promotional text */}
      <div className="p-2 sm:p-6">
        <h1 className="mb-4 text-center font-[poppins] text-lg font-bold text-[#23022E] sm:mb-8 sm:text-2xl">
          Choose Your High
        </h1>
        <p className="text-center font-[Playwrite_HU] text-xl font-bold text-[#23022E] sm:text-4xl">
          Shop @Zigh To Feel The New Heights
        </p>
      </div>

      {/* Featured products grid */}
      <div className="grid grid-cols-2 gap-4 px-2 sm:flex-none sm:grid-cols-4 sm:gap-6">
        {/* Display first 4 products */}
        {products.slice(0, 4).map((product) => {
          // Calculate discounted price if applicable
          const discountedPrice = product.discount
            ? product.price * (1 - product.discount / 100)
            : product.price;

          return (
            <div
              key={product.id}
              className="flex flex-col items-center justify-center p-3 sm:p-6"
            >
              {/* Product card with link to product detail page */}
              <Link to={`/product/${product.id}`}>
                <div className="h-[13rem] w-[9.5rem] rounded-2xl bg-[#FFFFFF] p-2 hover:bg-red-600 sm:h-[20rem] sm:w-[16rem] sm:p-4">
                  {/* Show "Sale" badge if product has discount */}
                  <p className="inline-block rounded-full bg-[#0869D9] p-2 font-[Playwrite_HU] text-white">
                    {product.discount > 0 ? "Sale" : ""}
                  </p>
                  {/* Product image */}
                  <div className="flex justify-center">
                    <img
                      className="h-auto w-[6.5rem] rounded-2xl sm:w-[12rem]"
                      src={product.image}
                      alt={product.title}
                    />
                  </div>
                </div>

                {/* Product title */}
                <h1 className="mt-2 text-center font-[poppins] text-xs font-bold text-[#23022E] hover:text-blue-500 sm:mt-4 sm:text-base">
                  {product.title}
                </h1>

                {/* Product price and discount */}
                <div className="space-x-2 text-center">
                  {product.discount > 0 && (
                    <span className="text-xs text-gray-500 line-through sm:text-base">
                      ₹{product.price.toFixed(2)}
                    </span>
                  )}
                  <span className="text-sm font-bold text-blue-600 sm:text-lg">
                    ₹{discountedPrice.toFixed(2)}
                  </span>
                </div>
              </Link>

              {/* Add to Cart button */}
              <button
                className="xs:w-[8.5rem] mt-2 w-[7.5rem] cursor-pointer rounded-full bg-[#23022E] px-2 py-2 font-[Playwrite_HU] text-xs font-bold text-white hover:bg-[#0869D9] sm:w-auto sm:px-4 sm:text-base"
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
              >
                Add to Cart
              </button>
            </div>
          );
        })}
      </div>

      {/* Footer divider image */}
      <img
        className="mt-10 mb-[-0.1rem] w-full"
        src={footerDivider}
        alt="Footer divider"
      />
    </section>
  );
};

export default HomeSection3;
