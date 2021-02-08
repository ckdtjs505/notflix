import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Seaction from "../../components/Seaction";
import Loader from "../../components/loader";

const Container = styled.div`
  padding: 0px 30px;
`;

const TVPresenter = ({ loading, tvTopRated, tvPopular, tvAringToday, error }) =>
  loading ? (
    <Loader />
  ) : (
    <Container>
      {tvTopRated && tvTopRated.length > 0 && (
        <Seaction title="TV Top Rated">
          {tvTopRated.map(tv => (
            <span key={tv.id}>{tv.name}</span>
          ))}
        </Seaction>
      )}

      {tvPopular && tvPopular.length > 0 && (
        <Seaction title="TV Popular">
          {tvPopular.map(tv => (
            <span key={tv.id}>{tv.name}</span>
          ))}
        </Seaction>
      )}

      {tvAringToday && tvAringToday.length > 0 && (
        <Seaction title="TV Aring Today">
          {tvAringToday.map(tv => (
            <span key={tv.id}>{tv.name}</span>
          ))}
        </Seaction>
      )}
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
