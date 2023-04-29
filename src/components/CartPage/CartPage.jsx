import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, addToCart } from "../../redux/cartSlice";
import Empty from "../EmptyCard/Empty";
import Header from "../Header/Header";

export default function CartPage() {
  const { totalPrice, products } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  function removeProduct(product) {
    dispatch(removeFromCart(product));
  }

  function addProduct(product) {
    dispatch(addToCart(product));
  }

  return (
    <div className="container">
      <Header />
      {products.length === 0 ? (
        <Empty />
      ) : (
        <div>
          <p className="ml-8 bg-green-500 text-white font-bold py-2 px-4 mt-3 rounded-md mb-4 inline-block">
            Total price: {Math.round(totalPrice.toFixed(2))} ₽
          </p>
          {products.map((item) => {
            console.log(item);
            return (
              <div className="flex flex-col md:flex-row w-full mb-4">
                <div className="w-full md:w-1/3 p-4">
                  <div className="max-w-xs mx-auto rounded overflow-hidden shadow-lg">
                    <img className="w-full" src={item.image} alt="" />
                  </div>
                </div>

                <div className="md:w-2/3 p-4 gap-3">
                  <div className="max-w-xs mx-auto rounded overflow-hidden shadow-lg">
                    <div className="px-6 py-4">
                      <h2 className="font-bold text-xl mb-2">
                        Наименование товара
                      </h2>
                      <p className="text-gray-700 text-base">{item.title}</p>
                      <h2 className="font-bold text-xl mb-2">Цена товара</h2>
                      <p className="text-gray-700 text-base">{item.price} ₽</p>
                      <div className="flex justify-between mt-2">
                        <button className="block mx-auto mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 h-10 rounded-md mr-4">
                          Купить
                        </button>

                        <div className="mx-auto bg-gray-600 text-white font-bold py-2 px-4 mt-4 rounded-md mb-4 flex justify-around h-10 gap-3 ">
                          <div
                            onClick={() =>
                              removeProduct({
                                price: item.price,
                                id: item.id,
                              })
                            }
                            className="cursor-pointer "
                          >
                            {item.count === 1 ? (
                              <img
                                className="w-6 h-6"
                                src="/images/trash-48.png"
                                alt=""
                              />
                            ) : (
                              "-"
                            )}
                          </div>
                          <div>{item.count}</div>
                          <div
                            onClick={() =>
                              addProduct({ id: item.id, price: item.price })
                            }
                            className="cursor-pointer"
                          >
                            +
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
