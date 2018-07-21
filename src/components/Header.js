import React, { Component } from 'react';
import styled from 'styled-components';

const StyledHeader = styled.div`
  background-color: orange;
  padding: 2vh;
  justify-content: center;
  align-items: center;
  display: flex;
`;

class Header extends Component {
  render() {
    return (
      <StyledHeader>
        <div>Header</div>
      </StyledHeader>
    );
  }
}

export default Header;
