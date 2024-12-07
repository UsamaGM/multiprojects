import { useId } from "react";
import PropTypes from "prop-types";

function CurrencyInput({
  title,
  amount,
  amountDisabled = false,
  onAmountChange,
  selectedCurrency,
  currencyDisabled = false,
  onCurrencyChange,
  currencyOptions = [],
}) {
  const id = useId();

  return (
    <div className="flex flex-wrap bg-white/50 backdrop-blur-sm gap-3 p-3 rounded-xl">
      <div className="flex flex-wrap flex-col flex-1">
        <label className="text-gray-800 font-bold" htmlFor={id}>
          {title}
        </label>
        <input
          className="py-1 px-3 rounded-md"
          type="number"
          id={id}
          value={amount}
          disabled={amountDisabled}
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
        />
      </div>
      <div className="flex flex-wrap flex-col">
        <label className="text-gray-800 font-bold">Curency</label>
        <select
          className="py-1 px-3 rounded-md"
          name="options"
          value={selectedCurrency}
          disabled={currencyDisabled}
          onChange={(e) => {
            onCurrencyChange && onCurrencyChange(e.target.value);
          }}
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

CurrencyInput.propTypes = {
  title: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  amountDisabled: PropTypes.bool,
  onAmountChange: PropTypes.func.isRequired,
  selectedCurrency: PropTypes.string.isRequired,
  currencyDisabled: PropTypes.bool,
  onCurrencyChange: PropTypes.func.isRequired,
  currencyOptions: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default CurrencyInput;
