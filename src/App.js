import React, { useState, useEffect } from "react";

import { getUAH, getApi, currentDate2 } from "./api";

import GlobalStyle from "./components/GlobalStyle";
import Header from "./components/Header";
import Conversion from "./components/Сonversion";

function App() {
  const [isloading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    getApi().then((resulut) => {
      setIsLoading(false);
      let res = resulut;
      res.push(getUAH);
      return setData(res);
    });
  }, []);

  return (
    <div className="App">
      <GlobalStyle />
      <Header isloading={isloading} data={data} currentDate={currentDate2} />
      <Conversion data={data} isloading={isloading} />
    </div>
  );
}

export default App;
