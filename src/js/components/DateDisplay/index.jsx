
const DateDisplay = ({ ts, timezone, short=true, ...restProps }) => {
  const date = new Date(ts*1000);
  const dayOfWeek = date.toLocaleString('en-us', {  weekday: short ? 'short' : 'long', timeZone: timezone })
  const longDate = date.toLocaleString('en-US', { month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', hour12: true, timeZone: timezone })
  return (
    <span {...restProps}>
      {dayOfWeek}
      {!short && <span>, {longDate}</span>}
    </span>
  );
}

export default DateDisplay;
