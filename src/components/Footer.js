import React, { Component } from 'react';
import styled from 'styled-components';

const StyledFooter = styled.div`
  background-color: red;
  padding: 2vh;
`;

class Footer extends Component {
  render() {
    return <StyledFooter>Footer</StyledFooter>;
  }
}

export default Footer;
