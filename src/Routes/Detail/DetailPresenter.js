import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
  position: absolute;
  top: 50%;
  color: black;
  font-size: 100px;
`;

const DetailPresenter = ({ name }) => <Container>{name}</Container>;

DetailPresenter.propTypes = {
  name: PropTypes.any
};

export default DetailPresenter;
