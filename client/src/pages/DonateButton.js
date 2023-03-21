// import { useEffect, useState, useRef } from "react";
// import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

// // There are 3 ways to keep the amount from being stale in our createOrder callback:
// // 1. Use amountRef.current to keep track of amount changes
// // 2. Use the forceReRender prop (which causes flashing)
// // 3. Use the key property (which also causes flashing)

// const DonateButton = ({ currency, amount }) => {
//   const amountRef = useRef(amount);
//   useEffect(() => {
//     amountRef.current = amount;
//   }, [amount]);

//   return (
//     <PayPalButtons
//       // forceReRender={[currency, amount]}
//       timeout={10000}
//       style={{ color: "black", label: "donate" }}
//       fundingSource="paypal"
//       createOrder={(data, actions) => {
//         return actions.order.create({
//           purchase_units: [
//             {
//               amount: {
//                 value: amountRef.current,
//                 breakdown: {
//                   item_total: {
//                     currency_code: currency,
//                     value: amountRef.current,
//                   },
//                 },
//               },
//               items: [
//                 {
//                   name: "Anime Fundraiser",
//                   description:
//                     "All proceeds directly support anime content creator.",
//                   quantity: "1",
//                   unit_amount: {
//                     currency_code: currency,
//                     value: amountRef.current,
//                   },
//                   category: "DONATION",
//                 },
//               ],
//             },
//           ],
//         });
//       }}
//     />
//   );
// };

// function DonateForm() {
//   const [amount] = useState("5.00");
//   return (
//     <form className="DonateForm">
//       {/* <AmountPicker
//         onAmountChange={(e) => {
//           setAmount(e.target.value);
//         }}
//       /> */}
//       <DonateButton currency="USD" amount={amount} />
//     </form>
//   );
// }

// export function DonateApp() {
//   return (
//     <PayPalScriptProvider
//       options={{
//         "client-id":
//           "AVYeXWfSAcFhkfn7VTgWOPiH5HZ_70hljgF7jiMMj818Wu0CkNM_2bP7IyQn65RkXf4a9PhAbfvLEYs5",
//         components: "buttons",
//         currency: "USD",
//       }}
//     >
//       {/* <h1>Donate to Anime Enthusiast's</h1> */}
//       <figure>
//         <figcaption></figcaption>
//       </figure>
//       <DonateForm />
//     </PayPalScriptProvider>
//   );
// }
import { useEffect, useState, useRef } from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const DonateButton = ({ currency, amount }) => {
  const amountRef = useRef(amount);
  useEffect(() => {
    amountRef.current = amount;
  }, [amount]);

  const onInit = (data, actions) => {
    // Use the Sandbox test account to pre-populate the payment information
    actions.payment.initAuthFlow().then(() => {
      actions.payment.update({
        flow: "checkout",
        amount: {
          value: amountRef.current,
          breakdown: {
            item_total: {
              currency_code: currency,
              value: amountRef.current,
            },
          },
        },
        currency_code: currency,
        intent: "donate",
        shipping_preference: "NO_SHIPPING",
        payer: {
          email_address: "sb-zg47kq25326079@personal.example.com",
        },
      });
    });
  };

  return (
    <PayPalButtons
      onInit={onInit}
      timeout={10000}
      style={{ color: "black", label: "donate" }}
      fundingSource="paypal"
      createOrder={(data, actions) => {
        return actions.order.create({
          purchase_units: [
            {
              amount: {
                value: amountRef.current,
                breakdown: {
                  item_total: {
                    currency_code: currency,
                    value: amountRef.current,
                  },
                },
              },
              items: [
                {
                  name: "Anime Fundraiser",
                  description:
                    "All proceeds directly support anime content creator.",
                  quantity: "1",
                  unit_amount: {
                    currency_code: currency,
                    value: amountRef.current,
                  },
                  category: "DONATION",
                },
              ],
            },
          ],
        });
      }}
    />
  );
};

function DonateForm() {
  const [amount] = useState("5.00");
  return (
    <form className="DonateForm">
      <DonateButton currency="USD" amount={amount} />
    </form>
  );
}

export function DonateApp() {
  return (
    <PayPalScriptProvider
      options={{
        "client-id":
          "AVYeXWfSAcFhkfn7VTgWOPiH5HZ_70hljgF7jiMMj818Wu0CkNM_2bP7IyQn65RkXf4a9PhAbfvLEYs5",
        components: "buttons",
        currency: "USD",
      }}
    >
      <figure>
        <figcaption></figcaption>
      </figure>
      <DonateForm />
    </PayPalScriptProvider>
  );
}
