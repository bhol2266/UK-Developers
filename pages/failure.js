// pages/payment/failure.jsx
import Link from 'next/link';

export default function PaymentFailure() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-red-50">
      <div className="bg-white shadow-xl rounded-2xl p-8 max-w-md text-center">
        <h1 className="text-3xl font-bold text-red-600 mb-4">Payment Failed</h1>
        <p className="text-gray-700 mb-6">Oops! Something went wrong during the payment process. Please try again.</p>
        <Link href="/">
          <button className="px-6 py-2 bg-red-600 text-white rounded-xl hover:bg-red-700 transition">
            Go to Home
          </button>
        </Link>
      </div>
    </div>
  );
}
