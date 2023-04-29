import React, { useState, useEffect } from "react";
import "./productDetail.css";
import { addToCart } from "../../redux/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import Header from "../Header/Header";
import Filter from "../Filter/Filter";

export default function ProductDetail(props) {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  const [product, setProduct] = useState({});
  const { id } = useParams();
  console.log(products);

  useEffect(() => {
    setProduct(products.find((product) => product.id === +id));
  }, []);

  function handleAddToCart() {
    dispatch(
      addToCart({
        id: product.id,
        title: product.title,
        image: product.image,
        price: product.price,
        count: 1,
      })
    );
  }

  return (
    <div className="container">
      < Header/>
      <Filter/>
      <div className="flex items-center justify-between mt-5">
        <div
  
          className="max-w-lg text-center mr-100 px"
        >
          
          <img className="w-110 h-80" src={product?.image} alt="Hydrocycle" />
          <p className="text-4xl font-bold mt-4 mb-2">{product?.price}₽</p>
        </div>
        <div className="max-w-xl flex items-start">
          <div>
            <h1 className="text-2xl font-bold mb-2">
              {product?.title}
            </h1>
            <div className="mt-3 text-text_color grid grid-cols-2">
              <div className="">
                <p className="row">Производитель</p>
                <p className="row">Количество мест, шт: </p>
                <p className="row">Мощность, л.с.</p>
                <p className="row">Тип двигателя</p>
                <p className="row">Год выпуска</p>
              </div>
              <div className="max-w-[150px]">
                <p className="row">Канада</p>
                <p className="row">3</p>
                <p className="row">155</p>
                <p className="row">Бензиновый</p>
                <p className="row">2018</p>
              </div>
            </div>
            <div className="flex gap-5">
               <button onClick={handleAddToCart} className="bg-blue-600 flex h-10 px-4 rounded mb-2 items-center text-white">
            Add to Cart
          </button>
            <button className="bg-blue-600 h-10 px-4 rounded text-white">
              Купить
            </button>
            </div>
           
          </div>
        </div>
      </div>
    </div>
  );
}
