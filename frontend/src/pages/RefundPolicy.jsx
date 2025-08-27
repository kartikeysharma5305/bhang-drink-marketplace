import React, { useEffect } from "react";

const RefundPolicy = () => {
  // Scroll to top when page mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="container mx-auto max-w-4xl bg-gray-100 px-4 py-12 font-sans">
      <h1 className="mb-8 text-center font-[Playwrite_HU] text-4xl font-bold text-[#23022E]">
        Refund Policy
      </h1>

      <section className="mb-6">
        <h2 className="mb-4 font-[Playwrite_HU] text-2xl font-semibold text-[#23022E]">
          1. Introduction
        </h2>
        <p className="font-[poppins] text-[#4B2B5B]">
          Thank you for choosing [Your Website Name] (the "Website"), operated
          by [Your Name or Entity] ("we," "us," or "our"). This Refund Policy
          outlines the terms under which refunds may be issued for purchases or
          services provided through the Website. By making a purchase or using
          our services, you agree to the terms of this Refund Policy.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="mb-4 font-[Playwrite_HU] text-2xl font-semibold text-[#23022E]">
          2. Eligibility for Refunds
        </h2>
        <p className="font-[poppins] text-[#4B2B5B]">
          We offer refunds under the following conditions:
        </p>
        <ul className="list-disc pl-6 text-[#4B2B5B]">
          <li>
            Requests must be made within [X days, e.g., 7 days] from the date of
            purchase or service delivery.
          </li>
          <li>
            The product or service must be unused, in its original condition, or
            defective as determined by us.
          </li>
          <li>
            Refunds are only available for [specific products/services, e.g.,
            digital subscriptions, premium features] purchased directly through
            the Website.
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="mb-4 font-[Playwrite_HU] text-2xl font-semibold text-[#23022E]">
          3. Non-Refundable Items
        </h2>
        <p className="font-[poppins] text-[#4B2B5B]">
          The following are not eligible for refunds:
        </p>
        <ul className="list-disc pl-6 text-[#4B2B5B]">
          <li>Products or services used or partially used.</li>
          <li>
            Digital products or services accessed or downloaded (e.g., e-books,
            software, or streaming content).
          </li>
          <li>Customized or personalized products or services.</li>
          <li>
            Any items or services explicitly marked as non-refunded at the time
            of purchase.
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="mb-4 font-[Playwrite_HU] text-2xl font-semibold text-[#23022E]">
          4. Refund Process
        </h2>
        <p className="font-[poppins] text-[#4B2B5B]">
          To request a refund, please follow these steps:
        </p>
        <ol className="list-decimal pl-6 text-[#4B2B5B]">
          <li>
            Contact us at [Your Email Address] with your order details,
            including order number and reason for the refund request.
          </li>
          <li>
            We will review your request within [X business days, e.g., 5
            business days] and notify you of the approval or denial.
          </li>
          <li>
            If approved, the refund will be processed to your original payment
            method within [X days, e.g., 10 days].
          </li>
        </ol>
        <p className="mt-2 font-[poppins] text-[#4B2B5B]">
          Please note that processing times may vary depending on your payment
          provider.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="mb-4 font-[Playwrite_HU] text-2xl font-semibold text-[#23022E]">
          5. Cancellations
        </h2>
        <p className="font-[poppins] text-[#4B2B5B]">
          If you wish to cancel a subscription or recurring service, you must
          notify us at least [X days, e.g., 3 days] before the next billing
          cycle. Cancellations can be requested by contacting us at [Your Email
          Address]. Refunds for cancellations will be subject to the eligibility
          criteria outlined in Section 2.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="mb-4 font-[Playwrite_HU] text-2xl font-semibold text-[#23022E]">
          6. Defective or Incorrect Products/Services
        </h2>
        <p className="font-[poppins] text-[#4B2B5B]">
          If you receive a defective product or a service that does not match
          the description provided on the Website, please contact us within [X
          days, e.g., 7 days] of receipt. We may offer a replacement, repair, or
          refund at our discretion, provided you provide evidence of the defect
          or discrepancy.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="mb-4 font-[Playwrite_HU] text-2xl font-semibold text-[#23022E]">
          7. Chargebacks
        </h2>
        <p className="font-[poppins] text-[#4B2B5B]">
          If you initiate a chargeback with your payment provider without first
          contacting us to resolve the issue, we reserve the right to suspend or
          terminate your access to the Website and its services. Please contact
          us directly at [Your Email Address] to address any concerns before
          initiating a chargeback.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="mb-4 font-[Playwrite_HU] text-2xl font-semibold text-[#23022E]">
          8. Changes to This Refund Policy
        </h2>
        <p className="font-[poppins] text-[#4B2B5B]">
          We may update this Refund Policy from time to time. Changes will be
          posted on this page with an updated effective date. Your continued use
          of the Website after changes are posted constitutes your acceptance of
          the updated Refund Policy.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="mb-4 font-[Playwrite_HU] text-2xl font-semibold text-[#23022E]">
          9. Contact Information
        </h2>
        <p className="font-[poppins] text-[#4B2B5B]">
          If you have any questions or concerns about this Refund Policy, please
          contact us at:
        </p>
        <ul className="list-disc pl-6 text-[#4B2B5B]">
          <li>Email: [Your Email Address]</li>
          <li>Address: [Your Physical Address, if applicable]</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="mb-4 font-[Playwrite_HU] text-2xl font-semibold text-[#23022E]">
          10. Governing Law
        </h2>
        <p className="font-[poppins] text-[#4B2B5B]">
          This Refund Policy shall be governed by and construed in accordance
          with the laws of [Your Jurisdiction, e.g., "the State of California,
          United States"]. Any disputes arising under this Refund Policy shall
          be subject to the exclusive jurisdiction of the courts located in
          [Your Jurisdiction].
        </p>
      </section>
    </div>
  );
};

export default RefundPolicy;
