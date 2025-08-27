import { useEffect } from "react";

const TermsAndConditions = () => {
  // Scroll to top when page mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 py-12 font-sans">
      <div className="container mx-auto max-w-4xl px-4">
        <h1 className="mb-8 text-center font-[Playwrite_HU] text-4xl font-bold text-[#23022E]">
          Terms and Conditions
        </h1>

        <section className="mb-6">
          <h2 className="mb-4 font-[Playwrite_HU] text-2xl font-semibold text-[#23022E]">
            1. Introduction
          </h2>
          <p className="font-[poppins] text-[#4B2B5B]">
            These Terms and Conditions (&quot;Terms&quot;) govern your use of
            [Your Website Name] (the &quot;Website&quot;), a personal project
            website operated by [Your Name or Entity] (&quot;we,&quot;
            &quot;us,&quot; or &quot;our&quot;). By accessing or using the
            Website, you agree to be bound by these Terms. If you do not agree
            with any part of these Terms, you must not use the Website.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="mb-4 font-[Playwrite_HU] text-2xl font-semibold text-[#23022E]">
            2. Acceptance of Terms
          </h2>
          <p className="font-[poppins] text-[#4B2B5B]">
            By accessing or using the Website, you confirm that you are at least
            18 years of age or have the consent of a parent or legal guardian,
            and you agree to comply with these Terms. We reserve the right to
            modify these Terms at any time, and such changes will be effective
            immediately upon posting on the Website. Your continued use of the
            Website after changes are posted constitutes your acceptance of the
            updated Terms.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="mb-4 font-[Playwrite_HU] text-2xl font-semibold text-[#23022E]">
            3. Use of the Website
          </h2>
          <h3 className="mb-2 text-xl font-medium text-gray-600">
            3.1 Eligibility
          </h3>
          <p className="font-[poppins] text-[#4B2B5B]">
            You may use the Website only if you can form a legally binding
            contract with us and are not barred from doing so under applicable
            law. The Website is intended for personal, non-commercial use unless
            otherwise specified.
          </p>
          <h3 className="mt-4 mb-2 text-xl font-medium text-gray-600">
            3.2 User Conduct
          </h3>
          <p className="font-[poppins] text-[#4B2B5B]">
            You agree to use the Website only for lawful purposes and in a
            manner that does not infringe the rights of, restrict, or inhibit
            anyone else&apos;s use and enjoyment of the Website. Prohibited
            conduct includes:
          </p>
          <ul className="list-disc pl-6 text-[#4B2B5B]">
            <li>
              Engaging in any activity that interferes with or disrupts the
              Website or its servers.
            </li>
            <li>
              Attempting to gain unauthorized access to any portion of the
              Website.
            </li>
            <li>
              Using the Website to transmit any harmful code, such as viruses or
              malware.
            </li>
            <li>
              Harassing, abusing, or harming another person or group through the
              Website.
            </li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="mb-4 font-[Playwrite_HU] text-2xl font-semibold text-[#23022E]">
            4. Intellectual Property
          </h2>
          <p className="font-[poppins] text-[#4B2B5B]">
            All content on the Website, including but not limited to text,
            graphics, logos, images, and software, is the property of [Your Name
            or Entity] or its licensors and is protected by copyright,
            trademark, and other intellectual property laws. You may not
            reproduce, distribute, modify, or create derivative works of any
            content without our prior written consent.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="mb-4 font-[Playwrite_HU] text-2xl font-semibold text-[#23022E]">
            5. User-Generated Content
          </h2>
          <p className="font-[poppins] text-[#4B2B5B]">
            If the Website allows you to submit content (e.g., comments,
            reviews, or other materials), you grant us a non-exclusive,
            worldwide, royalty-free, perpetual license to use, reproduce,
            modify, and distribute such content in connection with the Website.
            You are solely responsible for any content you submit and must
            ensure it does not violate any third-party rights or applicable
            laws.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="mb-4 font-[Playwrite_HU] text-2xl font-semibold text-[#23022E]">
            6. Third-Party Links
          </h2>
          <p className="font-[poppins] text-[#4B2B5B]">
            The Website may contain links to third-party websites or services
            that are not owned or controlled by us. We are not responsible for
            the content, privacy policies, or practices of any third-party
            websites. You access such third-party websites at your own risk.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="mb-4 font-[Playwrite_HU] text-2xl font-semibold text-[#23022E]">
            7. Limitation of Liability
          </h2>
          <p className="font-[poppins] text-[#4B2B5B]">
            To the fullest extent permitted by law, [Your Name or Entity] shall
            not be liable for any direct, indirect, incidental, consequential,
            or punitive damages arising out of your use of or inability to use
            the Website. The Website is provided on an &quot;as-is&quot; and
            &quot;as-available&quot; basis without warranties of any kind,
            whether express or implied, including but not limited to warranties
            of merchantability, fitness for a particular purpose, or
            non-infringement.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="mb-4 font-[Playwrite_HU] text-2xl font-semibold text-[#23022E]">
            8. Indemnification
          </h2>
          <p className="font-[poppins] text-[#4B2B5B]">
            You agree to indemnify and hold harmless [Your Name or Entity], its
            affiliates, and their respective officers, directors, employees, and
            agents from any claims, liabilities, damages, or expenses (including
            reasonable attorneys&apos; fees) arising from your use of the
            Website, violation of these Terms, or infringement of any
            third-party rights.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="mb-4 font-[Playwrite_HU] text-2xl font-semibold text-[#23022E]">
            9. Termination
          </h2>
          <p className="font-[poppins] text-[#4B2B5B]">
            We reserve the right to terminate or suspend your access to the
            Website at any time, with or without cause, and with or without
            notice, for any reason, including but not limited to violation of
            these Terms.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="mb-4 font-[Playwrite_HU] text-2xl font-semibold text-[#23022E]">
            10. Governing Law
          </h2>
          <p className="font-[poppins] text-[#4B2B5B]">
            These Terms shall be governed by and construed in accordance with
            the laws of [Your Jurisdiction, e.g., &quot;the State of California,
            United States&quot;], without regard to its conflict of law
            principles. Any disputes arising under these Terms shall be subject
            to the exclusive jurisdiction of the courts located in [Your
            Jurisdiction].
          </p>
        </section>

        <section className="mb-6">
          <h2 className="mb-4 font-[Playwrite_HU] text-2xl font-semibold text-[#23022E]">
            11. Privacy Policy
          </h2>
          <p className="font-[poppins] text-[#4B2B5B]">
            Your use of the Website is also governed by our{" "}
            <a href="/privacy-policy" className="text-blue-600 hover:underline">
              Privacy Policy
            </a>
            , which is incorporated into these Terms by reference. Please review
            the Privacy Policy to understand how we collect, use, and protect
            your personal information.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="mb-4 font-[Playwrite_HU] text-2xl font-semibold text-[#23022E]">
            12. Severability
          </h2>
          <p className="font-[poppins] text-[#4B2B5B]">
            If any provision of these Terms is found to be invalid or
            unenforceable, the remaining provisions shall remain in full force
            and effect.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="mb-4 font-[Playwrite_HU] text-2xl font-semibold text-[#23022E]">
            13. Entire Agreement
          </h2>
          <p className="font-[poppins] text-[#4B2B5B]">
            These Terms, together with the Privacy Policy, constitute the entire
            agreement between you and [Your Name or Entity] regarding your use
            of the Website and supersede any prior agreements or understandings.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="mb-4 font-[Playwrite_HU] text-2xl font-semibold text-[#23022E]">
            14. Contact Information
          </h2>
          <p className="font-[poppins] text-[#4B2B5B]">
            If you have any questions about these Terms, please contact us at:
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

export default TermsAndConditions;
