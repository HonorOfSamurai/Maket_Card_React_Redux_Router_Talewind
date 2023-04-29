import React from "react";
import Filter from "../Filter/Filter";

export default function Mobilemenu() {
  return (
    <div className="pt-20 px-5 absolute top-0 left-0 right-0 bottom-0 bg-white z-10">
      <div>
        <menu>
          <ul className="flex gap-4 items-start flex-col justify-between">
            <li>
              <a className=" text-xl font-bold " href="/">
                Магазины
              </a>
            </li>
            <li>
              <a className="text-xl font-bold" href="/">
                Акции
              </a>
            </li>
            <li>
              <a href="/" className="text-xl font-bold">
                Доставка и оплата
              </a>
            </li>
          </ul>
        </menu>
        <Filter />
      </div>
    </div>
  );
}
