import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div``;

const Image = styled.div`
  background-image: url(${props => props.bgUrl});
  height: 180px;
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
  margin-bottom: 1rem;
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

const Poster = ({ id, imageUrl, title, rating, year, isMovie = false }) => (
  <Link to={isMovie ? `/movie/${id}` : `/tv/${id}`}>
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
  </Link>
);

Poster.propTypes = {
  id: PropTypes.number.isRequired,
  iamgeUrl: PropTypes.string,
  title: PropTypes.string.isRequired,
  rating: PropTypes.number,
  year: PropTypes.string,
  isMovie: PropTypes.bool
};

export default Poster;
