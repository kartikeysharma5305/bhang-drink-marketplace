import React, { useEffect, useRef } from "react";

//  Currently, it shows a single message, but can be extended to multiple items.

const InfiniteCarousel = () => {
  const items = [
    {
      content: "Free Shipping on All Orders Above ₹799",
    },
  ];

  // Duplicate items multiple times for seamless infinite scrolling effect
  const carouselItems = [
    ...items,
    ...items,
    ...items,
    ...items,
    ...items,
    ...items,
  ].map((item, index) => ({
    ...item,
    id: index + 1, // Assign a unique id to each duplicated item
  }));

  // Ref to access the carousel DOM element
  const carouselRef = useRef(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    // Reset scroll position to the start on component mount
    carousel.scrollLeft = 0;

    // Optional: Pause animation when mouse hovers over the carousel
    const handleMouseEnter = () =>
      (carousel.style.animationPlayState = "paused");
    const handleMouseLeave = () =>
      (carousel.style.animationPlayState = "running");

    carousel.addEventListener("mouseenter", handleMouseEnter);
    carousel.addEventListener("mouseleave", handleMouseLeave);

    // Cleanup event listeners on component unmount
    return () => {
      carousel.removeEventListener("mouseenter", handleMouseEnter);
      carousel.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    // Outer container to hide overflow and keep carousel within bounds
    <div className="w-full overflow-hidden">
      <div
        ref={carouselRef}
        className="animate-infinite-slide flex overflow-hidden whitespace-nowrap"
        style={{
          animationDuration: "10s", // Duration of the infinite scroll animation
          width: "max-content",
        }}
      >
        {/* Render each carousel item */}
        {carouselItems.map((item) => (
          <div
            key={item.id}
            className="flex flex-shrink-0 items-center justify-center gap-4 bg-[#23022E] px-6 py-2 font-[poppins] text-base font-medium text-white md:text-lg"
            style={{ minWidth: "220px", maxWidth: "100vw" }}
          >
            {/* Star icon */}
            <span className="inline-block">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="gold"
                viewBox="0 0 24 24"
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.27 5.82 22 7 14.14l-5-4.87 6.91-1.01z" />
              </svg>
            </span>

            {/* Carousel item content */}
            <span className="xs:text-sm block truncate text-xs sm:text-base md:text-lg">
              {item.content}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfiniteCarousel;
