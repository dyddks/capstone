import styled from "@emotion/styled";
import { useForm, SubmitHandler } from "react-hook-form";
import { Button } from "components/Button";
import { useContext, useState } from 'react';
import { UserDataContext } from 'context/UserData/UserDataContext';
import { Link } from 'react-router-dom';
import { DeleteUser } from 'components/DeleteUser';

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

export const UpdateForm = ({title}: Props) => {
// react-form-hook 
    const { register, handleSubmit, formState: {errors}, reset } = useForm<FormValue>({
        mode: 'onSubmit'
    });
    const userDataContext = useContext(UserDataContext);
    const [updatePhone, setUpdatePhone] = useState('');

// 유효성 통과 됬을때 submitHandler
    const updatePassword: SubmitHandler<FormValue> = (data) => {
        if(data.cerrentPassword === userDataContext.userPassword){
            fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
                data
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            })
            .then(Response => Response.json())
            .then((json) => console.log(json))
            .catch((error) => {
                console.error(error);
            });
            alert("비밀번호가 변경되었습니다.")
            reset
        }
        else{
            alert("현재 비밀번호가 올바르지 않습니다.")
        }
    }

    const updatePhoneNunber = () => {
        console.log(updatePhone)
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
                updatePhone
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        .then(Response => Response.json())
        .then((json) => console.log(json))
        .catch((error) => {
            console.error(error)
        });
        alert("회원정보가 변경되었습니다.");
    }
// password 유효성 검사 조건
    const userPassword = {
        required: "필수 필드입니다.",
        minLength: {
            value: 4,
            message: "최소 4자입니다.",
        },
        maxLength: {
            value: 13,
            message: "최대 13자입니다.",
        },
    };

    return(
        <Container>
            <h1>{title}</h1>
            <Div>{sessionStorage.getItem('email')}</Div>
            <Div>{userDataContext.userPassword}</Div>
            <InputSet onSubmit={handleSubmit(updatePassword)}>
                <Input type="password" placeholder="현재 비밀번호" {...register("cerrentPassword")} />
                <Input type="password" placeholder="변경할 비밀번호" {...register("updatePassword", userPassword)} />
                {errors?.updatePassword && <ErrorMessage>{errors.updatePassword.message}</ErrorMessage>}
                <Button label='비밀번호 변경'></Button>
            </InputSet>
            <Div>{userDataContext.userPhone}</Div>
            <InputSet>
                <Input placeholder='변경할 핸드폰번호' onChange={(e) => setUpdatePhone(e.target.value)}/>
                <Button label='수정' onClick={updatePhoneNunber}></Button>
            </InputSet>
            <Link to='/'><Button label={title} /></Link><DeleteUser />
        </Container>
    )
};