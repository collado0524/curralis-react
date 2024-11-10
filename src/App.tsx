<<<<<<< HEAD
// App.js
import React, { useState } from 'react';
import { Home, Search, Menu, User, Settings } from 'lucide-react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

interface MenuItem {
  icon: JSX.Element;
  label: string;
}

const menuItems: MenuItem[] = [
  { icon: <Home />, label: 'Home' },
  { icon: <Search />, label: 'Search' },
  { icon: <Menu />, label: 'Menu' },
  { icon: <User />, label: 'Profile' },
  { icon: <Settings />, label: 'Settings' },
];

const images = [
  'https://via.placeholder.com/150',
  'https://via.placeholder.com/150',
  'https://via.placeholder.com/150',
  // ...más URLs de imágenes
];
=======
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Sidebar from './components/sidebar/sidebar';
import Layout from './pages/layout/Layout';
import HomePage from './pages/homepage/HomePage';
import DashBoard from './pages/dashboard/dashboard';
import SignUp from './pages/signup/signup';
import ErrorPage from './pages/errorpage/ErrorPage';
import LogIn from './pages/login/login';
>>>>>>> 725762e8abc3dfb4d47863d41f27af77a5626631

export default function App() {
  const [activeItem, setActiveItem] = useState(0);
  return (
<<<<<<< HEAD
    <div className="flex h-screen">
      <div className="hidden md:block w-64 bg-white border-r border-gray-200 py-4">
        <div className="flex flex-col">
          {menuItems.map((item, index) => (
            <button
              key={index}
              className={`flex items-center px-4 py-2 ${activeItem === index ? 'bg-blue-100 text-blue-500' : 'text-gray-500'}`}
              onClick={() => setActiveItem(index)}
            >
              {item.icon}
              <span className="ml-2 text-sm">{item.label}</span>
            </button>
          ))}
        </div>
      </div>
      <div className="flex-1 overflow-y-scroll bg-gray-100 p-4">
        <h1 className="text-2xl font-bold mb-4">App con barra inferior</h1>
        <p className="text-lg">This is a sample app with a bottom navigation bar.</p>
        <div className="h-96 bg-gray-200 border-2 border-dashed rounded-xl w-full my-4"></div>
        <p className="text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.</p>
        <p className="text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.</p>
        <p className="text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.</p>
      </div>
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 flex justify-around py-2">
        {menuItems.map((item, index) => (
          <button
            key={index}
            className={`flex flex-col items-center ${activeItem === index ? 'text-blue-500' : 'text-gray-500'}`}
            onClick={() => setActiveItem(index)}
          >
            {item.icon}
            <span className="text-sm">{item.label}</span>
          </button>
        ))}
      </div>
    </div>
=======
    <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="dashboard" element={<DashBoard />} />
        </Route>
        <Route path="login" element={<LogIn />}/>
        <Route path="signup" element={<SignUp />}/>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
>>>>>>> 725762e8abc3dfb4d47863d41f27af77a5626631
  );
  };