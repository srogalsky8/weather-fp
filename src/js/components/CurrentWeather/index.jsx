import styled from 'styled-components';
import DateDisplay from 'js/components/DateDisplay';
import Temp from 'js/components/Temp';
import WeatherIcon from 'js/components/WeatherIcon';

const CurrentCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  margin: -15px 0;
  img {
    margin-left: -40px;
  }
`

const LargeTemp = styled(Temp)`
  font-size: 40px;
  font-weight: 500;
  color: #4f4f4f;
  margin-left: -40px;
`;

const StyledDescription = styled.div`
  margin-bottom: 15px;
  text-transform: capitalize;
`

/**
 * Panel showing current weather
 */
const CurrentWeather = ({ weather }) => {
  const { current, daily, timezone } = weather;
  const { temp, dt } = current;
  const description = current.weather[0].description;
  // min should ideally use min(forecastMin, historyMin)
  // max should ideally use max(forecastMax, historyMax)
  const { temp: { min, max } } = daily[0]; // today's forecast
  return (
    <CurrentCard>
      <div>
        <DateDisplay ts={dt} timezone={timezone} short={false} />
      </div>
      <IconContainer>
        <WeatherIcon height="150px" animated description={description} />
        <LargeTemp value={temp} />
      </IconContainer>
      <StyledDescription>{description}</StyledDescription>
      <div>
        <Temp value={Math.max(temp, max)} high/> | <Temp value={Math.min(temp, min)} high={false} />
      </div>
    </CurrentCard>
  )
}

export default CurrentWeather;
