import React from "react";
import { Link } from "react-router-dom";
import Header from "../Header/Header";

export default function Empty() {
  return (
    <div class="bg-gray-200 p-6 flex justify-start rounded-lg mt-3">
      <div class="flex flex-col  justify-start">
        <Link to="/">
          <img src="/images/shopping-cart.svg" alt="" class="h-24 w-24 mb-4" />
        </Link>

        <h2 class="text-black text-2xl font-bold mb-2">Oops, empty!</h2>
        <p class="text-black text-center">
          Your cart is empty, open the catalog and choose the best one from
          millions item
        </p>
      </div>
    </div>
  );
}
