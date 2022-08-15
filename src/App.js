import axios from 'axios';
import { useState } from 'react';

import styled from 'styled-components';
import CityComponent from './modules/CityComponent';
import WeatherInfoComponent from './modules/WeatherInfoComponent';

const API_KEY = '3d356c8c6e8a063768ec3b83ea5c223e';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  align-items: center;
  box-shadow: 0 3px 6px 0 #555;
  padding: 20px 10px;
  border-radius: 4px;
  width: 380px;
  background: #fff;
  font-family: Montserrat;
`;

const AppLabel = styled.span`
  color: #000;
  font-size: 18px;
  font-weight: bold;
`;

function App() {
  const [city, updateCity] = useState();
  const [weather, updateWeather] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const fetchWeather = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
    );
    updateWeather(response.data);
    setIsLoading(false);
  };

  if (isLoading) {
    return <p>is loading...</p>;
  }

  return (
    <Container>
      <AppLabel>React Weather App</AppLabel>

      {weather ? (
        <WeatherInfoComponent weather={weather} />
      ) : (
        <CityComponent updateCity={updateCity} fetchWeather={fetchWeather} />
      )}
    </Container>
  );
}

export default App;
