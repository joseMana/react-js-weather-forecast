import React from "react";
import { TableRow, TableCell } from "@material-ui/core";
import Forecast from "../models/Forecast";

type Props = {
  forecast: Forecast;
};

const convertNumberToDateString = (value: number) =>
  new Date(value * 1000).toDateString();
const convertNumberToTimeString = (value: number) =>
  new Date(value * 1000).toLocaleTimeString();

function WeatherListItem(props: Props) {
  const forecast = props.forecast;

  var rowStyle = (forecast.temperatureMax >= 35.00) ? {backgroundColor:'red'} : {backgroundColor:'white'};
  var humidityIcon = (forecast.precipProbability >= 0.5) ? <img src='water.ico'></img> : "";

  return (
    <TableRow style={rowStyle}>
      <TableCell>{convertNumberToDateString(forecast.time)}</TableCell>
      <TableCell>{convertNumberToTimeString(forecast.sunriseTime)}</TableCell>
      <TableCell>{convertNumberToTimeString(forecast.sunsetTime)}</TableCell>
      <TableCell>{humidityIcon}{(forecast.precipProbability * 100).toFixed(2)}%</TableCell>
      <TableCell>{(forecast.temperatureMax)}%</TableCell>
      <TableCell>{forecast.summary}</TableCell>
      </TableRow>
      );
}

export default WeatherListItem;
