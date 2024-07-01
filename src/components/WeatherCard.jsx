/* eslint-disable react/prop-types */
import {
  Card,
  CardContent,
  Typography,
  Grid,
  Box,
  IconButton,
} from '@mui/material';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import CloudIcon from '@mui/icons-material/Cloud';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import OpacityIcon from '@mui/icons-material/Opacity';
import AirIcon from '@mui/icons-material/Air';
import GrainIcon from '@mui/icons-material/Grain';

const WeatherCard = ({ weatherData }) => {

  const getWeatherIcon = (main) => {
    switch (main) {
      case 'Clear':
        return <WbSunnyIcon style={{ fontSize: 40, color: '#ffeb3b' }} />;
      case 'Clouds':
        return <CloudIcon style={{ fontSize: 40, color: '#90a4ae' }} />;
      case 'Snow':
        return <AcUnitIcon style={{ fontSize: 40, color: '#81d4fa' }} />;
      case 'Rain':
        return <GrainIcon style={{ fontSize: 40, color: '#4fc3f7' }} />;
      default:
        return <WbSunnyIcon style={{ fontSize: 40, color: '#ffeb3b' }} />;
    }
  };

  return (
    weatherData && (
      <Card
        sx={{
          display: 'flex',
          width: '100%',
          margin: 2,
          background: '#f5f5f5',
          boxShadow: '0 3px 6px rgba(0, 0, 0, 0.1)',
          flexDirection: { xs: 'column', md: 'row' },
        }}
      >
        <Grid container>
          <Grid item xs={12} md={4} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', background: '#eceff1' }}>
            <IconButton>
              {getWeatherIcon(weatherData.weather[0].main)}
            </IconButton>
          </Grid>
          <Typography variant='h5'>Current Weather</Typography>
          <Grid item xs={12} md={8} container alignItems="center">
            <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '100%' }}>
              <Typography variant="h4" component="div" sx={{ marginBottom: 2 }}>
                {weatherData.name}, {weatherData.sys.country}
              </Typography>
              <Typography variant="h5" component="div" sx={{ marginBottom: 1 }}>
                {Math.round(weatherData.main.temp)}°C
              </Typography>
              <Typography variant="body1" component="div" sx={{ marginBottom: 2 }}>
                {weatherData.weather[0].description.charAt(0).toUpperCase() + weatherData.weather[0].description.slice(1)}
              </Typography>
              <Grid container spacing={1}>
                <Grid item xs={6}>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <OpacityIcon style={{ marginRight: 5 }} />
                    <Typography variant="body2" component="div">
                      Humidity: {weatherData.main.humidity}%
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={6}>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <AirIcon style={{ marginRight: 5 }} />
                    <Typography variant="body2" component="div">
                      Wind: {weatherData.wind.speed} m/s
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={6}>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Typography variant="body2" component="div">
                      Pressure: {weatherData.main.pressure} hPa
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={6}>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Typography variant="body2" component="div">
                      Visibility: {weatherData.visibility / 1000} km
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </CardContent>
          </Grid>
        </Grid>
      </Card>
    )
  );
};

export default WeatherCard;