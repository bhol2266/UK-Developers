import React from "react";

const TermsAndConditions = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 text-gray-800">
      <h1 className="text-3xl font-bold mb-6">Terms and Conditions</h1>
      <p>
        By accessing this webpage, you are agreeing to be bound by these Terms
        and Conditions (&ldquo;Terms&rdquo;) in a legally binding agreement between us
        (&ldquo;Merchant&rdquo; or &ldquo;we&rdquo; or &ldquo;our&rdquo;) and the User (&ldquo;you&rdquo; or
        &ldquo;your&rdquo;).
      </p>

      <h2 className="text-2xl font-semibold mt-6">Eligibility</h2>
      <p>
        You hereby represent and warrant that you have the right, power, and
        authority to agree to the Terms and to perform your obligations hereunder.
      </p>

      <h2 className="text-2xl font-semibold mt-6">Definitions</h2>
      <ul className="list-disc ml-6">
        <li>
          <strong>Payment Instrument:</strong> Includes credit card, debit card, bank
          account, prepaid payment instrument, UPI, IMPS, or other methods.
        </li>
        <li>
          <strong>Platform:</strong> The website or platform where transactions occur.
        </li>
        <li>
          <strong>Transaction:</strong> An order or request placed by the User with the
          Merchant.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6">Merchant's Rights</h2>
      <p>
        We may collect, store, and share the information provided by you to
        deliver products/services and contact you regarding transactions.
      </p>

      <h2 className="text-2xl font-semibold mt-6">Your Responsibilities</h2>
      <p>
        You agree to provide accurate and up-to-date personal and payment
        information for completing transactions.
      </p>

      <h2 className="text-2xl font-semibold mt-6">Prohibited Actions</h2>
      <ul className="list-disc ml-6">
        <li>Unauthorized data collection or scraping.</li>
        <li>Sending unsolicited emails or false reports.</li>
        <li>Engaging in fraudulent or deceptive activities.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6">Limitation of Liability</h2>
      <p>
        The User's recourse for defective products/services is to initiate the
        refund process as per the agreement. We disclaim liability for any losses.
      </p>

      <h2 className="text-2xl font-semibold mt-6">Governing Laws & Dispute Resolution</h2>
      <p>
        These terms are governed by the laws of India. Disputes will be resolved
        through arbitration in Bengaluru as per the Arbitration and Conciliation
        Act, 1996.
      </p>
    </div>
  );
};

export default TermsAndConditions;
