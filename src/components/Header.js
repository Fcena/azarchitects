import React, { Component } from 'react';
import styled from 'styled-components';

const StyledHeader = styled.div`
  top: 0;
  width: 100vw;
  height: 3rem;
  box-sizing: border-box;
  background-color: rgba(0, 0, 0, 0.8);
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  transition: transform 300ms ease-in-out;
  transform: translateY(${props => (props.shouldHide ? '-3rem' : 0)});
`;

class Header extends Component {
  constructor() {
    super();
    this.state = {
      shouldHide: false,
    };
    this.myRef = React.createRef();
    this.prevScrollPosition = 0;
    this.onScroll = this.onScroll.bind(this);
  }

  onScroll() {
    const currentScrollYOffset = window.pageYOffset;
    this.setState({
      shouldHide:
        currentScrollYOffset > this.myRef.clientHeight &&
        currentScrollYOffset > this.prevScrollPosition,
    });
    this.prevScrollPosition = currentScrollYOffset;
  }

  componentDidMount() {
    window.addEventListener('scroll', this.onScroll);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.state.shouldHide !== nextState.shouldHide;
  }

  componentWillUnmount() {
    window.removeEventListener('scroll');
  }

  componentWillUpdate() {
    console.log('COMPONENT WILL UPDATE');
  }

  render() {
    return (
      <StyledHeader
        innerRef={node => {
          this.myRef = node;
        }}
        shouldHide={this.state.shouldHide}
      >
        <div>Header</div>
      </StyledHeader>
    );
  }
}

export default Header;
