/**
 * Создать компонент, которому передаем текст (3-4 предложения с точкой в конце каждого
 * предложения). Компонент выводит только первое предложение. И есть кнопка
 * "Показать подробнее" - при клике на неё выводиться вместо одного предложения весь
 * текст. После этого, при нажатии на кнопку текст можно закрыть и должно отображаться одно предложение.
 */

import React from "react";
import { useState } from "react";
import "../App.css";

export const Summary = ({ text }) => {
  const [isOpen, setIsOpen] = useState(false);

  const onClick = () => setIsOpen((prev) => !prev);

  return (
    <div className="container">
      <p>{isOpen ? text : text.split(". ")[0] + "..."}</p>
      <button onClick={onClick}>{isOpen ? "Скрыть подробнее" : "Показать подробнее"}</button>
    </div>
  );
};
