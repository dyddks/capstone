import React from "react";
import styled from "@emotion/styled";
import { Outlet } from "react-router-dom";
import { Header } from "components/Header";
import { Footer } from "components/Footer";

const Container = styled.div`
    diplay: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    overflow: scroll;
`;

export const Layout = () => {
    return(
        <Container>
            <Header />
            <Outlet />
            <Footer />
        </Container>
    );
};