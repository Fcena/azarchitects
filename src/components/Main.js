import React, { Component } from 'react';
import styled from 'styled-components';

const StyledMain = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.color || 'grey'};

  @media (min-width: 768px) {
    flex: 1;
  }
`;

class Main extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <StyledMain {...this.props}>
        <div>Main</div>
      </StyledMain>
    );
  }
}

export default Main;
