import { useState } from 'react';
import './App.css';

function App() {
  const [ticker, setTicker] = useState('');
  // const [stockData, setStockData] = useState({});
  // const [stockList, setStockList] = useState([]);
  // console.log(process.env.api_key);
  // const apiKey = process;

  return (
    <>
      <div>
        <input
          type='text'
          value={ticker}
          onChange={(e) => setTicker(e.target.value.toLocaleUpperCase())}
          maxLength={4}
          min={1}
        />
        <button>Search</button>
        <p>You searhed for Ticker: {ticker}</p>
      </div>
    </>
  );
}

export default App;
