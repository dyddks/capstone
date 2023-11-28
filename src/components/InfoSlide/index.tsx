import styled from '@emotion/styled';
import { useState, useEffect } from 'react'
import { faV } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Carousel from 'react-bootstrap/Carousel';

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
`;
const Contoller = styled(FontAwesomeIcon)`
  :hover {
    cursor: pointer;
  }
`;
export const InfoSlide = () => {
  const [imgNum, setImgNum] = useState(1);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (imgNum === 6) {
        setImgNum(1);
      } else {
        setImgNum(imgNum + 1);
      }
    }, 4000);

    return () => clearInterval(intervalId);
  }, [imgNum]);

  const next = () => {
    if (imgNum === 6) {
      setImgNum(1);
      return;
    }
    setImgNum(imgNum + 1);
  }

  const before = () => {
    if (imgNum === 1) {
      setImgNum(6);
      return;
    }
    setImgNum(imgNum - 1);
  }

  return (
    <Container>
      <Contoller icon={faV} rotation={90} size='2xl' onClick={before}/>
        <img src={process.env.PUBLIC_URL + `/image/Chapter${imgNum}.gif`} alt="chapter1" />
      <Contoller icon={faV} rotation={270} size='2xl' onClick={next}/>
    </Container>
  );
};
