/* eslint-disable react/prop-types */
import {
  Card,
  CardContent,
  Typography,
  Avatar,
  CardHeader
} from '@mui/material';

const SearchResultCard = ({ result, selectCity }) => {
  if (!result) {
    return <h3>No City Found!</h3>;
  }
  return (
    <button onClick={() => selectCity(result.lat, result.lon)}>
      <Card sx={{ maxWidth: 345, margin: '16px auto' }}>
        <CardHeader
          avatar={
            <Avatar src={`https://hatscripts.github.io/circle-flags/flags/${result.countryCode.toLowerCase()}.svg`} alt={result.name} />
          }
          title={result.name}
          subheader={result.country}
        />
        
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            Country Code: {result.countryCode}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Administrative Area: {result.adminArea}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Population: {result.population ? result.population : "Unavailable"}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Timezone: {result.timezone}
          </Typography>
        </CardContent>
      </Card>
    </button>
  );
};

export default SearchResultCard;
