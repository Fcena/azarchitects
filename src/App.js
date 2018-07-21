import React, { Component } from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  margin: 0;
  padding: 0;
  justify-content: center;
  text-align: center;
`;

const StyledBody = styled.main`
  display: flex;
  flex: 1;
  flex-direction: column;
  background-color: tomato;

  height: 100%;
  overflow: auto;
  @media (min-width: 768px) {
    flex-direction: row;
    flex: 1;
  }
`;

class App extends Component {
  render() {
    return (
      <StyledContainer>
        <Header />
        <StyledBody>
          <Main color={'tomato'} />
          <Main color={'blue'} />
          <Main color={'green'} />
          <Main color={'green'} />
          <Main color={'green'} />
          <Main color={'green'} />
          <Main color={'green'} />
        </StyledBody>
        <Footer />
      </StyledContainer>
    );
  }
}

export default App;
