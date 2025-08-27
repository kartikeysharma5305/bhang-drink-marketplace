import React, { useEffect } from "react";

const ShippingPolicy = () => {
  // Scroll to top when page mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="container mx-auto max-w-4xl bg-gray-100 px-4 py-12 font-sans">
      <h1 className="mb-8 text-center font-[Playwrite_HU] text-4xl font-bold text-[#23022E]">
        Shipping Policy
      </h1>

      <section className="mb-6">
        <h2 className="mb-4 font-[Playwrite_HU] text-2xl font-semibold text-[#23022E]">
          1. Introduction
        </h2>
        <p className="font-[poppins] text-[#4B2B5B]">
          Welcome to [Your Website Name] (the "Website"), operated by [Your Name
          or Entity] ("we," "us," or "our"). This Shipping Policy outlines the
          terms and conditions related to the shipping of products purchased
          through the Website. By placing an order, you agree to the terms of
          this Shipping Policy.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="mb-4 font-[Playwrite_HU] text-2xl font-semibold text-[#23022E]">
          2. Shipping Methods and Costs
        </h2>
        <p className="font-[poppins] text-[#4B2B5B]">
          We offer the following shipping methods:
        </p>
        <ul className="list-disc pl-6 text-[#4B2B5B]">
          <li>
            Standard Shipping: [Estimated delivery time, e.g., 5-7 business
            days] - [Cost, e.g., $5.99 or Free for orders over $50]
          </li>
          <li>
            Expedited Shipping: [Estimated delivery time, e.g., 2-3 business
            days] - [Cost, e.g., $12.99]
          </li>
          <li>
            International Shipping: [Estimated delivery time, e.g., 7-14
            business days] - [Cost, e.g., varies by destination]
          </li>
        </ul>
        <p className="mt-2 font-[poppins] text-[#4B2B5B]">
          Shipping costs are calculated at checkout based on the selected
          method, order weight, and destination. All costs will be clearly
          displayed before you complete your purchase.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="mb-4 font-[Playwrite_HU] text-2xl font-semibold text-[#23022E]">
          3. Processing Times
        </h2>
        <p className="font-[poppins] text-[#4B2B5B]">
          Orders are typically processed within [X business days, e.g., 1-2
          business days] from the date of purchase. Processing times may vary
          during peak periods, such as holidays or promotional events. Once your
          order is processed, you will receive a confirmation email with
          shipping details.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="mb-4 font-[Playwrite_HU] text-2xl font-semibold text-[#23022E]">
          4. Delivery Times
        </h2>
        <p className="font-[poppins] text-[#4B2B5B]">
          Estimated delivery times are provided at checkout and in your order
          confirmation email. These are estimates only and may vary due to
          factors such as:
        </p>
        <ul className="list-disc pl-6 text-[#4B2B5B]">
          <li>Carrier delays</li>
          <li>Customs processing for international orders</li>
          <li>Weather conditions or unforeseen circumstances</li>
        </ul>
        <p className="mt-2 font-[poppins] text-[#4B2B5B]">
          We are not responsible for delays outside our control but will work
          with you to resolve any issues.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="mb-4 font-[Playwrite_HU] text-2xl font-semibold text-[#23022E]">
          5. Shipping Destinations
        </h2>
        <p className="font-[poppins] text-[#4B2B5B]">
          We ship to [list destinations, e.g., the United States, Canada, and
          select international countries]. If your country is not listed at
          checkout, please contact us at [Your Email Address] to inquire about
          shipping availability.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="mb-4 font-[Playwrite_HU] text-2xl font-semibold text-[#23022E]">
          6. Tracking Your Order
        </h2>
        <p className="font-[poppins] text-[#4B2B5B]">
          Once your order has shipped, you will receive a tracking number via
          email. You can use this number to track your package through the
          carrier’s website. If you do not receive a tracking number within [X
          days, e.g., 5 business days] after your order is processed, please
          contact us at [Your Email Address].
        </p>
      </section>

      <section className="mb-6">
        <h2 className="mb-4 font-[Playwrite_HU] text-2xl font-semibold text-[#23022E]">
          7. Lost or Damaged Shipments
        </h2>
        <p className="font-[poppins] text-[#4B2B5B]">
          If your order is lost or damaged during shipping, please contact us at
          [Your Email Address] within [X days, e.g., 7 days] of the expected
          delivery date. We will work with the carrier to investigate and may
          offer a replacement or refund, subject to our{" "}
          <a href="/refund-policy" className="text-blue-600 hover:underline">
            Refund Policy
          </a>
          .
        </p>
      </section>

      <section className="mb-6">
        <h2 className="mb-4 font-[Playwrite_HU] text-2xl font-semibold text-[#23022E]">
          8. International Shipping and Customs
        </h2>
        <p className="font-[poppins] text-[#4B2B5B]">
          For international orders, you are responsible for any customs fees,
          duties, or taxes imposed by your country. These fees are not included
          in the shipping cost and are determined by your local customs
          authority. We recommend checking with your local customs office for
          details before placing an order.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="mb-4 font-[Playwrite_HU] text-2xl font-semibold text-[#23022E]">
          9. Address Accuracy
        </h2>
        <p className="font-[poppins] text-[#4B2B5B]">
          Please ensure that the shipping address provided at checkout is
          accurate and complete. We are not responsible for delays or
          non-delivery due to incorrect or incomplete addresses. If an order is
          returned to us due to an incorrect address, you may be responsible for
          additional shipping costs to resend the order.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="mb-4 font-[Playwrite_HU] text-2xl font-semibold text-[#23022E]">
          10. Changes to This Shipping Policy
        </h2>
        <p className="font-[poppins] text-[#4B2B5B]">
          We may update this Shipping Policy from time to time. Changes will be
          posted on this page with an updated effective date. Your continued use
          of the Website after changes are posted constitutes your acceptance of
          the updated Shipping Policy.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="mb-4 font-[Playwrite_HU] text-2xl font-semibold text-[#23022E]">
          11. Contact Information
        </h2>
        <p className="font-[poppins] text-[#4B2B5B]">
          If you have any questions or concerns about this Shipping Policy,
          please contact us at:
        </p>
        <ul className="list-disc pl-6 text-[#4B2B5B]">
          <li>Email: [Your Email Address]</li>
          <li>Address: [Your Physical Address, if applicable]</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="mb-4 font-[Playwrite_HU] text-2xl font-semibold text-[#23022E]">
          12. Governing Law
        </h2>
        <p className="font-[poppins] text-[#4B2B5B]">
          This Shipping Policy shall be governed by and construed in accordance
          with the laws of [Your Jurisdiction, e.g., "the State of California,
          United States"]. Any disputes arising under this Shipping Policy shall
          be subject to the exclusive jurisdiction of the courts located in
          [Your Jurisdiction].
        </p>
      </section>
    </div>
  );
};

export default ShippingPolicy;
