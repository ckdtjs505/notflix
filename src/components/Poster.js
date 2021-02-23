import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

const Container = styled.div``;

const Image = styled.div`
  background-image: url(${props => props.bgUrl});
  height: 100%;
  border-radius: 4px;
  background-size: cover;
  background-position: center center;
  transition: opacity 0.1s ease-in-out;
`;

const Rating = styled.div`
  width: 100%;
  margin-top: -1.5rem;
  text-align: right;

  opacity: 0;
  color: white;
`;

const ImageContainer = styled.div`
  height: 180px;
  margin-bottom: 3.5rem;
  &:hover {
    ${Image} {
      opacity: 0.3;
    }
    ${Rating} {
      opacity: 1;
    }
  }
`;

const Title = styled.span`
  display: block;
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin-top: 1rem;
`;

const Year = styled.span`
  font-size: 10px;
  color: gray;
`;

const clickHandle = props => {
  let data = JSON.parse(localStorage.getItem("clickData"));
  if (!Array.isArray(data) || data === null || data === undefined) data = [];
  if (data.includes(props)) return; // 중복데이터 저장 안함
  const result = data.filter(ele => ele.id !== props.id);
  localStorage.setItem("clickData", JSON.stringify([props, ...result]));
};

const CustomPopup = styled(Popup)`
  /* background: none; */
  &-content {
    padding: 0px;
    border: none;
    background: none;
  }
`;

const Modal = styled.div`
  font-size: 12px;
  background-color: black;
  border-radius: 0.5rem;
  border: none;
  height: 700px;
  width: 100%;
`;

const ModalCloase = styled.div`
  cursor: pointer;
  position: absolute;
  display: block;
  padding: 2px 5px;
  line-height: 20px;
  right: 5px;
  top: 5px;
  font-size: 24px;
  background: black;
  border-radius: 18px;
  z-index: 2;
`;

const ModalHeader = styled.div`
  width: 100%;
  height: 620px;
  font-size: 18px;
  display: block;
`;

const ModalContent = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: 600;
  margin: 2rem;
  margin-bottom: 5px;
  width: 100%;
  margin: auto;
  z-index: 100;
`;

const ModalAction = styled.div`
  align-items: center;
  margin: 1rem;
  text-align: center;
`;

const Poster = props => {
  const { id, imageUrl, title, rating, year, isMovie = false } = props;
  return (
    <CustomPopup
      trigger={
        <Container>
          <ImageContainer>
            <Image
              bgUrl={
                imageUrl
                  ? `https://image.tmdb.org/t/p/w500/${imageUrl}`
                  : require("../assets/noimage.png")
              }
            ></Image>
            <Rating>
              <span role="img" aria-label="rating">
                ✨
              </span>{" "}
              {rating}/10
            </Rating>
            <Title>{title}</Title>
            <Year>{year}</Year>
          </ImageContainer>
        </Container>
      }
      modal
      nested
    >
      {close => (
        <Modal>
          <ModalCloase onClick={close}>&times;</ModalCloase>
          <ModalHeader>
            <Image
              bgUrl={
                imageUrl
                  ? `https://image.tmdb.org/t/p/w500/${imageUrl}`
                  : require("../assets/noimage.png")
              }
            ></Image>
          </ModalHeader>
          <ModalContent>
            <div style={{ fontSize: `2rem`, margin: "1rem" }}>{title}</div>
            <ModalAction>
              <Link
                to={isMovie ? `/movie/${id}` : `/tv/${id}`}
                onClick={() => {
                  clickHandle(props);
                  close();
                }}
              >
                상세 정보
              </Link>
            </ModalAction>
          </ModalContent>
        </Modal>
      )}
    </CustomPopup>
  );
};

Poster.propTypes = {
  id: PropTypes.number.isRequired,
  iamgeUrl: PropTypes.string,
  title: PropTypes.string.isRequired,
  rating: PropTypes.number,
  year: PropTypes.string,
  isMovie: PropTypes.bool
};

export default Poster;
