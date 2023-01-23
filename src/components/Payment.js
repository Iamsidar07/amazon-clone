import React, { useEffect, useState } from "react";
import "./Payment.css";
import { useStateValue } from "../StateProvider";
import BasketItem from "./BasketItem";
import { Link, useNavigate } from "react-router-dom";
import {
  CardElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import {
  CheckBoxOutlineBlank,
  CheckOutlined,
  PaymentOutlined,
  PlaceOutlined,
} from "@material-ui/icons";
import { getBasketTotal } from "../reducer";
import CurrencyFormat from "react-currency-format";
import axios from "../axios";
const Payment = () => {
  const navigate=useNavigate();
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [processing, setProcessing] = useState("");
  const [succeeded, setSucceeded] = useState(false);
  const [userSectret, setUserSectret] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const [{ basket, user }, dispatch] = useStateValue();

  useEffect(() => {
    const getUserSectret = async () => {
      const res = await axios({
        method:"post",
        url: `/payments/create/total/${getBasketTotal(basket)*100}`
      });
      
      setUserSectret(res.data.clientSectret)
    };
    getUserSectret();
  }, [basket]);
  
 
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setProcessing(true);

  //   const payload=await stripe.confirmCardPayment(userSectret,{
  //     payment_method:{
  //       type:"card",
  //       card:elements.getElement(CardElement),
  //       billing_details:{
  //         email:user?.email,
  //       }
  //     }
  //   }).then(({paymentIntent})=>{
  //     setSucceeded(true)
  //     setError(null)
  //     setProcessing(false)
  //     navigate("/orders")
  //     dispatch({
  //       type:"EMPTY_BASKET",
  //     })
  //   })
  // };

  const handleChange = (e) => {
    setDisabled(e.empty);
    setError(e.error ? e.error.message : "");
  };
  return (
    <div className="payment">
      <div className="payment__container">
        <h1>Welcome,{user?.email.substring(0, 5)}</h1>
        <div className="payment__checkoutIcon">
          <PaymentOutlined />
          <h2>
            {" "}
            CheckOut (<Link to={"/checkout"}>{basket?.length} items</Link>){" "}
          </h2>
        </div>

        <div className="payment__section">
          <div className="payment__title">
            <div className="payment__locationIcon">
              <PlaceOutlined />
              <h3>Address</h3>
            </div>
          </div>
          <div className="payment__address">
            <p>{user?.email}</p>
            <p>49711,Sitapur</p>
            <p>Chhattisgarh India</p>
          </div>
        </div>
        <div className="payment__section payment__itemSection">
          <div className="payment__deliveryTitle">
            <h3>Reviews items and Delivery</h3>
          </div>
          <div className="payment__items">
            {basket?.map(({ id, title, price, rating, imgUrl }) => {
              return (
                <BasketItem
                  key={id}
                  title={title}
                  price={price}
                  rating={rating}
                  imgUrl={imgUrl}
                  id={id}
                />
              );
            })}
          </div>
        </div>
        <div className="payment__section payment__method">
          <div className="payment__title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment__details">
            {/*Stripe Magic */}
            <form >
              <CardElement onChange={handleChange} />
              <div className="payment__priceContainer">
                <CurrencyFormat
                  renderText={(value) => {
                    return (
                      <>
                        <p className="payment__price">Total {value} </p>
                      </>
                    );
                  }}
                  decimalScale={1}
                  value={getBasketTotal(basket)}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"₹"}
                />
                <button
                  className="payNow__btn"
                  disabled={processing || disabled || succeeded||!user}
                >
                  <span>
                    {processing
                      ? "Processing"
                      : succeeded
                      ? "Success"
                      : "Pay Now"}
                  </span>
                </button>
                {error && <div>{error}</div>}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
