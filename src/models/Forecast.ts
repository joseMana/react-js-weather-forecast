export default class Forecast {
  time: number;
  sunriseTime: number;
  sunsetTime: number;
  precipProbability: number;
  temperatureMax: number;
  summary: string;

  constructor(forecastResponse: any) {
    this.time = forecastResponse.time;
    this.sunriseTime = forecastResponse.sunriseTime;
    this.sunsetTime = forecastResponse.sunsetTime;
    this.precipProbability = forecastResponse.precipProbability;
    this.temperatureMax = forecastResponse.temperatureMax;
    this.summary = forecastResponse.summary;
  }
}
