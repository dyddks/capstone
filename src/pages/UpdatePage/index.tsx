import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { UpdateForm } from "components/Form/UpdateForm";


const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const UpdatePage = () => {
    
    return(
        <Container>
            <UpdateForm title="회원정보 수정"/>
        </Container>
    );
};
