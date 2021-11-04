const DateDisplay = ({ ts, timezone, short = true, ...restProps }) => {
  const date = new Date(ts * 1000);
  let dateProps = {
    weekday: short ? "short" : "long",
    timeZone: timezone,
  };
  if (!short) {
    dateProps = {
      ...dateProps,
      month: "long",
      day: "numeric",
    };
  }
  const displayedDate = date.toLocaleString("en-us", dateProps);
  const displayedTime = date.toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
    timeZone: timezone,
  });
  return (
    <div {...restProps}>
      <div>{displayedDate}</div>
      <div>{!short && displayedTime}</div>
    </div>
  );
};

export default DateDisplay;
