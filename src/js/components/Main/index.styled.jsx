import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Open Sans', sans-serif;
    background-color: #e3f3ff;
  }
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MainContent = styled.div`
  max-width: 100%;
  width: 790px;
`;

const SearchContainer = styled.div`
  margin: 20px 8px 40px;
`;

const CurrentContainer = styled.div`
  margin: 0 0 10px;
`;

export {
  GlobalStyle,
  MainContainer,
  MainContent,
  SearchContainer,
  CurrentContainer,
};
