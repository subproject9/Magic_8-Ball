import React, { useState } from 'react';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import Header from './components/Header';
import EightBall from './components/EightBall';
import ThemeSelector from './components/ThemeSelector';
import { themes } from './themes';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Permanent Marker', cursive;
    background-color: ${props => props.theme.background};
    color: ${props => props.theme.text};
    transition: all 0.3s ease;
  }
`;

const AppContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
`;

function App() {
  const [currentTheme, setCurrentTheme] = useState(0);

  return (
    <ThemeProvider theme={themes[currentTheme]}>
      <GlobalStyle />
      <AppContainer>
        <Header />
        <EightBall />
        <ThemeSelector 
          currentTheme={currentTheme}
          setCurrentTheme={setCurrentTheme}
          themeCount={themes.length}
        />
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
