import { useState } from "react"
import { TextField, Button, Box } from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';

// eslint-disable-next-line react/prop-types
const SearchBar = ({onSearch, isMobile}) => {
  const [city, setCity] = useState('')

  const handleSearch = () => {
    onSearch(city)
  }

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 2,
        padding: '2px 4px',
        borderRadius: '4px',
        marginLeft: isMobile ? 0 : 2,
        marginTop: 2
      }}
    >
      <TextField
        label="Enter city name"
        variant="outlined"
        color="warning"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        sx={{ flexGrow: 1, marginRight: 2 }}
      />
      <Button
        variant="contained"
        color="info"
        onClick={handleSearch}
        sx={{ height: '56px', padding: 1 }}
        startIcon={<SearchIcon />}
      >
        Search
      </Button>
    </Box>
  )
}

export default SearchBar