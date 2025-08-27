import React, { useEffect } from "react";

const AccessibilityStatement = () => {
  // Scroll to top when page mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="container mx-auto max-w-4xl bg-gray-100 px-4 py-12 font-sans">
      <h1 className="mb-8 text-center font-[Playwrite_HU] text-4xl font-bold text-[#23022E]">
        Accessibility Statement
      </h1>

      <section className="mb-6">
        <h2 className="mb-4 font-[Playwrite_HU] text-2xl font-semibold text-[#23022E]">
          1. Our Commitment to Accessibility
        </h2>
        <p className="font-[poppins] text-[#4B2B5B]">
          [Your Website Name], operated by [Your Name or Entity] ("we," "us," or
          "our"), is committed to ensuring that our Website is accessible to all
          users, including those with disabilities. We strive to provide an
          inclusive and user-friendly experience for everyone, regardless of
          visual, auditory, motor, or cognitive impairments.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="mb-4 font-[Playwrite_HU] text-2xl font-semibold text-[#23022E]">
          2. Accessibility Standards
        </h2>
        <p className="font-[poppins] text-[#4B2B5B]">
          We aim to comply with the Web Content Accessibility Guidelines (WCAG)
          2.1 at Level AA, which provide standards for making web content more
          accessible. Our efforts include, but are not limited to:
        </p>
        <ul className="list-disc pl-6 text-[#4B2B5B]">
          <li>
            Ensuring text is readable and has sufficient contrast against
            backgrounds.
          </li>
          <li>
            Providing text alternatives for non-text content, such as images.
          </li>
          <li>
            Supporting keyboard navigation for users who cannot use a mouse.
          </li>
          <li>
            Ensuring compatibility with assistive technologies, such as screen
            readers.
          </li>
          <li>Using clear and consistent navigation structures.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="mb-4 font-[Playwrite_HU] text-2xl font-semibold text-[#23022E]">
          3. Accessibility Features
        </h2>
        <p className="font-[poppins] text-[#4B2B5B]">
          To enhance accessibility, we have implemented the following features
          on the Website:
        </p>
        <ul className="list-disc pl-6 text-[#4B2B5B]">
          <li>Alt text for images to support screen readers.</li>
          <li>Keyboard-friendly navigation for all interactive elements.</li>
          <li>
            Responsive design to ensure usability across devices, including
            mobile phones and tablets.
          </li>
          <li>
            Clear headings and semantic HTML to improve content structure.
          </li>
          <li>
            Options to adjust font size or contrast (if applicable, e.g., via
            browser settings or built-in tools).
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="mb-4 font-[Playwrite_HU] text-2xl font-semibold text-[#23022E]">
          4. Known Limitations
        </h2>
        <p className="font-[poppins] text-[#4B2B5B]">
          While we strive to make the Website fully accessible, some areas may
          have limitations, including:
        </p>
        <ul className="list-disc pl-6 text-[#4B2B5B]">
          <li>
            Certain third-party content or embedded media (e.g., videos, maps)
            may not be fully accessible.
          </li>
          <li>
            Older content or pages created before our accessibility updates may
            not fully comply with WCAG 2.1.
          </li>
          <li>
            Some interactive features may require specific assistive technology
            configurations.
          </li>
        </ul>
        <p className="mt-2 font-[poppins] text-[#4B2B5B]">
          We are actively working to address these limitations and welcome
          feedback to improve accessibility.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="mb-4 font-[Playwrite_HU] text-2xl font-semibold text-[#23022E]">
          5. Feedback and Assistance
        </h2>
        <p className="font-[poppins] text-[#4B2B5B]">
          We welcome your feedback on the accessibility of our Website. If you
          encounter any accessibility barriers or have suggestions for
          improvement, please contact us at:
        </p>
        <ul className="list-disc pl-6 text-[#4B2B5B]">
          <li>Email: [Your Email Address]</li>
          <li>Phone: [Your Phone Number, if applicable]</li>
          <li>Address: [Your Physical Address, if applicable]</li>
        </ul>
        <p className="mt-2 font-[poppins] text-[#4B2B5B]">
          When contacting us, please provide details about the issue, including
          the page or feature involved and the assistive technology used (if
          applicable). We aim to respond to accessibility inquiries within [X
          business days, e.g., 5 business days].
        </p>
      </section>

      <section className="mb-6">
        <h2 className="mb-4 font-[Playwrite_HU] text-2xl font-semibold text-[#23022E]">
          6. Third-Party Content
        </h2>
        <p className="font-[poppins] text-[#4B2B5B]">
          The Website may include links to third-party websites or services that
          are not controlled by us. We are not responsible for the accessibility
          of these external sites. We encourage you to review their
          accessibility statements or contact their operators directly.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="mb-4 font-[Playwrite_HU] text-2xl font-semibold text-[#23022E]">
          7. Ongoing Improvements
        </h2>
        <p className="font-[poppins] text-[#4B2B5B]">
          Accessibility is an ongoing commitment. We regularly review and update
          the Website to improve compliance with WCAG standards and address user
          feedback. Updates to this Accessibility Statement will be posted on
          this page with an updated effective date.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="mb-4 font-[Playwrite_HU] text-2xl font-semibold text-[#23022E]">
          8. Contact Information
        </h2>
        <p className="font-[poppins] text-[#4B2B5B]">
          For any questions or concerns about this Accessibility Statement,
          please contact us at:
        </p>
        <ul className="list-disc pl-6 text-[#4B2B5B]">
          <li>Email: [Your Email Address]</li>
          <li>Phone: [Your Phone Number, if applicable]</li>
          <li>Address: [Your Physical Address, if applicable]</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="mb-4 font-[Playwrite_HU] text-2xl font-semibold text-[#23022E]">
          9. Governing Law
        </h2>
        <p className="font-[poppins] text-[#4B2B5B]">
          This Accessibility Statement shall be governed by and construed in
          accordance with the laws of [Your Jurisdiction, e.g., "the State of
          California, United States"]. Any disputes arising under this
          Accessibility Statement shall be subject to the exclusive jurisdiction
          of the courts located in [Your Jurisdiction].
        </p>
      </section>
    </div>
  );
};

export default AccessibilityStatement;
