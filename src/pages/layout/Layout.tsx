import React, { useState } from 'react';
import { Link, Outlet } from "react-router-dom";
import { Home, Search, Menu, User, Settings} from 'lucide-react';
interface MenuItem {
    icon: JSX.Element;
    label: string;
    path: string;
  }
  
  const menuItems: MenuItem[] = [
    { icon: <Home />, label: 'Home', path: "/home" },
    { icon: <Search />, label: 'Search', path: "/search"  },
    { icon: <Menu />, label: 'Menu', path: "/menu"  },
    { icon: <User />, label: 'Profile', path: "profile"  },
    { icon: <Settings />, label: 'Settings', path: "setting"  },
  ];

export default function Layout() {
  const [activeItem, setActiveItem] = useState(0);
  return (
    <div className="flex h-screen">
      <div className="hidden md:block w-64 bg-white border-r border-gray-200 py-4">
        <div className="flex flex-col">
          {menuItems.map((item, index) => (
            <Link to={item.path} className=' '>
            <button
              key={index}
              className={`flex items-center px-4 py-2 ${activeItem === index ? 'bg-blue-100 text-blue-500' : 'text-gray-500'}`}
              onClick={() => setActiveItem(index)}
            >
              {item.icon}
              <span className="ml-2 text-sm">{item.label}</span>
            </button></Link>
          ))}
        </div>
      </div>
      <div className="flex-1 overflow-y-scroll bg-gray-100 p-4">
      <Outlet />        
      </div>
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 flex justify-around py-2">
        {menuItems.map((item, index) => (
          <Link to={item.path}>
            <button
            key={index}
            className={`flex flex-col items-center ${activeItem === index ? 'text-blue-500' : 'text-gray-500'}`}
            onClick={() => setActiveItem(index)}
          >
            {item.icon}
            <span className="text-sm">{item.label}</span>
            </button>
          </Link>
        ))}
      </div>
    </div> 
    );
  }