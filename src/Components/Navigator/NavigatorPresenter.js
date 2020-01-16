import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
  position: absolute;
  left: 0%;
  width: 200px;
  height: 60px;

  background-color: ${props => (props.navOn ? "black" : "white")};

  font-size: 34px;
  color: ${props => (props.navOn ? "whitesmoke" : "black")};
  text-align: center;
  p {
    margin-top: 15px;
  }
  transition: background-color 300ms ease-in-out;
  transition: color 500ms ease-in-out;
`;
const Navigation = styled.div`
  position: absolute;
  width: ${props => (props.navOn ? "250px" : "0px")};
  height: ${props => (props.navOn ? "calc(100% - 60px)" : "0px")};
  background-color: black;
  margin-top: 60px;
  overflow: hidden;
  transition: width 600ms ease-in-out;
`;
const Button = styled.a``;

const NaviagatorPresenter = ({ navOn, isNavOn }) => (
  <Button onClick={isNavOn}>
    <Container navOn={navOn}>
      <p>{navOn ? "true" : "false"}</p>
    </Container>
    <Navigation navOn={navOn}></Navigation>
  </Button>
);

NaviagatorPresenter.propTypes = {
  navOn: PropTypes.bool,
  isNavOn: PropTypes.func
};
export default NaviagatorPresenter;
