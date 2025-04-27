import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

export default function Paypal({ selectedPlan, email, name, phonenumber, source }) {
  if (!selectedPlan) return <div>Loading Plan Details...</div>;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md text-center">
        <h1 className="text-2xl font-bold mb-4">Buy Membership</h1>
        <p className="mb-6 text-gray-700">{`Get full access for ${selectedPlan.price} for ${selectedPlan.duration}`}</p>

        <PayPalScriptProvider options={{ "client-id": "AQEfZ9BtOjDaH-FAfZX-yRRFO7RmeSyNycJmJ8IiykzjBWGEKF_5yQJs-xagJEAT0D_fI-7GVdlYrrtX" }}>
          <PayPalButtons
            style={{ layout: "vertical", color: "blue", shape: "rect", label: "paypal" }}
            createOrder={(data, actions) => {
              return actions.order.create({
                purchase_units: [
                  {
                    amount: {
                      value: selectedPlan.amount.toString(),
                    },
                    description: "Premium Membership",
                    category: "DIGITAL_GOODS",
                  },
                ],
                application_context: {
                  shipping_preference: "NO_SHIPPING",
                  user_action: "PAY_NOW",
                },
              });
            }}
            onApprove={(data, actions) => {
              return actions.order.capture().then((details) => {
                console.log("✅ Payment Approved:", details);
                alert(`Thank you, ${details.payer.name.given_name}! Membership activated.`);
              });
            }}
            onError={(err) => {
              console.error("❌ Payment Error:", err);
              alert("Payment failed. Please try again.");
            }}
            onCancel={() => {
              console.log("⚠️ Payment Cancelled");
              alert("You cancelled the payment.");
            }}
          />
        </PayPalScriptProvider>
      </div>
    </div>
  );
}
