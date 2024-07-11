/**
 * Необходимо реализовать функциональный компонент InputNumber, в котором нужно
 * ввести число в input и в зависимости отрицательное или положительное это число
 * в компоненте Message нужно выводить информацию: ”Число больше нуля” / “Число меньше нуля”.
 */

import React from "react";

export const InputNumber = ({ onChange }) => {
  const onChangeInput = (e) => onChange(e.target.value);

  return <input type="number" onChange={onChangeInput} />;
};
