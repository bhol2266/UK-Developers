// pages/payment.js
import PaypalButton from "../components/PaypalButton";

export default function PaymentPage() {
  const handleSuccess = (order) => {
    alert("Payment successful!");
    console.log(order);
    // Optionally send order to backend
  };

  return (
    <div className="p-4">
      <h1 className="text-xl mb-4">Pay $10</h1>
      <PaypalButton amount="10.00" onSuccess={handleSuccess} />
    </div>
  );
}
