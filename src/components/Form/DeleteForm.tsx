import styled from "@emotion/styled";
import { useForm, SubmitHandler } from "react-hook-form";
import { Button } from "components/Button";
import { useContext } from 'react';
import { UserDataContext } from 'context/UserData/UserDataContext';

const Container = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    border: 1px solid black;
    box-shadow: 5px 5px 5px 5px lightgray;
`;

const Id = styled.div`
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

interface Props{
    readonly title: string;
}
interface FormValue {
    email: string,
    password: string
}

export const DeleteForm = ({title}: Props) => {
// react-form-hook 
    const { register, handleSubmit, formState: {errors}, reset } = useForm<FormValue>({
        mode: 'onChange'
    });
    const userDataContext = useContext(UserDataContext);
// 유효성 통과 됬을때 submitHandler
    const onSubmitHandler: SubmitHandler<FormValue> = (data) => {
        const { email, password } = data
        if(data.password === userDataContext.userPassword){
            fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
                email,
                password,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        .then(Response => Response.json())
        .catch((error) => {
            console.error(error);
        });
        alert("회원탈퇴가 완료되었습니다.")
        }
        else{
            alert("비밀번호가 틀립니다.")
        }
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
            <h1>{title}</h1>
            <Id>{userDataContext.userEmail}</Id>
            {errors?.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
            
            <Input type="password" placeholder="Password" {...register("password", userPassword)}/>
            {errors?.password && <ErrorMessage>{errors.password.message}</ErrorMessage>}
            <Button label={title}></Button>
        </Container>
    )
};