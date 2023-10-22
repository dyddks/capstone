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
`;
const Title = styled.div`
    font-size: 1.2rem;
    width: 50%;
    border: 1px solid black;
`;
const WriteInfo = styled.div`
    display: flex;
    width: 50%;
`;
const Writter = styled.div`
    border: 1px solid black;
    width: 50%;
`;
const WriteDay = styled.div`
    border: 1px solid black;
    width: 50%;
`;
const Body = styled.div`
    font-size: 1.2rem;
    width: 50%;
    height: 28rem;
    vertical-align: top;
    text-align: left;
    resize: none;
    border: 1px solid black;
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
    const [title, setTitle] = useState('리액트 개어렵네');
    const [body, setBody] = useState('ㅈㄱㄴ');
    const [writter, setWritter] = useState('정용안');
    const [writeDay, setWriteDay] = useState('2023-10-14');
    const writeContext = useContext(WriteContext);

    const nav = useNavigate();
    // fetch("http://210.125.212.210:8080/user/login") //서버에서 게시글 받아오기
    //     .then(Response => Response.json())
    //     .then((json) => setItems(json))
    //     .catch((error) => {
    //         console.error(error);
    //     });
    const deletePost = () =>{ // 게시글 삭제
        // fetch("/board", {
        //     method: 'POST',
        //     body: JSON.stringify({
        //         id, 
        //         userId
        //     }),
        //     headers: {
        //         'Contesnt-type': 'application/json; charset=UTF-8',
        //     },
        // })
        // .catch((error) => {
        //     console.error(error);
        // });
        alert("게시글이 삭제 되었습니다.");
        nav('/Community');
    }
    const modifyPost = () => { // 게시글 수정
        writeContext.storeValue(1)
        nav('/write');
        return writeContext.value;
    }

    return(
        <Container>
            <Div>자유게시판{sessionStorage.getItem('writeId')}</Div>
            <Title>{title}</Title>
            <WriteInfo>
                <Writter>{writter}</Writter>
                <WriteDay>{writeDay}</WriteDay>
            </WriteInfo>
            <Body>{body}</Body>
            <BtnSet>
                {sessionStorage.getItem('nickName') === writter && <DeleteBtn onClick={deletePost}>삭제</DeleteBtn>}
                {sessionStorage.getItem('nickName') === writter && <ModifyBtn onClick={modifyPost}>수정</ModifyBtn>}
            </BtnSet>
        </Container>
    );
};