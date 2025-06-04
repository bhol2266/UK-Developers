import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import db from "../firebase"; // adjust the path to your firebase config
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export default function Paypal({ selectedPlan, email, name, phonenumber, source }) {
  if (!selectedPlan) return <div>Loading Plan Details...</div>;

  // Generate a random activation code
  const generateActivationCode = (length = 12) => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let code = '';
    for (let i = 0; i < length; i++) {
      code += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return code;
  };

  // Calculate expiry date
  const calculateExpiryDate = (duration) => {
    const now = new Date();
    const lower = duration.toLowerCase();
    if (lower.includes("month")) {
      const months = parseInt(lower);
      now.setMonth(now.getMonth() + months);
    } else if (lower.includes("year")) {
      const years = parseInt(lower);
      now.setFullYear(now.getFullYear() + years);
    } else {
      now.setDate(now.getDate() + 30); // fallback 30 days
    }
    return now.toISOString();
  };

  const handleDummyActivation = async () => {
    const activationCode = generateActivationCode();
    const expiryDate = calculateExpiryDate(selectedPlan.duration);


    const dummyEmail = "ultimate.mortal.kombat.x@gmail.com"
    const dummyName = "mortal kombat"
    const dummyPhonenumber = "1234567890"


    try {
      await addDoc(collection(db, "memberships"), {
        email: dummyEmail,
        name: dummyName,
        dummyPhonenumber,
        activationCode,
        plan: selectedPlan.duration,
        source,
        expiryDate,
        createdAt: serverTimestamp(),
      });

      const res = await fetch("/api/sendActivationEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: dummyEmail,
          name: dummyName,
          source,
          activationCode,
          expiryDate,
        }),
      });

      if (res.ok) {
        alert(
          `Test successful!\n\nAn email has been sent to ${dummyEmail} with your activation code and instructions.\n\nPlease check your inbox.`
        );
      } else {
        alert("Test Firestore save worked, but email failed.");
      }
    } catch (err) {
      console.error("❌ Dummy Test Error:", err);
      alert("Test failed. Check console for error.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md text-center">
        <h1 className="text-2xl font-bold mb-4">Buy Membership</h1>
        <p className="mb-6 text-gray-700">{`Get full access for ${selectedPlan.price} for ${selectedPlan.duration}`}</p>

        <PayPalScriptProvider options={{ "client-id": "ASN99XzcW29Fc1Q2lxqtsdEOZt4fP7zg5dXV0dPpw-PPnFR1pYJpib6GOpdx_4BPb9k9glN0eJQSNKe4" }}>
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
              return actions.order.capture().then(async (details) => {
                console.log("✅ Payment Approved:", details);

                const activationCode = generateActivationCode();
                const expiryDate = calculateExpiryDate(selectedPlan.duration);

                try {
                  // Save to Firestore
                  await addDoc(collection(db, "memberships"), {
                    email,
                    name,
                    phonenumber,
                    activationCode,
                    plan: selectedPlan.name,
                    source,
                    expiryDate,
                    createdAt: serverTimestamp(),
                  });

                  // Send activation email
                  const res = await fetch("/api/sendActivationEmail", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                      email,
                      name,
                      source,
                      activationCode,
                      expiryDate,
                    }),
                  });

                  if (res.ok) {
                    alert(
                      `Thank you, ${details.payer.name.given_name}!\n\nAn email has been sent to ${email} with your activation code and further instructions.\n\nPlease check your inbox to activate your membership.`
                    );
                  } else {
                    alert("Membership activated, but failed to send email. Please contact support.");
                  }
                } catch (error) {
                  console.error("❌ Error:", error);
                  alert("Payment succeeded but something went wrong. Please contact support.");
                }
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

      <button
        onClick={handleDummyActivation}
        className="mt-6 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 "
      >
        🔧 Test Activation Without Payment
      </button>
    </div>
  );
}
