import React from "react";
import BasketItem from "./BasketItem";
import "./CheckOut.css";
import Total from "./Total";
import { useStateValue } from "../StateProvider";

function CheckOut() {
  const [{ basket,user }, dispatch] = useStateValue();
  return (
    <div className="checkout">
      <img
        className="checkout__banner"
        src="data:image/jpeg;base64,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"
        alt=""
      />
      <div className="checkout__right">
        <p className="checkout__title">hey,<strong> {user?.displayName||user?.email} </strong>Your baskets</p>
        <Total value={2} />
      </div>

      <div className="checkout__container">
        <div className="checkout__left">

          {
            basket?.map(({id,title,price,rating,imgUrl})=>{
              return  <BasketItem key={id}
                title={title}
                price={price}
                rating={rating}
                imgUrl={imgUrl}
                id={id}
              />
            })
          }

         
         
        </div>
      </div>
    </div>
  );
}

export default CheckOut;
