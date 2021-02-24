import React, { useRef } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Loader from "../../components/loader";
import Poster from "../../components/Poster";
import Message from "../../components/Message";
import Helmet from "react-helmet";
import YouTube from "react-youtube";
import { SwiperSlide } from "swiper/react";

import SwiperSeaction from "../../components/SwiperSeaction";

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
  justify-content: center;
  display: flex;
  width: 100%;
  position: relative;
  z-index: 1;
  height: 100%;
`;

const Data = styled.div`
  width: 35%;
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
  margin-bottom: 1rem;
`;

const Cover = styled.div`
  width: 35%;
  margin: 25px;
  background-image: url(${props => props.bgImage});
  background-position: center center;
  background-size: cover;
  height: 90%;
  border-radius: 5px;
  margin-top: 80px;
  margin-left: 80px;
`;

const ContainerPoster = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 15px;
`;

const ButtonContainer = styled.div`
  display: flex;
`;

const Button = styled.div`
  margin-bottom: 1rem;
  background-color: gray;
  padding: 0.5rem;
  border-radius: 2px;
  display: inline-block;
  margin-left: 1rem;

  &:hover {
    cursor: pointer;
  }
`;

const Homepage = styled.a`
  margin-bottom: 1rem;
  background-color: gray;
  padding: 0.5rem;
  border-radius: 2px;
  display: inline-block;
`;

const Video = styled(YouTube)`
  margin-top: 1rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  margin: auto;
`;

const handleButtonTap = (dom, taps) => {
  // 컨텐트 모두 숨김
  taps.forEach(ele => {
    if (ele.dom && ele.dom.current) ele.dom.current.style.display = "none";
  });
  if (dom.title === "시즌" && dom.dom && dom.dom.current) {
    dom.dom.current.style.display = "grid";
  } else {
    dom.dom.current.style.display = "block";
  }
};

const DetailPresenter = ({ loading, detail, error }) => {
  const video = useRef();
  const season = useRef();
  const overview = useRef();

  const tap = [
    { title: "설명", dom: overview },
    { title: "예고편", dom: video },
    { title: "시즌", dom: season }
  ];

  return loading ? (
    <>
      <Helmet>
        <title>loading...</title>
      </Helmet>
      <Loader></Loader>
    </>
  ) : (
    <Container>
      <Helmet>
        <title>{detail.title ? detail.title : detail.name}</title>
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

          {detail.homepage && (
            <Homepage href={detail.homepage} target="_blank">
              홈페이지 이동
            </Homepage>
          )}

          {tap &&
            tap.length > 0 &&
            tap.map((ele, idx) => {
              return (
                <Button key={idx} onClick={() => handleButtonTap(ele, tap)}>
                  {ele.title}
                </Button>
              );
            })}

          <Overview ref={overview}>{detail.overview || "정보가 없습니다"}</Overview>

          <div ref={video} style={{ display: "none" }}>
            <SwiperSeaction perView="1">
              {detail.videos &&
                detail.videos.results.length > 0 &&
                detail.videos.results.map(ele => (
                  <SwiperSlide key={ele.key}>
                    <Video videoId={ele.key}></Video>
                  </SwiperSlide>
                ))}

              {detail.videos.results.length === 0 && <div> 예고편이 없습니다</div>}
            </SwiperSeaction>
          </div>

          <ContainerPoster ref={season} style={{ display: "none" }}>
            {detail.seasons &&
              detail.seasons.map(ele => (
                <Poster
                  key={ele.id}
                  id={ele.id}
                  imageUrl={ele.poster_path}
                  title={ele.name}
                  isMovie={false}
                  isDetail={false}
                >
                  {ele.air_date}
                </Poster>
              ))}
          </ContainerPoster>
        </Data>
      </Contenxt>
    </Container>
  );
};

DetailPresenter.propTypes = {
  detail: PropTypes.object,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired
};

export default DetailPresenter;
