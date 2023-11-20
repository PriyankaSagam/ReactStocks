import React from 'react';
import { Link } from 'react-router-dom';
import { stockData } from '/src/data.jsx'

function Dashboard() {
  return (
      <div>
          <h3>
              Dashboard
          </h3>
      <ul>
        {stockData.map((stock) => (
          <li key={stock.symbol}>
            <Link to={`/stocks/${stock.symbol}`}>
              <strong>{ stock.symbol}</strong> - {stock.name}
            </Link>
            {/* <strong>{ stock.symbol}</strong> - {stock.name} */}

          </li>
        ))}
          </ul>
      
       </div>
  )
}

export default Dashboard