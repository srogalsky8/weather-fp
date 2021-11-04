import DateDisplay from 'js/components/DateDisplay';
import Temp from 'js/components/Temp';
import WeatherIcon from 'js/components/WeatherIcon';
import {
  CurrentCard,
  IconContainer,
  LargeTemp,
  StyledDescription,
  StyledLocationAndTime
} from './index.styled';

/**
 * Panel showing current weather
 */
const CurrentWeather = ({ weather, cityName }) => {
  const { current, daily, timezone } = weather;
  const { temp, dt } = current;
  const description = current.weather[0].description;
  // min should ideally use min(forecastMin, historyMin)
  // max should ideally use max(forecastMax, historyMax)
  const { temp: { min, max } } = daily[0]; // today's forecast
  return (
    <CurrentCard>
      <div>
        <IconContainer>
          <div>
            <LargeTemp value={temp} aria-label="current" />
            <StyledDescription>{description}</StyledDescription>
            <div>
              <Temp value={Math.max(temp, max)} high/> | <Temp value={Math.min(temp, min)} high={false} />
            </div>
          </div>
          <WeatherIcon height="250px" animated description={description} />
        </IconContainer>
      </div>
      <StyledLocationAndTime>
        {cityName}
        <DateDisplay ts={dt} timezone={timezone} short={false} />
      </StyledLocationAndTime>
    </CurrentCard>
  )
}

export default CurrentWeather;
