import {
  AppBar,
  Typography,
  Toolbar,
  Box,
  Drawer,
  IconButton,
  Button
} from '@mui/material'
import { useState } from 'react'
import SearchBar from './SearchBar'
import { getLocations } from '../services/weatherApiService'
import GitHubIcon from '@mui/icons-material/GitHub';
import SearchIcon from '@mui/icons-material/Search';



// eslint-disable-next-line react/prop-types
const Navbar = ({setSearchResults, setWd, setWf, isMobile}) => {
  
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const filterSearch = async (name) => {
    setWd(null)
    setWf(null)
    if (!name) {
      return
    } else {
      try {
        const results = await getLocations(name)
        if (results.length < 1) {
          setSearchResults(null)
        } else {
          const cities = results.results.map(city => {
            return {
              id: city.id,
              name: city.name,
              timezone: city.timezone,
              country: city.country,
              population: city.population,
              countryCode: city.country_code,
              adminArea: city.admin1,
              lat: city.latitude,
              lon: city.longitude
            }
          })
          setSearchResults(cities)
        }
      } catch (err) {
        console.log(err)
        return <h3>Unexpected Error Occured!...</h3>
      }
    }
  }

  const reloadPage = () => {
    location.reload()
  }

  return (
    <AppBar position="fixed" color='inherit'>
      <Toolbar>
        <Typography color={"black"} variant="h2" component="div" sx={{flexGrow: 1, textAlign: isMobile ? 'center' : 'left'}}>
          <Button onClick={reloadPage}>Weather Forecast Base</Button>
        </Typography>
        
        {isMobile ? (
          <IconButton
            edge="start"
            color="inherit"
            aria-label="search"
            onClick={toggleDrawer(true)}
            sx={{backgroundColor: 'slategray'}}
          >
            <SearchIcon />
          </IconButton>
        ) : (
          <SearchBar onSearch={filterSearch} isMobile={isMobile} />
        )}
        <IconButton
          edge="end"
          color="inherit"
          aria-label="github"
          component="a"
          href="https://github.com/Marwan515"
          target="_blank"
          rel="noopener noreferrer"
          sx={{color: "black"}}
        >
          <GitHubIcon />
        </IconButton>
      </Toolbar>
      <Drawer anchor="top" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box sx={{ padding: 2 }}>
          <SearchBar onSearch={filterSearch} isMobile={isMobile} />
        </Box>
      </Drawer>
    </AppBar>
  )
}

export default Navbar