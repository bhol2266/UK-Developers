import { useState, useEffect } from 'react';
import { PAYU_CONFIG } from '../config/payuConfig';

// Function to generate txnid
const generateTxnid = () => {
  const timestamp = Date.now();  // Current timestamp (in milliseconds)
  const randomString = Math.random().toString(36).substring(2, 15);  // Random string
  return `${timestamp}-${randomString}`;  // Combine them to form txnid
};

export default function PaymentCheckout({ selectedPlan, email, name, phonenumber, source }) {

  const [formData, setFormData] = useState({
    txnid: generateTxnid(),  // Initialize txnid with a generated value
    amount: selectedPlan.amount,
    firstname: name,
    email: email,
    phone: phonenumber,
    productinfo: selectedPlan.duration,
  });

  useEffect(() => {
    setFormData({
      txnid: generateTxnid(),  // Initialize txnid with a generated value
      amount: selectedPlan.amount,
      firstname: name,
      email: email,
      phone: phonenumber,
      productinfo: selectedPlan.duration,
    });

    // Simulate clicking the "Pay Now" button after 2 seconds
    setTimeout(() => {
      if (source == "Chutlunds") {
        document.getElementById('payNowButton')?.click();
      }
    }, 10);

  }, [selectedPlan, email, name, phonenumber]);

  const [hash, setHash] = useState('');

  const handlePayment = async () => {
    const res = await fetch('/api/generateHash', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
    const data = await res.json();
    setHash(data.hash);

    setTimeout(() => {
      document.getElementById('payuForm').submit();
    }, 500);
  };

  return (
    <>
      <form
        id="payuForm"
        method="POST"
        action={PAYU_CONFIG.payuBaseUrl}
      >
        <input type="hidden" name="key" value={PAYU_CONFIG.key} />
        <input type="hidden" name="txnid" value={formData.txnid} />
        <input type="hidden" name="amount" value={formData.amount} />
        <input type="hidden" name="productinfo" value={formData.productinfo} />
        <input type="hidden" name="firstname" value={formData.firstname} />
        <input type="hidden" name="email" value={formData.email} />
        <input type="hidden" name="phone" value={formData.phone} />
        <input type="hidden" name="surl" value="http://localhost:3000/success" />
        <input type="hidden" name="furl" value="http://localhost:3000/failure" />
        <input type="hidden" name="hash" value={hash} />
      </form>

      <button
        id="payNowButton"
        onClick={handlePayment}
        className='bg-blue-500 text-white lg:px-8 lg:py-4 px-6 py-3 rounded-2xl font-poppins text-[14px] lg:text-[20px] mx-auto block hover:scale-105 transition-all mt-4 lg:mt-6'>
        Pay Now
      </button>
    </>
  );
}
