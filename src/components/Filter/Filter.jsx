import React from "react";
import "./filter.css";

export default function Filter() {
  return (
    <div className=" filter flex flex-wrap justify-between gap-8 bg-main p-4 text-xl capitalize">
      <div>Квадроциклы</div>
      <div>Катера</div>
      <div>Гидроциклы</div>
      <div>Лодки</div>
      <div>Вездеходы</div>
      <div>Снегоходы</div>
      <div>Двигатели</div>
      <div>Запчасти</div>
    </div>
  );
}
