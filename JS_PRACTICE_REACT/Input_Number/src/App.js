import "./App.css";

import React from "react";
import { InputNumber } from "./components/inputNumber";
import { Message } from "./components/Message";
import { useState } from "react";

export const App = () => {
  const [num, setNum] = useState(undefined);
  const onChange = (number) => {
    setNum(number);
  };

  return (
    <div>
      <InputNumber onChange={onChange} />
      <Message num={num} />
    </div>
  );
};
