import styled from '@emotion/styled';
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faMobileScreenButton, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  border-radius: 4px;
  border: 2px solid gray;
  width: 69%;
  margin: 0 1%;
`;
const Title = styled.div`
  width: 90%;
`;
const Label = styled.h1`
  width: 90%;
`;
const Hr = styled.hr`
  height: 1.3px;
  background: black;
`;
const Div = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.6rem;
  width: 90%;
`;
const Icon = styled(FontAwesomeIcon)`
  margin-right: 1rem;
`;

export const UserForm = () => {
  // react-form-hook
  return (
    <Container>
      <Title>
        <Label>회원정보</Label>
        <Hr/>
      </Title>
      <Div>
        <Icon icon={faUser} />
        {sessionStorage.getItem('name')}
      </Div>
      <Div>
        <Icon icon={faEnvelope} />
        {sessionStorage.getItem('email')}
      </Div>
      <Div>
        <Icon icon={faMobileScreenButton} />
        {sessionStorage.getItem('phone')}
        </Div>
    </Container>
  );
};
