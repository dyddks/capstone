import styled from "@emotion/styled";

const Container = styled.div`
    background-color: #ffffff;
    width: calc(100% - 40px);
    padding: 20px;
    box-shadow: 0 5px 5px 0 lightgray;
`;

const Title = styled.div`
    font-size: 1.2em;
    font-weight: bold;
    color: #000000;
`;

export const Footer = () => {
    return(
        <Container>
            Footer
        </Container>
    );
};