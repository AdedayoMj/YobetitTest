import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import apple from "../../../assets/apple.png";
import banana from "../../../assets/banana.png";
import cherry from "../../../assets/cherry.png";
import lemon from "../../../assets/lemon.png";

const Image = styled.img`
  width: 130px;
  height: 130px;
  border: 1px solid #eaeaea;
  padding: 10px 10px;

`;

const images = { lemon, cherry, banana, apple };

const Wheel = ({ image }) => (
  <Image  src={images[image]} alt={image} data-testid="wheel" />
);

Wheel.propTypes = {
  image: PropTypes.string.isRequired
};

export default Wheel;
