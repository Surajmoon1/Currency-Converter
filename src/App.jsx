import { useState } from "react";
import useCurrencyInfo from "./hooks/useCurrencyInfo";
import Input from "./components/Input";

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);

  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };
  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat "
      style={{
        backgroundImage: `url('https://previews.123rf.com/images/alexan107/alexan1072202/alexan107220200096/182699888-white-currency-sign-with-glowing-light-on-dark-background-include-dollar-yuan-yen-pound-sterling-and.jpg')`,
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            <div className="w-full mb-1">
              <Input
                label="From"
                amount={amount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setFrom(currency)}
                selectCurrency={from}
                onAmountChange={(amount) => setAmount(amount)}
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute z-10 left-1/2 -translate-x-1/2 -translate-y-1/2 border-2  rounded-md bg-gray-700 text-white px-2 py-0.5 hover:bg-gray-800 hover:border-blue-500"
                onClick={swap}
              >
                Swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <Input
                label="To"
                amount={convertedAmount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setTo(currency)}
                selectCurrency={to}
                amountDisable
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gray-700 text-white px-4 py-3 rounded-lg hover:bg-gray-800 border-2 hover:border-blue-500"
            >
              Convert {from.toLocaleUpperCase()} To {to.toLocaleUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
