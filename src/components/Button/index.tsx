import styled from '@emotion/styled';

const Container = styled.button`
    border: 2px solid black;
    color: #000000;
    background-color: ${(props) => props.color};
    cursor: pointer;
    padding: 8px 16px;
    margin: 1rem;
    border-radius: 8px;
    font-family: 'ONE-Mobile-POP';

    &:hover{
        background-color: ${(props) => props.color};
        opacity: 0.5;
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

