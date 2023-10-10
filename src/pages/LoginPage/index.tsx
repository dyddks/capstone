import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { SignInForm } from "components/Form/SignInForm";


const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const LoginPage = () => {
    return(
        <Container>
            <SignInForm title="로그인"/>
            <p>
                계정이 없습니까? <Link to={"/register"}>가입하기</Link>
            </p>
        </Container>
    );
};
