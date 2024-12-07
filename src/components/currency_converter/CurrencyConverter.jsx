import { useState } from "react";
import useCurrencyInfo from "../../hooks/useCurrencyInfo";
import CurrencyInput from "./CurrencyInput";

function CurrencyConverter() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("pkr");
  const [to, setTo] = useState("usd");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);

  function convert() {
    setConvertedAmount(amount * currencyInfo[to]);
  }

  function switchCurrencies() {
    setFrom(to);
    setTo(from);
    setAmount(convertedAmount);
    setConvertedAmount(amount);
  }

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center"
      style={{
        backgroundImage: `url(https://images.pexels.com/photos/47344/dollar-currency-money-us-dollar-47344.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)`,
        backgroundSize: "cover",
      }}
    >
      <div className="w-2/3 max-w-md flex flex-wrap flex-col px-5 py-3 gap-3 rounded-2xl bg-opacity-75 bg-gray-800/50 backdrop-blur-sm border-gray-200 border-2">
        <h1 className="text-2xl text-center font-bold text-gray-200">
          Currency Converter
        </h1>
        <CurrencyInput
          title="From"
          amount={amount}
          onAmountChange={(value) => setAmount(value)}
          selectedCurrency={from}
          currencyOptions={options}
          onCurrencyChange={(value) => setFrom(value)}
        />
        <button
          className="-m-4 w-min self-center bg-gray-600 rounded-xl px-5 py-1 z-10 "
          onClick={switchCurrencies}
        >
          Switch
        </button>
        <CurrencyInput
          title="To"
          amount={convertedAmount}
          onAmountChange={() => {}}
          amountDisabled
          selectedCurrency={to}
          currencyOptions={options}
          onCurrencyChange={(value) => setTo(value)}
        />
        <button className="bg-gray-200 px-3 py-1 rounded-xl" onClick={convert}>
          Convert
        </button>
      </div>
    </div>
  );
}

export default CurrencyConverter;
