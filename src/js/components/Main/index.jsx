import { useEffect, useState } from 'react';
import Search from 'js/components/Search';
import CurrentWeather from 'js/components/CurrentWeather';
import DailyForecast from 'js/components/DailyForecast';
import { getCurrentAndForecast } from 'js/fetches/weather';
import {
  GlobalStyle,
  MainContainer,
  MainContent,
  SearchContainer,
  CurrentContainer
} from './index.styled';

const Main = () => {
  const [weather, setWeather] = useState();

  useEffect(() => {
    const fetchWeather = async () => {
      setWeather(await getCurrentAndForecast({ lat: 55.018803, lon: 82.933952 }));
    }
    fetchWeather();
  }, []);

  if (!weather) {
    return <div>Loading...</div>
  }

  const { daily } = weather;
  return (
    <MainContainer>
    <GlobalStyle /> 
      <MainContent>
      <SearchContainer>
        <Search />
      </SearchContainer>
      <CurrentContainer>
        <CurrentWeather weather={weather} />
      </CurrentContainer>
      <DailyForecast forecast={daily} />
      </MainContent>
    </MainContainer>
  );
};

export default Main;
