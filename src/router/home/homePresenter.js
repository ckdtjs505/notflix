import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Loader from "../../components/loader";
import Seaction from "../../components/Seaction";
import Poster from "../../components/Poster";
import { tvApi } from "../../components/api";

const Container = styled.div`
  height: calc(100vh-50px);
  width: 100%;
`;

const Main = styled.div`
  padding: 0px 25px;
`;

const Title = styled.div`
  font-size: 3rem;
  margin-bottom: 1.2rem;
`;

const Description = styled.div`
  width: 500px;
  z-index: 3;
  color: white;
  font-size: 1.5rem;
`;

const DetailButton = styled.button`
  background-color: gray;
  width: 150px;
  margin-top: 1.2rem;
  margin-bottom: 1.5rem;
`;

const MainImg = styled.div`
  background-image: url("https://image.tmdb.org/t/p/original/ss6A2u6YiHTEWeVR01GtTUoO2Xj.jpg");
  position: absolute;
  top: 0;
  height: 900px;
  width: 100%;
  margin: auto;
  background-size: cover;
  background-position: center;
  opacity: 0.3;
  z-index: -1;
`;

const HomePresenter = ({ loading, trendMovie, trendTV }) => {
  return loading ? (
    <Loader />
  ) : (
    <Container>
      <MainImg bgUrl></MainImg>
      <Main>
        <Title>원더 우먼</Title>
        <Description>
          이번 여행에선 무슨 일이 생길까. 대학은 어딜 선택할까. 사랑은 여전히 달콤하기만 하고.
          날마다 두근두근, 라라 진의 인생. 하지만 내일은 어찌 될지, 아직은 모르는 일.
        </Description>
        <DetailButton>상세 정보</DetailButton>

        {trendTV && trendTV.length > 0 && (
          <Seaction title="TV 프로그램 인기 콘텐츠">
            {trendTV.map(tv => (
              <Poster
                key={tv.id}
                id={tv.id}
                imageUrl={tv.poster_path}
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

        {trendMovie && trendMovie.length > 0 && (
          <Seaction title="NowPlaying">
            {trendMovie.map(movie => (
              <Poster
                key={movie.id}
                id={movie.id}
                imageUrl={movie.poster_path}
                title={movie.title}
                rating={movie.vote_average}
                year={movie.release_date.substring(0, 4)}
                isMovie={true}
              ></Poster>
            ))}
          </Seaction>
        )}
      </Main>
    </Container>
  );
};

export default HomePresenter;
