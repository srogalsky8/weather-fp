import styled from 'styled-components';
import Temp from 'js/components/Temp';


const CurrentCard = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 30px 80px;
  margin: 0 8px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #fff;
  width: auto;
  @media(max-width: 790px) {
    padding: 30px;
  }
  @media(max-width: 507px) {
    flex-direction: column-reverse;
    align-items: center;
  }
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  img {
    margin: -60px -30px;
    @media(max-width: 507px) {
      margin-top: -40px;
    }
  }
`

const LargeTemp = styled(Temp)`
  font-size: 50px;
  font-weight: 500;
  color: #4f4f4f;
`;

const StyledDescription = styled.div`
  margin-bottom: 15px;
  text-transform: capitalize;
`;

const StyledLocationAndTime = styled.div`
  font-size: 24px;
  font-weight: 300;
  text-align: right;
  @media(max-width: 630px) {
    font-size: 18px;
    font-weight: 400;
  }
  @media(max-width: 507px) {
    text-align: center;
  }
`;

export {
  CurrentCard,
  IconContainer,
  LargeTemp,
  StyledDescription,
  StyledLocationAndTime
}