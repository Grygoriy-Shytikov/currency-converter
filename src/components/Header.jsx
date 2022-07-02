import React from "react";
import styled from "styled-components";
import Logo from "../img/logo.svg";
import Loader from "./Loader";

const Header = ({ data, currentDate, isloading }) => {
  const filtredData = data.filter(
    (currency) => currency.cc === "USD" || currency.cc === "EUR"
  );

  return (
    <StyledHeader>
      <div className="container">
        <StyledLogo href="">
          <img src={Logo} alt="logo" />
          <p>
            Курс валют на сьогодні <br />
            <span>{currentDate}</span>
          </p>
        </StyledLogo>
        {isloading ? (
          <Loader />
        ) : (
          <StyledInfo>
            {filtredData.map((currency) => (
              <div key={currency.cc}>
                <p>{currency.txt}</p>
                <span>
                  {currency.cc}: {currency.rate}
                </span>
              </div>
            ))}
          </StyledInfo>
        )}
      </div>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  width: 100%;
  background-color: #daedff;

  .container {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;

    margin: 0 auto;

    width: 100%;
    max-width: 1200px;
    height: 90px;
    padding: 20px;
    background-color: #daedff;

    @media (max-width: 560px) {
      flex-direction: column;
      height: 160px;
    }
  }
`;

const StyledLogo = styled.a`
  display: flex;
  flex-direction: row;
  align-items: center;

  color: #00507a;
  font-size: 1.5rem;

  @media (max-width: 560px) {
    width: 100%;
    justify-content: space-between;
    text-align: end;
  }

  img {
    display: block;
    margin-right: 10px;
    width: 60px;
    height: 60px;
  }

  span {
    font-size: 1.2rem;
    font-weight: bold;
  }
`;

const StyledInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  color: #00507a;

  @media (max-width: 560px) {
    align-self: flex-end;
  }

  div {
    display: flex;
    align-items: center;
    margin-left: 20px;
    font-size: 1.1rem;

    span {
      margin: 5px 0 5px 5px;
      font-weight: bold;
    }
  }
`;

export default Header;
