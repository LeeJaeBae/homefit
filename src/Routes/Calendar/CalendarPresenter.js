import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
  position: absolute;
  top: 50%;
  color: black;
  font-size: 100px;
`;

const CalendarPresenter = ({ name }) => <Container>{name}</Container>;

CalendarPresenter.propTypes = {
  name: PropTypes.any
};

export default CalendarPresenter;
