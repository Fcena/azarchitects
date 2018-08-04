import React, { Component } from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import Content from './components/Main';
import Footer from './components/Footer';

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  justify-content: center;
  text-align: center;
`;

const Main = styled.main`
  display: flex;
  flex: 1;
  flex-direction: column;
  width: 80vw;
  margin: 3.5rem auto 0 auto;
  overflow-y: scroll;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

class App extends Component {
  render() {
    return (
      <StyledContainer>
        <Header />
        <Main>
          <Content />
        </Main>
        <Footer />
      </StyledContainer>
    );
  }
}

export default App;
