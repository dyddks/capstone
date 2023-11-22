import React from 'react';
import styled from '@emotion/styled';
import { Outlet } from 'react-router-dom';
import { Header } from 'components/Header';
import { Footer } from 'components/Footer';

const Container = styled.div`
  diplay: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  min-width: 1200px;
`;
export const Layout = () => {
  return (
    <Container>
      <Header />
      <Outlet />
      <Footer />
    </Container>
  );
};
