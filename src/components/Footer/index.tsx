import styled from "@emotion/styled";

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #eeeeee;
    height: 10rem;
    width: 100%;
`;

const Contents = styled.div`
    font-size: 0.9rem;
    color: #999999;
    margin-left: 2%;
`;

const Logo = styled.div`
    display: flex;
`;

const Icon = styled.img`
    height: 8rem;
    
`;

export const Footer = () => {
    return(
        <Container>
            <Contents>
                공주대학교 컴퓨터공학부 소프트웨어학과<br/>
                Copyrightⓒ2023 그작됩
            </Contents>
            {/* <Logo>
                <Icon src='../image/footerLogo.png'/>
                <Icon src='../image/bearLogo.jpg'/>
            </Logo> */}
            {/* <a href="https://kr.freepik.com/free-vector/business-growth-strategy-isometric-composition-with-bar-chart-and-circular-graph-elements-computer-screen-and-workers-vector-illustration_37916099.htm">작가 macrovector</a> 출처 Freepik */}
        </Container>
    );
};