import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { connect } from "react-redux";
import { toggleNav } from "../Store/modules/toggleNav";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

import Navigator from "./Navigator/NavigatorPresenter";

// styles
const Head = styled.div`
  width: auto;
  height: 60px;
  background-color: #32407b;
  font-family: "Carter One", cursive;
`;
const Logo = styled(Link)`
  position: absolute;
  left: calc(50% - 100px) !important;
  width: 200px;
  height: 60px;

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

  font-size: 34px;
  color: whitesmoke;
  text-align: center;
  p {
    margin-top: 15px;
  }
`;
// styles
class Header extends Component {
  toggle = bool => {
    const { toggleNav } = this.props;
    toggleNav(bool);
  };
  render() {
    const { bool } = this.props;
    return (
      <>
        <Head>
          <Navigator isNavOn={this.toggle} navOn={bool}></Navigator>
          <Logo to="/">
            <p>home Fit</p>
          </Logo>
          <Start to="/:id/exercise">
            <p>
              <FontAwesomeIcon icon={faPlay} />
            </p>
          </Start>
        </Head>
      </>
    );
  }
}

const mapStateToProps = state => ({
  bool: state.toggleNav.bool
});
const mapDispatchToProps = dispatch => ({
  toggleNav: bool => dispatch(toggleNav(bool))
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
