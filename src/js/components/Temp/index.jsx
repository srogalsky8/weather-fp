import styled from 'styled-components';

const StyledSpan = styled.span`
  color: ${props => props.high ? '#4f4f4f' : '#888'};
  font-weight: 500;
`;

const Temp = ({ value, high = true, ...restProps }) => {
  const displayed = Math.round(value);
  return (
    <StyledSpan {...restProps} high={high}>{displayed}&deg;</StyledSpan>
  )
}

export default Temp