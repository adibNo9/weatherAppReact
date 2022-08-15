import styled from 'styled-components';

const WeatherLogo = styled.img`
  width: 140px;
  height: 140px;
  margin: auto;
`;
const ChooseCityLabel = styled.span`
  color: #000;
  font-size: 18px;
  font-weight: bold;
  margin: 10px auto;
`;
const SearchBox = styled.form`
  display: flex;
  flex-direction: row;
  border: 1px solid #000;
  border-radius: 2px;
  color: #000;
  margin: 10px auto;

  & input {
    padding: 10px;
    font-size: 14px;
    border: none;
    font-size: 14px;
    outline: none;
  }
  & button {
    padding: 10px;
    font-size: 14px;
    border: none;
    font-size: 14px;
    color: #fff;
    background-color: #000;
    outline: none;
    cursor: pointer;
  }
`;
const CityComponent = (props) => {
  const { updateCity, fetchWeather } = props;
  return (
    <>
      <WeatherLogo src="/icons/perfect-day.svg" />
      <ChooseCityLabel>Find Weather of your city</ChooseCityLabel>
      <SearchBox onSubmit={fetchWeather}>
        <input
          placeholder="City"
          onChange={(e) => updateCity(e.target.value)}
        />
        <button type="submit">Search</button>
      </SearchBox>
    </>
  );
};

export default CityComponent;
