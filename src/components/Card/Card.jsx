import React from "react";
import { Link } from "react-router-dom";
import "./card.css";
import { addToCart } from "../../redux/cartSlice";
import { useDispatch } from "react-redux";

export default function Card(props) {
  const { title, price, image, onAddToCart } = props;
  const dispatch = useDispatch();
  function handleAddToCart() {
    dispatch(
      addToCart({
        id: props.id,
        title: props.title,
        image: props.image,
        price: props.price,
        count: 1,
      })
    );
  }

  return (
    <div className="cart transition-all text-center bg-white p-4 relative rounded-sm">
      <img className="cart__image" src={image} alt="" />
      <p className="mb-6 text-lg text-text_color">{title}</p>
      <p className="text-3xl text-black font-bold ">{price}</p>
      <div
        onClick={handleAddToCart}
        className="absolute bottom-0 right-0 bg-blue-600 p-2 rounded-tl-lg cursor-pointer"
      >
        <img src="/images/cart2.svg" alt="" />
      </div>
      <Link to={`${props.id}`}>
        <div className="show-product absolute left-1/2 top-1/2 bg-white p-3 rounded-sm -translate-y-1/2">
          Посмотреть товар
        </div>
      </Link>
    </div>
  );
}
