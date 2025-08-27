import { useEffect, useRef } from "react";
import heroCan from "../assets/images/interactive-soda-can.avif";
import hempLeaf from "../assets/images/hemp-leaf.avif";
import heroCanShadow from "../assets/images/soda-can-shadow.svg";

// InteractiveSodaCan component displays a soda can with interactive parallax effects
const InteractiveSodaCan = () => {
  // Refs for DOM elements to apply transformations
  const canRef = useRef(null);
  const bgRef = useRef(null);
  const hempLeafRef = useRef(null);

  useEffect(() => {
    let canTarget = { x: 0, y: 0 };
    let canCurrent = { x: 0, y: 0 };
    let bgCurrent = { x: 0, y: 0 };
    let bgTarget = { x: 0, y: 0 };
    let hempTarget = { x: 0, y: 0 };
    let hempCurrent = { x: 0, y: 0 };
    let animating = false;

    // Helper for linear interpolation
    const lerp = (start, end, amt) => start + (end - start) * amt;

    const animate = () => {
      // Smoothly move can to target
      canCurrent.x = lerp(canCurrent.x, canTarget.x, 0.18);
      canCurrent.y = lerp(canCurrent.y, canTarget.y, 0.18);
      // Background follows can with a more noticeable delay
      bgCurrent.x = lerp(bgCurrent.x, canCurrent.x * 0.93, 0.05); // Lower lerp for more delay
      bgCurrent.y = lerp(bgCurrent.y, canCurrent.y * 0.93, 0.05);
      // Hemp leaf follows mouse directly (no lag)
      hempCurrent.x = lerp(hempCurrent.x, hempTarget.x, 0.15);
      hempCurrent.y = lerp(hempCurrent.y, hempTarget.y, 0.15);

      if (canRef.current) {
        canRef.current.style.transform = `translate(${canCurrent.x}px, ${canCurrent.y}px)`;
      }
      if (bgRef.current) {
        bgRef.current.style.transform = `translate(${bgCurrent.x}px, ${bgCurrent.y}px)`;
      }
      if (hempLeafRef.current) {
        hempLeafRef.current.style.transform = `translate(${hempCurrent.x}px, ${hempCurrent.y}px)`;
      }
      if (animating) requestAnimationFrame(animate);
    };

    // Handles mouse movement to create a parallax effect
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      // Calculate the center of the viewport
      const centerX = innerWidth / 2;
      const centerY = innerHeight / 2;

      // Calculate normalized movement values (-1 to 1)
      const moveX = (clientX - centerX) / centerX;
      const moveY = (clientY - centerY) / centerY;
      // Set targets for smooth animation
      // Make the can move more with mouse movement
      canTarget.x = moveX * 90; // Increased from 30 to 60
      canTarget.y = moveY * 90;
      // bgTarget is no longer used directly, bg follows can
      hempTarget.x = moveX * 10;
      hempTarget.y = moveY * 10;
      if (!animating) {
        animating = true;
        requestAnimationFrame(animate);
      }
    };

    // Attach mousemove event listener
    window.addEventListener("mousemove", handleMouseMove);
    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      animating = false;
    };
  }, []);

  return (
    <>
      <div
        className="relative z-0 flex h-[14rem] items-center justify-center sm:h-screen"
        style={{ transform: "rotate(-10deg)" }} // Slight rotation for visual interest
      >
        {/* Main soda can image */}
        <img
          ref={canRef}
          src={heroCan}
          alt="Soda Can"
          className="xs:w-[8rem] relative z-10 w-[10rem] transition-transform duration-100 sm:w-[13rem] md:w-[15rem]"
        />
        {/* Soda can shadow image */}
        <img
          ref={bgRef}
          src={heroCanShadow}
          alt="Soda Can Shadow"
          className="xs:w-[9rem] pointer-events-none absolute left-1/2 z-0 w-[11rem] -translate-x-1/2 sm:w-[14rem] md:w-[18rem]"
        />
      </div>

      {/* Decorative hemp leaf image, positioned absolutely, hidden on mobile */}
      <img
        ref={hempLeafRef}
        className="xs:w-[8rem] absolute right-0 z-0 mr-2 mb-16 hidden w-[6rem] sm:mr-[6rem] sm:mb-[10rem] sm:block sm:w-[14rem] md:mr-[10rem] md:mb-[15rem] md:w-[20rem]"
        src={hempLeaf}
        alt=""
      />
    </>
  );
};

export default InteractiveSodaCan;
