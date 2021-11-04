import styled from 'styled-components';

const StyledSpan = styled.span`
  color: ${props => props.high ? '#4f4f4f' : '#888'};
  font-weight: 500;
`;

const Temp = ({ value, high = true, "aria-label": ariaLabel, ...restProps }) => {
  const displayed = Math.round(value);

  let renderedAriaLabel;
  if(ariaLabel) {
    renderedAriaLabel = ariaLabel
  } else if (high) {
    renderedAriaLabel = 'high'
  } else {
    renderedAriaLabel = 'low'
  }
  renderedAriaLabel = `${renderedAriaLabel} ${displayed} degrees`;
  
  return (
    <StyledSpan  high={high} aria-label={renderedAriaLabel} {...restProps}>{displayed}&deg;</StyledSpan>
  )
}

export default Temp