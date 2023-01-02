import Header from "./Header/Header";
import Home from "./Home/Home";
import Login from "./Login/Login";
import { Routes, Route } from "react-router-dom";
import Checkout from "./Checkout/Checkout";
import { useEffect } from "react";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Payment from "./Payment/Payment";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Orders from "./Orders/Orders";

const promise = loadStripe(
  "pk_test_51KosbGSB5FzrTimyqi1Rf9wvBFRqIyuxeT8F7jxNE0eKOcBVYtolQpDlevofNnPzexNNwktmy5ssEEY6CUvwEsJ400hTaDooly"
);

function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        //the user is or was loggd in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        //user is loggd out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/orders"
          element={
            <>
              <Header />
              <Orders />
            </>
          }
        />
        <Route
          path="/checkout"
          element={
            <>
              <Header />
              <Checkout />
            </>
          }
        />

        <Route
          path="/"
          element={
            <>
              <Header />
              <Home />
            </>
          }
        />
        <Route
          path="/payment"
          element={
            <>
              <Header />
              <Elements stripe={promise}>
                <Payment />
              </Elements>
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
