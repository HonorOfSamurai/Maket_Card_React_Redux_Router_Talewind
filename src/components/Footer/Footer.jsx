import React from "react";
import "./footer.css";

// grid grid-cols-4 gap-7 p-7

export default function Footer() {
  return (
    <div className="flex flex-wrap items-center justify-between mb-5 bg-gray-200 mt-8 gap-5">
      {/* Первая колонка */}
      <div className="">
        <p className="font-bold text-base leading-tight mb-4 font-sans max-w-xs">
          Подпишитесь на нашу рассылку и узнавайте о акциях быстрее
        </p>
        <form className="flex flex-wrap items-center gap-3">
          <input
            className="border-0 h-10 rounded-0 w-48 sm:w-64 md:w-auto px-2 mr-2"
            type="email"
            placeholder="Введите ваш email"
          />
          <button className="bg-blue-600 h-10 px-4 rounded text-white">
            Отправить
          </button>
        </form>
      </div>

      {/* Вторая колонка */}
      <ul className="list-none m-0 p-0">
        <li className="mb-2">
          <strong>Информация</strong>{" "}
        </li>
        <li className="mb-2">О компании</li>
        <li className="mb-2">Контакты</li>
        <li className="mb-2">Акции</li>
        <li className="mb-2">Магазины</li>
      </ul>

      {/* Третья колонка */}
      <ul className="list-none m-0 p-0">
        <li className="mb-2">
          <strong>Интернет-магазин</strong>
        </li>
        <li className="mb-2">Доставка и самовывоз</li>
        <li className="mb-2">Оплата</li>
        <li className="mb-2">Возврат-обмен</li>
        <li className="mb-2">Новости</li>
      </ul>

      {/* Четвертая колонка */}
      <div className="flex items-center justify-center">
        <img src="/images/footer-img/insta.svg" alt="" className="h-6 mx-2" />
        <img
          src="/images/footer-img/Vector (2).png"
          alt=""
          className="h-6 mx-2"
        />
        <img
          src="/images/footer-img/Vector (1).png"
          alt=""
          className="h-6 mx-2"
        />
        <img src="/images/footer-img/youtube.svg" alt="" className="h-6 mx-2" />
      </div>
    </div>
  );
}
