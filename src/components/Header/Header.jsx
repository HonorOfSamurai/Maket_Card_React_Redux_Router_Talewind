import React from "react";
import "./header.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Mobilemenu from "../MobileMenu/Mobilemenu";

export default function Header(props) {
  const [show, setShow] = React.useState(false);
  const count = useSelector((state) => state.cart.count);
  if (show) {
    document.body.style.overflow = "hidden";
    document.body.style.overflow = "scroll";
  }

  return (
    <div className="flex items-center justify-between mb-5   ">
      <menu className="hidden sm:block">
        <nav>
          <ul className="flex gap-4 items-center justify-between">
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
        </nav>
      </menu>
      <div className="relative z-50">
        <Link to="/">
          <img className="" src="/images/logo.png" alt="" />
        </Link>
      </div>

      <li className="flex items-center justify-between">
        <img className="ml-9" src="/images/Group.png" alt="" />
        <a href="/" className="text-xl font-bold ml- ">
          Москва, ул. Науки 25
        </a>
      </li>
      <div className="flex gap-5 ">
        <Link to="/cart" className=" gap-4 hidden sm:flex" href="/">
          <img src="/images/footer-img/hurt.svg" alt="" />
          <img src="/images/footer-img/man.svg" alt="" />
          <img src="/images/Cart.png" alt="" />
          <span className=" w-5 h-5 flex items-center justify-center text-white rounded-full bg-blue-700">
            {count}
          </span>
        </Link>
        <div className="relative z-50" onClick={() => setShow(!show)}>
          <img
            className=" sm:hidden w-10 h-10 cursor-pointer"
            src="/images/burger.png"
            alt=""
          />
        </div>
      </div>
      {show ? <Mobilemenu /> : null}
    </div>
  );
}
