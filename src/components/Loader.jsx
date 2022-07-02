import React from "react";

import styled from "styled-components";
import LoaderImg from "../img/loader.svg";

const Loader = () => {
  return (
    <StyledLoader>
      <img src={LoaderImg} alt="Loader" />
    </StyledLoader>
  );
};

const StyledLoader = styled.div`
  animation: rotate 1s linear infinite;
  margin-right: 30px;
  width: 40px;
  height: 40px;

  img {
    display: block;
    width: 40px;
    height: 40px;
  }

  @keyframes rotate {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default Loader;
