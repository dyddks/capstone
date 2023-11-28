import styled from '@emotion/styled';
import { useState, useEffect } from 'react'
import { faV } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Carousel from 'react-bootstrap/Carousel';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 100%;
`;

export const InfoPage = () => {
  return (
    <Container>
      <img src={process.env.PUBLIC_URL + `/image/Chapter1.gif`} alt="chapter1" />
      <img src={process.env.PUBLIC_URL + `/image/Chapter2.gif`} alt="chapter1" />
      <img src={process.env.PUBLIC_URL + `/image/Chapter3.gif`} alt="chapter1" />
      <img src={process.env.PUBLIC_URL + `/image/Chapter4.gif`} alt="chapter1" />
      <img src={process.env.PUBLIC_URL + `/image/Chapter5.gif`} alt="chapter1" />
      <img src={process.env.PUBLIC_URL + `/image/Chapter6.gif`} alt="chapter1" />
    </Container>
  );
};
