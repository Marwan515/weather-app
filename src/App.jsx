import { useState } from 'react'
import Navbar from './components/Navbar'
import { currentWeather, weatherForecast } from './services/weatherApiService';
import { useMediaQuery, Box, Container, Divider, Grid, Typography } from '@mui/material';
import SearchResultCard from './components/SearchResultCard';
import WeatherCard from './components/WeatherCard';
import WeatherForecast from './components/WeatherForecasts';
import { useTheme } from '@mui/material/styles'

function App() {
  const [searchResults, setSearchResults] = useState('')
  const [weather, setWeather] = useState(null)  
  const [weatherForecastData, setWeatherForecast] = useState(null)
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

  const getCurrentWeather = async (lat, lon) => {
    try {
      const weatherData = await currentWeather(lat, lon)
      const weatherDataf = await weatherForecast(lat, lon)
      setWeatherForecast(weatherDataf.list)
      setWeather(weatherData)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <Container>
      <Navbar setSearchResults={setSearchResults} setWd={setWeather} setWf={setWeatherForecast} isMobile={isMobile} />
      {searchResults && <Box  
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          mt: isMobile ? 8 : 16,
          ml: isMobile ? 0 : 8
        }}
      >
        <Divider />
        {weather && <WeatherCard weatherData={weather} />}
        {weatherForecastData && <WeatherForecast forecasts={weatherForecastData} />}
        {!weather && <><Grid container spacing={2}>
          {searchResults && searchResults.map(c =>
            <Grid item xs={12} sm={6} md={3} key={c.id}>
              <SearchResultCard result={c} selectCity={getCurrentWeather}/>
            </Grid>
          )}
        </Grid></>}
      </Box>}
      {!searchResults && <Typography variant='h3' ml={8}>Search The City in the Search Bar on The Navigation Menu</Typography>}
    </Container>
  )
}

export default App
