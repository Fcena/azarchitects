import React, { Component } from 'react';
import styled from 'styled-components';

const StyledHeader = styled.div`
  top: 0;
  width: 100vw;
  height: 3rem;
  box-sizing: border-box;
  background-color: orange;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
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
