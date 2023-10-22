import styled from "@emotion/styled";
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { useForm, SubmitHandler } from "react-hook-form";
import { Button } from "components/Button";
import { useEffect, useState } from "react";
import { useContext } from 'react';
import { UserDataContext, UserDataContextProvider } from 'context/UserData/UserDataContext';
import { userInfo } from 'os';
import { useNavigate } from 'react-router-dom';

const Container = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    border: 1px solid black;
    box-shadow: 5px 5px 5px 5px lightgray;
    width: 50%;
    margin-bottom: 2rem;
`;
const H1 = styled.h1`
    margin-top: 5%;
    font-weight: bold;
`;
const InputSet = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 1rem;
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

interface Props{
    readonly title: string;
}
interface FormValue {
    email: string,
    password: string
}

export const SignInForm = ({title}: Props) => {
// react-form-hook 
    const { register, handleSubmit, formState: {errors}, reset } = useForm<FormValue>({
        mode: 'onChange'
    });
    const nav = useNavigate();
// 유효성 통과 됬을때 submitHandler
    const onSubmitHandler: SubmitHandler<FormValue> = (data) => {
        const {email, password} = data
        fetch("user/login", {
            method: 'POST',
            body: JSON.stringify({
                email,
                password
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        .then(Response => Response.json())
        .then((json) => {
            if(json === null){
                alert("이메일이나 비밀번호가 틀렸습니다.")
            }else{
                sessionStorage.setItem('email', json.email);
                sessionStorage.setItem('id', json.id);
                sessionStorage.setItem('phone', json.phone);
                sessionStorage.setItem('name', json.name)
                alert(sessionStorage.name+ "님 환영합니다");
                nav(-1);
            }
        })
        .catch((error) => {
            console.error(error);
        });
    }
// email 유효성 검사 조건
    const userEmail = {
        required: "필수 필드입니다.",
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
        <Container onSubmit={handleSubmit(onSubmitHandler)}>
            <H1>{title}</H1>
            <InputSet>
                <FloatingLabel controlId="floatingInput" label="Email address" className="mb-3">
                    <Form.Control type="email" placeholder="name@example.com" {...register("email", userEmail)} />
                </FloatingLabel>
                {errors?.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
                <FloatingLabel controlId="floatingPassword" label="Password" >
                    <Form.Control type="password" placeholder="Password" {...register("password", userPassword)} />
                </FloatingLabel>
                {errors?.password && <ErrorMessage>{errors.password.message}</ErrorMessage>}
            </InputSet>
            <Button label={title}></Button>
        </Container>
    )
};
