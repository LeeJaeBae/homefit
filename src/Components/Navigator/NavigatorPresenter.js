import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

// FontAwesome...
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Container = styled.div`
  position: absolute;
  left: 0%;
  width: 200px;
  height: 60px;

  font-size: 34px;
  color: ${props => (props.navOn ? "black" : "whitesmoke")};
  text-align: center;

  p {
    margin-top: 15px;
  }
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
  transition: background-color 600ms;
  transition: color 500ms ease-in-out;
  border-radius: 3%;
`;
const Navigation = styled.div`
  position: absolute;
  width: ${props => (props.navOn ? "250px" : "0px")};
  height: ${props => (props.navOn ? "calc(100% - 60px)" : "0px")};
  background-color: #bbe1fa;
  margin-top: 60px;
  overflow: hidden;
  transition: width 600ms ease-in-out;
  display: inline-block;
`;
const Button = styled.a``;

const NaviagatorPresenter = ({ navOn, isNavOn }) => (
  <>
    <Button onClick={isNavOn}>
      <Container navOn={navOn}>
        <p>
          <FontAwesomeIcon icon={faBars} />
        </p>
      </Container>
    </Button>
    <Navigation navOn={navOn}></Navigation>
  </>
);

NaviagatorPresenter.propTypes = {
  navOn: PropTypes.bool,
  isNavOn: PropTypes.func
};
export default NaviagatorPresenter;
