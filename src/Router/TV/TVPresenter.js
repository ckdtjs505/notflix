import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Seaction from "../../components/Seaction";
import Loader from "../../components/loader";
import Error from "../../components/Message";
import Poster from "../../components/Poster";

const Container = styled.div`
  padding: 0px 30px;
`;

const TVPresenter = ({ loading, tvTopRated, tvPopular, tvAringToday, error }) =>
  loading ? (
    <Loader />
  ) : (
    <Container>
      {tvTopRated && tvTopRated.length > 0 && (
        <Seaction title="TV 프로그램 TOP 25 콘텐츠">
          {tvTopRated.map(tv => (
            <Poster
              key={tv.id}
              id={tv.id}
              imageUrl={tv.backdrop_path}
              title={tv.name}
              rating={tv.vote_average}
              year={tv.first_air_date.substring(0, 4)}
              isMovie={false}
            >
              {tv.name}
            </Poster>
          ))}
        </Seaction>
      )}

      {tvPopular && tvPopular.length > 0 && (
        <Seaction title="TV 프로그램 인기 콘텐츠">
          {tvPopular.map(tv => (
            <Poster
              key={tv.id}
              id={tv.id}
              imageUrl={tv.backdrop_path}
              title={tv.name}
              rating={tv.vote_average}
              year={tv.first_air_date.substring(0, 4)}
              isMovie={false}
            >
              {tv.name}
            </Poster>
          ))}
        </Seaction>
      )}

      {tvAringToday && tvAringToday.length > 0 && (
        <Seaction title="오늘 방송되는 TV 프로그램">
          {tvAringToday.map(tv => (
            <Poster
              key={tv.id}
              id={tv.id}
              imageUrl={tv.backdrop_path}
              title={tv.name}
              rating={tv.vote_average}
              year={tv.first_air_date.substring(0, 4)}
              isMovie={false}
            >
              {tv.name}
            </Poster>
          ))}
        </Seaction>
      )}

      {error && <Error text={error}></Error>}
    </Container>
  );

TVPresenter.propTypes = {
  loading: PropTypes.bool.isRequired,
  tvTopRated: PropTypes.array,
  tvPopular: PropTypes.array,
  tvAringToday: PropTypes.array,
  error: PropTypes.string
};

export default TVPresenter;
