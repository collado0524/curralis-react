import { IconButton } from "@material-tailwind/react";
import React, { useState } from "react"; 
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBars, faCogs, faList, faTable, faTimes, faUser } from '@fortawesome/free-solid-svg-icons'
import {FaBars, FaCogs, FaList, FaTable, FaTimes, FaUser } from "react-icons/fa"

 export default function Sidebar() {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  function toggleSidebar() {
    setIsOpen(!isOpen);
  }

  return (
    <div className={`flex ${isOpen ? "w-64" : "w-12"} bg-gray-900 h-screen pr-1 transition-width`}>
        <ul className="pt-1 w-64">
          <li className="text-white ml-1 py-2 pl-1 hover:bg-gray-700 rounded w-10" onClick={toggleSidebar}>
            <FontAwesomeIcon icon={isOpen ? faTimes : faBars} className="w-8 pr-1"/>
          </li>
          <li className="text-white ml-1 py-2 pl-1 hover:bg-gray-700 rounded flex">
            <FaUser className="w-8 pr-1"/>
            <span className={`${isOpen ? "" : "hidden"}`}>
              <span >Home</span>
              <span className="px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-indigo-500 bg-indigo-50 rounded-full">New</span>
            </span>
          </li>
          <li className="text-white ml-1 py-2 pl-1  hover:bg-gray-700 rounded flex">
            <FaCogs className="w-8 pr-1"/>
            <span className={`${isOpen ? "" : "hidden"}`}>
              <span >Home</span>
              <span className="px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-indigo-500 bg-indigo-50 rounded-full">New</span>
            </span>
          </li>
          <li className="text-white ml-1 py-2 pl-1  hover:bg-gray-700 rounded flex">
            <FaTable className="w-8 pr-1"/>
            <span className={`${isOpen ? "" : "hidden"}`}>
              <span >Home</span>
              <span className="px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-indigo-500 bg-indigo-50 rounded-full">New</span>
            </span>
          </li>

          <li className="text-white ml-1 py-2 pl-1  hover:bg-gray-700 rounded flex">
            <FaList className="w-8 pr-1"/>
            <span className={`${isOpen ? "" : "hidden"}`}>
              <span >Home</span>
              <span className="px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-indigo-500 bg-indigo-50 rounded-full">New</span>
            </span>
          </li>
        </ul>
      </div>
  );
}
