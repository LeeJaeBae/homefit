import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Navigator from "./Navigator/NavigatorPresenter";

const Head = styled.div`
  width: auto;
  height: 60px;
  background-color: #32407b;
`;
const Logo = styled(Link)`
  position: absolute;
  left: calc(50% - 100px) !important;
  width: 200px;
  height: 60px;

  background-color: 32407b;

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

  background-color: 32407b;

  font-size: 34px;
  color: whitesmoke;
  text-align: center;
  p {
    margin-top: 15px;
  }
`;

class Header extends Component {
  state = { navOn: false };
  isNavOn = () => {
    const { navOn } = this.state;
    if (navOn) {
      this.setState({ navOn: false });
    } else {
      this.setState({ navOn: true });
    }
  };
  render() {
    console.log(this);
    return (
      <>
        <Head>
          <Navigator
            navOn={this.state.navOn}
            isNavOn={this.isNavOn}
          ></Navigator>
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
