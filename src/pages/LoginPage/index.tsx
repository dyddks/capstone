import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { SignInForm } from "components/Form/SignInForm";


const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 10% 0;
`;
const StyledLink = styled(Link)`
    text-decoration: none;
`;


export const LoginPage = () => {
    return(
        <Container>
            <SignInForm title="로그인"/>
            <p>
                계정이 없습니까? <StyledLink to={"/register"}>가입하기</StyledLink>
            </p>
        </Container>
    );
};
