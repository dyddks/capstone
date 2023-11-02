import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import moment from 'moment';

const Container = styled.div`
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
    font-size: 2.4rem;
`;
const Title = styled.div`
    font-size: 1.2rem;
    width: 50%;
    border: 2px solid black;
    margin-bottom: 8px;
    padding: 2px 8px;
    border-radius: 4px;
`;
const WriteInfo = styled.div`
    display: flex;
    width: 50%;
    margin-bottom: 8px;
`;
const Writter = styled.div`
    border: 2px solid black;
    width: 50%;
    margin-right: 8px;
    padding: 2px 8px;
    border-radius: 4px;
`;
const WriteDay = styled.div`
    border: 2px solid black;
    width: 50%;
    padding: 2px 8px;
    border-radius: 4px;
`;
const Body = styled.div`
    font-size: 1.2rem;
    width: 50%;
    height: 28rem;
    vertical-align: top;
    text-align: left;
    resize: none;
    border: 2px solid black;
    padding: 2px 8px;
    border-radius: 4px;
`;
const BtnSet = styled.div`
    display: flex;
    justify-content: space-between;
    width: 50%;
    margin-top: 1rem;
`;
const DeleteBtn = styled.button`
    width: 10%;
    border-radius: 4px;

    :hover {
        box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.1) inset;
    }
`;
const ModifyBtn = styled.button`
    width: 10%;
    border-radius: 4px;

    :hover {
        box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.1) inset;
    }
`;

export const PostDetail = () => {
    const [postId, setPostId] = useState('');
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [userName, setUserName] = useState('');
    const [createAt, setCreateAt] = useState('');
    const nav = useNavigate();
    const location = useLocation();

    useEffect(() => {
        fetch(`board/${location.state}`) //서버에서 상세게시글 받아오기
        .then(Response => Response.json())
        .then((json) => {
            setPostId(json.id);
            setTitle(json.title);
            setContent(json.content);
            setUserName(json.name);
            setCreateAt(moment(json.createdAt).format('YYYY년 MM월 DD일 HH:mm'));
        })
        .catch((error) => {
            console.error(error);
        });
    })
    
    const deletePost = () =>{ // 게시글 삭제
        const Data = {
            id: postId,
            user_id: sessionStorage.getItem('id'),
        }
        const {id, user_id} = Data;
        fetch("/board/delete", {
            method: 'DELETE',
            body: JSON.stringify({
                id,
                user_id
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        .then(Response => Response.json())
        .catch((error) => {
            console.error(error);
        });
        alert("게시글이 삭제 되었습니다.");
        nav('/Community');
    }
    const modifyPost = () => { // 게시글 수정
        nav('/write' ,{ state: { title: title, content: content, id: postId}});
    }

    return(
        <Container>
            <Div>자유게시판</Div>
            <Title>{title}</Title>
            <WriteInfo>
                <Writter>{userName}</Writter>
                <WriteDay>{createAt}</WriteDay>
            </WriteInfo>
            <Body>{content}</Body>
            <BtnSet>
                {sessionStorage.getItem('name') === userName && <DeleteBtn onClick={deletePost}>삭제</DeleteBtn>}
                {sessionStorage.getItem('name') === userName && <ModifyBtn onClick={modifyPost}>수정</ModifyBtn>}
            </BtnSet>
        </Container>
    );
};