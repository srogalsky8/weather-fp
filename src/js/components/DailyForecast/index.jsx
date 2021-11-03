import styled from 'styled-components';
import Preview from 'js/components/Preview';

const ForecastContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

/**
 * List of 5-day forecast
 */
 const DailyForecast = ({ forecast }) => {
  return (
    <ForecastContainer>
      {forecast.slice(1,6).map(day => <Preview day={day} />)}
    </ForecastContainer>
  )
}

export default DailyForecast;