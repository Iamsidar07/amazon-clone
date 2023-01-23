import Header from "./components/Header";
import Home from "./components/Home";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import CheckOut from "./components/CheckOut";
import Login from "./components/Login";
import { useEffect } from "react";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Payment from "./components/Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, useStripe } from "@stripe/react-stripe-js";
import Orders from "./components/Orders";
const promise=loadStripe("pk_test_51KmD5ySCtzjWd2a71Qdrsbvn2WWiWuHYnHfcWmWEggIx53k0Qfh6gf87TwV2PILYt7bdHVWDaQuDfxHSAM404F1T00oA7WYfrk")


function App() {
  const [{ user }, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("User is =>>>❤️", authUser);
      if (authUser) {
        //user is loged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // user has been loged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route
            path="/checkout"
            element={
              <>
                <Header />
                <CheckOut />
              </>
            }
          />
        </Routes>
        <Routes>
          <Route path="/payment"
            element={
              <>
              <Header/>
              <Elements stripe={promise}>
              <Payment/>
              </Elements>
              </>
            }
          />
        </Routes>
        <Routes>
          <Route path="/orders" element={
            <>
            <Header/>
            <Orders/>
            </>
          }/>
        </Routes>
        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <Home />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
