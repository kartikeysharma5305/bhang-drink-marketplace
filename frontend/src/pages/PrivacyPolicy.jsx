import React, { useEffect } from "react";

const PrivacyPolicy = () => {
  // Scroll to top when page mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 py-12 font-sans">
      <div className="container mx-auto max-w-4xl px-4">
        <h1 className="mb-8 text-center font-[Playwrite_HU] text-4xl font-bold text-[#23022E]">
          Privacy Policy
        </h1>

        <section className="mb-6">
          <h2 className="mb-4 font-[Playwrite_HU] text-2xl font-semibold text-[#23022E]">
            1. Introduction
          </h2>
          <p className="font-[poppins] text-[#4B2B5B]">
            Welcome to [Your Website Name] (the "Website"), operated by [Your
            Name or Entity] ("we," "us," or "our"). This Privacy Policy explains
            how we collect, use, disclose, and protect your personal information
            when you use our Website. By accessing or using the Website, you
            agree to the terms of this Privacy Policy. If you do not agree,
            please do not use the Website.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="mb-4 font-[Playwrite_HU] text-2xl font-semibold text-[#23022E]">
            2. Information We Collect
          </h2>
          <p className="font-[poppins] text-[#4B2B5B]">
            We may collect the following types of information:
          </p>
          <h3 className="mb-2 text-xl font-medium text-[#23022E]">
            2.1 Personal Information
          </h3>
          <p className="font-[poppins] text-[#4B2B5B]">
            Information you provide directly, such as:
          </p>
          <ul className="list-disc pl-6 text-[#4B2B5B]">
            <li>Name</li>
            <li>Email address</li>
            <li>
              Any other information you voluntarily submit (e.g., through
              contact forms or comments)
            </li>
          </ul>
          <h3 className="mt-4 mb-2 text-xl font-medium text-[#23022E]">
            2.2 Non-Personal Information
          </h3>
          <p className="font-[poppins] text-[#4B2B5B]">
            Information collected automatically, such as:
          </p>
          <ul className="list-disc pl-6 text-[#4B2B5B]">
            <li>IP address</li>
            <li>Browser type and version</li>
            <li>Device information</li>
            <li>Pages visited and time spent on the Website</li>
            <li>Cookies and similar tracking technologies</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="mb-4 font-[Playwrite_HU] text-2xl font-semibold text-[#23022E]">
            3. How We Use Your Information
          </h2>
          <p className="font-[poppins] text-[#4B2B5B]">
            We may use your information for the following purposes:
          </p>
          <ul className="list-disc pl-6 text-[#4B2B5B]">
            <li>To operate and maintain the Website</li>
            <li>To respond to your inquiries or feedback</li>
            <li>To improve the Website’s functionality and user experience</li>
            <li>To analyze usage trends and preferences</li>
            <li>To comply with legal obligations</li>
            <li>
              To send you updates or promotional materials (if you opt-in)
            </li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="mb-4 font-[Playwrite_HU] text-2xl font-semibold text-[#23022E]">
            4. Sharing Your Information
          </h2>
          <p className="font-[poppins] text-[#4B2B5B]">
            We do not sell or rent your personal information. We may share your
            information in the following cases:
          </p>
          <ul className="list-disc pl-6 text-[#4B2B5B]">
            <li>
              With service providers who assist us in operating the Website
              (e.g., hosting or analytics providers)
            </li>
            <li>
              To comply with legal requirements, such as responding to subpoenas
              or court orders
            </li>
            <li>
              To protect our rights, property, or safety, or that of others
            </li>
            <li>With your consent or at your direction</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="mb-4 font-[Playwrite_HU] text-2xl font-semibold text-[#23022E]">
            5. Cookies and Tracking Technologies
          </h2>
          <p className="font-[poppins] text-[#4B2B5B]">
            We use cookies and similar technologies to enhance your experience,
            analyze usage, and deliver personalized content. You can manage your
            cookie preferences through your browser settings. Disabling cookies
            may affect the Website’s functionality.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="mb-4 font-[Playwrite_HU] text-2xl font-semibold text-[#23022E]">
            6. Data Security
          </h2>
          <p className="font-[poppins] text-[#4B2B5B]">
            We implement reasonable security measures to protect your
            information from unauthorized access, use, or disclosure. However,
            no method of transmission over the internet is completely secure,
            and we cannot guarantee absolute security.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="mb-4 font-[Playwrite_HU] text-2xl font-semibold text-[#23022E]">
            7. Your Rights
          </h2>
          <p className="font-[poppins] text-[#4B2B5B]">
            Depending on your jurisdiction, you may have the following rights
            regarding your personal information:
          </p>
          <ul className="list-disc pl-6 text-[#4B2B5B]">
            <li>Access: Request a copy of the information we hold about you</li>
            <li>
              Correction: Request corrections to inaccurate or incomplete
              information
            </li>
            <li>
              Deletion: Request deletion of your information, subject to legal
              obligations
            </li>
            <li>
              Opt-Out: Opt out of promotional communications or certain data
              processing
            </li>
          </ul>
          <p className="font-[poppins] text-[#4B2B5B]">
            To exercise these rights, contact us at [Your Email Address]. We may
            require verification of your identity.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="mb-4 font-[Playwrite_HU] text-2xl font-semibold text-[#23022E]">
            8. Third-Party Links
          </h2>
          <p className="font-[poppins] text-[#4B2B5B]">
            The Website may contain links to third-party websites or services.
            We are not responsible for the privacy practices of these websites.
            We encourage you to review their privacy policies before providing
            any personal information.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="mb-4 font-[Playwrite_HU] text-2xl font-semibold text-[#23022E]">
            9. Children’s Privacy
          </h2>
          <p className="font-[poppins] text-[#4B2B5B]">
            The Website is not intended for individuals under the age of 13. We
            do not knowingly collect personal information from children under
            13. If we become aware of such data, we will take steps to delete
            it. If you believe a child has provided us with personal
            information, please contact us at [Your Email Address].
          </p>
        </section>

        <section className="mb-6">
          <h2 className="mb-4 font-[Playwrite_HU] text-2xl font-semibold text-[#23022E]">
            10. International Data Transfers
          </h2>
          <p className="font-[poppins] text-[#4B2B5B]">
            Your information may be stored or processed in [Your Jurisdiction,
            e.g., "the United States"] or other countries where our service
            providers operate. By using the Website, you consent to the transfer
            of your information to these locations, which may have different
            data protection laws than your country.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="mb-4 font-[Playwrite_HU] text-2xl font-semibold text-[#23022E]">
            11. Changes to This Privacy Policy
          </h2>
          <p className="font-[poppins] text-[#4B2B5B]">
            We may update this Privacy Policy from time to time. Changes will be
            posted on this page with an updated effective date. Your continued
            use of the Website after changes are posted constitutes your
            acceptance of the updated Privacy Policy.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="mb-4 font-[Playwrite_HU] text-2xl font-semibold text-[#23022E]">
            12. Contact Information
          </h2>
          <p className="font-[poppins] text-[#4B2B5B]">
            If you have any questions or concerns about this Privacy Policy,
            please contact us at:
          </p>
          <ul className="list-disc pl-6 text-[#4B2B5B]">
            <li>Email: [Your Email Address]</li>
            <li>Address: [Your Physical Address, if applicable]</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
