import React, { Component } from 'react';
import styled from 'styled-components';
import AZLogo from './azLogo';
import FontAwesome from 'react-fontawesome';

const Navbar = styled.nav`
  top: 0;
  width: 100vw;
  height: ${props => (props.isHamburgerMenuVisible ? 'auto' : '3.5rem')};
  padding: 0 10vw;
  box-sizing: border-box;
  box-shadow: 1px 0 10px 0 #4a4a4a;
  color: #020065;
  background-color: rgba(255, 255, 255, 0.98);
  position: fixed;
  transition: transform 300ms ease-in-out;
  transform: translateY(${props => (props.isHeaderHidden ? '-20rem' : 0)});
  flex-direction: column;
  display: flex;
  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    height: 3.5rem;
  }
`;

const Brand = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: flex-start;
  margin: 0;
  height: 3.5rem;
`;

const Hamburger = styled.div`
  display: flex;
  align-items: center;
  align-self: 'flex-end';
  position: 'absolute';
  margin-top: '0.8rem';
  margin-left: auto;
  cursor: pointer;
  @media (min-width: 768px) {
    display: none;
  }
`;

const StyledNavItemContainer = styled.ul`
  padding: 0;
  margin: 0;
  white-space: nowrap;
  list-style: none;
  display: ${props => (props.isHamburgerMenuVisible ? 'flex' : 'none')};
  flex-direction: column;
  justify-content: space-around;
  padding: 1.5rem 0 2rem 0;
  font-weight: 400;
  font-size: 14px;
  li {
    cursor: pointer;
    margin-left: 0;
    padding: 0.5rem 0 0 0;
    border-bottom: 1px solid #333;
    text-align: left;
    text-transform: uppercase;
  }
  li:first-child {
    padding: 0;
  }
  li:hover {
    color: rgba(85, 172, 238, 1);
  }
  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-left: auto;
    padding: 0;
    li {
      padding: 0;
      margin-left: 1rem;
      border-bottom: none;
      text-align: center;
    }
    li:first-child {
      margin: 0;
    }
  }
`;

class Header extends Component {
  constructor() {
    super();
    this.state = {
      isHeaderHidden: false,
      isHamburgerMenuVisible: false,
    };
    this.myRef = React.createRef();
    this.prevScrollPosition = 0;
    this.onScroll = this.onScroll.bind(this);
    this.onHamburgerClick = this.onHamburgerClick.bind(this);
  }

  onScroll() {
    const currentScrollYOffset = window.pageYOffset;
    this.setState({
      isHeaderHidden:
        currentScrollYOffset > this.myRef.clientHeight &&
        currentScrollYOffset > this.prevScrollPosition,
    });
    this.prevScrollPosition = currentScrollYOffset;
  }

  onHamburgerClick() {
    this.setState({
      isHamburgerMenuVisible: !this.state.isHamburgerMenuVisible,
    });
  }

  shouldComponentUpdate(nextProps, nextState) {
    return (
      this.state.isHeaderHidden !== nextState.isHeaderHidden ||
      this.state.isHamburgerMenuVisible !== nextState.isHamburgerMenuVisible
    );
  }

  componentDidMount() {
    window.addEventListener('scroll', this.onScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll');
  }

  render() {
    return (
      <Navbar
        innerRef={node => {
          this.myRef = node;
        }}
        isHeaderHidden={this.state.isHeaderHidden}
        isHamburgerMenuVisible={this.state.isHamburgerMenuVisible}
      >
        <Brand isHamburgerMenuVisible={this.state.isHamburgerMenuVisible}>
          <AZLogo height="3rem" />
          <Hamburger
            onClick={this.onHamburgerClick}
            isHamburgerMenuVisible={this.state.isHamburgerMenuVisible}
          >
            <FontAwesome name="bars" />
          </Hamburger>
        </Brand>
        <StyledNavItemContainer
          role="navigation"
          isHamburgerMenuVisible={this.state.isHamburgerMenuVisible}
        >
          <li>
            <a>Practice</a>
          </li>
          <li>
            <a>Projects</a>
          </li>
          <li>
            <a>Contact</a>
          </li>
          <li>
            <a>Book a Meeting</a>
          </li>
        </StyledNavItemContainer>
      </Navbar>
    );
  }
}

export default Header;
