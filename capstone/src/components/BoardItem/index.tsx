import styled from '@emotion/styled';

const Container = styled.div`
    display: flex;
    padding: 24px;
    margin: 24px;
    justify-content: space-between;
    width: 90%;
`;
const Id = styled.div`
    font-size: 20px;
    font-weight: bold;
    width: 20%;
`;
const Title = styled.div`
    font-size: 20px;
    width: 50%;
    text-overflow: ellipsis;
`;
const UserName = styled.div`
    font-size: 20px;
    width: 10%;
`;

const Hr = styled.hr`
    backgound-color: black;
    width: 90%;
`;

interface Item {
    readonly id: number;
    readonly title: string;
    readonly body: string;
    readonly userName: string;
}

export const BoardItem = ({id, title, body, userName}: Item) => {
    return(
        <>
            <Container>
                <Id>{id}</Id>
                <Title>{title}</Title>
                <UserName>{userName}</UserName>
            </Container>
            <Hr/>
        </>
    );
};