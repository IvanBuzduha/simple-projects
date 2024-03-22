import axios from "axios";
import { useEffect, useState } from "react";
import CurrencyInput from "./CurrencyInput";

const CurrencySection = () => {
  const [firstAmount, setFirstAmount] = useState(1);
  const [secondAmount, setSecondAmount] = useState(1);
  const [firstCurrency, setFirstCurrency] = useState("USD");
  const [secondCurrency, setSecondCurrency] = useState("UAH");

  const [rates, setRates] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.apilayer.com/fixer/latest?base=USD&apikey=FvbfVOffI0XO7G3BKRSPohlQUb2Y5feX"
      )
      .then((response) => {
        console.log("res :>> ", response.data);
        setRates(response.data.rates);
      });
  }, []);

  useEffect(() => {
    if (!!rates) {
      function init() {
        handleFirstAmountChange(1);
      }
      init();
    }
  }, [rates]);
  function amountOfSymbolsAfterTheDot(number) {
    return number.toFixed(3);
  }

  function handleFirstAmountChange(firstAmount) {
    setSecondAmount(
      amountOfSymbolsAfterTheDot(
        (firstAmount * rates[secondCurrency]) / rates[firstCurrency]
      )
    );
    setFirstAmount(firstAmount);
  }

  function handleFirstCurrencyChange(firstCurrency) {
    setSecondAmount(
      amountOfSymbolsAfterTheDot(
        (firstAmount * rates[secondCurrency]) / rates[firstCurrency]
      )
    );
    setFirstCurrency(firstCurrency);
  }

  function handleSecondAmountChange(secondAmount) {
    setFirstAmount(
      amountOfSymbolsAfterTheDot(
        (secondAmount * rates[firstCurrency]) / rates[secondCurrency]
      )
    );
    setSecondAmount(secondAmount);
  }

  function handleSecondCurrencyChange(secondCurrency) {
    setFirstAmount(
      amountOfSymbolsAfterTheDot(
        (secondAmount * rates[firstCurrency]) / rates[secondCurrency]
      )
    );
    setSecondCurrency(secondCurrency);
  }
  return (
    <>
      <h1 className="currencyTitle">Currency Converter</h1>
      <CurrencyInput
        onAmountChange={handleFirstAmountChange}
        onCurrencyChange={handleFirstCurrencyChange}
        currencies={Object.keys(rates)}
        amount={firstAmount}
        currency={firstCurrency}
      />
      <CurrencyInput
        onAmountChange={handleSecondAmountChange}
        onCurrencyChange={handleSecondCurrencyChange}
        currencies={Object.keys(rates)}
        amount={secondAmount}
        currency={secondCurrency}
      />
    </>
  );
};

export default CurrencySection;
