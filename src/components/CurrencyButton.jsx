import React from "react";
import "./styles/CurrencyButton.scss";

export default function CurrencyButton({
  currName,
  selectCurrency,
  className
}) {
  return (
    <button className={className} onClick={() => selectCurrency(currName)}>
      {currName}
    </button>
  );
}
