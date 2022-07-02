const BASE_URL = "https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange";

const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1;

  if (month < 10) {
    return `0${month}`;
  } else {
    return month;
  }
};

const getCurrentDay = () => {
  const day = new Date().getDate();

  if (day < 10) {
    return `0${day}`;
  } else {
    return day;
  }
};

const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currentDate = `${currentYear}${currentMonth}${currentDay}`;

export const currentDate2 = `${currentDay}.${currentMonth}.${currentYear}`;

export const getApi = async () => {
  const response = await fetch(`${BASE_URL}?&date=${currentDate}&json`);
  return await response.json();
};

export const getUAH = {
  r030: 980,
  txt: "Гривня",
  rate: 1,
  cc: "UAH",
  exchangedate: currentDate2,
};
