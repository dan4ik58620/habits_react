import React from "react";
import PropTypes from "prop-types";

const SignIn = ({ title }) => {
  return <p>Component {title} </p>;
};

SignIn.propTypes = {
  title: PropTypes.string,
};

export default SignIn;
