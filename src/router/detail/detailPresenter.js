import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Loader from "../../components/loader";

const Container = styled.div`
  height: calc(100vh - 50px);
  width: 100%;
  position: absolute;
  top: 0;
`;

const Backdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${props => props.bgImage});
  background-position: center center;
  background-size: cover;
  filter: blur(3px);
  opacity: 0.3;
`;

const Contenxt = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  z-index: 1;
  height: 100%;
`;

const Cover = styled.div`
  width: 40%;
  margin: 25px;
  background-image: url(${props => props.bgImage});
  background-position: center center;
  background-size: cover;
  height: 90%;
  border-radius: 5px;
  margin-top: 80px;
  margin-left: 80px;
  margin-right: 80px;
`;
const DetailPresenter = ({ loading, detail, error }) =>
  loading ? (
    <Loader></Loader>
  ) : (
    <Container>
      <Backdrop bgImage={`https://image.tmdb.org/t/p/original${detail.backdrop_path}`} />
      <Contenxt>
        {/* poster_path가 없는 경우 예외처리 */}
        <Cover bgImage={`https://image.tmdb.org/t/p/original${detail.poster_path}`} />
      </Contenxt>
    </Container>
  );

DetailPresenter.propTypes = {
  detail: PropTypes.object,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired
};

export default DetailPresenter;
