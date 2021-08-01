import React, { useState, useEffect, Fragment } from 'react';
import Header from './components/Header/Header'
import Products from './components/Products/Products';

const App = () => {

  const [exchangeRates, setExchangeRates] = useState(null);
  const [currency, setCurrency] = useState("INR");

  useEffect(() => {
    async function fetchMyAPI() {
      let data = await fetch('https://v6.exchangerate-api.com/v6/8f1a1ba13649a96e627c9383/latest/INR');
      data = await data.json();
      setExchangeRates(data.conversion_rates);
    }
    fetchMyAPI();
  }, [])

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  return (
    <Fragment>
      <Header handleCurrencyChange={handleChange} />
      <Products exchangeRates={exchangeRates} currency={currency} />
    </Fragment>
  );
}

export default App;
