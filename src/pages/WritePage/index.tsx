import styled from '@emotion/styled';
import { Button } from 'components/Button';
import { useForm, SubmitHandler } from 'react-hook-form'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useEffect, useContext, useState } from 'react';
import { WriteContext } from 'context/WriteContext/writeContext';

const Container = styled.form`
    display: flex;
    flex-direction: column;
    margin: 5% 0;
    align-items: center;
    height: auto;
    width: 100%;
`;
const Div = styled.div`
    width: 50%;
    margin-bottom: 2rem;
    font-weight: bold;
`;
const Label = styled.div`
    font-size: 2rem;
    font-weight: bold;
    width: 50%;
    margin-bottom: 1rem;
`;
const Hr = styled.hr`
    width: 50%;
    height: 1px;
    background-color: black;
    margin-bottom: 1rem;
`;
const Title = styled.input`
    font-size: 1.2rem;
    width: 50%;
    margin-bottom: 1rem;
`;
const Body = styled.textarea`
    font-size: 1.2rem;
    width: 50%;
    height: 28rem;
    vertical-align: top;
    text-align: left;
    resize: none;
`;
const StyledLink = styled(Link)`
    font-size: 1rem;
    margin-left: 80%;
    text-decoration: none;
    color: black;
    border: 1px solid black;
    border-radius: 4px;
    background-color: lightgray;
    padding: 5px;

    :hover{
        text-decoration: underline;
    }
`;

interface FormValue {
    readonly title: string;
    readonly content: string;
}

export const WritePage = () => {
    const nav = useNavigate();
    const writeContext = useContext(WriteContext);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const { register, handleSubmit, formState: {errors}, reset } = useForm<FormValue>({
        mode: 'onSubmit'
    });

    useEffect(() => {
        if(writeContext.value === 1){
            setTitle(writeContext.title);
            setContent(writeContext.content);
        }
    })

    const onSubmitHandler: SubmitHandler<FormValue> = (data) => {
        const {title, content} = data
        if(title === null){
            alert('제목을 입력해 주세요')
        }else if(content === null){
            alert('내용을 입력해 주세요')
        }else{
            const user_Id = sessionStorage.getItem('id')
            fetch("/board/new-write", {
                method: 'POST',
                body: JSON.stringify({
                    title,
                    content,
                    user_Id
                }),
                headers: {
                    'Contesnt-type': 'application/json; charset=UTF-8',
                },
            })
            .catch((error) => {
                console.error(error);
            });
            alert('등록되었습니다.')
            nav('/community')
        }
    }
    return(
        <Container onSubmit={handleSubmit(onSubmitHandler)}>
            <Div>자유게시판</Div>
            <Label>게시글 작성</Label>
            <Hr/>
            <Title id='title' placeholder='제목을 입력해 주세요' defaultValue={title}{...register("title")}/>
            <Body id='body' placeholder='내용을 입력해 주세요' maxLength={500} defaultValue={content} {...register("content")}/>
            <Button label='등록'></Button>
            <StyledLink to='/community'>뒤로가기</StyledLink>
        </Container>
    );
};