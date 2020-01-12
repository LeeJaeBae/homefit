import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";

const Head = styled.div`
  width: auto;
  height: 60px;
  background-color: violet;
`;
const Logo = styled(Link)`
  position: absolute;
  left: calc(50% - 100px) !important;
  width: 200px;
  height: 60px;

  background-color: black;

  font-size: 34px;
  color: whitesmoke;
  text-align: center;
  p {
    margin-top: 15px;
  }
`;
const Menu = styled(Link)`
  position: absolute;
  left: 0%;
  width: 200px;
  height: 60px;

  background-color: black;

  font-size: 34px;
  color: whitesmoke;
  text-align: center;
  p {
    margin-top: 15px;
  }
`;
const Start = styled(Link)`
  position: absolute;
  right: 0px;
  width: 200px;
  height: 60px;

  background-color: black;

  font-size: 34px;
  color: whitesmoke;
  text-align: center;
  p {
    margin-top: 15px;
  }
`;

class Header extends Component {
  render() {
    return (
      <>
        <Head>
          <Menu to="/:id/detail">
            <p>MENU</p>
          </Menu>
          <Logo to="/">
            <p>LOGO</p>
          </Logo>
          <Start to="/:id/exercise">
            <p>START</p>
          </Start>
        </Head>
      </>
    );
  }
}

export default Header;
