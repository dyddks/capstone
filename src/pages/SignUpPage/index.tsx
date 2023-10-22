import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { SignUpForm } from "components/Form/SignUpForm";

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

export const SignUpPage = () => {
    
    return(
        <Container>
            <SignUpForm title="가입하기"/>
            <p>
                계정이 이미 있습니까? <StyledLink to={"/Login"}>로그인하기</StyledLink>
            </p>
        </Container>
    );
};
