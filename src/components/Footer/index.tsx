import styled from '@emotion/styled';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #202020;
  height: 10rem;
  width: 100%;
`;

const Contents = styled.div`
  font-size: 0.9rem;
  color: #999999;
  margin-left: 2%;
`;
const Git = styled(FontAwesomeIcon)`
  color: #999999;
  font-size: 3rem;
  margin-right: 2%;
`;

export const Footer = () => {
  const git = () => {
    <a href='https://www.naver.com'/>
  }
  return (
    <Container>
      <Contents>
        공주대학교 컴퓨터공학부 소프트웨어학과<br/>
        Capstone Design Project<br/>
        Copyrightⓒ2023 그래도작동은됩니다 
      </Contents>
      <Git icon={faGithub}></Git>
    </Container>
  );
};
