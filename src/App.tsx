// App.js
import React from 'react';
import { Routes, Route, Navigate} from 'react-router-dom';
import Layout from './pages/layout/Layout';
import HomePage from './pages/homepage/HomePage';
import DashBoard from './pages/dashboard/dashboard';
import SignUp from './pages/signup/signup';
import ErrorPage from './pages/errorpage/ErrorPage';
import LogIn from './pages/login/login';
import Profile from './components/profile/profile';
import Search from './pages/search/search';
import Setting from './pages/setting/Setting';


export default function App() {
  const isAuthenticated = true;

  //const [dark, setDark] = React.useState(false);

    /*const darkModeHandler = () => {
        setDark(!dark);
        document.body.classList.toggle("dark");
    }*/

  return(
    <div className="bg-white dark:bg-blak">
    <Routes>
        <Route path="/" element={<Navigate to="/dashboard" />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
        
        {/* Ruta protegida de Dashboard */}
        <Route
          path="/*"
          element={isAuthenticated ? <Layout /> : <Navigate to="/login" />}
        >
          {/* Subrutas de Dashboard */}
          
          <Route path="home" element={<HomePage />} />
          <Route path="search" element={<Search />} />
          <Route path="dashboard" element={<DashBoard />} />
          <Route path="profile" element={<Profile />} />
          <Route path="setting" element={<Setting />} />

          <Route path='*' element={<Navigate to="/dashboard" />} />
        </Route>
        <Route path='*' element={<ErrorPage />} />
      </Routes>
      </div>
  );
};

  /** 



import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Sidebar from './components/sidebar/sidebar';
import Layout from './pages/layout/Layout';
import HomePage from './pages/homepage/HomePage';
import DashBoard from './pages/dashboard/dashboard';
import SignUp from './pages/signup/signup';
import ErrorPage from './pages/errorpage/ErrorPage';
import LogIn from './pages/login/login';

  <h1 className="text-2xl font-bold mb-4">App con barra inferior</h1>
        <p className="text-lg">This is a sample app with a bottom navigation bar.</p>
        <div className="h-96 bg-gray-200 border-2 border-dashed rounded-xl w-full my-4"></div>
        <p className="text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.</p>
        <p className="text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.</p>
        <p className="text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.</p>
  
  */