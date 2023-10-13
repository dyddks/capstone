import styled from '@emotion/styled';

const Container = styled.button`
    border: 1px solid black;
    color: #000000;
    background-color: ${(props) => props.color};
    cursor: pointer;
    padding: 8px 16px;
    margin: 8px 16px;
    border-radius: 4px;
    &:hover{
        background-color: ${(props) => props.color};
        opacity: 0.8;
    }
    
    &:active{
        box-shadow: inset 5px 5px 10px rgba(0,0,0,0.2);
    }
`;

interface Props{
    readonly label: string;
    readonly color?: string;
    readonly onClick?: () => void;
}

export const Button = ({label, color = '#ffffff', onClick}: Props) => {
    return(
        <Container color={color} onClick={onClick}>{label}</Container>
    );
};

