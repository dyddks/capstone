import styled from '@emotion/styled';
import { useContext, useState } from 'react';
import { WriteContext } from 'context/WriteContext/writeContext'
import { useNavigate } from 'react-router-dom';

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
    
`;
const ModifyBtn = styled.button`

`;

export const PostDetail = () => {
    const [id, setId] = useState(0);
    const [title, setTitle] = useState('리액트 개어렵네');
    const [content, setContent] = useState('ㅈㄱㄴ');
    const [userName, setUserName] = useState('정용안');
    const [createAt, setCreateAt] = useState('2023-10-14');
    const writeContext = useContext(WriteContext);
    const num = writeContext.num;
    const nav = useNavigate();

    fetch(`board/${num}`) //서버에서 상세게시글 받아오기
        .then(Response => Response.json())
        .then((json) => {
            setId(json.id);
            setTitle(json.title);
            setContent(json.content);
            setUserName(json.userName);
            setCreateAt(json.createAt);
        })
        .catch((error) => {
            console.error(error);
        });
    const deletePost = () =>{ // 게시글 삭제
        const user_Id = sessionStorage.getItem('id');
        
        fetch("/board/delete", {
            method: 'DELETE',
            body: JSON.stringify({
                id,
                user_Id
            }),
            headers: {
                'Contesnt-type': 'application/json; charset=UTF-8',
            },
        })
        .catch((error) => {
            console.error(error);
        });
        alert("게시글이 삭제 되었습니다.");
        nav('/Community');
    }
    const modifyPost = () => { // 게시글 수정
        writeContext.storeValue(1);
        writeContext.storeTitle(title);
        writeContext.storeContent(content);
        nav('/write');
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