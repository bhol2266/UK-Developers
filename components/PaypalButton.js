// components/PaypalButton.js
import { useEffect, useRef, useState } from "react";

const PaypalButton = ({ amount = "1.00", onSuccess }) => {
  const paypalRef = useRef();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const loadPaypalScript = async () => {
      if (!window.paypal) {
        const script = document.createElement("script");
        script.src = `https://www.paypal.com/sdk/js?client-id=${process.env.PAYPAL_CLIENT_ID}&currency=USD`;
        script.type = "text/javascript";
        script.async = true;
        script.onload = () => setLoaded(true);
        document.body.appendChild(script);
      } else {
        setLoaded(true);
      }
    };

    loadPaypalScript();
  }, []);

  useEffect(() => {
    if (loaded && window.paypal) {
      window.paypal
        .Buttons({
          createOrder: (data, actions) => {
            return actions.order.create({
              purchase_units: [
                {
                  amount: {
                    value: amount,
                  },
                },
              ],
              application_context: {
                shipping_preference: "NO_SHIPPING", // Hides address fields
              },
            });
          },
          onApprove: async (data, actions) => {
            const order = await actions.order.capture();
            console.log("Order approved: ", order);
            onSuccess(order);
          },
          onError: (err) => {
            console.error("PayPal error:", err);
          },
        })
        .render(paypalRef.current);
    }
  }, [loaded, amount, onSuccess]);
  
  return <div ref={paypalRef} />;
};

export default PaypalButton;
