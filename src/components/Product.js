import React from "react";
import { Link } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import "./Product.css";
const Product = ({ title, price, rating, imgUrl, id }) => {
  const [{ basket }, dispatch] = useStateValue();
  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        price: price,
        rating: rating,
        imgUrl: imgUrl,
      },
    });
  };
  return (
    <div className="product" id={id}>
      <div className="product__description">
        <p>{title}</p>
        <span>₹</span>
        <strong>{price}</strong>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((start, i) => {
              return <p key={i}>⭐</p>;
            })}
        </div>
      </div>
      <div className="product__image">
        <img src={imgUrl} alt="" />

        <button onClick={addToBasket} className="product__addToBasketBtn">
          Add to Basket
        </button>
      </div>
    </div>
  );
};

export default Product;
