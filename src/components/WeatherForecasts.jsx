/* eslint-disable react/prop-types */
import { styled } from '@mui/system';
import { Card, CardContent, Typography, Grid, Box } from '@mui/material';

const WeatherCard = ({ forecast }) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
    });
  };

  const WeatherCardContainer = styled(Box)(({ theme }) => ({
    maxWidth: 345,
    margin: '10px',
    [theme.breakpoints.up('sm')]: {
      maxWidth: '100%',
    },
  }));

  const WeatherCardContent = styled(CardContent)({
    textAlign: 'center',
  });

  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <WeatherCardContainer>
        <Card>
          <WeatherCardContent>
            <Typography variant="h5" component="h2">
              {formatDate(forecast.dt_txt)}
            </Typography>
            <Typography color="textSecondary" gutterBottom>
              {forecast.weather[0].description}
            </Typography>
            <Typography variant="body2" component="p">
              Temperature: {forecast.main.temp}°C
            </Typography>
            <Typography variant="body2" component="p">
              Feels like: {forecast.main.feels_like}°C
            </Typography>
            <Typography variant="body2" component="p">
              Humidity: {forecast.main.humidity}%
            </Typography>
            <Typography variant="body2" component="p">
              Wind Speed: {forecast.wind.speed} m/s
            </Typography>
          </WeatherCardContent>
        </Card>
      </WeatherCardContainer>
    </Grid>
  );
};

const WeatherForecast = ({ forecasts }) => {
  if(!forecasts) {
    return <p>Loading Forecasts</p>
  }
  return (
    <>
      <Typography variant='h5'>Weather Forecast of Next 5-Days in 3-hour Intervals</Typography>
      <Grid container spacing={3}>
        {forecasts.map((forecast, index) => (
          <WeatherCard key={index} forecast={forecast} />
        ))}
      </Grid>
    </>
  );
};

export default WeatherForecast;