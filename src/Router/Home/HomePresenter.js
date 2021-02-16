import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Loader from "../../components/loader";
import Poster from "../../components/Poster";
import SwiperSeaction from "../../components/SwiperSeaction";
import { SwiperSlide } from "swiper/react";
import Helmet from "react-helmet";
import { Link } from "react-router-dom";

const Container = styled.div`
  height: calc(100vh - 50px);
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
  color: white;
  width: 150px;
  font-size: 1rem;
  font-weight: 600;
  height: 30px;
  margin-top: 1.2rem;
  margin-bottom: 1.5rem;
  border-radius: 5px;
  border: none;
`;

const MainImg = styled.div`
  background-image: url(${props => props.bgImage});
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
  margin: auto;
  background-size: cover;
  background-position: center;
  opacity: 0.3;
  z-index: -1;
`;

const HomePresenter = ({ loading, trendMovie, trendTV }) => {
  const clickData = JSON.parse(localStorage.getItem("clickData"));
  return (
    <>
      <Helmet>
        <title>Home | Notflix</title>
      </Helmet>

      {loading ? (
        <Loader />
      ) : (
        <Container>
          <Main>
            {trendTV && trendTV.length > 0 && (
              <>
                <MainImg
                  bgImage={`https://image.tmdb.org/t/p/original/${trendTV[0].backdrop_path}`}
                ></MainImg>
                <Title>{trendTV[0].name}</Title>
                <Description>{trendTV[0].overview}</Description>
                <Link to={`/tv/${trendTV[0].id}`}>
                  <DetailButton o>상세 정보</DetailButton>
                </Link>
              </>
            )}
            {clickData && clickData.length > 0 && (
              <SwiperSeaction title="최근에 본 콘텐츠">
                {clickData.map(tv => (
                  <SwiperSlide>
                    <Poster
                      key={tv.id}
                      id={tv.id}
                      imageUrl={tv.imageUrl}
                      title={tv.title}
                      rating={tv.rating}
                      year={tv.year}
                      isMovie={false}
                    >
                      {tv.name}
                    </Poster>
                  </SwiperSlide>
                ))}
              </SwiperSeaction>
            )}

            {trendTV && trendTV.length > 0 && (
              <SwiperSeaction title="TV 프로그램 트랜드">
                {trendTV.map(tv => (
                  <SwiperSlide>
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
                  </SwiperSlide>
                ))}
              </SwiperSeaction>
            )}

            {trendMovie && trendMovie.length > 0 && (
              <SwiperSeaction title="영화 트랜드">
                {trendMovie.map(movie => (
                  <SwiperSlide>
                    <Poster
                      key={movie.id}
                      id={movie.id}
                      imageUrl={movie.poster_path}
                      title={movie.title}
                      rating={movie.vote_average}
                      year={movie.release_date.substring(0, 4)}
                      isMovie={true}
                    ></Poster>
                  </SwiperSlide>
                ))}
              </SwiperSeaction>
            )}
          </Main>
        </Container>
      )}
    </>
  );
};

export default HomePresenter;
