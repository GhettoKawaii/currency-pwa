import React from "react";
import "./styles/CoinsBlock.scss";

export default function CoinsBlock({
  img_url,
  currName,
  greetings,
  RUB,
  USD,
  UAH,
  selectCoin,
  className
}) {
  return (
    <div className={className} onClick={() => selectCoin(currName)}>
      <div className="curr-face">
        <img src={img_url} alt="currency" />
        <span>{currName}</span>
      </div>
      <div className="curr-values-container">
        <div>
          <p>USD: </p>
          <p>UAH: </p>
          <p>RUB: </p>
        </div>
        <div>
          <p>{USD}</p>
          <p>{UAH}</p>
          <p>{RUB}</p>
        </div>
      </div>
    </div>
  );
}
