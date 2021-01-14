import React from "react";
import {
  Paper,
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
} from "@material-ui/core";
import WeatherListItem from "./weather-list-item";
import Forecast from "../models/Forecast";

type Props = {
  forecasts: Forecast[];
};

function WeatherList(props: Props) {
  return (
    <Paper>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Sunrise</TableCell>
            <TableCell>Sunset</TableCell>
            <TableCell>Rain Chance</TableCell>
            <TableCell>Max Temperature</TableCell>
            <TableCell>Summary</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.forecasts.map((forecast: Forecast) => {
            return <WeatherListItem forecast={forecast} key={forecast.time} />;
          })}
        </TableBody>
      </Table>
    </Paper>
  );
}

export default WeatherList;
