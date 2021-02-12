import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
  height: calc(100vh-50px);
  width: 100%;
`;

const DetailPresenter = ({ loading, detail, error }) => <div>default</div>;

DetailPresenter.propTypes = {
  detail: PropTypes.object,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired
};

export default DetailPresenter;
