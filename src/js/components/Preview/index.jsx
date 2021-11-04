import styled from 'styled-components';
import DateDisplay from 'js/components/DateDisplay';
import Temp from 'js/components/Temp';
import WeatherIcon from 'js/components/WeatherIcon';

const StyledDate = styled(DateDisplay)`
  font-weight: 600;
  font-size: 20px;
  color: #666;
`;

const IconContainer = styled.div`
  margin: -10px 0;
`

const PreviewCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px 30px;
  margin: 5px 8px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #fff;
`;

const Preview = ({ day }) => {
  const { temp: { min, max }, dt, timezone } = day;
  const description = day.weather[0].description;
  return (
    <PreviewCard>
      <div>
        <StyledDate ts={dt} timezone={timezone} />
      </div>
      <IconContainer><WeatherIcon description={description} height="80px" /></IconContainer>
      <div>
        <Temp value={max} high/> | <Temp value={min} high={false} />
      </div>
    </PreviewCard>
  );
}

export default Preview;