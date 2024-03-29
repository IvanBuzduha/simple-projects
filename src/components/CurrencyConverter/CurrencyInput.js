import PropTypes from "prop-types";
import "./currencyInput.css";

function CurrencyInput(props) {
  return (
    <>
      <div className="currency-section">
        <input
          className="currency-input"
          type="text"
          value={props.amount}
          onChange={(ev) => props.onAmountChange(ev.target.value)}
        />
        <select
          className="currency-select"
          value={props.currency}
          onChange={(ev) => props.onCurrencyChange(ev.target.value)}
        >
          {props.currencies.map((currency) => (
            <option value={currency}>{currency}</option>
          ))}
        </select>
      </div>
    </>
  );
}

CurrencyInput.propTypes = {
  amount: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired,
  currencies: PropTypes.array,
  onAmountChange: PropTypes.func,
  onCurrencyChange: PropTypes.func,
};

export default CurrencyInput;
