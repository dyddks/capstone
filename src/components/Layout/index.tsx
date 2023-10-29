import React from "react";
import styled from "@emotion/styled";
import { Outlet, useLocation } from "react-router-dom";
import { Header } from "components/Header";
import { Footer } from "components/Footer";

const Container = styled.div`
    diplay: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    min-width: 1200px;
    background-image: url('/image/backgroundColor.png');
`;
export const Layout = () => {
    const location = useLocation();
    return(
        <Container>
            <Header />
            <Outlet />
            {location.pathname !== '/' ? <Footer/> : ''}
        </Container>
    );
};