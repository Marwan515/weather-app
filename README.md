# [Weather Forecast Base](https://weatherforecastbase.netlify.app/)

This project is a weather application built with React and Vite. It fetches weather data using the OpenWeather API and geocoding information from the OpenMeteo Geocoding API.

## Table of Contents

1. [Project Overview](#project-overview)
2. [Features](#features)
3. [Technologies Used](#technologies-used)
4. [Setup and Installation](#setup-and-installation)
5. [Environment Variables](#environment-variables)
6. [Usage](#usage)
7. [Contributing](#contributing)
8. [License](#license)

## Project Overview

The Weather App allows users to view current weather conditions and forecasts for different cities around the world. Users can search for a city and see weather details including temperature, humidity, and more.

## Features

- Fetch current weather data for a specified location.
- Display weather forecasts.
- Responsive design.
- Simple and intuitive user interface.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Vite**: A build tool that provides a fast and lean development environment for modern web projects.
- **Material-UI (MUI)**: A React component library for building modern web applications.
- **OpenWeather API**: Provides weather data including current conditions and forecasts.
- **OpenMeteo Geocoding API**: Provides geocoding services to convert city names into latitude and longitude coordinates.

## Setup and Installation

1. Clone the repository:

  ```bash
    git clone https://github.com/Marwan515/weather-app.git
    cd weather-app
  ```

2. Install Dependencies:
  ```bash
    npm install
  ```

3. Setup Enviornment Variable:
  Create `.env` file in the root directory of the project file with following variable:
  ```bash
    VITE_WEATHER_API_KEY='Your Api Key From OpenWeather API'
  ```
4. Run The Application: 
  ```bash
    npm run dev
  ```
  Your Application will be available at `http://localhost:5173`.

## Environment Variables

This project uses the following environment variables:

- `VITE_OPENWEATHER_API_KEY`: Your API key for the OpenWeather API. You can get this from the [OpenWeather website](https://home.openweathermap.org/users/sign_up).

Make sure to add these variables in a `.env` file in the root of your project.

## Usage

Once the application is running, you can:

- **Search for a city**: Use the search bar to find weather information for any city.
- **View weather details**: See detailed weather data including temperature, humidity, wind speed, and more.

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch with a descriptive name.
3. Make your changes and commit them.
4. Push your changes to your forked repository.
5. Open a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
