import styled from "@emotion/styled";
import { useContext } from 'react';
import { UserDataContext } from 'context/UserData/UserDataContext';
import { Link } from 'react-router-dom';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    border: 1px solid black;
    box-shadow: 5px 5px 5px 5px lightgray;
`;

const Div = styled.div`
    display: flex;
    justify-content: space-between;
    font-size: 16px;
    padding: 10px 15px;
    margin: 8px;
    border-radius: 4px;
    width:80%;
`;

const Input = styled.input`
    display: flex;
    justify-content: space-between;
    font-size: 16px;
    padding: 10px 15px;
    margin: 8px;
    border-radius: 4px;
    width:80%;
`;

const ErrorMessage = styled.div`
    background-color: gray;
    border-radius: 4px;
    color: #ffffff;
    font-size: 16px;
    width: 90%;
    padding: 4px;
    margin: 8px;
    
`;

const InputSet = styled.form`
    display: flex;
    flex-direction: column;
`;

interface Props{
    readonly title: string;
}
interface FormValue {
    cerrentPassword: string,
    updatePassword: string
}

export const UserForm = ({title}: Props) => {
// react-form-hook 
    const userDataContext = useContext(UserDataContext);
    return(
        <Container>
            <h1>{title}</h1>
            <Div>이메일 : {sessionStorage.getItem('email')}</Div>
            <Div>연락처: {sessionStorage.getItem('phone')}</Div>
            <Link to='/delete'></Link>
        </Container>
    )
};