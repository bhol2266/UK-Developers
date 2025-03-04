import Head from 'next/head';

export default function RefundCancellation() {
  return (
    <>
      <Head>
        <title>Refund and Cancellation Policy</title>
        <meta name="description" content="Read our Refund and Cancellation Policy." />
      </Head>
      <div className="min-h-screen bg-gray-100 py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Refund and Cancellation Policy</h1>
          <p className="text-gray-700 mb-4">
            Upon completing a Transaction, you are entering into a legally binding and enforceable agreement with us to
            purchase the product and/or service. After this point, the User may cancel the Transaction unless it has been
            specifically provided for on the Platform. In which case, the cancellation will be subject to the terms
            mentioned on the Platform.
          </p>
          <p className="text-gray-700 mb-4">
            We shall retain the discretion in approving any cancellation requests and we may ask for additional details
            before approving any requests. Once you have received the product and/or service, the only event where you
            can request a replacement, return, or refund is if the product and/or service does not match the description
            as mentioned on the Platform.
          </p>
          <p className="text-gray-700 mb-4">
            Any request for a refund must be submitted within three days from the date of the Transaction or such number
            of days prescribed on the Platform, which shall in no event be less than three days. A User may submit a
            claim for a refund for a purchase made, by raising a ticket
            <a href="#" className="text-blue-600 underline"> here </a>
            or contacting us at
            <a
              href="mailto:seller+f1ad1eb6f7fb404e944fd7292d333b56@instamojo.com"
              className="text-blue-600 underline ml-1"
            >
              seller+f1ad1eb6f7fb404e944fd7292d333b56@instamojo.com
            </a>
            and providing a clear and specific reason for the refund request, including the exact terms that have been
            violated, along with any proof, if required.
          </p>
          <p className="text-gray-700">
            Whether a refund will be provided will be determined by us, and we may ask for additional details before
            approving any requests.
          </p>
        </div>
      </div>
    </>
  );
}
