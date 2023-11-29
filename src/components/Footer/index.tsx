import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #eeeeee;
  height: 10rem;
  width: 100%;
`;

const Contents = styled.div`
  font-size: 0.9rem;
  color: #999999;
  margin-left: 2%;
`;

export const Footer = () => {
  return (
    <Container>
      <Contents>
        공주대학교 컴퓨터공학부 소프트웨어학과<br/>
        Capstone Design Project<br/>
        Copyrightⓒ2023 그래도작동은됩니다 
      </Contents>
    </Container>
  );
};
