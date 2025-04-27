// pages/membership.js
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

export default function Paypal() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md text-center">
        <h1 className="text-2xl font-bold mb-4">Buy Membership</h1>
        <p className="mb-6 text-gray-700">Get full access for $1.99 per month</p>

        <PayPalScriptProvider options={{ "client-id": process.env.PAYPAL_CLIENT_ID }}>
          <PayPalButtons
            style={{ layout: "vertical", color: "blue", shape: "rect", label: "paypal" }}
            createOrder={(data, actions) => {
              return actions.order.create({
                purchase_units: [
                  {
                    amount: {
                      value: "1.99",
                    },
                    description: "Premium Membership",
                    // simulate digital goods
                    category: "DIGITAL_GOODS",
                  },
                ],
                application_context: {
                  shipping_preference: "NO_SHIPPING", // no shipping
                  user_action: "PAY_NOW", // no final review screen
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
