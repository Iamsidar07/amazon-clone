import React from "react";
import { useStateValue } from "../StateProvider";
import "./BasketItem.css";
const BasketItem = ({id,title,imgUrl,rating,price}) => {
  const [{basket},dispatch]=useStateValue();
  const removeFromBasket=()=>{
 
    dispatch({
      type:"REMOVE_FROM_BASKET",
      id:id,
    })
  }
  return (
          <div className="basketItem">
            <div className="basketItem__imageContainer">
              <img src={imgUrl} alt="" className="basketItem__image" />
            </div>
            <div className="basketItem__description">
        <p>{title}</p>
        <small>$</small>
        <strong>{price}</strong>
        <div className="ratings">
          {
            Array(rating).fill().map((star,i)=>{
              return <p key={i}>⭐</p>
            })
          }
        </div>
        
        <button onClick={removeFromBasket} className="basketItem__removeFromBasketBtn">
          Remove from the Basket
        </button>
      </div>
      </div>
  );
        } 
export default BasketItem;
