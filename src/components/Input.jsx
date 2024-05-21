import React, { useId } from "react";

function Input({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "INR",
  amountDisable = false,
  currencyDisable = false,
}) {
  const amountId = useId();
  return (
    <div className="bg-black opacity-80 p-3 rounded-lg text-sm flex text-white">
      <div className="w-1/2">
        <label htmlFor={amountId} className="text-white mb-2 inline-block">
          {label}
        </label>
        <input
          id={amountId}
          type="number"
          className="outline-none w-full bg-transparent py-1.5"
          placeholder="Amount"
          disabled={amountDisable}
          value={amount}
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-white mb-2 w-full">Currency Type</p>
        <select
          name=""
          id=""
          className="rounded-lg px-1 py-1 bg-gray-700 cursor-pointer outline-none"
          value={selectCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          disabled={currencyDisable}
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency.toUpperCase()}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default Input;
