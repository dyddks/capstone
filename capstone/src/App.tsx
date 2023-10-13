import logo from './logo.svg';
import './App.css';
import styled from '@emotion/styled';
import { useState } from 'react';
import { Header } from 'components/Header';
import { Routes, Route, Link} from 'react-router-dom'
import { MainPage } from 'pages/MainPage';
import { LoginPage } from 'pages/LoginPage';
import { Layout } from 'components/Layout';
import { SignUpPage } from 'pages/SignUpPage';
import { UpdatePage } from 'pages/UpdatePage';
import { DeletePage } from 'pages/DelUserInfoPage';
import { InfoPage } from 'pages/InfoPage';
import { NoticePage } from 'pages/NoticePage';
import { ComuPage } from 'pages/ComuPage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path='/' element={<MainPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<SignUpPage />} />
        <Route path='/update' element={<UpdatePage/>} />
        <Route path='/delete' element={<DeletePage/>} />
        <Route path='/Info' element={<InfoPage/>} />
        <Route path='/Notice' element={<NoticePage/>} />
        <Route path='/Community' element={<ComuPage/>} />
        <Route path='*' element="404 not found" />
      </Route>
    </Routes>
  );
}

export default App;