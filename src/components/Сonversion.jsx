import React, { useState, useEffect } from "react";
import styled from "styled-components";
import CurrencyInput from "./CurrencyInput";
import Loader from "./Loader";

const Conversion = ({ data, isloading }) => {
  const [amount1, setAmount1] = useState(1);
  const [amount2, setAmount2] = useState(1);
  const [currency1, setCurrency1] = useState("USD");
  const [currency2, setCurrency2] = useState("UAH");

  useEffect(() => {
    if (!isloading) {
      function init() {
        handleAmount1Change(1);
      }
      init();
    }
  }, [data]);

  function format(number) {
    return number.toFixed(4);
  }

  function handleAmount1Change(amount1) {
    const rate1 = data.find((el) => el.cc === currency2).rate;
    const rate2 = data.find((el) => el.cc === currency1).rate;

    setAmount2(format((amount1 * rate2) / rate1));
    setAmount1(amount1);
  }

  function handleAmount2Change(amount2) {
    const rate1 = data.find((el) => el.cc === currency2).rate;
    const rate2 = data.find((el) => el.cc === currency1).rate;

    setAmount1(format((amount2 * rate1) / rate2));
    setAmount2(amount2);
  }

  function handleCurrency1Change(currency1) {
    const rate1 = data.find((el) => el.cc === currency2).rate;
    const rate2 = data.find((el) => el.cc === currency1).rate;

    setAmount2(format((amount1 * rate2) / rate1));
    setCurrency1(currency1);
  }

  function handleCurrency2Change(currency2) {
    const rate1 = data.find((el) => el.cc === currency2).rate;
    const rate2 = data.find((el) => el.cc === currency1).rate;

    setAmount1(format((amount2 * rate1) / rate2));
    setCurrency2(currency2);
  }

  return (
    <StyldedConversion>
      <h1>Конвертувати</h1>
      {isloading ? (
        <Loader />
      ) : (
        <>
          <CurrencyInput
            onAmountChange={handleAmount1Change}
            onCurrencyChange={handleCurrency1Change}
            currencies={data}
            amount={amount1}
            currency={currency1}
          />
          <CurrencyInput
            onAmountChange={handleAmount2Change}
            onCurrencyChange={handleCurrency2Change}
            currencies={data}
            amount={amount2}
            currency={currency2}
          />
        </>
      )}
    </StyldedConversion>
  );
};

const StyldedConversion = styled.div`
  width: 100%;
  margin: 20px auto;

  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    color: #daedff;
    margin: 20px 0 40px;
  }
`;

export default Conversion;
