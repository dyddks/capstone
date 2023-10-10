import styled from "@emotion/styled";
import { useForm, SubmitHandler } from "react-hook-form";
import { Button } from "components/Button";
import { useState } from "react";
import { FormMethod } from "react-router-dom";

const Container = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    border: 1px solid black;
    box-shadow: 5px 5px 5px 5px lightgray;
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

interface Props{
    readonly title: string;
}
interface FormValue {
    name: string,
    phone: string,
    email: string,
    password: string
}

export const SignUpForm = ({title}: Props) => {
// react-form-hook 
    const { register, handleSubmit, formState: {errors}, reset , getValues} = useForm<FormValue>({
        mode: 'onSubmit'
    })

// 유효성 통과 됬을때 submitHandler
    const onSubmitHandler: SubmitHandler<FormValue> = (data) => {
        const { name, phone, email, password} = data
        fetch('/user/signup', {
            method: 'POST',
            body: JSON.stringify({
                name,
                phone,
                email,
                password,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        .then(Response => Response.json())
        .then((json) => {
            if(json.status === 1){
                alert("회원가입을 축하합니다.");
            }else{ 
                alert("사용중인 이메일입니다.");
            }
            console.log(json);
        })
        .catch((error) => {
            console.error(error);
        });
    }
// 각 필드 유효성 검사 조건
    const userName = {
        required: "필수 필드입니다.",
    }

    const userPhone = {
        required: "필수 필드입니다.",
    }

    const userEmail = {
        required: "필수 필드입니다.",
    }

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
            <h1>{title}</h1>
            <Input placeholder="Name" {...register("name", userName)}/>
            {errors?.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
            <Input placeholder="Phone" {...register("phone", userPhone)}/>
            {errors?.phone && <ErrorMessage>{errors.phone.message}</ErrorMessage>}
            <Input type="email" placeholder="E-mail" {...register("email", userEmail)}/>
            {errors?.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
            <Input type="password" placeholder="Password" {...register("password", userPassword)}/>
            {errors?.password && <ErrorMessage>{errors.password.message}</ErrorMessage>}
            <Button label={title}></Button>
        </Container>
    )
};
