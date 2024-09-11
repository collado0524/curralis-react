import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Sidebar from './components/sidebar/sidebar';
import Layout from './pages/layout/Layout';
import HomePage from './pages/homepage/HomePage';
import DashBoard from './pages/dashboard/dashboard';
import SignUp from './pages/signup/signup';
import ErrorPage from './pages/errorpage/ErrorPage';
import LogIn from './pages/login/login';

export default function App() {
  return (
    <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="dashboard" element={<DashBoard />} />
        </Route>
        <Route path="login" element={<LogIn />}/>
        <Route path="signup" element={<SignUp />}/>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
  );
}

