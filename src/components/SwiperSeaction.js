import SwiperCore, { Navigation, Pagination } from "swiper";
import { Swiper } from "swiper/react";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import { useRef } from "react";
import styled from "styled-components";

// Import Swiper styles
import "swiper/swiper.min.css";

SwiperCore.use([Navigation, Pagination]);

const Container = styled.div``;
const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Title = styled.h3`
  font-size: 1.5rem;
  font-weight: 800;
  margin-bottom: 1rem;
`;
const Setting = styled.div`
  display: flex;
`;

const PreButton = styled.div`
  background-color: none;
  width: 1.5rem;
  height: 1.5rem;
  padding: auto;
  text-align: center;
  z-index: 5;
  border: solid white 1px;
  border-radius: 4px;
  &:hover {
    background-color: gray;
  }
`;
const NextButton = styled.div`
  background-color: none;
  width: 1.5rem;
  height: 1.5rem;
  padding: auto;
  text-align: center;
  z-index: 5;
  border: solid white 1px;
  border-radius: 4px;
  &:hover {
    background-color: gray;
  }
`;

const SwiperSeaction = ({ title, perView = 6, children, isSetting = false }) => {
  const prevRef = useRef();
  const nextRef = useRef();
  const setting = useRef();
  return (
    <Container>
      <Header>
        <Title>{title}</Title>
        <Setting ref={setting}>
          <PreButton ref={prevRef}>
            <AiFillCaretLeft />
          </PreButton>
          <NextButton ref={nextRef}>
            <AiFillCaretRight />
          </NextButton>
        </Setting>
      </Header>

      <Swiper
        spaceBetween={50}
        slidesPerView={perView}
        navigation={{
          prevEl: prevRef.current ? prevRef.current : undefined,
          nextEl: nextRef.current ? nextRef.current : undefined
        }}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={swiper => {
          isSetting = swiper.slides.length > 6;
          if (isSetting) {
            swiper.navigation.update();
          } else {
            setting.current.remove();
          }
        }}
        onInit={swiper => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
      >
        {children}
      </Swiper>
    </Container>
  );
};

export default SwiperSeaction;
