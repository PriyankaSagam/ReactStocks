import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import { stockData } from '/src/data.jsx'


function Stocks() {
  const { symbol } = useParams();
  console.log(symbol);
  const stock = stockData.find((s) => s.symbol === symbol);

  if (!stock) {
    return <p>Some issue with this stock</p>;
  }

  return (
    <div>
      <h2>{stock.name} {stock.symbol}</h2>
      <h4>{stock.lastPrice}</h4>
      <h4>{stock.change}</h4>
      <h4>{stock.high}</h4>
      <h4>{stock.low}</h4>
      <h4>{stock.open}</h4>
    </div>
  )
  
};
 


export default Stocks