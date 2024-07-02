/**
 * Реализовать форму c помощью функциональных компонентов, в форме
 * должно быть реализовано одно поле и значение этого поля нужно выводить в
 * консоль после нажатия на кнопку, которая находится тоже в форме. Нужно использовать
 * хук useRef для того, чтобы вывести значение, которое введено в input.
 * */

import React from "react";
import { useRef } from "react";

export const Form = () => {
  const inputRef = useRef("");
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(`Вы ввели : "${inputRef.current.value}"`);
    inputRef.current.value = "";
  };
  return (
    <form onSubmit={onSubmit}>
      <input type="text" ref={inputRef} />
      <input type="submit" value="SUBMIT" />
    </form>
  );
};
