import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Loader from "../../components/loader";
import Helmet from "react-helmet";

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

const Data = styled.div`
  width: 60%;
  margin-left: 10px;
  z-index: 1;
  margin-top: 80px;
  margin-right: 80px;
`;

const Title = styled.h3`
  font-size: 32px;
`;

const ItemContainer = styled.div`
  margin: 20px 0;
`;

const Item = styled.span``;

const Divider = styled.span`
  margin: 0 10px;
`;

const Overview = styled.p`
  font-size: 12px;
  opacity: 0.7;
  line-height: 1.5;
  width: 50%;
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
`;
const DetailPresenter = ({ loading, detail, error }) =>
  loading ? (
    <>
      <Helmet>
        <title>loading...</title>
      </Helmet>
      <Loader></Loader>
    </>
  ) : (
    <Container>
      <Helmet>
        <title>{detail.name ? detail.name : detail.title}</title>
      </Helmet>
      <Backdrop bgImage={`https://image.tmdb.org/t/p/original${detail.backdrop_path}`} />
      <Contenxt>
        {/* poster_path가 없는 경우 예외처리 */}
        <Cover bgImage={`https://image.tmdb.org/t/p/original${detail.poster_path}`} />

        <Data>
          <Title>{detail.name ? detail.name : detail.title}</Title>
          <ItemContainer>
            <Item>
              {detail.release_date
                ? detail.release_date.substring(0, 4)
                : detail.first_air_date.substring(0, 4)}
            </Item>
            <Divider>•</Divider>
            <Item>{detail.runtime ? detail.runtime : detail.episode_run_time[0]} min</Item>
            <Divider>•</Divider>
            <Item>
              {detail.genres &&
                detail.genres.map((genre, index) =>
                  index === detail.genres.length - 1 ? genre.name : `${genre.name} / `
                )}
            </Item>
          </ItemContainer>
          <Overview>{detail.overview}</Overview>
        </Data>
      </Contenxt>
    </Container>
  );

DetailPresenter.propTypes = {
  detail: PropTypes.object,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired
};

export default DetailPresenter;
