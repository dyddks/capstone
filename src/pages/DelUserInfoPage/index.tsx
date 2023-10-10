import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { SignInForm } from "components/Form/SignInForm";
import { DeleteForm } from 'components/Form/DeleteForm';


const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const DeletePage = () => {
    return(
        <Container>
            <DeleteForm title="회원탈퇴"/>
        </Container>
    );
};
