import styled from "@emotion/styled";

const Container = styled.div`
    display: flex;
`;

const Label = styled.div`
    font-size: 1em;
    padding: 8px 0;
`;

const Input = styled.input`
    font-size: 1.2em;
`;

interface Props{
    readonly label: string;
    readonly inputType: string;
}

export const InputSet = ({label, inputType}: Props) => {
    return(
        <Container>
            <Label>{label}</Label>
            <Input type={inputType}></Input>
        </Container>
    );
};