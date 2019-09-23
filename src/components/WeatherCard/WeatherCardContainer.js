import React from "react";
import data from "./WeatherCardData";
import WeatherCard from "./WeatherCard";

const WeatherCardContainer = () => {
  return <WeatherCard cards={data.cards}></WeatherCard>;
};

export default WeatherCardContainer;
