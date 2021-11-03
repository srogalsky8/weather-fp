import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Search from 'js/components/Search';
import CurrentWeather from 'js/components/CurrentWeather';
import DailyForecast from 'js/components/DailyForecast';
import { getCurrentAndForecast } from 'js/fetches/weather';

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SearchContainer = styled.div`
  margin: 20px 0 40px;
`

const CurrentContainer = styled.div`
  margin: 0 0 30px;
`

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
      <SearchContainer>
        <Search />
      </SearchContainer>
      <CurrentContainer>
        <CurrentWeather weather={weather} />
      </CurrentContainer>
      <DailyForecast forecast={daily} />
    </MainContainer>
  );
};

export default Main;
