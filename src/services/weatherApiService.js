import axios from "axios";

const geolocationApi = 'https://geocoding-api.open-meteo.com/v1/search?count=10&language=en&name='
const currentWeatherApi = 'https://api.openweathermap.org/data/2.5/weather?'
const weatherForecastApi = 'https://api.openweathermap.org/data/2.5/forecast?'
const aKey = import.meta.env.VITE_WEATHER_API_KEY
export const getLocations = async (location) => {
  const response = await axios.get(`${geolocationApi}${location}`)
  return response.data
}

export const currentWeather = async (lat, lon) => {
  console.log(import.meta.env)
  const response = await axios.get(`${currentWeatherApi}lat=${lat}&lon=${lon}&appid=${aKey}&units=metric`)
  return response.data
}

export const weatherForecast = async (lat, lon) => {
  const response = await axios.get(`${weatherForecastApi}lat=${lat}&lon=${lon}&appid=${aKey}&units=metric`)
  return response.data
}