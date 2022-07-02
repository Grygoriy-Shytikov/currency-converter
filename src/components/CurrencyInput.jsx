import React from "react";
import styled from "styled-components";

const CurrencyInput = ({
  onAmountChange,
  onCurrencyChange,
  currencies,
  amount,
  currency,
}) => {
  return (
    <StyledCurrencyInput>
      <input
        type="number"
        value={amount}
        onChange={(e) => onAmountChange(e.target.value)}
      />
      <select
        value={currency}
        onChange={(e) => onCurrencyChange(e.target.value)}
      >
        {currencies.map((currency) => (
          <option key={currency.cc} value={currency.cc} title={currency.txt}>
            {currency.cc}
          </option>
        ))}
      </select>
    </StyledCurrencyInput>
  );
};

const StyledCurrencyInput = styled.div`
  display: flex;

  input,
  select {
    height: 45px;
    padding: 10px;
    margin-bottom: 10px;

    font-size: 1rem;
    font-weight: bold;
    color: #00507a;
    background-color: #d0e8ff;
  }

  input {
    margin-left: 5px;
    width: 200px;
    border-radius: 10px 0 0 10px;
  }

  select {
    margin-right: 5px;
    width: 80px;
    border-radius: 0 10px 10px 0;
  }

  @media (max-width: 560px) {
    input {
      width: 160px;
    }
  }
`;

export default CurrencyInput;
