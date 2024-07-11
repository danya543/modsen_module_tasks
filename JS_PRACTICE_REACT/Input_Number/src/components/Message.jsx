import React from "react";

export const Message = ({ num }) => {
  const message = num && (num == 0 ? "" : num > 0 ? "Число больше нуля" : "Число меньше нуля");

  return <div>{message}</div>;
};
