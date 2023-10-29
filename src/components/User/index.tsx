import styled from "@emotion/styled";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    border: 1px solid black;
    box-shadow: 5px 5px 5px 5px lightgray;
    padding: 24px;
    width: 60%;
`;

const Div = styled.div`
    display: flex;
    justify-content: space-between;
    font-size: 16px;
    padding: 10px 15px;
    margin: 8px;
    border-radius: 4px;
    width:80%;
`;

export const UserForm = () => {
// react-form-hook
    return(
        <Container>
            <h1>회원정보</h1>
            <Div>이름: {sessionStorage.getItem('name')}</Div>
            <Div>이메일 : {sessionStorage.getItem('email')}</Div>
            <Div>연락처: {sessionStorage.getItem('phone')}</Div>
        </Container>
    )
};