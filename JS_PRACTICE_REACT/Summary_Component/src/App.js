import "./App.css";
import { Summary } from "./components/Summary";

import React from "react";

export const App = () => {
  const text =
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti cupiditate odio maiores nemo, saepe. Facere ad error temporibus illum dicta vel qui beatae quae totam suscipit aliquid. Suscipit, numquam nemo.";
  return <Summary text={text} />;
};
