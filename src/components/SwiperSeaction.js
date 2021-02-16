import { Swiper } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import { useRef } from "react";
import styled from "styled-components";

// Import Swiper styles
import "swiper/swiper.min.css";

SwiperCore.use([Navigation, Pagination]);

const Container = styled.div``;
const Title = styled.h3`
  font-size: 1.5rem;
  font-weight: 800;
  margin-bottom: 1rem;
`;

const SwiperSeaction = ({ title, perView = 6, children }) => (
  <Container>
    <Title>{title}</Title>
    <Swiper
      spaceBetween={50}
      slidesPerView={perView}
      onSlideChange={() => console.log("slide change")}
      onSwiper={swiper => console.log(swiper)}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
    >
      {children}
    </Swiper>
  </Container>
);

export default SwiperSeaction;
