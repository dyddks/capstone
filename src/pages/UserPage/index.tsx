import styled from "@emotion/styled";
import { Button } from 'components/Button';
import { UserForm } from 'components/User';
import { Link } from "react-router-dom";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const UserPage = () => {
    
    return(
        <Container>
            <UserForm title="회원정보"/>
        </Container>
    );
};
