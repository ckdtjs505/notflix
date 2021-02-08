import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const TVPresenter = ({ loading, tvTopRated, tvPopular, tvAringToday, error }) => <div>tv</div>;

TVPresenter.propTypes = {
  loading: PropTypes.bool.isRequired,
  tvTopRated: PropTypes.array,
  tvPopular: PropTypes.array,
  tvAringToday: PropTypes.array,
  error: PropTypes.string
};

export default TVPresenter;
