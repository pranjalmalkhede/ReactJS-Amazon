import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "../context/StateProvider";
import Rating from "@material-ui/lab/Rating";

function CheckoutProduct({
  id,
  image,
  title,
  price,
  rating,
  hideButton,
  quantity,
}) {
  const [, dispatch] = useStateValue();

  const removeFromBasket = () => {
    // remove the item from the basket
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src={image} alt="" />

      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct__rating">
          {<Rating name="read-only" value={rating} readOnly precision={0.5} />}
        </div>
        {!hideButton && (
          <button onClick={removeFromBasket}>Remove from Basket</button>
        )}
        {quantity}
      </div>
    </div>
  );
}

export default CheckoutProduct;
