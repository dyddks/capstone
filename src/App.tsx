import logo from './logo.svg';
import './App.css';
import styled from '@emotion/styled';
import { useState } from 'react';
import { Header } from 'components/Header';
import { Routes, Route, Link } from 'react-router-dom';
import { MainPage } from 'pages/MainPage/index1';
import { LoginPage } from 'pages/LoginPage';
import { Layout } from 'components/Layout';
import { SignUpPage } from 'pages/RegisterPage';
import { InfoPage } from 'pages/InfoPage';
import { NoticePage } from 'pages/NoticePage';
import { ComuPage } from 'pages/ComuPage';
import { DetailPage } from 'pages/DetailPage';
import { WritePage } from 'pages/WritePage';
import { MyPage } from 'pages/MyPage';
import { AnalysisPage } from 'pages/AnalysisPage';
import { ResultPage } from 'pages/AnalysisPage/ResultPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<SignUpPage />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/info" element={<InfoPage />} />
        <Route path="/notice" element={<NoticePage />} />
        <Route path="/analysis" element={<AnalysisPage />} />
        <Route path="/result" element={<ResultPage />} />
        <Route path="/community" element={<ComuPage />} />
        <Route path="/detail" element={<DetailPage />} />
        <Route path="/write" element={<WritePage />} />
        <Route path="*" element="404 not found" />
      </Route>
    </Routes>
  );
}

export default App;
