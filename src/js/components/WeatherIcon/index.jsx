

const svgs = {
  'few clouds': 'cloudy-day-1',
  'broken clouds': 'cloudy-day-2',
  'scattered clouds': 'cloudy-day-3',
  'overcast clouds': 'cloudy',
  'clear sky': 'day',
  'light rain': 'rainy-4',
  'moderate rain': 'rainy-5',
  'thunderstorm': 'thunder',
  'light snow': 'snowy-4',
  'snow': 'snowy-5'
}

const WeatherIcon = ({ description, animated = false, ...restProps}) => {
  const file = svgs[description] || 'day';
  return <img src={`/${animated ? 'animated' : 'static'}/${file}.svg`} alt={description} {...restProps} />
}

export default WeatherIcon;