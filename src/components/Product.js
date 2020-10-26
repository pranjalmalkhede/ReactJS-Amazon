import React from "react";
import { useStateValue } from "../context/StateProvider";
import "./Product.css";
import Rating from "@material-ui/lab/Rating";

function Product({ id, title, image, price, rating, category }) {
  const [, dispatch] = useStateValue();

  const addToBasket = () => {
    // dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
        category: category,
      },
    });
  };

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {<Rating name="read-only" value={rating} readOnly precision={0.5} />}
        </div>
      </div>

      <img src={image} alt="" />

      <span className="a-button" onClick={addToBasket}>
        Add to Basket
      </span>
    </div>
  );
}

export default Product;
