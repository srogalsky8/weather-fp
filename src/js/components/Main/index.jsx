import { useEffect, useState } from 'react';
import Search from 'js/components/Search';
import CurrentWeather from 'js/components/CurrentWeather';
import DailyForecast from 'js/components/DailyForecast';
import { getCurrentAndForecast } from 'js/fetches/weather';
import cities from 'js/data/cities';
import {
  GlobalStyle,
  MainContainer,
  MainContent,
  SearchContainer,
  CurrentContainer
} from './index.styled';

const Main = () => {
  const [weather, setWeather] = useState();
  const [cityName, setCityName] = useState('San Diego');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWeather = async () => {
      setLoading(true)
      const city = cities[cityName];
      console.log('****' + await getCurrentAndForecast(city))
      setWeather(await getCurrentAndForecast(city));
      setLoading(false);
    }
    fetchWeather();
  }, [cityName]);

  return (
    <MainContainer>
    <GlobalStyle /> 
      <MainContent>
        <SearchContainer>
          <Search cityName={cityName} onChange={(select) => setCityName(select.value)} />
        </SearchContainer>
        { !loading && (
          <>
            <CurrentContainer>
              <CurrentWeather weather={weather} cityName={cityName} />
            </CurrentContainer>
            <DailyForecast forecast={weather.daily} />
          </>
        )}
        { loading && <div style={{textAlign: 'center'}}><img src="/animated/snowy-6.svg" alt="loading icon" width="200px"/></div>}
      </MainContent>
    </MainContainer>
  );
};

export default Main;
