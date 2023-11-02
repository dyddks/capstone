import styled from '@emotion/styled';
import { Button } from 'components/Button';
import { useForm, SubmitHandler } from 'react-hook-form'
import { useLocation, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

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
    const location = useLocation();
    const [postId, setPostId] = useState('');
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const { register, handleSubmit, formState: {errors}, reset } = useForm<FormValue>({
        mode: 'onChange'
    });

    useEffect(() => {
        if (location.state !== null) {
            setTitle(location.state.title);
            setContent(location.state.content);
            setPostId(location.state.id);
        }
    })

    const onSubmitHandler: SubmitHandler<FormValue> = (data) => {
        
        if(location.state !== null){
            const Data = {
                id: postId,
                user_id: sessionStorage.getItem('id'),
                title: data.title,
                content: data.content
            }
            const {id ,user_id, title, content} = Data;
            if (title === '') {
                alert('제목을 입력해 주세요')
            } else if (content === '') {
                alert('내용을 입력해 주세요')
            } else {
                fetch("/board/update", {
                    method: 'POST',
                    body: JSON.stringify({
                        id,
                        title,
                        content,
                        user_id,
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
                console.log(Data)
                alert('게시글이 수정되었습니다.')
                nav('/community')
            }
        } else {
            const Data = {
                userId: sessionStorage.getItem('id'),
                title: data.title,
                content: data.content
            }
            const {userId, title, content} = Data;
            if(title === ''){
                alert('제목을 입력해 주세요')
            }else if(content === ''){
                alert('내용을 입력해 주세요')
            }else{
                fetch("/board/write", {
                    method: 'POST',
                    body: JSON.stringify({
                        title,
                        content,
                        userId,
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
                console.log(Data)
                alert('게시글이 등록되었습니다.')
                nav('/community')
            }
        }
    }
    return(
        <Container onSubmit={handleSubmit(onSubmitHandler)}>
            <Div>자유게시판</Div>
            <Label>게시글 작성</Label>
            <Hr/>
            <Title placeholder='제목을 입력해 주세요' defaultValue={title} {...register("title")}/>
            <Body placeholder='내용을 입력해 주세요' maxLength={500} defaultValue={content} {...register("content")}/>
            <Button label='등록'></Button>
            <StyledLink to='/community'>뒤로가기</StyledLink>
        </Container>
    );
};