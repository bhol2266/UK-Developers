// pages/payment/success.jsx
import Link from 'next/link';

export default function PaymentSuccess() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-green-50">
      <div className="bg-white shadow-xl rounded-2xl p-8 max-w-md text-center">
        <h1 className="text-3xl font-bold text-green-600 mb-4">Payment Successful!</h1>
        <p className="text-gray-700 mb-6">Thank you for your purchase. Your payment was processed successfully.</p>
        <Link href="/">
          <button className="px-6 py-2 bg-green-600 text-white rounded-xl hover:bg-green-700 transition">
            Go to Home
          </button>
        </Link>
      </div>
    </div>
  );
}
